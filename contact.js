let toggleButton = document.getElementsByClassName('toggle-button')[0]
let navbarLinks = document.getElementsByClassName('navbar-links')[0]


// setemail
const email = localStorage.getItem("email")
const emailInput = document.querySelector("#input-email")
emailInput.value = email
  

function dropDown() {
    navbarLinks.classList.toggle('open')
    toggleButton.classList.toggle('open')
}

$(window).on("load", function(){
    $(".loader").fadeOut("slow")
});


