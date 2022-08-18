//ประกาศเเบงค์ที่มี
var back=[1000,500,100,50,20,10,5,2,1];


function test(back_value,back,backCash){
    //(ต้องจ่าย,แบงค์, ส่งกลับ )
    let check = back_value-back;
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

//แปลงให้เป็นobjแบบสวยงาม
function changEasytoUse(backCash){
    let ButyObj={}
    for (const element of backCash) {
         if(ButyObj[[element]]==undefined){
             ButyObj[element]=1;
             console.log(ButyObj,"obj")
        }
        else{
             ButyObj[element]=ButyObj[element]+1
         }
    }
    return ButyObj;
}
//วนลูปในแต่ละแบงค์แล้วส่งไป ทำrecursionในแต่ละแบงค์

function ans2(price ,total){
    var backCash=[];
    back_value=total-price;
    if(back_value==0){
        return [0];
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
        return changEasytoUse(backCash);
    }

}


module.exports={ans2:ans2}