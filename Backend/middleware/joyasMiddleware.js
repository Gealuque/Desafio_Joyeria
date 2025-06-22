import { appendFile } from "fs/promises";

const joyasLog = async (req, _, next) => {

  const logData = {
    timestamp: new Date().toISOString(),
    method: req.method,
    url: req.originalUrl || req.url,
    body: req.body,
    params: req.params,
    query: req.query,
  };

  const logEntry = `${JSON.stringify(logData, null, 2)},\n`;
  try {
    await appendFile("registro.log", logEntry);
  } catch (err) {
    console.error("Error al escribir en el archivo de log:", err);
  }

  next();
};

export default joyasLog;
