/*
3. ստեղծում եք ֆունկցիա, որը կստանա երկու արգումենտ ՕՐ և ԱՄԻՍ, ըստ դրա գեներացնում եք հետհաշվարկի ֆունկցիա թե քանի օր, ժամ, րոպե ու վայրկյան ա մնացել,
որ նշված դեյթան հասնի, օրինակ եթե նշեք 12, 31, պետք ա էս օրվանից սկսած մինչև դեկտեմբերի 31ը հետհաշվարկ գնա հետևյալ ֆորմատով

ՕՐ, ԺԱՄ, ՐՈՊԵ, ՎԱՅՐԿՅԱՆ, սա պետք ա ֆռոնտում դնեք ու դինամիկ, այսինքն ֆռոնտում ի սկզբանե ոչինչ պետք ա չլինի բացառությամբ 1 հատ դիվի, որի վրա կարող եք հավաքել մնացած լոգիկան

ֆունկցիան պետք ա նաև ունենա ստուգում, որ եթե եկել հասել ենք էդ օրվան, ապա մինուսով չշարունակի իրա գործողությունը, այսինքն կամ սաղ 0ներ դնի, կամ էլ գրի, որ վերջացել ա */
"use strict";
const d = document.querySelector("#days");
const h = document.querySelector("#hours");
const m = document.querySelector("#minutes");
const s = document.querySelector("#seconds");
const body = document.querySelector("body");
const timeBox = document.querySelector(".timeBox");
const header = document.querySelector("h1");



let date = new Date('1 1 2023 00:00:00');
function count (){
    let now = new Date();
    let newYear = date - now;
   
    let days = `${Math.floor(newYear / 1000 / 60 / 60 / 24)}`;   
    let hours = `${Math.floor(newYear / 1000 / 60 / 60) % 24}`;
    let minutes = `${Math.floor(newYear / 1000 / 60) % 60}`;
    let seconds = `${Math.floor(newYear/ 1000 ) % 60}`;

    if(newYear < 0){
        header.style.display = "none";              
        timeBox.style.color = "white";   
        timeBox.style.fontSize = "40px";      
        timeBox.style.marginTop = "150px";
        timeBox.style.marginRight = "50px";
        timeBox.innerText = 'Happy New Year !!!';
    } else{
        d.innerText = days;
        h.innerText = hours;
        m.innerText = minutes;
        s.innerText = seconds;
    }   
}
count();
setInterval(count, 1000);

