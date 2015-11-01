/**
 * @param {number} num
 * @return {string}
 */
 /*
    var one = 'I'; //one
    var five = 'V'; //five
    var ten = 'X'; //ten
    var fifty = 'L'; //50
    var hundred = 'C'; //100
    var five_hundred = 'D'; //500
    var thousand = 'M'; //1000
 */
var addStr = function(num, str){
    if (num === 0){
        return "";
    }
    var mystr = "";
    var i;
    for(i = 0; i < num; i++){
        mystr += str;
    }
    return mystr;
}
 
 
var intToRoman = function(num) {
    //var arr = {1: 'I', 5: 'V', 10: 'X', 50: 'L', 100: 'C', 500: 'D', 1000: 'M'};
    var arr = ['I','V','X','L','C','D','M']; // 0 - 6
    var arr2 = [1,5,10,50,100,500,1000];
    var x = num;
    var i;
    var str = "";
    for(i = 6; i > 0; i --){
        var tmp = Math.floor(x / arr2[i]);
        str += addStr(tmp, arr[i]);
        x = x % arr2[i];
        if( i % 2 === 0){ //  if even index number
            if(x >= (arr2[i] - arr2[i-2])){
                str += arr[i-2];
                str += arr[i];
                x -= (arr2[i] - arr2[i-2]);
            }
        }else{ // if odd index number
             if(x >= (arr2[i] - arr2[i-1])){
                str += arr[i-1];
                str += arr[i];
                x -= (arr2[i] - arr2[i-1]);
            }
        }//end if index even odd
    }//end for i
    if(x > 0){
        str += addStr(x, arr[0]);
    }// final ones
    return str;
};
