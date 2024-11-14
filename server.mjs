import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = 3000;


app.use(express.static(path.join(__dirname)));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/src/chat_index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
