import express from "express";
import axios from "axios";

const app = express();
const PORT = 3000;

app.get("/posts", async (req, res) => {
  try {
    // Fetch data from the JSONPlaceholder API
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const posts = response.data;

    // Create an HTML response
    let html = "<!DOCTYPE html><html><head><title>Posts</title></head><body>";
    html += "<h1>Posts</h1><ul>";

    posts.forEach((post) => {
      html += `<li><h2>${post.title}</h2><p>${post.body}</p></li>`;
    });

    html += "</ul></body></html>";

    // Send the HTML response
    res.send(html);
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).send("An error occurred while fetching posts.");
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
