import express, { Express, Request, Response } from "express";
import router from "./routes";
import cors from "cors";

/*
 * Create an Express application and get the
 * value of the PORT environment variable
 * from the `process.env`
 */
const app: Express = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

/* Define a route for the root path ("/")
 using the HTTP GET method */
app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.use("/api", router);

/* Start the Express app and listen
 for incoming requests on the specified port */
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
