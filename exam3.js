//กำหนดราคา
var priceForEach={"A":99,"B":100,"C":3990}


// คำนวนโปรโมชั้น
function check_promotion(total,product){
    //ถ้าซื้อมากกว่า 200 ลด10เปอร์เซ็น
    if(total>200){
        console.log((total*10)/100,"10persent")
        total = total-((total*10)/100)
    
    }

    // ถ้าชือABคู่กันลด50บาท
    let discount=50;
    if((product.A!=0&&product.B!=0)||(product.A!=undefined&&product.B!=undefined)){
        total=total-discount
    }
    //ใส่mathroundเพื่อปัดเศษ โดยปกติแล้วลูกค้ามักไม่ต้องการจ่ายเป็นเศษอยู่แล้ว
    return {"total":Math.round(total)};

}
//สรุปยอดซื้อส่งยอดและจำนวนการซื้อ ส่งกลับราคาหลังคำนวนโปรโมชั้น
function  ans3(object){
    let total=0
    for (const property in priceForEach) {
        //รวม จำนวน*ราคา
        total = total+(object[property]*priceForEach[property])

    }
return check_promotion(total,object)
}


module.exports={ans3:ans3}