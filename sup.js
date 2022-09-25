
    if(window.location.href=="https://math.prodigygame.com/?launcher=true") {
       hi();
    }
   else 
    {
        
    }


function hi() {
    document.getElementById("ed-progress-bar").style.width = "100%";
    document.getElementById("splash-image").style.backgroundImage = "url('https://github.com/Mr-funkinguy/prodigy-loader-api/blob/main/Untitled_Artwork%207.gif?raw=true')";
    document.getElementsByClassName("loading-logo").backgroundImage="https://github.com/Mr-funkinguy/prodigy-loader-api/blob/main/Untitled_Artwork%20237.png?raw=true";
    SW.Load.init();
    document.getElementById("loading-text").innerHTML = "Prodigy Has No Anti-Cheat LOL";
    setTimeout(function () {
     document.getElementById("loading-text").innerHTML = "Prodigy Sucks LOL";
    }, 1500);
    setTimeout(function () {
     document.getElementById("loading-text").innerHTML = "Prodigy Is The Worst game Ever ";
    }, 3000);
    setTimeout(function () {
        document.getElementById("loading-text").innerHTML = "loading hacks";
    }, 4500);
    setTimeout(function () {
        document.getElementById("loading-text").innerHTML = "Bruh Its So Easy To Mod";
    }, 6000);
    setTimeout(function () {
        document.getElementById("loading-text").innerHTML = "tbh this game suck dookie";
    }, 7500);
    setTimeout(function () {
        document.getElementById("loading-text").innerHTML = "Fight Me Prodigy";
    }, 9000);
    setTimeout(function () {
        document.getElementById("loading-text").innerHTML = "How Is Your Game Not Done Loading :skull:";
    }, 15000);
    setTimeout(function () {
        document.getElementById("loading-text").innerHTML = "Prodigy = Mid";
    }, 30000);
    setTimeout(function () {
        document.getElementById("loading-text").innerHTML = "Move If Your Gay";
    }, 45000);
    setTimeout(function () {
        document.getElementById("loading-text").innerHTML = "Bro Cant Even Load A Prodigy Game";
    }, 60000);

    const para = document.createElement("p");
const node = document.createTextNode("This is new.");
para.appendChild(node);

const element = document.getElementById("div1");
element.appendChild(para);
   
}
