import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));


// home routes 
import Home from "./routes/home.route.js"
app.use('/', Home);



// User routes 
import User from "./routes/user.route.js"
app.use("/user", User);



// Create routes
import Create from "./routes/create.route.js"
app.use("/create", Create);


// Read routes 
import Read from "./routes/read.route.js"
app.use("/read", Read);


// Update routes
import Update from "./routes/update.route.js"
app.use("/update", Update);


// Delete routes 
import Delete from "./routes/delete.route.js"
app.use("/delete", Delete);








const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server Running on PORT : ${PORT}.`);
})