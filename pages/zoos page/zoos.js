let isLightTheme = true;



function changeTheme() {   
    if(isLightTheme){
        document.querySelector('.header').classList.add('header__dark');       
        document.querySelector('.body').classList.add('body__dark');      
        isLightTheme = false;
    }else{
        document.querySelector('.header').classList.remove('header__dark'); 
        document.querySelector('.body').classList.remove('body__dark');       
        isLightTheme = true;
    }
}
document.querySelector('.button__switch-theme').addEventListener ("click", changeTheme); 








let link = "";
document.querySelector('.ekran-1').onclick = ()=> {
    link = document.querySelector('.big-frame').getAttribute('src');
    document.querySelector('.big-frame').setAttribute('src', `${document.querySelector('.little-frame-1').getAttribute('src')}`);
    document.querySelector('.little-frame-1').setAttribute('src', `${link}`);
}
document.querySelector('.ekran-2').onclick = ()=> {
    link = document.querySelector('.big-frame').getAttribute('src');
    document.querySelector('.big-frame').setAttribute('src', `${document.querySelector('.little-frame-2').getAttribute('src')}`);
    document.querySelector('.little-frame-2').setAttribute('src', `${link}`);
}
document.querySelector('.ekran-3').onclick = ()=> {
    link = document.querySelector('.big-frame').getAttribute('src');
    document.querySelector('.big-frame').setAttribute('src', `${document.querySelector('.little-frame-3').getAttribute('src')}`);
    document.querySelector('.little-frame-3').setAttribute('src', `${link}`);
}
