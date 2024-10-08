import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { MongoClient, ServerApiVersion, ObjectId } from "mongodb";
import path from "path";
import { fileURLToPath } from "url";

// Convert __filename and __dirname to work with ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@job-portal.n1p8ehz.mongodb.net/?retryWrites=true&w=majority&appName=job-portal`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

app.use(express.static(path.join(__dirname, "/client/dist")));

async function run() {
  try {
    // Connect the client to the server
    await client.connect();

    // Create DB
    const db = client.db("mernJobPortal");
    const jobsCollections = db.collection("demoJobs");

    // Post a job
    app.post("/post-job", async (req, res) => {
      const body = req.body;
      body.createAt = new Date();
      const result = await jobsCollections.insertOne(body);
      if (result.insertedId) {
        return res.status(200).send(result);
      } else {
        return res.status(404).send({
          message: "cannot insert! try again later",
          status: false,
        });
      }
    });

    // Get all jobs
    app.get("/all-jobs", async (req, res) => {
      const jobs = await jobsCollections.find({}).toArray();
      res.send(jobs);
    });

    // Get single job using id
    app.get("/all-jobs/:id", async (req, res) => {
      const id = req.params.id;
      const job = await jobsCollections.findOne({
        _id: new ObjectId(id),
      });
      res.send(job);
    });

    // Get jobs by email
    app.get("/myJobs/:email", async (req, res) => {
      const jobs = await jobsCollections
        .find({ postedBy: req.params.email })
        .toArray();
      res.send(jobs);
    });

    // Delete a job
    app.delete("/job/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await jobsCollections.deleteOne(filter);
      res.send(result);
    });

    // Update a job
    app.patch("/update-job/:id", async (req, res) => {
      const id = req.params.id;
      const jobData = req.body;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updateDoc = {
        $set: { ...jobData },
      };
      const result = await jobsCollections.updateOne(
        filter,
        updateDoc,
        options
      );
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
  }
}

run().catch(console.dir);

// app.get("/", (req, res) => {
//   res.send("Hello developer!");
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
