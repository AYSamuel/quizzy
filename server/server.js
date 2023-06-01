const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3500;

app.use(express.json());
app.use(cors());

app.listen(PORT, () => console.log(`Server currently running on port ${PORT}`));
