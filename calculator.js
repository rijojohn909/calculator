function displayValue(num){
  inp.value +=num
}
function allClear(){
           inp.value=""
}
function evaluateOut(){
    inp.value=eval(inp.value)
}
function back(){
    inp.value=inp.value.slice(0,-1)
}