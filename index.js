// creating cookie

function setcookie(cname,cvalue,exday){
  let date = new Date();
  date.setTime(date.getTime() + (exday*24*60*60*1000));
  let expires = "expires="+date.toUTCString();
  document.cookie=cname +"="+ cname+"="+";" + cvalue + ";" + expires +";path=/";
}

function getcookie(cname){
  let name = cname+"=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca  = decodedCookie.split(";");
  let calen = ca.length;
  for(let i = 0; i < calen; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkcookie(){
  let user = getcookie("username");
  if(user!=""){
    alert("welxome" + user);
  }else{
    user =prompt("Enter your name");
    if(user!="" && user!=null){
      setcookie("username",user,0);
    }
    
  }
  
}
