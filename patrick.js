var ppp = document.getElementById("ppp");
var threat = document.getElementById("threat");
var threatA = document.getElementById("threatA");
var firstclick = new Boolean("false");

ppp.addEventListener("mouseover", pppMouseOver);
ppp.addEventListener("mouseleave", pppMouseLeave);  
threat.addEventListener("mouseover", threatMouseOver);
threat.addEventListener("click", threatOnClick);
threat.addEventListener("mouseleave", threatMouseLeave);

function pppMouseOver() {
      ppp.src = "https://media4.giphy.com/media/ZE5DmCqNMr3yDXq1Zu/giphy_s.gif";
}

function pppMouseLeave() {
     ppp.src = "https://www.pinclipart.com/picdir/big/541-5417259_patrick-meme-transparent-clipart.png";
}

function threatOnClick() {

      if (firstclick == false) {
           threatA.href = "https://youtu.be/UaIkmnloW7M"
           console.log("1");
           firstclick = true;
     }
     else if (firstclick == true) {
           threatA.href = "https://youtu.be/3SzbtddERCY";
            firstclick = false;
            console.log("2");
      }
}

function threatMouseOver() {
     threat.style.color = 'rgb(220, 20, 60)';
}
function threatMouseLeave() {
     threat.style.color = 'rgb(39, 131, 94)';
}
