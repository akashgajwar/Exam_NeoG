var inputOne = document.querySelector("#area1");
var inputTwo = document.querySelector("#area2");
var btnCheck = document.querySelector("#check");
var outputDiv = document.querySelector("#output");

function clickHandler(){
    var input1 = inputOne.value;
    var input2 = inputTwo.value;
    var result = "Its a match"
    var result2 = "its not a match"
    console.log(input1);
    console.log(input2);
     if(input1===input2){
         outputDiv.innerText= result;
     }else{
         outputDiv.innerText = result2;
     }
}








btnCheck.addEventListener("click", clickHandler);