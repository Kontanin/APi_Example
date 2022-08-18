function isObject(obj) {
    return obj === Object(obj);
}

var value;
let reson="pass";

function   t_array(input,varieble_name){
    console.log(input)
    if( Array.isArray(input)!==true){
        value=false;
        reson=varieble_name+" is not array";
    }else{
        value=true;
    }
    return {"value":value,"reson":reson};
}

    function t_obj(input){
        if(isObject(input)!==true){
            value=false;
            reson=String(input)+ "  wrong it's not a object";
            
        }else{
            value=true;
        }
        return {"value":value,"reson":reson};
    }

    function t_InGroup(input,group){
        if(group.find(element => element == input)==undefined){
            value=false;
            reson="type of " +String(input) +" not in group";
        }else{
            value=true;
        }
        return {"value":value,"reson":reson};
    }
    function t_Num(input,varieble_name){
        if((typeof input)!=='number'){
            value=false;
            reson=varieble_name+" "+String(input)+"  not number";
        }else{
            value=true;
        }
        return {"value":value,"reson":reson};
    }

    function SumReson(arry_check){
        const sum = arry_check.filter((member) => 
        {return member.value ==false}).map((number) => 
        {return number.reson}).reduce((sum,number) =>
        {return sum+" / "+number})
        return sum;

    }


module.exports={
    SumReson:SumReson,
    t_Num:t_Num,
    t_InGroup:t_InGroup,
    t_obj,t_obj,
    t_array, t_array
}