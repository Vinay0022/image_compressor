const express = require("express");
const app = express();
const port = 3000;

app.get('/login_user',(req,res)=>{
res.send("Hello World!");
})

app.listen(port,()=>{
	console.log(`Server is running on the port ${port} `);
})
