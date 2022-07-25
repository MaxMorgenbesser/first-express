// importn express library
import  express, { response }  from "express";

// initialize express server
const app=express()

//list requests that we want express to respond to
app.get('/hello',(request,response)=>{// can be rec and res
//do sonething 
response.send('Hello World')
})
// start listening on port
app.listen(3001, () =>{
    console.log("Now listening on port 3001")
});