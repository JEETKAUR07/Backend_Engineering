const express = require ("express")
const app = express();

/*app.get("/profile",(req,res)=>{
    const{username}=req.query;
    res.send("Profile page of "+" "+username)
})
*/

//http://localhost:5678/Profile?username=Simran

/*app.get("/profile",(req,res)=>{
    const{username,age,address}=req.query;
    res.send("Profile page of "+" "+username+" "+age+" "+address)
})
*/

//http://localhost:5678/profile?username=Simran&age=19&address=Pundri

let usersData=[
    {
        id:1,
        name:"Simranjeet",
        address:"Pundri"
    },
    {
        id:2,
        name:"Tejal",
        address:"Rajpura"
    },
    {
        id:3,
        name:"Harsirat",
        address:"Ambala"
    }
]

app.get("/alluser",(req,res)=>{
    res.send(usersData)
})

app.get("/getuserbyID",(req,res)=>{
    let{id}=req.query;
    for(let i=0;i<usersData.length;i++){
        if(usersData[i].id==id){
            return res.send(usersData[i])
        }
    }
    res.send("User nor Found!")
})

app.get("/deleteuserbyId", (req, res) => {
    let { id } = req.query;
    for (let i = 0; i < usersData.length; i++) {
        if (usersData[i].id == id) {
            usersData.splice(i, 1);
            return res.send("User deleted"); 
        }
    }
    res.send("No user found to delete");
});

app.get("/adduser", (req, res) => {
    let { id, name, address } = req.query;
    let newUser = { 
        id: id,
        name: name,
        address: address
    };
    usersData.push(newUser); 
    res.send("New user added");
});




app.listen(5678,()=>{
    console.log("Server is started....")
})