// Importing node modules
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
// Importing source files
import routes from './routes/main.routes';


// consts
const app = express();
app.use(cors());

// body-parser config ...
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.send({message:"This is the hallo page"});
})

app.use('/api/v1/', routes);

// launch server ...
const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
    const {address} = server.address();
    console.log(`Server running at: http://${address}:${port}`);
})