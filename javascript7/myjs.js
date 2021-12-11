function cook(aru){
    console.log(aru);
}
cook('酸辣土豆丝');
cook('大肘子');
cook('肉じゃが');


function sumb(a,b){
    console.log(a + b);
}
sumb(100,200);
function getSum(num1,num2){
    console.log(num1 - num2);
}
getSum(300,200);

function getSum2(numbe1,numbe2){
    var sumb = 0;
    for(var i = numbe1; i <= numbe2; i++){
        sumb = sumb + i;  
    }
    console.log(sumb);

}
getSum2(1,10);
getSum2(50,100);


function getResult(){
    return 666;
}
getResult();
console.log(getResult());

function cook(aru){
    return aru;
}
console.log(cook('肉じゃが'));


function getSum(num1,num2){
    return num1 + num2;
}
console.log(getSum(20,30));

function getMax(num1,num2){
    if(num1 > num2){
        return num1;
    }else {
        return num2;
    }

    /* return num1 > num2 ? num1 : num2; */
}
var result = getMax(100,120);
alert(result);


/* alert(getMax(100,120));
alert(getMax(290,39)); */





