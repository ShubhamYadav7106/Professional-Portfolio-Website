
function showNavbar(){

  var list=document.querySelector(".navlist");
if(list.style.opacity==0){
list.style.opacity=1;
list.style.transform = 'translateX(0%)';

}else{

list.style.opacity=0;
list.style.transform = 'translateX(-100%)';
}

}



