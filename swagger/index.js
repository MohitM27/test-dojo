module.exports = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Book API with Swagger",
      version: "0.1.0",
      description:
        "",
      
    },
    servers: [
      {
        url: "http://localhost:4000",
      },
    ],
  },
  apis: ["./routes/*.js"],
};
