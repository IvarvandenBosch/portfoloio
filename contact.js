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


const messageInput = document.querySelector("#ta-message");
const nameInput = document.querySelector("#input-name");
const subjectInput = document.querySelector("#input-subject");
const validityText = document.querySelector(".form-valididity")

function validateEmail() {
    // Email Regx
    const emailRegx = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
   
    // Check for no empty values
    if (messageInput.value === "") {
        messageInput.style.outline = 'red 1.5px solid'
        messageInput.style.backgroundColor = "#d420207e"
    }
    
    if (nameInput.value === "") {
        nameInput.style.outline = 'red 1.5px solid'
        nameInput.style.backgroundColor = "#d420207e"
    }
    
    if (subjectInput.value === "") {
        subjectInput.style.outline = 'red 1.5px solid'
        subjectInput.style.backgroundColor = "#d420207e"
    } 
    
    
    if (!emailRegx.test(emailInput.value)) {
      emailInput.style.outline = 'red 1.5px solid'
      emailInput.style.backgroundColor = "#d420207e"
    }

    // Cancel form submission if values are invalid
    if (subjectInput.value === "" || nameInput.value === "" || messageInput.value === "" || !emailRegx.test(emailInput.value)) {
        validityText.textContent = "Some fields are empty or invalid."
        return false
    }

    return true; // Allow form submission
}

function resetFormStyle() {
    messageInput.style.outline = 'none'
    messageInput.style.backgroundColor = "#fff"

    nameInput.style.outline = 'none'
    nameInput.style.backgroundColor = "#fff"

    subjectInput.style.outline = 'none'
    subjectInput.style.backgroundColor = "#fff"

    emailInput.style.outline = 'none'
    emailInput.style.backgroundColor = "#fff"
    validityText.textContent = ""
}