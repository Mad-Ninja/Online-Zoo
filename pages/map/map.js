let isLightTheme = true;

function changeTheme() {
    if (isLightTheme) {
        document.querySelector('.header').classList.add('header__dark');
        document.querySelector('.map').classList.add('map__dark');
        document.querySelector('.map__image').setAttribute('src', '../../assets/images/map-dark.png');
        isLightTheme = false;
    } else {
        document.querySelector('.header').classList.remove('header__dark');
        document.querySelector('.map').classList.remove('map__dark');
        document.querySelector('.map__image').setAttribute('src', '../../assets/images/map.png');
        isLightTheme = true;
    }
}

document.querySelector('.button__switch-theme').addEventListener("click", changeTheme);






let pets_icons = document.querySelectorAll('.slider-container .eclipse');
let map_icons = document.querySelectorAll('.map-target_container');

document.querySelector('.slider .right-arrow').addEventListener('click', nextRight);
document.querySelector('.slider .left-arrow').addEventListener('click', nextLeft);

let activeCardPosition = 1;
const minCardPosition = 0;
const maxCardPosition = 7;

let leftCardPosition = 0;
let rightCardPosition = 7;
console.log(1)

function nextRight() {

    if (activeCardPosition == 7) {
        activeCardPosition = 0;
        pets_icons[7].classList.remove('pre-active');
        pets_icons[7].classList.remove('active');
        pets_icons[0].classList.add('active');
        inputRange.value = activeCardPosition;
        rangeValue();

        document.querySelector('.target-point-active').setAttribute('src', '../../assets/icons/map-target-point.png');
        document.querySelector('.target-point-active').classList.remove('target-point-active');
        document.querySelector('.map-container .gorilla .map-target-point').classList.add('target-point-active');
        document.querySelector('.target-point-active').setAttribute('src', '../../assets/icons/map-target-point-active.png');
        document.querySelector('.button-to-zoo').setAttribute("onclick", "document.location='../zoos page/gorilla/gorilla.html'")
        return;

    }

    if (activeCardPosition >= 2) {
        pets_icons[activeCardPosition - 1].classList.remove('pre-active');
    }
    pets_icons[activeCardPosition].classList.add('pre-active');
    pets_icons[activeCardPosition + 1].classList.add('active');
    pets_icons[activeCardPosition].classList.remove('active');
    activeCardPosition++;
    inputRange.value = activeCardPosition;
    rangeValue();
    
    if (activeCardPosition == 1) {
        document.querySelector('.target-point-active').setAttribute('src', '../../assets/icons/map-target-point.png');
        document.querySelector('.target-point-active').classList.remove('target-point-active');
        document.querySelector('.map-container .panda .map-target-point').classList.add('target-point-active');
        document.querySelector('.target-point-active').setAttribute('src', '../../assets/icons/map-target-point-active.png');
        document.querySelector('.button-to-zoo').setAttribute("onclick", "document.location='../zoos page/panda/panda.html'")
    }
    if (activeCardPosition == 2) {
        document.querySelector('.target-point-active').setAttribute('src', '../../assets/icons/map-target-point.png');
        document.querySelector('.target-point-active').classList.remove('target-point-active');
        document.querySelector('.map-container .crocodile .map-target-point').classList.add('target-point-active');
        document.querySelector('.target-point-active').setAttribute('src', '../../assets/icons/map-target-point-active.png');
        document.querySelector('.button-to-zoo').setAttribute("onclick", "document.location='../zoos page/alligator/alligator.html'")
    }
    if (activeCardPosition == 3) {
        document.querySelector('.target-point-active').setAttribute('src', '../../assets/icons/map-target-point.png');
        document.querySelector('.target-point-active').classList.remove('target-point-active');
        document.querySelector('.map-container .eagle .map-target-point').classList.add('target-point-active');
        document.querySelector('.target-point-active').setAttribute('src', '../../assets/icons/map-target-point-active.png');
        document.querySelector('.button-to-zoo').setAttribute("onclick", "document.location='../zoos page/eagle/eagle.html'")
    }
}


