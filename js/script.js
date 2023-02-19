let fonction = document.querySelector("#fonction");
let fonction2 = document.querySelector(".fonction");
let down = document.querySelector('.down');
let btnLi = document.querySelector('.btn-li');
let plusWrapper = document.querySelector(".plus-wrapper");
let bars = document.querySelector('#bars');
let navbarCenter = document.querySelector('.navbarCenter')

    fonction.addEventListener('click',()=>{
        fonction2.classList.toggle('fonction-toggle');
        down.classList.toggle('fa-angle-up')
    });

    btnLi.addEventListener('click',()=>{

        plusWrapper.classList.toggle('plus-up')
    })

    bars.addEventListener('click',()=>{
        const nav = navbarCenter.classList.toggle('bars-up')
    })

