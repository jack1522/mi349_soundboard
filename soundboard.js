const sounds= ["Thunderstruck","GaryMoore","Chris Stapelton","Nirvana","ChuckBerry","Spongebob","Guitar Solo","Nokia",
 "****STOP THE JAM****"];


sounds.forEach((sound) => {
    const btn = document.createElement('button');
    btn.classList.add("btn");
    btn.innerText=sound;
    btn.addEventListener('click', ()=>{
        stop();
        document.getElementById(sound).play();
    });

    document.getElementById("buttons").appendChild(btn);

});

function stop(){
    sounds.forEach(sound => {
        const song = document.getElementById(sound);
        song.pause();
        song.currentTime= 0;

    });
}