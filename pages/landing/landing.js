
let isLightTheme = true;
function changeTheme() {  
    if(isLightTheme){
        document.querySelector('.header').classList.add('header__dark');
        document.querySelector('.how-it-works').classList.add('how-it-works__dark');
        document.querySelector('.what-inspiring-us').classList.add('what-inspiring-us__dark');
        document.querySelector('.pets-in-zoo').classList.add('pets-in-zoo__dark');
        document.querySelector('.pay-and-feed').classList.add('pay-and-feed__dark');
        document.querySelector('.testimonials').classList.add('testimonials__dark');
        document.querySelector('.map').classList.add('map__dark');
        document.querySelectorAll('.pay-and-feed_logos').forEach( img => img.setAttribute('src','assets/icons/payAndFeed_1-dark.png'));
        document.querySelector('.map__image').setAttribute('src','assets/images/map-dark.png');
        isLightTheme = false;
    }else{
        document.querySelector('.header').classList.remove('header__dark');
        document.querySelector('.how-it-works').classList.remove('how-it-works__dark');
        document.querySelector('.what-inspiring-us').classList.remove('what-inspiring-us__dark');
        document.querySelector('.pets-in-zoo').classList.remove('pets-in-zoo__dark');
        document.querySelector('.pay-and-feed').classList.remove('pay-and-feed__dark');
        document.querySelector('.testimonials').classList.remove('testimonials__dark');
        document.querySelector('.map').classList.remove('map__dark');
        document.querySelectorAll('.pay-and-feed_logos').forEach( img => img.setAttribute('src','assets/icons/payAndFeed_1.png'));
        document.querySelector('.map__image').setAttribute('src','assets/images/map.png');
        isLightTheme = true;
    }
}
document.querySelector('.button__switch-theme').addEventListener ("click", changeTheme); 









//THE-ZOO__SLIDER
const cards2 = document.querySelectorAll('.pets-in-zoo .card');

document.querySelector('.pets-in-zoo .right-arrow').addEventListener('click', nextRight);
document.querySelector('.pets-in-zoo .left-arrow').addEventListener('click', nextLeft);
let widthImg = document.querySelectorAll('.card .card-image');
let position = 0;
let position2 = parseInt(getComputedStyle(widthImg[0]).width)+23



let leftCardPosition = 0;
let rightCardPosition = 3;
const minCardPosition =0;
const maxCardPosition = 7;
let activeCardPosition =0;


function nextRight(){
    if(rightCardPosition>=7) {
        rightCardPosition=3;
        leftCardPosition=0;
        activeCardPosition=0;
        document.querySelector('.eight-cards-container').style.transform = `translateX(0px)`;
        cards2[0].classList.add('active-card2');
        position=0;
        inputRange.value=activeCardPosition;
        rangeValue();
        return;      
    };

    cards2[activeCardPosition+1].classList.add('active-card2');
    cards2[activeCardPosition].classList.remove('active-card2');
    activeCardPosition++;
    inputRange.value=activeCardPosition;
    rangeValue();
    

    if (activeCardPosition > rightCardPosition){    
        position += position2;
        document.querySelector('.eight-cards-container').style.transform = `translateX(-${position}px)`;     
        rightCardPosition++;
        leftCardPosition++;
    }   
}

function nextLeft(){
    if(leftCardPosition<=0) {
        rightCardPosition=7;
        leftCardPosition=4;
        activeCardPosition=7;
        document.querySelector('.eight-cards-container').style.transform = `translateX(-${position2*4}px)`;
        cards2[7].classList.add('active-card2');
        position = position2*4;
        inputRange.value=activeCardPosition;
        rangeValue();
        return;
    };

    cards2[activeCardPosition].classList.remove('active-card2');
    cards2[activeCardPosition-1].classList.add('active-card2');
    activeCardPosition--;
    inputRange.value=activeCardPosition;
    rangeValue();
    
    if (activeCardPosition < leftCardPosition){
        position -= position2;    
        document.querySelector('.eight-cards-container').style.transform = `translateX(-${position}px)`;
        rightCardPosition--;
        leftCardPosition--;
    }   
}



const inputRange = document.querySelector('.progress-range input');
let rangeValue = function(){
    let newValue = inputRange.value;
    let target = document.querySelector('.range-input_value');
    
    target.innerHTML = +newValue+1;
  }
  inputRange.addEventListener("input", rangeValue);
  

  inputRange.addEventListener("input", toogleChangePosition);
  
  function toogleChangePosition(){  
     if(activeCardPosition < inputRange.value){
         nextRight(); 
         return;      
     }
         nextLeft();      
  }










  
//WATCH-YOUR-FAVORITE-ANIMAL__SLIDER
let eagle=document.getElementById('eagle_card');
let panda=document.getElementById('panda_card');
let gorilla=document.getElementById('gorilla_card');
let crocodile=document.getElementById('crocodile_card');
let fox=document.getElementById('fox_card');
let lenivets=document.getElementById('lenivets_card');
let elephant=document.getElementById('elephant_card');
let leopard=document.getElementById('leopard_card');



