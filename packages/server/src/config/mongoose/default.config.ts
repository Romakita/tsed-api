export default {
  id: "default",
  url: process.env.MONGOOSE_URL || "mongodb://localhost:27017/tsed-formio-example",
  connectionOptions: {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
};
