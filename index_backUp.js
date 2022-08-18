const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
var back=[1000,500,100,50,20,10,5,2,1];
var price={"A":99,"B":199,"C":250}
function check_promotion(total,product){
    //ถ้าซื้อมากกว่า 200 ลด10เปอร์เซ็น
    if(total>200){
        total = total-((total*10)/100)

    }

    // ถ้าชือABคู่กันลด50บาท
    let discount=50;
    if(A!=0&&B!=0){
        total=total-discount
    }


}




app.get("/exam1", (req, res) => {

    let nums = req.body.nums;
    let target=req.body.target;
    console.log(req.body);
    var twoSum = function(nums, target) {
        let hash = {};
        
        for(let i = 0; i < nums.length; i++){
            let diff = target - nums[i];
            if(diff in hash){
                return [hash[diff], i]
            }else{
                hash[nums[i]] = i;
            }
        }
    };
  res.send(twoSum(nums, target));


});


function test(back_value,back,backCash){
    //(ต้องจ่าย,แบงค์, ส่งกลับ )
    let check = back_value-back;
    console.log("money:",back)
    console.log(check,"check")
    if(check==0){
            backCash.push(back)
            return 0
    }
    else if(check>0){
            backCash.push(back)
            return test(check,back,backCash);
    }else{
        return back_value;
    }
    
    //เงือนไขสุดท้ายคือ น้อยกว่า0
        

    
}

app.get("/exam2", (req, res) => {
    let price =req.body.price;
    let total =req.body.total;
    console.log(req.body);
    var backCash=[];
    back_value=total-price;
    if(back_value==0){
        res.send([0])
    }else{
        for(let i = 0; i < back.length; i++){
            let test1=test(back_value,back[i],backCash)
            if(test1==0){
                break;
            }else{
                back_value=test1;
            }
            

        }
        console.log(backCash,"back_cash")
        res.send(backCash);
    }
    


    
  });

  
app.get("/exam3", (req, res) => {

    let object=req.body
    console.log("test",object)
    let total=0;
    for (const property in object) {
        console.log(object[property],"object")
         total = total+object[property]
      }
    console.log(total,"total")

    res.send("Hello! exam3 Node.js");
});
  

app.listen(port, () => {
  console.log("Starting node.js at port " + port);
});
