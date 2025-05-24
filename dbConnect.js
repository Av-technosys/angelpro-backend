const mongoose = require("mongoose");

module.exports = async () => {
  try {
    // const mongoURL = process.env.MONGOOSE_URL;
    const mongoURL =
      "mongodb+srv://angelpro-av:AngelPro%40AV@angelpro.r9y1nrm.mongodb.net/?retryWrites=true&w=majority&appName=angelPro";
    const connect = await mongoose.connect(mongoURL);
    console.log(`mongodb connected  ${connect.connection.host} `);
  } catch (e) {
    console.log(`error occured in mongoose connection ${e}`);
    process.exit(1);
  }
};
