const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
require('dotenv').config();

const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const cookieParsera = require("cookie-parser");
const session = require("express-session");

const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const saltRounds = 10;

const port = 3000;


const app = express();
app.use(express.json());
app.use(cors({
	origin: ["http://localhost:5173"],
	methods: ["GET","POST"],	
	credentials:true,
}));

app.use(cookieParser());

app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
	key: "userId",
	secret: "nothing",
	resave: false,
	saveUninitialized: false,
	cookie: {
		expires: 60*60*24,
	}
}))

const db = mysql.createConnection({
	user: process.env.DB_USER,
	host: process.env.DB_HOST,
	password: process.env.DB_PASS,
	database: process.env.DB_DATABASE

})


app.post("/login",(req,res)=>{
	const username = req.body.username;
	const password= req.body.password;

db.query(
"SELECT * FROM users where username = ?",
	[username],

	(err,result)=>{
		if(err){
			res.send({err: err});
		}

		if(result.length>0){
		bcrypt.compare(password,result[0].password,(err,response)=>{
if(response){
	const id = result[0].id;
const token = jwt.sign({id},process.env.JWT_SECRET,{expiresIn: 300});
	console.log(token);
res.send({result: result,token:token});
}else{
res.send({message:"wrong user username or password."});
}

})	
}
else{
res.send({message:"User doesn't exit"});		}
	}
)

})

app.post('/register',(req,res)=>{
const username = req.body.usernameReg;
const password = req.body.passwordReg;

bcrypt.hash(password,saltRounds,((err,hash)=>{

	if(err){
		console.log(err);
	}
db.query(
"INSERT INTO users (username,password) values (?,?)",
	[username,hash],
(err,result)=>{
if(err){
res.send({err: err});
}
if(result){
res.send({result: result});
}
else{
res.send({messsage: "Username already exist"});
}
})
}));
});



app.get('/login_user',(req,res)=>{
res.send("Hello World!");
})

app.listen(port,()=>{
	console.log(`Server is running on the port ${port} `);
})
