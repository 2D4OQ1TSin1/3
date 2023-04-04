function showFirst(){
    if (document.getElementById("firstLayer").style.display == "block"){
        document.getElementById("firstLayer").style.display = "none";
    }
    else{
        document.getElementById("firstLayer").style.display = "block";
    }
}

function showSecond(){
    if (document.getElementById("secondLayer").style.display == "block"){
        document.getElementById("secondLayer").style.display = "none";
    }
    else{
        document.getElementById("secondLayer").style.display = "block";
    }
}

function showThird(){
    if (document.getElementById("thirdLayer").style.display == "block"){
        document.getElementById("thirdLayer").style.display = "none";
        document.getElementById("rickRoll").src = "";
    }
    else{
        document.getElementById("thirdLayer").style.display = "block";
        document.getElementById("rickRoll").src = "https://www.youtube.com/embed/GtL1huin9EE?autoplay=1&mute=1";
    }
}