var ans1 = function(nums, target) {
    let hash = {};
    
    for(let i = 0; i < nums.length; i++){
        //หาส่วนต่างว่ามีในobjที่เก็บไว้ไหม
        let diff = target - nums[i];
        if(diff in hash){
            //ถ้ามีให้ส่งค่ากลับ
            return [hash[diff], i]
        }else{
            hash[nums[i]] = i;
        }
    }
};

module.exports={ans1:ans1}