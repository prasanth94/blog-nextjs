import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !message ||
      message.trim() === "" ||
      !name ||
      name.trim() === ""
    ) {
      res.status(422).json({ message: "invalid inputs" });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };

    let client;

    const connectionString = `mongodb+srv://cosmos:Hustle@2021@cluster0.hmzfh.mongodb.net/blog-contact?retryWrites=true&w=majority`;

    try {
      client = await MongoClient.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    } catch (error) {
      console.log({ client });
      res.status(500).json({ message: "Could not connect to database." });
      return;
    }

    const db = client.db("blog-contact");

    try {
      const result = await db.collection("contact").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Storing message failed!" });
      return;
    }
    client.close();
    res
      .status(201)
      .json({ message: "Successfully stored message!", message: newMessage });
  }
}
