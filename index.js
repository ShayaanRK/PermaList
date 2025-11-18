import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

// Connecting database to express server
const db = new Client({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
});

// Connect once at server startup
db.connect()
  .then(() => console.log("Connected to PostgreSQL database"))
  .catch(err => console.error("Database connection error:", err));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = [
  { id: 1, title: "Buy milk" },
  { id: 2, title: "Finish homework" },
];

app.get("/", (req, res) => {
  db.query("SELECT * FROM items ORDER BY id ASC", (err, dbRes) => {
    if (err) {
      console.error("Error fetching items:", err);
      return res.status(500).send("Server error");
    }
    res.render("index.ejs", {
      listTitle: "Today",
      listItems: dbRes.rows,
    });
  });
});

app.post("/add", (req, res) => {
  const item = req.body.newItem;
  
  // Insert the new item into the database
  db.query("INSERT INTO items (title) VALUES ($1)", [item], (err) => {
    if (err) {
      console.error("Error adding item:", err);
      return res.status(500).send("Error adding item to database");
    }
   console.log(`Successfully added item: ${item}`);
   res.redirect("/");
  });
});

app.post("/edit", (req, res) => {
   const fixID = req.body.updatedItemId;
   const fixTitle = req.body.updatedItemTitle;

   db.query(
      "UPDATE items SET title = '$1' WHERE id=$2;", [fixTitle, fixID], (err) => {
      if (err) {
         console.error("Error editing item:", err);
         return res.status(500).send("Error editing item in database");
      }   

      console.log(`Successfully edited item ID ${fixID} to title: ${fixTitle}`);

      // Redirect back to main page
      res.redirect("/");
  });

});

app.post("/delete", (req, res) => {
  const id = parseInt(req.body.deleteItemId); // get ID from form

  if (!id) {
    return res.status(400).send("Invalid item ID");
  }

  // Delete from database
  db.query('DELETE FROM items WHERE id = $1', [id], (err) => {
    if (err) {
      console.error("Error deleting item:", err);
      return res.status(500).send("Server error");
    }
    console.log(`Successfully deleted item ID: ${id}`);
    res.redirect("/");
  });

});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
