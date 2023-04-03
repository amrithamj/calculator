function clickss(val){
    console.log(val)
    document.getElementById("header").value+=val
}
function clearscreen(){
    document.getElementById("header").value=""
}
function equals(){
    var text=document.getElementById("header").value
    var result=eval(text)
    document.getElementById("header").value=result
}