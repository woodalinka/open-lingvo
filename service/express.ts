const express = require("express");
const app = express();

app.get("/", async (_req: any, res: any): Promise<any> => {
  return res.status(200).send({
    message: "Hello World!",
  });
});

const PORT = 3000;
try {
  app.listen(PORT, (): void => {
    console.log(`Connected successfully on port ${PORT}`);
  });
} catch (error: any) {
  console.error(`Error occurred: ${error.message}`);
}
