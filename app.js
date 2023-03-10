// Level One Authentication
// require("dotenv").config();
// const express = require("express");
// const bodyParser = require("body-parser");
// const ejs = require("ejs");
// const mongoose = require("mongoose");

// const app = express();

// app.use(express.static("public"));
// app.set("view engine","ejs");
// app.use(bodyParser.urlencoded({extended:true}));
// mongoose.set('strictQuery', true);

// mongoose.connect("mongodb://localhost:27017/userDB",{useNewUrlParser:true
// }).then(()=>{console.log(`Connection Successful`);
// }).catch((e)=>{
//     console.log(`Connection Failed ${e}`);
// })

// const userSchema = new mongoose.Schema ({
//     email:String,
//     password:String,
//     secret:String
// });

// const User = new mongoose.model("User",userSchema);


// app.get("/",function (req,res) {
//     res.render("home");
// });


// app.get("/login",function (req,res) {
//     res.render("login");
// });


// app.get("/register",function (req,res) {
//     res.render("register");
// });


// app.post("/register",(req,res)=>{
//     const newUser = new User({
//         email:req.body.username,
//         password:req.body.password
//     })

//     newUser.save(err=>{
//         if (err) {
//             console.log(err);
//         } else {
//             res.render("secrets");
//         }
//     })

// });

// app.post("/login",(req,res)=>{
//     const username = req.body.username;
//     const password = req.body.password;

//     User.findOne({email:username},(err,foundUser)=>{
//         if(err){
//             console.log(err);
//         }
//         else{
//             if (foundUser) {
//                 if (foundUser.password===password) {
//                     res.render("secrets");
//                 }
              
//             }
//         }
//     })

// });

// app.listen("3000",function () {
//     console.log("Server started at port 3000");
// })







// // LEVEL 2 AUTHENTICATION


// require("dotenv").config();
// const express = require("express");
// const bodyParser = require("body-parser");
// const ejs = require("ejs");
// const mongoose = require("mongoose");
// const encrypt = require("mongoose-encryption");

// const app = express();

// app.use(express.static("public"));
// app.set("view engine","ejs");
// app.use(bodyParser.urlencoded({extended:true}));
// mongoose.set('strictQuery', true);

// mongoose.connect("mongodb://localhost:27017/userDB",{useNewUrlParser:true
// }).then(()=>{console.log(`Connection Successful`);
// }).catch((e)=>{
//     console.log(`Connection Failed ${e}`);
// })

// const userSchema = new mongoose.Schema ({
//     email:String,
//     password:String,
// });

// userSchema.plugin(encrypt,{secret:process.env.SECRET,encryptedFields:["password"]});

// const User = new mongoose.model("User",userSchema);


// app.get("/",function (req,res) {
//     res.render("home");
// });


// app.get("/login",function (req,res) {
//     res.render("login");
// });


// app.get("/register",function (req,res) {
//     res.render("register");
// });


// app.post("/register",(req,res)=>{
//     const newUser = new User({
//         email:req.body.username,
//         password:req.body.password
//     })

//     newUser.save(err=>{   //Save Encrypts the password
//         if (err) {
//             console.log(err);
//         } else {
//             res.render("secrets");
//         }
//     })

// });

// app.post("/login",(req,res)=>{
//     const username = req.body.username;
//     const password = req.body.password;

//     User.findOne({email:username},(err,foundUser)=>{ // findone decrypts the password
//         if(err){
//             console.log(err);
//         }
//         else{
//             if (foundUser) {
//                 if (foundUser.password===password) {
//                     res.render("secrets");
//                 }
              
//             }
//         }
//     })

// });

// app.listen("3000",function () {
//     console.log("Server started at port 3000");
// })







// // LEVEL 3 AUTHENTICATION

// require("dotenv").config();
// const express = require("express");
// const bodyParser = require("body-parser");
// const ejs = require("ejs");
// const mongoose = require("mongoose");
// const md5 = require("md5");

// const app = express();

// app.use(express.static("public"));
// app.set("view engine","ejs");
// app.use(bodyParser.urlencoded({extended:true}));
// mongoose.set('strictQuery', true);

// mongoose.connect("mongodb://localhost:27017/userDB",{useNewUrlParser:true
// }).then(()=>{console.log(`Connection Successful`);
// }).catch((e)=>{
//     console.log(`Connection Failed ${e}`);
// })

// const userSchema = new mongoose.Schema ({
//     email:String,
//     password:String,
// });



// const User = new mongoose.model("User",userSchema);


// app.get("/",function (req,res) {
//     res.render("home");
// });


// app.get("/login",function (req,res) {
//     res.render("login");
// });


// app.get("/register",function (req,res) {
//     res.render("register");
// });