function nextLeft() {
    if (activeCardPosition == 0) {
        activeCardPosition = 7;
        pets_icons[6].classList.add('pre-active');
        pets_icons[0].classList.remove('active');
        pets_icons[7].classList.add('active');
        inputRange.value = activeCardPosition;
        rangeValue();
        return;
    }
    if (activeCardPosition >= 2) {
        pets_icons[activeCardPosition - 2].classList.add('pre-active');
    }
    pets_icons[activeCardPosition - 1].classList.remove('pre-active');
    pets_icons[activeCardPosition - 1].classList.add('active');
    pets_icons[activeCardPosition].classList.remove('active');
    activeCardPosition--;
    inputRange.value = activeCardPosition;
    rangeValue();

    if (activeCardPosition == 0) {
        document.querySelector('.target-point-active').setAttribute('src', '../../assets/icons/map-target-point.png');
        document.querySelector('.target-point-active').classList.remove('target-point-active');
        document.querySelector('.map-container .gorilla .map-target-point').classList.add('target-point-active');
        document.querySelector('.target-point-active').setAttribute('src', '../../assets/icons/map-target-point-active.png');
        document.querySelector('.button-to-zoo').setAttribute("onclick", "document.location='../zoos page/gorilla/gorilla.html'")
    }
    if (activeCardPosition == 1) {
        document.querySelector('.target-point-active').setAttribute('src', '../../assets/icons/map-target-point.png');
        document.querySelector('.target-point-active').classList.remove('target-point-active');
        document.querySelector('.map-container .panda .map-target-point').classList.add('target-point-active');
        document.querySelector('.target-point-active').setAttribute('src', '../../assets/icons/map-target-point-active.png');
        document.querySelector('.button-to-zoo').setAttribute("onclick", "document.location='../zoos page/panda/panda.html'")
    }
    if (activeCardPosition == 2) {
        document.querySelector('.target-point-active').setAttribute('src', '../../assets/icons/map-target-point.png');
        document.querySelector('.target-point-active').classList.remove('target-point-active');
        document.querySelector('.map-container .crocodile .map-target-point').classList.add('target-point-active');
        document.querySelector('.target-point-active').setAttribute('src', '../../assets/icons/map-target-point-active.png');
        document.querySelector('.button-to-zoo').setAttribute("onclick", "document.location='../zoos page/alligator/alligator.html'")
    }
    if (activeCardPosition == 3) {
        document.querySelector('.target-point-active').setAttribute('src', '../../assets/icons/map-target-point.png');
        document.querySelector('.target-point-active').classList.remove('target-point-active');
        document.querySelector('.map-container .eagle .map-target-point').classList.add('target-point-active');
        document.querySelector('.target-point-active').setAttribute('src', '../../assets/icons/map-target-point-active.png');
        document.querySelector('.button-to-zoo').setAttribute("onclick", "document.location='../zoos page/eagle/eagle.html'")
    }

}
















function selectGorillaToMap() {
    if(activeCardPosition == 0) return;
    pets_icons[0].classList.add('active');
    pets_icons[activeCardPosition].classList.remove('active');
    pets_icons[activeCardPosition - 1].classList.remove('pre-active');
    document.querySelector('.target-point-active').setAttribute('src', '../../assets/icons/map-target-point.png');
    document.querySelector('.target-point-active').classList.remove('target-point-active');
    document.querySelector('.map-container .gorilla .map-target-point').classList.add('target-point-active');
    document.querySelector('.target-point-active').setAttribute('src', '../../assets/icons/map-target-point-active.png');
    activeCardPosition = 0;
    inputRange.value = activeCardPosition;
    rangeValue();
    document.querySelector('.button-to-zoo').setAttribute("onclick", "document.location='../zoos page/gorilla/gorilla.html'")
}

function selectPandaToMap() {
    if(activeCardPosition == 1) return;
    pets_icons[1].classList.add('active');
    pets_icons[activeCardPosition].classList.remove('active');
    if (activeCardPosition > 0) {
        pets_icons[activeCardPosition - 1].classList.remove('pre-active');
    }
    document.querySelector('.target-point-active').setAttribute('src', '../../assets/icons/map-target-point.png');
    document.querySelector('.target-point-active').classList.remove('target-point-active');
    document.querySelector('.map-container .panda .map-target-point').classList.add('target-point-active');
    document.querySelector('.target-point-active').setAttribute('src', '../../assets/icons/map-target-point-active.png');
    activeCardPosition = 1;
    pets_icons[activeCardPosition - 1].classList.add('pre-active');

    inputRange.value = activeCardPosition;
    rangeValue();
    document.querySelector('.button-to-zoo').setAttribute("onclick", "document.location='../zoos page/panda/panda.html'")
}

