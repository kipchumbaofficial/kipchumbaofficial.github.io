const tablinks = document.getElementsByClassName("tab-links")
const tabcontents = document.getElementsByClassName("tab-contents")

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

const sidemenu = document.getElementById("side-menu");

function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-200px"
}


///For contact form
const scriptURL = 'https://script.google.com/macros/s/AKfycbxT2jdIXru5N89YCPzt7rVAUEX6w5BAa0Ugw2_gut05hxy7-eGdMy0-yGc5D7x1O06f/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})