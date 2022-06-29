const mongoose = require('mongoose');

const url = "mongodb://kalaiproject:admin@cluster0-shard-00-00.xvkay.mongodb.net:27017,cluster0-shard-00-01.xvkay.mongodb.net:27017,cluster0-shard-00-02.xvkay.mongodb.net:27017/stackoverflow?ssl=true&replicaSet=atlas-54jm80-shard-0&authSource=admin&retryWrites=true&w=majority";

module.exports.connect = () => {
    mongoose
      .connect(url)
      .then(() => console.log("MongoDB is connected successfully"))
      .catch((err) => console.log("Error: ", err));
  };