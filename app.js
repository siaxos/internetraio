function fake() {
        var x = Math.floor((Math.random() * 9) + 1);
        document.getElementById("title").innerHTML = "Racoon - " + x + " Listeners";
        const interval = setInterval(function() {
                var x = Math.floor((Math.random() * 9) + 1);
                document.getElementById("title").innerHTML = "Racoon - " + x + " Listeners";
        }, 3000);
}

function main() {
        var audio = new Audio('smoke.mp3');
        audio.play();
        document.getElementById("song").innerHTML = "Currently Playing: ＳＭＯＫＥ ＆ ＣＨＩＬＬ";
}