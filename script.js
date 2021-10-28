function theme() {
  var x, i;
  x = document.querySelectorAll("*");
  for (i = 0; i < x.length; i++) {
    x[i].classList.toggle("dark-mode");
  }
}
$(document).ready(function(){
$("#default").click(function(){
new WinBox({

title: "Basic Arcade",
background: "rgba(80, 80,110, 1)",
class: ["iframe"],
max: true,
border: 0,
url: "https://atom-scratch-pecorino.glitch.me/selection3.html"
});
});
});
$(document).ready(function(){
$("#nes").click(function(){
new WinBox({

title: "Nintendo Entertainment System",
background: "rgba(80, 80,110, 1)",
class: ["iframe"],
max: true,
border: 0,
url: "https://abclearning.us/g/nes/index.php"
});
});
});
$(document).ready(function(){
$("#pkmru").click(function(){
new WinBox({

title: "Pokemon Ruby",
background: "rgba(80, 80,110, 1)",
class: ["iframe"],
max: true,
border: 0,
url: "https://keystopropertysolutions.us/assets/media/gb/#pkmru"
});
});
});
$(document).ready(function(){
$("#pkmr").click(function(){
new WinBox({

title: "Pokemon FireRed",
background: "rgba(80, 80,110, 1)",
class: ["iframe"],
max: true,
border: 0,
url: "https://keystopropertysolutions.us/assets/media/gb/#pkmr"
});
});
});
$(document).ready(function(){
$("#d4").click(function(){
new WinBox({

title: "DuckLife 4",
background: "rgba(80, 80,110, 1)",
class: ["iframe"],
max: true,
border: 0,
url: "https://keystopropertysolutions.us/assets/media/d4"
});
});
});
$(document).ready(function(){
$("#ht").click(function(){
new WinBox({

title: "HTML Editor",
background: "rgba(80, 80,110, 1)",
class: ["iframe"],
max: true,
border: 0,
url: "https://keystopropertysolutions.us/assets/media/ht.html"
});
});
});
$(document).ready(function(){
$("#paper").click(function(){
new WinBox({

title: "Paper.IO 2",
background: "rgba(80, 80,110, 1)",
class: ["iframe"],
max: true,
border: 0,
url: "https://paperio2.org"
});
});
});
$(document).ready(function(){
$("#dino").click(function(){
new WinBox({

title: "Chrome Dino",
background: "rgba(80, 80,110, 1)",
class: ["iframe"],
max: true,
border: 0,
url: "/dino.html"
});
});
});
$(document).ready(function(){
$("#pmc").click(function(){
new WinBox({

title: "Paper Minecraft",
background: "rgba(80, 80,110, 1)",
class: ["iframe"],
max: true,
border: 0,
url: "https://scratch.mit.edu/projects/10128407/embed?v1"
});
});
});
$(document).ready(function(){
$("#pc").click(function(){
new WinBox({

title: "Pacman",
background: "rgba(80, 80,110, 1)",
class: ["iframe"],
max: true,
border: 0,
url: "/pc.html"
});
});
});
$(document).ready(function(){
$("#bk").click(function(){
new WinBox({

title: "GameOS Bookmarklet",
background: "rgba(80, 80,110, 1)",
class: ["iframe"],
max: true,
border: 0,
url: "/bk.html"
});
});
});
$(document).ready(function(){
$("#intro").click(function(){
new WinBox({

title: "GameOS Instructions",
background: "rgba(80, 80,110, 1)",
class: ["iframe"],
max: true,
border: 0,
url: "https://incertae.vercel.app/full.html"
});
});
});
$(document).ready(function(){
$("#list").click(function(){
new WinBox({

title: "Proxy List",
background: "rgba(80, 80,110, 1)",
border: 0,
html: "m&#8203;o&#8203;d&#8203;e&#8203;r&#8203;n&#8203;i&#8203;z&#8203;e&#8203;.&#8203;g&#8203;q&#8203;<br>&#8203;r&#8203;e&#8203;c&#8203;e&#8203;p&#8203;t&#8203;i&#8203;o&#8203;n&#8203;.&#8203;c&#8203;f&#8203;<br>&#8203;t&#8203;r&#8203;e&#8203;a&#8203;t&#8203;y&#8203;g&#8203;u&#8203;i&#8203;d&#8203;e&#8203;.&#8203;c&#8203;o&#8203;m<br>r&#8203;es&#8203;il&#8203;ie&#8203;nce.cx<br>ab&#8203;cle&#8203;ar&#8203;n&#8203;ing.us"
});
});
});
$(document).ready(function(){
$("#tools").click(function(){
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
modal.style.display = "block";
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
});
});
$(document).ready(function(){
$("#rr").click(function(){
location.replace('/rr.html');
});
});
</script>
<script>
$(document).ready(function(){
$("#exit").click(function(){
location.replace('https://classroom.google.com');
});
});
$(document).ready(function(){
$("#gba").click(function(){
location.replace('https://abclearning.us/g/gba/index.html');
});
});
$(document).ready(function(){
$("#more").click(function(){
location.replace('/more.html');
});
});
$(document).ready(function(){
$("#oa").click(function(){
location.replace('https://atom-scratch-pecorino.glitch.me/gfiles/onslaughtarena/game.html');
});
});
    function passWord() {
        var count = 1;
        var pass1 = prompt("Type here", "");
        //change to your password
        var password = "cottondog";
        //max attempts
        var maxattempt = 2;

        while (count < 2) {
            if (!pass1) history.go(-1);
            if (pass1.toLowerCase() == password) {
                document.getElementById("keybox").style.visibility = "visible";
                document.getElementById("heybox").style.display = "none";
                document.getElementById("bam").style.display = "none";
                break;
            }
            count += 1;
            var pass1 = prompt("Error");
        }

        if (count == maxattempt) {
            alert("You have 0 attempts left");
        }
    }
