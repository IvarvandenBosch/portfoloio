const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

function dropDown() {
    navbarLinks.classList.toggle('open')
    toggleButton.classList.toggle('open')
}

$(window).on("load", function(){
    $(".loader").fadeOut("slow")
});

const expSpan = document.getElementById('exp-time') 

const getTime = () => {
    let d = new Date();
    let currentYear =  d.getFullYear();
    let yearDifference =  currentYear - 2021


    expSpan.innerText = `${yearDifference} year${yearDifference > 1 ? 's' : ''}`

    console.log(yearDifference)
}

getTime()