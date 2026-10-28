
document.addEventListener("DOMContentLoaded", (event) => {
  const player_name = document.getElementById("player_name")

    player_name.innerText = `Welcome ${LoadingScreen.player.nanos_username} !`

    const message_elem = document.getElementById("message")
    const message_secondary_elem = document.getElementById("message_secondary")
    const progress_elem = document.getElementById("progress")

    Events.Subscribe("UpdateScreen", function(message, message_secondary, progress_small, progress_small_total, progress, progress_total, current_stage) {
        message_elem.innerText = message
        message_secondary_elem.innerText = message_secondary
        progress_elem.innerText = progress + " / " + progress_total
    });
});

