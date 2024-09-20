// Import necessary modules
import express from "express"; // Express framework for building the server
import dotenv from "dotenv"; // dotenv module to load environment variables from a .env file
import cookieParser from "cookie-parser"; // Middleware to parse cookies
import cors from "cors"; // Middleware to handle Cross-Origin Resource Sharing (CORS)
import { userRoute } from "./routes/userRoute.js";

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Parse JSON bodies
app.use(cookieParser()); // Parse cookies
app.use(cors()); // Enable CORS

app.get("/", function (req, res) {
  console.log("Backend Working!");
  res.send("Hello World!");
});


app.use('/api/user',userRoute)


// Start the server and listen on the defined port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/`);
});


