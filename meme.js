
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












