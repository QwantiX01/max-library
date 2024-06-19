import { MongoClient, ObjectId, ServerApiVersion } from "mongodb";

export async function getFolder(path = "") {
  const uri = "mongodb://fs:fs_admin@localhost:27017";

  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  try {
    await client.connect();

    let collection = await client.db("file-system").collection("file-system");

    if (path === "") {
      return await collection.find({ path: { $not: /\/+/ } }).toArray();
    }

    const res = await collection
      .aggregate([
        {
          $match: { path: path },
        },
        {
          $lookup: {
            from: "file-system",
            localField: "docs.$id",
            foreignField: "_id",
            as: "Folders",
          },
        },
      ])
      .toArray();

    return JSON.stringify(res, null, 2);
  } finally {
    await client.close();
  }
}

// console.log(await getFolder("asd"));

export async function addFolder(path = "") {
  try {
    await client.connect();
    let collection = await client.db("file-system").collection("file-system");

    if (!path.includes("/")) {
      let objectId = ObjectId.createFromTime(Date.now());

      await collection.insertOne({ _id: objectId, path: path, docs: [] });
      return "Ok";
    }

    let parentFolderPath = "";
    const lastSlashIndex = path.lastIndexOf("/");
    if (lastSlashIndex !== -1) {
      parentFolderPath = path.substring(0, lastSlashIndex);
    }

    const folder = await collection.findOne({ path: path });

    const parentFolder = await collection.findOne({ path: parentFolderPath });

    if (parentFolder === null) return "Folder not found";
    if (folder !== null) return "Folder Exist";

    let objectId = ObjectId.createFromTime(Date.now());

    await collection.insertOne({ _id: objectId, path: path, docs: [] });

    await collection.findOneAndUpdate(
      { _id: parentFolder._id },
      {
        $push: {
          docs: {
            $ref: "file-system",
            $id: objectId,
            $db: "file-system",
          },
        },
      },
      { upsert: true },
    );
  } finally {
    await client.close();
  }
}

// await addFolder().catch(console.dir);
