const express = require('express');
const cors = require('cors');
const { dbconnection } = require('./Database/db'); // Import the dbconnection function from db.js
require('dotenv').config(); // Import dotenv to load environment variables
const { router } = require('./Routers/auth');
const fileUpload = require('express-fileupload');
const app = express();

const PORT = process.env.PORT || 4000;


app.use(cors(
    {
        origin: '*',
        credentials: true
    }
));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Server is running');
}
);

app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}));    

// connection to Database 
dbconnection();

// Import the router from auth.js and use it for handling routes
app.use('/api', router);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}
);

