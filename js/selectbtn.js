const selectButton = document.querySelector('.select'),
    uncheckIcon = `
    <img class = "select_img" src="../img/btn_select.png">
    `,
    checkIcon = `
    <img class = "select_img" src="../img/btn_selected.png">
    `
;

function selectAudio () {
    if (selectButton.check) {
        selectButton.innerHTML = checkIcon;
    }
    else {
        selectButton.innerHTML = uncheckIcon;
    }
}

selectButton.addEventListener('click', selectAudio);