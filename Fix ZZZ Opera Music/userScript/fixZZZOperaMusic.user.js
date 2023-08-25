// ==UserScript==
// @name         Fix ZZZ Opera Music
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Fixes the music not playing in the Opera Browser on the Zenless Zone Zero website.
// @author       WhiteTapeti
// @match        *://zenless.hoyoverse.com/*
// @exclude      *://zenless.hoyoverse.com/*.*
// @icon         https://animetopbtns.github.io/website/Fix%20ZZZ%20Opera%20Music/fixZZZOperaMusicV3.png
// @grant        none
// ==/UserScript==

var loaded = 0;
var audio = new Audio('https://webstatic.hoyoverse.com/upload/static-resource/2022/04/19/aeefeb96a2a294cf1d7ab7324fd9a492_568718570249589416.mp3');
audio.loop = true;

setInterval(function testLoading() {
    if (loaded == 0) {
        if (document.getElementsByClassName("loading").length == 0) {
            audio.volume = 0;
            audio.play();
            getSoundAndFadeAudio(1);
        }
    }
}, 200);

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('m-audio-player__icon--active')) {
        if (!audio.paused) { //check audio is playing
            audio.pause();
        }
    } else if (event.target.classList.contains('m-audio-player__icon')) {
        if (audio.paused) { //check audio is playing
            audio.volume = 0;
            audio.play();
            getSoundAndFadeAudio(0);
        }
    }
});

function getSoundAndFadeAudio(e) {
    if (e == 1) {
        loaded = 1;
    }
    // Set the point in playback that fadein begins.
    var fadePoint = audio.duration - 1;

    var fadeAudio = setInterval(function() {

        // Only fade if past the fade in point or not at one already
        if ((audio.currentTime <= fadePoint) && (audio.volume !== 1)) {
            audio.volume = Number(audio.volume + 0.1).toFixed(1);
        }
        // When volume at one stop all the intervalling
        if (audio.volume === 1) {
            clearInterval(fadeAudio);
        }
    }, 200);

}
