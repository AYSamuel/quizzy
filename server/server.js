const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3500;
require('dotenv/config');
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI);

app.listen(PORT, () => console.log(`Server currently running on port ${PORT}`));
