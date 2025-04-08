window.addEventListener("scroll", function() {
    var form = document.getElementById("contactForm");
    var triggerElement = document.querySelector(".spacer");

    var rect = triggerElement.getBoundingClientRect();
    var windowHeight = window.innerHeight;

    if (rect.top < windowHeight - 200) { 
        form.classList.add("visible");
    }
}
);
function popup(){
    /*document.getElementById('popuptext').innerHTML="Diese Zertifikate sind noch nicht sichtbar";*/
    window.alert("Diese Zertifikate sind noch nicht sichtbar");
} 
function popup2(){  
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        document.getElementById("popuptext2").innerHTML = "Bite alle Felder ausfüllen";
        alert("Bite alle Felder ausfüllen"); 
} else { 
    document.getElementById("popuptext2").innerHTML = ""; 
    document.getElementById("contactform").submit(); 
}
}