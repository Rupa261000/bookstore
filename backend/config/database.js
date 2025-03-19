// const mongoose = require("mongoose");

// const connectDB = async () => {
//   try {
//     await mongoose.connect("mongodb://localhost:27017/bookstore", {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("✅ MongoDB Connected!");
//   } catch (err) {
//     console.error("❌ MongoDB Connection Error:", err.message);
//     process.exit(1);
//   }
// };

// // Log connection status
// mongoose.connection.on("connected", () => {
//   console.log("✅ Mongoose connected to DB");
// });

// mongoose.connection.on("error", (err) => {
//   console.log("❌ Mongoose connection error:", err.message);
// });

// mongoose.connection.on("disconnected", () => {
//   console.log("⚠️ Mongoose disconnected");
// });

// module.exports = connectDB;
