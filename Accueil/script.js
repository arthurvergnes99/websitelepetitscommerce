"use strict";

function tourneImage(){

    let monimage= document.querySelector('#carousel').getAttribute('src');

   switch(monimage){
       case'images/psg1.jpeg':
           document.querySelector('#carousel').src='images/psg2.jpeg';
           break;
       case'images/psg2.jpeg':
           document.querySelector('#carousel').src='images/psg3.webp';
           break;
       case'images/psg3.webp':
           document.querySelector('#carousel').src='images/psg4.webp';
           break;
       case'images/psg4.webp':
           document.querySelector('#carousel').src='images/psg5.avif';
           break;
       case'images/psg5.avif':
           document.querySelector('#carousel').src='images/psg1.jpeg';
           break;
   }
}
let bt=document.querySelector('#carousel');
bt.addEventListener('click',tourneImage);
