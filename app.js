let toggleButton = document.getElementsByClassName('toggle-button')[0]
let navbarLinks = document.getElementsByClassName('navbar-links')[0]

function dropDown() {
    navbarLinks.classList.toggle('open')
    toggleButton.classList.toggle('open')
}

window.addEventListener("scroll", function(){
    let offset = window.pageYOffset;
    if (offset > 900)
    {
        document.getElementById('nav').style.background = "var(--background-color2)"
        document.getElementById('nav').style.boxShadow = "none"
    }
    else if (offset < 900)
    {
        document.getElementById('nav').style.background = "var(--background-color1)"
        document.getElementById('nav').style.boxShadow = "10px 14px 30px var(--background-color1-light);"
    }
})

function githubRedirect(){
    location.href = 'https://github.com/ivarvandenBosch'
}

let notif = document.getElementById('notif')

function discordCopy(){
  var copyText = document.getElementById("text");

  copyText.select();

  //Mobile 
  copyText.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(copyText.value);
  notif.classList.add('animation')
  setTimeout(function(){ 
    notif.classList.remove('animation')
   }, 2000)
}

function scrollDown()
{
    window.scrollTo(0, 4000);
}

let btn = document.getElementById('btn')

btn.addEventListener("click", function(){
    window.scrollTo(0, 980);
})

let arrow = document.getElementById('arrow')
let contact = document.getElementById('contact')

$(window).on("load", function(){
    $(".loader").fadeOut("slow")
});