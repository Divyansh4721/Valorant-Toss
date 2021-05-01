function RandomMap() {
  return Math.floor(Math.random() * 2);
}
let interval;
let flag=true;
let audio=new Audio("sound.wav");
function buttonclicked(){
  if(flag){
    let Mapno=RandomMap();
    let MapNames=["Head","Tails"];
    audio.play();
    setTimeout(()=>{
      clearInterval(interval);
      setTimeout(()=>{
        document.querySelector('#Valo').innerHTML=MapNames[Mapno];
      },200);
    },500);
    flag=false;
  }
}
{
  let a=document.querySelector('#button');
  a.addEventListener('mousedown', function() {
    a.style.height='40px';
    a.style.width='14%';
    a.style.left='75%';
    a.style.fontSize='17px';
  });
  a.addEventListener('mouseup', function() {
    a.style.height='50px';
    a.style.width='15%';
    a.style.left='75%';
    a.style.fontSize='20px';
  });
}
{
  let temp=-1;
  let MapNames=["Head","Tails"];
  interval=setInterval(function(){
    let Mapno=RandomMap();
    while (temp==Mapno) {
      Mapno=RandomMap();
    }
    temp=Mapno;
    document.querySelector('#Valo').innerHTML=MapNames[Mapno];
  },200);
}
