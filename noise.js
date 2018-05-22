$(document).ready( function() {
  $('body').on ('keydown', function(event) {
    console.log(event)
    if (event.keyCode==65){
      const audio = document.getElementById("aAudio");
      audio.play();
      audio.currentTime = 0;
    }else if (event.keyCode==66){
      const audio = document.getElementById("bAudio");
      audio.play();
      audio.currentTime = 0;
    }else if (event.keyCode==67){
      const audio = document.getElementById("cAudio");
      audio.play();
      audio.currentTime = 0;
    }else if (event.keyCode==68){
      const audio = document.getElementById("dAudio");
      audio.play();
      audio.currentTime = 0;
    }else if(event.keyCode==69){
      const audio = document.getElementById("eAudio");
      audio.play();
      audio.currentTime = 0;
    }else if(event.keyCode==70){
      const audio = document.getElementById("fAudio");
      audio.play();
      audio.currentTime = 0;
    }else if(event.keyCode==71){
      const audio = document.getElementById("gAudio");
      audio.play();
      audio.currentTime = 0;
    }else{
      alert ("ABCDEFG only please!");
    }dd

  });
});



// your code here