function selectAlligatorToMap() {
    if(activeCardPosition == 2) return;
    pets_icons[2].classList.add('active');
    pets_icons[activeCardPosition].classList.remove('active');
    if (activeCardPosition > 0) {
        pets_icons[activeCardPosition - 1].classList.remove('pre-active');
    }
    document.querySelector('.target-point-active').setAttribute('src', '../../assets/icons/map-target-point.png');
    document.querySelector('.target-point-active').classList.remove('target-point-active');
    document.querySelector('.map-container .crocodile .map-target-point').classList.add('target-point-active');
    document.querySelector('.target-point-active').setAttribute('src', '../../assets/icons/map-target-point-active.png');
    activeCardPosition = 2;
    pets_icons[activeCardPosition - 1].classList.add('pre-active');

    inputRange.value = activeCardPosition;
    rangeValue();
    document.querySelector('.button-to-zoo').setAttribute("onclick", "document.location='../zoos page/alligator/alligator.html'")
}

function selectEagleToMap() {
    if(activeCardPosition == 3) return;
    pets_icons[3].classList.add('active');
    pets_icons[activeCardPosition].classList.remove('active');
    if (activeCardPosition > 0) {
        pets_icons[activeCardPosition - 1].classList.remove('pre-active');
    }
    document.querySelector('.target-point-active').setAttribute('src', '../../assets/icons/map-target-point.png');
    document.querySelector('.target-point-active').classList.remove('target-point-active');
    document.querySelector('.map-container .eagle .map-target-point').classList.add('target-point-active');
    document.querySelector('.target-point-active').setAttribute('src', '../../assets/icons/map-target-point-active.png');
    activeCardPosition = 3;
    pets_icons[activeCardPosition - 1].classList.add('pre-active');

    inputRange.value = activeCardPosition;
    rangeValue();
    document.querySelector('.button-to-zoo').setAttribute("onclick", "document.location='../zoos page/eagle/eagle.html'")
}

function selectTigerToMap() {
    if(activeCardPosition == 4) return;
    pets_icons[4].classList.add('active');
    pets_icons[activeCardPosition].classList.remove('active');
    if (activeCardPosition > 0) {
        pets_icons[activeCardPosition - 1].classList.remove('pre-active');
    }
    activeCardPosition = 4;
    pets_icons[activeCardPosition - 1].classList.add('pre-active');

    inputRange.value = activeCardPosition;
    rangeValue();
}
function selectElephantToMap() {
    if(activeCardPosition == 5) return;
    pets_icons[5].classList.add('active');
    pets_icons[activeCardPosition].classList.remove('active');
    if (activeCardPosition > 0) {
        pets_icons[activeCardPosition - 1].classList.remove('pre-active');
    }
    activeCardPosition = 5;
    pets_icons[activeCardPosition - 1].classList.add('pre-active');
    inputRange.value = activeCardPosition;
    rangeValue();
}
function selectLionToMap() {
    if(activeCardPosition == 6) return;
    pets_icons[6].classList.add('active');
    pets_icons[activeCardPosition].classList.remove('active');
    if (activeCardPosition > 0) {
        pets_icons[activeCardPosition - 1].classList.remove('pre-active');
    }
    activeCardPosition = 6;
    pets_icons[activeCardPosition - 1].classList.add('pre-active');
    inputRange.value = activeCardPosition;
    rangeValue();
}
function selectZebraToMap() {
    if(activeCardPosition == 7) return;
    pets_icons[7].classList.add('active');
    pets_icons[activeCardPosition].classList.remove('active');
    if (activeCardPosition > 0) {
        pets_icons[activeCardPosition - 1].classList.remove('pre-active');
    }
    activeCardPosition = 7;
    pets_icons[activeCardPosition - 1].classList.add('pre-active');
    inputRange.value = activeCardPosition;
    rangeValue();
}


pets_icons[0].addEventListener('click', selectGorillaToMap);
pets_icons[1].addEventListener('click', selectPandaToMap);
pets_icons[2].addEventListener('click', selectAlligatorToMap);
pets_icons[3].addEventListener('click', selectEagleToMap);
pets_icons[4].addEventListener('click', selectTigerToMap);
pets_icons[5].addEventListener('click', selectElephantToMap);
pets_icons[6].addEventListener('click', selectLionToMap);
pets_icons[7].addEventListener('click', selectZebraToMap);




map_icons[2].addEventListener('click', selectGorillaToMap);
map_icons[3].addEventListener('click', selectPandaToMap);
map_icons[1].addEventListener('click', selectAlligatorToMap);
map_icons[0].addEventListener('click', selectEagleToMap);






const inputRange = document.querySelector('.progress-range input');
let rangeValue = function () {
    let newValue = inputRange.value;
    let target = document.querySelector('.range-input_value');

    target.innerHTML = +newValue + 1;
}
inputRange.addEventListener("input", rangeValue);


inputRange.addEventListener("input", toogleChangePosition);

function toogleChangePosition() {
    if (activeCardPosition < inputRange.value) {
        nextRight();
        return;
    }
    nextLeft();
}




