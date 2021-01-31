import express from "express";
import path from "path";
import compression from "compression";

const app = express();
const PORT = process.env.PORT || 8081;

app.use(compression());
app.use("/api", (req, res) => res.send("API controller"));

// Express only serves static assets in production
if (process.env.NODE_ENV !== "development") {
  app.use(express.static("../client/build"));
  app.get("/*", (req, res) =>
    res.sendFile(path.join(__dirname + "/../../client/build/index.html")),
  );
}

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
