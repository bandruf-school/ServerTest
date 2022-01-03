let iframe_created = false;
let games_played = 0
let current_game = ""
var frame = document.createElement("iframe");
frame.scroll = false
let headerContainer = document.querySelector(".headerContainer");
let games = document.querySelector("#games")
let gameButton = document.querySelectorAll(".game-button")
let holder = document.querySelectorAll(".holder")

//frame.width = 1200;
//frame.height = 600;

function fullscreen() {
    if (frame.requestFullscreen) {
        frame.requestFullscreen();
    } else if (frame.webkitRequestFullscreen) { /* Safari */
        frame.webkitRequestFullscreen();
    } else if (frame.msRequestFullscreen) { /* IE11 */
        frame.msRequestFullscreen();
    }
  }

function create_iframe(link){
    frame.classList.add("frame")
    if (!iframe_created == true){
        games_played = games_played + 1;
        console.log(games_played)
        frame.src = "https://"+link;
        console.log(frame.src)
        //document.getElementById("bottom-settings").style.visibility = "visible"

        holder.forEach(removeBtn => { 
            console.log(removeBtn)
            removeBtn.style.display = "none"
        })

        //headerContainer.style.visibility= "hidden";
        document.getElementById("bottom-settings").style.display = "flex"
        games.appendChild(frame)
        iframe_created = true; 
    }
}

function destroy_frame(){
    if (iframe_created == true) {
        //headerContainer.style.visibility= "visible";

        holder.forEach(removeBtn => { 
            removeBtn.style.display = "flex"
        })

        document.getElementById("bottom-settings").style.display = "none"
        frame.remove();
        iframe_created = false;
    }
}
