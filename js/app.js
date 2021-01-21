const navbarLinks = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");
let activeSection = document.getElementsByClassName("active");



function createNavLinks(){
    for (let item of sections){
        let section = document.createElement("li");
        section.className = "menu__link";
        section.innerText = item.getAttribute('data-nav');
        section.addEventListener('click',function(){
            item.scrollIntoView({behavior: "smooth"});
            navStuff(item, section);
             
        });

        navbarLinks.appendChild(section);
    }
}
createNavLinks();
