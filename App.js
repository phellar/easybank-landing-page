document.querySelector('.mobile-menu').addEventListener('click', ()=>{
    const mobileNav = document.querySelector(".mobile-menu-item");

        mobileNav.style.display = (mobileNav.style.display === "none" || mobileNav.style.display === "") ? "block" : "none";
})