
var show = document.getElementById("show");

show.addEventListener("click",myfunction)
function myfunction(){
  var demo = document.getElementById("demo");
  if(demo.style.display==='none'){
      demo.style.display='block';
      show.innerHTML = 'read less';
      demo.style.transition = '3s'
      
  }else{
    demo.style.display='none';
    show.innerHTML = 'read more';
  }

}