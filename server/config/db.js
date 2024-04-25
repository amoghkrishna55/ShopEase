const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://amoghkrishna55:taprod-pevpat-5rawBy@items.dy56hvr.mongodb.net/Items?retryWrites=true&w=majority"
    );
    console.log("Mongo DB Connected: ", conn.connection.host);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
