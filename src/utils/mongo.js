import { MongoClient, ServerApiVersion } from "mongodb";

const uri = "mongodb://admin:admin@localhost:27017/admin";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function addFolder(name, path = "") {
  try {
    await client.connect();
    const collection = await client.db("file-system").collection("file-system");

    let pathParts = path.split("/");

    let query = "";

    for (let i = 0; i < pathParts.length; i++) {
      query;
    }

    let folder = {
      type: "folder",
      path: name,
      docs: [],
    };

    await collection.insertOne(folder);
  } finally {
    await client.close();
  }
}

addFolder().catch(console.dir);

async function getFS() {
  try {
    await client.connect();

    const collection = await client.db("file-system").collection("file-system");

    return collection.find({});
  } finally {
    await client.close();
  }
}

getFS().catch(console.dir);
