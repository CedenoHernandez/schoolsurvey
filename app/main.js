const popup = document.querySelector('.modal');
const button = document.querySelector('button');
const form = document.querySelector('#survey-form');

//setTimeout(location.reload.bind(location), 160000);

form.addEventListener("submit", function(e){
    //alert('Thank you for your submission');
    popup.style.display = "block";
    e.preventDefault();
    setTimeout(function(){window.location.reload(true);},7000)
})
