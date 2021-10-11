function fake() {
        const interval = setInterval(function() {
                var x = Math.floor((Math.random() * 9) + 1);
                document.getElementById("title").innerHTML = "Racoon - " + x + " Listeners";
        }, 2000);
}

function main() {
        var audio = new Audio('music/jazz/Miles Davis Freddie Freeloader.mp3');
        audio.play();
        document.getElementById("song").innerHTML = "Currently Playing: Miles Davis - Freddie Freeloader";
}