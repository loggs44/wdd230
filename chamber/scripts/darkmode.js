const darkmode = document.querySelector('#dark-mode');
const bodyelt = document.querySelector("body");

darkmode.addEventListener('click',()=>{
    if (darkmode.textContent == 'DARK' ){
        document.documentElement.style.setProperty('--text-color', '#E7ECEF');        
        document.documentElement.style.setProperty('--background-color', 'black');    
        document.documentElement.style.setProperty('--hover-background-color', '#27374D');    
        document.documentElement.style.setProperty('--hover-color', '#E7ECEF');                
        bodyelt.style.backgroundColor = 'black';
        darkmode.textContent = 'LIGHT'
    }
    else{
        document.documentElement.style.setProperty('--text-color', 'black');        
        document.documentElement.style.setProperty('--background-color', '#A3CEF1');        
        document.documentElement.style.setProperty('--hover-background-color', '#27374D');    
        document.documentElement.style.setProperty('--hover-color', '#E7ECEF');        
        bodyelt.style.backgroundColor = '#A3CEF1';
        darkmode.textContent = 'DARK'
    }
})