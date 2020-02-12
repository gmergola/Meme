// var values = document.getElementById("frm1");
// var button = document.getElementById("button");
// function showFunction(){
//     document.getElementById("thememe").innerText = values[1].value;
//     document.getElementById("textagain").innerText = values[2].value;
//     document.getElementById('photo').innerHTML = '<img src="'+ document.getElementById('theimglink').value +'" alt="Image" + width= "500" height= "400" + />';
//     event.preventDefault();
//     button.addEventListener("submit", onclick());
// }
// button.addEventListener('click', function(){
//     values.reset();
// });

// const form = document.querySecector('form');
// const topText = form.querySelector('#textontop');
// const bottomText = form.querySelector('#textonbottom');
// const URL = form.querySelector('#theimglink');
// const button = form.querySelector('#button');
// const holder = document.querySelector('.memes');

// const allTheMemes = holder.querySelector('.allthememes')

// form.addEventListener("submit", function(event){
//     event.preventDefault();

//     const img = new Image();
//     img.src = URL.value;

//     const meme = document.createElement('div');
//     meme.classList.add('meme');
    
//     const header = document.createElement('span');
//     header.classList.add('header-text');
//     header.textContent = topText.value;
//     meme.appendChild(header);

//     const footer = document.createElement('span');
//     footer.classList.add('footer-text');
//     footer.textContent = bottomText.value;
//     meme.appendChild(footer);

//     meme.appendChild(img);
//     holder.appendChild(meme);
//     form.reset();

// });






var values = document.getElementById("frm1");
        let button = document.getElementById("button");
        function showFunction(){
            event.preventDefault();
            document.getElementById("thememe").innerText = values[1].value;
            document.getElementById("textagain").innerText = values[2].value;
            document.getElementById('photo').innerHTML = '<img src="'+ document.getElementById('imglink').value +'" alt="Image" + width= "500" height= "400" + />';
            button.addEventListener("submit", onclick());
        }
        button.addEventListener('click', function(){
            values.reset();
        });












