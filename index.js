const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const t = require('./error_handle');
const exam1 = require('./exam1');
const exam2 = require('./exam2');
const exam3 = require('./exam3');


app.use(express.json())
app.use(express.urlencoded({ extended: true }))


//คำตอบข้อสอง
//input 
//{"price": 35,"total": 1000}
app.get("/exam2", (req, res) => {
    //เช็คว่าเป็นobjectไหม
    var arry_check=[t.t_obj(req.body,"body"),
    t.t_Num(req.body.price,"price"),
    t.t_Num(req.body.total,"Total")]
    //ตรวจและรวมค่า
    let condition1=arry_check.every((m) => m.value==true)
    //เช็คเงือนไขถ้าไม่ตรง ส่งerror400กลับพร้อมเหตุผล
    if(condition1==false){
        body=t.SumReson(arry_check)
        statusBack=400
    }
    else{
        try{
            body=exam2.ans2(req.body.price ,req.body.total)
            statusBack=200

        }
        catch(error){
          context.log(error,"error");
          body=error;  
          statusBack=500;
        }

    }
    res.status(statusBack).send({"body":body})
});
















//แถมมมมมมม
//input
// { nums: [ 3, 2, 4 ], target: 6 }
app.get("/exam1", (req, res) => {
    
    let nums = req.body.nums;
    let target=req.body.target;
    console.log(req.body),"body";
    //เช็คว่าเป็นobject,array,number
    var arry_check=[t.t_obj(req.body,"body"),t.t_array(nums,"nums"),t.t_Num(target)]
    //ตรวจและรวมค่า
    let condition1=arry_check.every((m) => m.value==true)
    //เช็คเงือนไขถ้าไม่ตรง ส่งerror400กลับพร้อมเหตุผล



    if(condition1==false){
        body=t.SumReson(arry_check)
        statusBack=400
    }
    else{
        try{
            body=exam1.ans1(nums, target);
            console.log(body);
            statusBack=200

        }
        catch(error){
          context.log(error,"error");
          body=error;  
          statusBack=500
        }
        

        
    }
    res.status(statusBack).send({"body":body})
});
//input 
//{ "A": 2, "B": 3,"C":4 }
app.get("/exam3", (req, res) => {
    arry_check=[
    t.t_obj(req.body,"body")]
    //ตรวจและรวมค่า
    let condition1=arry_check.every((m) => m.value==true)
    //เช็คเงือนไขถ้าไม่ตรง ส่งerror400กลับพร้อมเหตุผล


    if(condition1==false){
        body=t.SumReson(arry_check)
        statusBack=400
    }
    else{
        try{
            body=exam3.ans3(req.body);
            statusBack=200

        }
        catch(error){
          context.log(error,"error");
          body=error;  
          statusBack=500
        }
    }
    res.status(statusBack).send({"body":body})
});

app.listen(port, () => {
console.log("Starting node.js at port " + port);
});