// app.post("/register",(req,res)=>{
//     const newUser = new User({
//         email:req.body.username,
//         password:md5(req.body.password)
//     })

//     newUser.save(err=>{   //Save Encrypts the password
//         if (err) {
//             console.log(err);
//         } else {
//             res.render("secrets");
//         }
//     })

// });

// app.post("/login",(req,res)=>{
//     const username = req.body.username;
//     const password = md5(req.body.password);

//     User.findOne({email:username},(err,foundUser)=>{ // findone decrypts the password
//         if(err){
//             console.log(err);
//         }
//         else{
//             if (foundUser) {
//                 if (foundUser.password===password) {
//                     res.render("secrets");
//                 }
              
//             }
//         }
//     })

// });

// app.listen("3000",function () {
//     console.log("Server started at port 3000");
// })





// // LEVEL 4 AUTHENTICATION BCRYPT

// require("dotenv").config();
// const express = require("express");
// const bodyParser = require("body-parser");
// const ejs = require("ejs");
// const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");
// const saltRounds = 10;
// const app = express();

// app.use(express.static("public"));
// app.set("view engine","ejs");
// app.use(bodyParser.urlencoded({extended:true}));
// mongoose.set('strictQuery', true);

// mongoose.connect("mongodb://localhost:27017/userDB",{useNewUrlParser:true
// }).then(()=>{console.log(`Connection Successful`);
// }).catch((e)=>{
//     console.log(`Connection Failed ${e}`);
// })

// const userSchema = new mongoose.Schema ({
//     email:String,
//     password:String,
// });



// const User = new mongoose.model("User",userSchema);


// app.get("/",function (req,res) {
//     res.render("home");
// });


// app.get("/login",function (req,res) {
//     res.render("login");
// });


// app.get("/register",function (req,res) {
//     res.render("register");
// });


// app.post("/register",(req,res)=>{
    
//     bcrypt.hash(req.body.password,saltRounds,(err,hash)=>{
//         const newUser = new User({
//             email:req.body.username,
//             password:hash
//         });
    
//         newUser.save(err=>{  
//             if (err) {
//                 console.log(err);
//             } else {
//                 res.render("secrets");
//             }
//         });
    
//     });
    
    
// });

// app.post("/login",(req,res)=>{
//     const username = req.body.username;
//     const password = req.body.password;



//     User.findOne({email:username},(err,foundUser)=>{ 
//         if(err){
//             console.log(err);
//         }
//         else{
//             if (foundUser) {
//                 bcrypt.compare(password,foundUser.password,(err,result)=>{
//                         if (result===true) {
//                             res.render("secrets");
//                         }
//                 }); 
//             }
//         }
//     })

// });

// app.listen("3000",function () {
//     console.log("Server started at port 3000");
// })




// LEVEL 5 AUTHENTICATION COOKIES and SESSION

require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const app = express();

app.use(express.static("public"));
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));

//SESSIONS
app.use(session({
    secret:process.env.SECRET,
    resave:false,
    saveUninitialized:false
}))
app.use(passport.initialize());
app.use(passport.session());


mongoose.set('strictQuery', true);

mongoose.connect("mongodb://localhost:27017/userDB",{useNewUrlParser:true
}).then(()=>{console.log(`Connection Successful`);
}).catch((e)=>{
    console.log(`Connection Failed ${e}`);
})

const userSchema = new mongoose.Schema ({
    email:String,
    password:String,
});

userSchema.plugin(passportLocalMongoose);

const User = new mongoose.model("User",userSchema);


passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.get("/",function (req,res) {
    res.render("home");
});


app.get("/login",function (req,res) {
    res.render("login");
});


app.get("/register",function (req,res) {
    res.render("register");
});

app.get("/secrets",function (req,res) {
    if (req.isAuthenticated()) {
        res.render("secrets");
    } else {
        res.redirect("/login");
    }
});

app.get("/logout",(req,res)=>{
    req.logout((err)=>{
        if (err) {
            console.log(err);
        }
    });
    res.redirect("/");
})


app.post("/register",(req,res)=>{
    User.register({username:req.body.username},req.body.password,(err,user)=>{
        if (err) {
            console.log(err);
            res.redirect("/register");
        } else {
            passport.authenticate("local")(req,res,()=>{
                res.redirect("/secrets");
            })
        }
    })
    
    
});

app.post("/login",(req,res)=>{
   const user = new User({
    username:req.body.username,
    password:req.body.password
   })
   req.login(user,(err)=>{
        if (err) {
            console.log(err);
        } else {
            passport.authenticate("local")(req,res,()=>{
                res.redirect("/secrets");
            })
        }
   })
});

app.listen("3000",function () {
    console.log("Server started at port 3000");
})











