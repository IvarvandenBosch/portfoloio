let toggleButton = document.getElementsByClassName('toggle-button')[0]
let navbarLinks = document.getElementsByClassName('navbar-links')[0]

// Amount of projects displayed
const projectAmount = 3

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

const notif = document.getElementById('notif')

function discordCopy(){
  const copyText = document.getElementById("text");

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

const buttons = document.querySelectorAll('.button-ripple')

buttons.forEach(btn => {
    btn.addEventListener('click', function(e) {
        let x = e.pageX - e.currentTarget.offsetLeft;
        let y = e.pageY - e.currentTarget.offsetTop;
        console.log(x, y)

        let ripples = document.createElement('span');
        ripples.classList.add("ripple")

        ripples.style.left = x + 'px'
        ripples.style.top = y + 'px'
        
        this.appendChild(ripples)

        setTimeout(() => {  
            ripples.remove()
        },700)
    })
});

const projectContainer = document.querySelector(".projects")

async function fetchData() {
    try {
      const response = await fetch("./projects.json");
      const data = await response.json();
      displayProjects(data);
    } catch (error) {
      console.error(error);
    }
  }
  

  function displayProjects(projects) {
    const projectContainer = document.querySelector(".projects");
    const topProjects = projects.slice(0, projectAmount);
    console.log(topProjects)
    
    topProjects.forEach((proj, i) => { 
    const currentProject = projects[i];
  
      // Create the card element
      const card = document.createElement("div");
      card.classList.add("card");
      
      // Add the project title
      const title = document.createElement("h4");
      title.classList.add("project-title");
      title.textContent = currentProject.title;
      card.appendChild(title);
      
      // Add the project description
      const description = document.createElement("p");
      description.classList.add("text");
      description.textContent = currentProject.description + " " + i;
      card.appendChild(description);
      
      // Add the tooltip element
      const section = document.createElement("div")
      section.classList.add("gap")

      if (currentProject.github === "none") {
        const tooltip = document.createElement("div");
        tooltip.classList.add("tooltip");
        tooltip.classList.add("disabled");
        tooltip.textContent = "Github link";
  
        // Add the tooltip text element
        const tooltipText = document.createElement("span");
        tooltipText.classList.add("tooltiptext");
        tooltipText.textContent = "This repository is private";
        tooltip.appendChild(tooltipText);
  
        section.appendChild(tooltip);
      } else {
        const githubLink = document.createElement("a");
        githubLink.href = currentProject.github;
        githubLink.textContent = "Github link";
        section.appendChild(githubLink);
      }
      
      // Add the website link
      if (currentProject.website === "none") { 
        const tooltip = document.createElement("div");
        tooltip.classList.add("tooltip");
        tooltip.classList.add("disabled");
        tooltip.textContent = "Website link";
  
        // Add the tooltip text element
        const tooltipText = document.createElement("span");
        tooltipText.classList.add("tooltiptext");
        tooltipText.textContent = "This website doesn't exist";
        tooltip.appendChild(tooltipText);
        section.appendChild(tooltip);
      } else {
        const websiteLink = document.createElement("a");
        websiteLink.href = currentProject.website;
        websiteLink.textContent = "Website link";
        section.appendChild(websiteLink);
      }
      
      card.append(section)
      
      projectContainer.appendChild(card);
   })
      
  }
  
  fetchData();
  
  const emailInput = document.querySelector("#input-email");
  const emailRegx = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  document.querySelector("#submit-email").addEventListener('click', (e) => {
    e.preventDefault();
    if (emailInput.value === "" || !emailRegx.test(emailInput.value)) {
      emailInput.style.border = 'red 2px solid'
      emailInput.style.backgroundColor = "#d420207e"
      return;
    } else {
      location.href = "contact.html";
    }
    localStorage.setItem('email', `${emailInput.value}`);
  });

  function resetInputStyle() {
    emailInput.style.border = '#fff 2px solid'
    emailInput.style.backgroundColor = "transparent"
  }