const navbarList = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");

// create dynamic nav bar links for each section
function createNavLinks(){
    for (let section of sections){
        let navLink = document.createElement("li");
        navLink.className = "menu__link";
        navLink.id = section.id + "-nav";
        navLink.innerText = section.getAttribute('data-nav');
        navLink.addEventListener('click',function(){
            section.scrollIntoView({behavior: "smooth"})

        });

        navbarList.appendChild(navLink);
    }
}

createNavLinks();


// checks if section is in viewport
function inViewPort(section){
    const bounding = section.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


// sets section and corisponding nav bar link to active when in viewport
function setActive(){
    for (let section of sections){
        const navLink = document.getElementById(section.id + "-nav");
        if(inViewPort(section)){
            section.classList.add('this-section-active');
            navLink.classList.add('nav-active');
        }else {
            section.classList.remove('this-section-active');
            navLink.classList.remove('nav-active');
        
        }
    }

}
    

// every scroll checks what section is in viewport
document.addEventListener('scroll', function(){
    setActive();
});