let array = [eagle, panda, gorilla, crocodile, fox, lenivets, elephant, leopard];


let position3 = 0;
let position4 = 141 + parseInt(getComputedStyle(array[2]).marginLeft);

let activeCardNow = 1;

function checkActive(event){
   
   
    for(let i=0; i<=array.length;i++){
        if (array[i].classList.contains('active-card')==true){
            if (event.target.parentNode == array[i+1]){
                

                array[i].classList.remove('active-card');
                array[i].classList.add('no-active-card');
                array[i+1].classList.remove('no-active-card');
                array[i+1].classList.add('active-card');
                activeCardNow = array.indexOf(array[i+1]);
                position3 +=position4;
                document.querySelector('.cards-wrapper').style.transform = `translateX(-${position3}px)`;
                inputRange1.value = array.indexOf(array[i+1]);
                rangeValue1();
                document.querySelector('.point-left-2').style.display = 'none';
                if (activeCardNow == 5) {
                    document.querySelector('.point-right-3').style.display = 'block';
                }
                if (activeCardNow == 6) {
                    document.querySelector('.point-right-2').style.display = 'block';
                }
                if (activeCardNow == 7) {
                    document.querySelector('.point-right-1').style.display = 'block';
                }
                
                
            }
            if(event.target.parentNode == array[i-1]) {
                
                array[i].classList.remove('active-card');
                array[i].classList.add('no-active-card');
                array[i-1].classList.remove('no-active-card');
                array[i-1].classList.add('active-card');
                activeCardNow = array.indexOf(array[i-1]);
                position3 -=position4;
                document.querySelector('.cards-wrapper').style.transform = `translateX(-${position3}px)`;
                inputRange1.value = array.indexOf(array[i-1]);
                rangeValue1();
                if (activeCardNow == 4) {
                    document.querySelector('.point-right-3').style.display = 'none';
                }
                if (activeCardNow == 5) {
                    document.querySelector('.point-right-2').style.display = 'none';
                }
                if (activeCardNow == 6) {
                    document.querySelector('.point-right-1').style.display = 'none';
                }
                if(event.target.parentNode == array[0]){
                    document.querySelector('.cards-wrapper').style.transform = `translateX(${position4}px)`;
                    document.querySelector('.point-left-2').style.display = 'block';
                }
                
            }
            return
        }
    }   
}



document.querySelector('.cards-wrapper').addEventListener('click', checkActive);


const inputRange1 = document.querySelector('.progress-range1 input');
let rangeValue1 = function(){
    let newValue = inputRange1.value;
    let target = document.querySelector('.range-input_value1'); 
    target.innerHTML = +newValue+1;
  }
  inputRange1.addEventListener("input", rangeValue1);


  inputRange1.addEventListener("input", toogleChangePosition1);
  
  function toogleChangePosition1(){  
     if(activeCardNow < inputRange1.value){
   
        array[activeCardNow].classList.remove('active-card');
        array[activeCardNow].classList.add('no-active-card');
        array[activeCardNow+1].classList.remove('no-active-card');
        array[activeCardNow+1].classList.add('active-card');
        activeCardNow = array.indexOf(array[activeCardNow+1]);
        position3 +=position4;
        document.querySelector('.cards-wrapper').style.transform = `translateX(-${position3}px)`;
        
        document.querySelector('.point-left-2').style.display = 'none';
        if (activeCardNow == 5) {
            document.querySelector('.point-right-3').style.display = 'block';
        }
        if (activeCardNow == 6) {
            document.querySelector('.point-right-2').style.display = 'block';
        }
        if (activeCardNow == 7) {
            document.querySelector('.point-right-1').style.display = 'block';
        }
         return;      
     }
     array[activeCardNow].classList.remove('active-card');
     array[activeCardNow].classList.add('no-active-card');
     array[activeCardNow-1].classList.remove('no-active-card');
     array[activeCardNow-1].classList.add('active-card');
     activeCardNow = array.indexOf(array[activeCardNow-1]);
     position3 -=position4;
     document.querySelector('.cards-wrapper').style.transform = `translateX(-${position3}px)`;
     
     if (activeCardNow == 4) {
        document.querySelector('.point-right-3').style.display = 'none';
    }
    if (activeCardNow == 5) {
        document.querySelector('.point-right-2').style.display = 'none';
    }
    if (activeCardNow == 6) {
        document.querySelector('.point-right-1').style.display = 'none';
    }
     if(activeCardNow == 0){
        document.querySelector('.cards-wrapper').style.transform = `translateX(${position4}px)`;
        document.querySelector('.point-left-2').style.display = 'block';
    }               
  }

