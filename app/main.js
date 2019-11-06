const popup = document.querySelector('.modal');
const form = document.querySelector('#survey-form');

// allows confirmation to appear after all fields have been entered correctly
form.addEventListener("submit", function(e){
    popup.style.display = "block";
    e.preventDefault();
    setTimeout(function(){window.location.reload(true);},7000) //gives wait time for message before page reload
})
