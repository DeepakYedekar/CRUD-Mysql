const express = require("express");
const app = express();
require('dotenv').config();
const{router}=require('./routes/index');
app.use(express.json()); 

app.use(router);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
