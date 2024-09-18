const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://kothavineeth23:kothavineeth23@database.byssanh.mongodb.net/learnFlow?retryWrites=true&w=majority"
    );
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;





// const mongoose = require("mongoose");
// //This imports the Mongoose library, which is an Object Data Modeling (ODM) tool for MongoDB and Node.js. It provides a straightforward way to interact with MongoDB from a Node.js application.

// // mongodb+srv://kothavineeth23:kothavineeth23@database.byssanh.mongodb.net/learnFlow?retryWrites=true&w=majority
// //"mongodb+srv://adityaagr694:adityaagr694@database.iy6osys.mongodb.net/learnFlow?retryWrites=true&w=majority"
// //above is sirs database
// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(
//       "mongodb+srv://kothavineeth23:kothavineeth23@database.byssanh.mongodb.net/learnFlow?retryWrites=true&w=majority",
//       {
//         useNewUrlParser: true, // idhi mangoose ki vhpthundhi new url undhi connection setup kosam ani
//         useUnifiedTopology: true,
//       }
//     );
//     console.log(`MongoDB connected ${conn.connection.host}`);
//   } catch (error) { // oka vela error anedhi vasthe catch block pattukuntundhi
//     console.log(error);
//     process.exit(1); // error code anedhi non zero ga chuisthundhi when we connect to the mango db
//   }
// };

// module.exports = connectDB;

