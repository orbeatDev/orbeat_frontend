/*play button, timeline*/
    const playerButton = document.querySelector('.btn_stop'),
        audio = document.querySelector('.audio'),
        timeline = document.querySelector('.timeline'),
        playIcon = `
        <img class="btn_img" src="../img/btn_stop.png">
        `,
        pauseIcon = `
        <img class="btn_img" src="../img/btn_play.png">
        `
    ;
        
    function toggleAudio () {
        if (audio.paused) {
            audio.play();
            playerButton.innerHTML = pauseIcon;
        } else {
            audio.pause();
            playerButton.innerHTML = playIcon;
        }
    }

    playerButton.addEventListener('click', toggleAudio);

    function changeTimelinePosition () {
    const percentagePosition = (100*audio.currentTime) / audio.duration;
    timeline.style.backgroundSize = `${percentagePosition}% 100%`;
    timeline.value = percentagePosition;
    }

    audio.ontimeupdate = changeTimelinePosition;

    function audioEnded () {
    playerButton.innerHTML = playIcon;
    }

    audio.onended = audioEnded;

    function changeSeek () {
    const time = (timeline.value * audio.duration) / 100;
    audio.currentTime = time;
    }

    timeline.addEventListener('change', changeSeek);

    
    /*play button, timeline1*/
    
    const playerButton1 = document.querySelector('.btn_stop1'),
    audio1 = document.querySelector('.audio1'),
    timeline1 = document.querySelector('.timeline1'),
    playIcon1 = `
        <img class="btn_img" src="../img/btn_stop.png">
        `,
    pauseIcon1 = `
        <img class="btn_img" src="../img/btn_play.png">
        `
    ;
        
    function toggleAudio1 () {
        if (audio1.paused) {
            audio1.play();
            playerButton1.innerHTML = pauseIcon1;
        } else {
            audio1.pause();
            playerButton1.innerHTML = playIcon1;
        }
    }
    
    playerButton1.addEventListener('click', toggleAudio1);
    
    function changeTimelinePosition1() {
    const percentagePosition1 = (100*audio1.currentTime) / audio1.duration;
    timeline1.style.backgroundSize = `${percentagePosition1}% 100%`;
    timeline1.value = percentagePosition1;
    }
    
    audio1.ontimeupdate = changeTimelinePosition1;
    
    function audioEnded1 () {
    playerButton1.innerHTML = playIcon1;
    }
    
    audio1.onended = audioEnded1;
    
    function changeSeek1 () {
    const time1 = (timeline1.value * audio1.duration) / 100;
    audio1.currentTime = time1;
    }
    
    timeline1.addEventListener('change', changeSeek1);
