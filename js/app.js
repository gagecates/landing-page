const navbarLinks = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");

function createNavLinks(){
    for (let section of sections){
        let navLink = document.createElement("li");
        navLink.className = section.className;
        navLink.innerText = section.getAttribute('data-nav');
        navLink.addEventListener('click',function(){
            section.scrollIntoView({behavior: "smooth"});
        });

        navbarLinks.appendChild(navLink);
    }
}
createNavLinks();

    
function inViewPort(){
    const bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
    
function setActive(){
    for (let section of sections){
        let navLink = document.getElementBy
        if(inViewPort(section)){
            section.classList.add('this-section-active');
        }else {
            section.classList.remove('this-section-active');
        
        });
    
    
document.addEventListener('scroll', function(){
    setActive();
});
    
