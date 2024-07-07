const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const popup = require('node-popup');

app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/",function(req,res){
    res.render("pollBooth");
})

    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    let count4 = 0;
    let count5 = 0;
    let count6 = 0;
    let count7 = 0;
    let count8 = 0;
app.post("/voted",function(req,res){


    const option=req.body.cardNumber;
    //console.log(option);
    if(option=="Card 1"){
        count1++;
    }
    else if(option=="Card 2"){
        count2++;
    }
    else if(option=="Card 3"){
        count3++;
    }
    else if(option=="Card 4"){
        count4++;
    }
    else if(option=="Card 5"){
        count5++;
    }
    else if(option=="Card 6"){
        count6++;
    }
    else if(option=="Card 7"){
        count7++;
    }
    else if(option=="Card 8"){
        count8++;
    }
    console.log(count1 + " " + count2 + " " + count3 + " " + count4 + " " + count5 + " " + count6 + " " + count7 + " " + count8 + " ");
    res.render("votedSuccess");
    

})

app.get("/result",function(req,res){
    const data = {
        c1:count1,
        c2:count2,
        c3:count3,
        c4:count4,
        c5:count5,
        c6:count6,
        c7:count7,
        c8:count8

    }
    res.render("result" ,{
        data:data
    });

})






app.listen(3000,()=>{
    console.log('Server started on port 3000');
}); 