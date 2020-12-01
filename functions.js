function init(){
    console.log("Hi. Please hire me xD:")

    const logo = document.querySelectorAll('#Logo path');
    for(let i = 0; i<logo.length; i++){
        console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
    }
    var spy = new Gumshoe('#my-awesome-nav a', {
        offset: 200
    });

    var element = document.querySelector("#S1");
    // smooth scroll to element and align it at the center
    element.scrollIntoView({ behavior: 'smooth', block: 'center'});

    const NavLinks = document.getElementsByClassName("nav-item");
    for(let i = 0; i<NavLinks.length; i++){
        NavLinks[i].addEventListener("click", () => {
            for(let j = 0; j<NavLinks.length; j++){
                NavLinks[j].classList.remove("active");
            }
            NavLinks[i].classList.add("active");
        });
    }
}
init();
