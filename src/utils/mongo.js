import { MongoClient, ObjectId, ServerApiVersion } from "mongodb";

const uri = "mongodb://fs:fs_admin@localhost:27017";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function getFolder(path = "") {
  try {
    await client.connect();

    let collection = await client.db("file-system").collection("file-system");

    return (await collection.findOne({ path: path })) || "bruh";
  } finally {
    await client.close();
  }
}

async function addFolder(path = "") {
  try {
    await client.connect();

    let folderInPath = "";
    const lastSlashIndex = path.lastIndexOf("/");
    if (lastSlashIndex !== -1) {
      folderInPath = path.substring(0, lastSlashIndex);
    }

    let collection = await client.db("file-system").collection("file-system");

    const isExist = collection.find({ path: path });

    if (isExist !== null) return "Folder Exist";

    let parentFolder = await getFolder(folderInPath);

    let parentFolderDocs = parentFolder.docs;

    parentFolderDocs.append();

    let oid = ObjectId();

    await collection.insertOne({ _id: oid, path: path, docs: [] });

    await collection.updateOne(
      { path: folderInPath },
      { $set: { docs: { $ref: "docs", $id: oid } } },
    );
  } finally {
    await client.close();
  }
}

await addFolder("sosat").catch(console.dir);
