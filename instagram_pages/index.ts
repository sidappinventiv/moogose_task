const express = require('express');
require('dotenv').config()
const app = express();
// import {usermodule} from './models/user';
import {dbconn} from './database_conn';

dbconn();


app.listen(process.env.PORT, async()=>{

    console.log(`server listing on ${process.env.PORT}`);

})