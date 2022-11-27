import { LangResponse } from "./interface/langResponse";

const express = require("express");
const cors = require("cors");
const app = express();

const corsOptions = {
  origin: ["http://localhost:8080"],
};

app.use(cors(corsOptions));

app.get("/language", async (_req: any, res: any): Promise<any> => {
  const langResponse: LangResponse = {
    availableLang: ["English", "Russian", "German"],
  };
  return res.status(200).send(langResponse);
});

const PORT = 3000;
try {
  app.listen(PORT, (): void => {
    console.log(`Connected successfully on port ${PORT}`);
  });
} catch (error: any) {
  console.error(`Error occurred: ${error.message}`);
}
