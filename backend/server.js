// const express = require("express");
// const cors = require("cors");
// const connectDB = require("./config/database"); // Ensure database is connected

// const app = express();
// app.use(express.json());
// app.use(cors());

// // Connect to MongoDB
// connectDB();

// // Import routes
// const bookRoutes = require("./routes/books");
// app.use("/books", bookRoutes); // ✅ This registers /books routes

// const PORT = 5000;
// app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));






const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/bookstore", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB Connected!"))
.catch((err) => console.error("❌ MongoDB Error:", err.message));

// Import and use book routes
app.use("/books", require("./routes/books"));

// Start server
app.listen(5000, () => console.log("✅ Server running on port 5000"));
