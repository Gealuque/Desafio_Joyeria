import express from "express";
import JoyasRouter from "./routes/joyasRoute.js";
import joyasLog from "./middleware/joyasMiddleware.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(joyasLog);
app.use(JoyasRouter);


app.listen(PORT, () => {
  console.log(`Server encendido http://localhost:${PORT}`);
});
