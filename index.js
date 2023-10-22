const Hide =document.getElementById('Menu')
Hide.addEventListener("click",function(e){
    document.getElementById("nav-items").style.display="grid"
    console.log(" clicked")
})
Hide.ondblclick = function(){
    console.log("double clicked")
}