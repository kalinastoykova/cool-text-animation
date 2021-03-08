window.addEventListener("DOMContentLoaded", animateText)

function animateText() {
    //get the text
    let text = document.querySelector("#cool-text");

    //split the text into letters
    let splitText = text.textContent.split("");
    
    //remove the text
    text.textContent = "";

    //put letters in a span and add the animation to them
    splitText.forEach((letter, index) => {
        //create span element and add class and property
        let span = document.createElement("span");
        span.classList.add("text-animation");
        span.style.setProperty("--delay", index);

        //fix for the spaces
        if (letter === " "){
            span.innerHTML = "&nbsp";
        }
        else {
            span.textContent = letter; 
        }

        //append the letters
        text.append(span);
    });
}
