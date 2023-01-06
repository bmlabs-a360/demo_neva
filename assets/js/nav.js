const menuBtn = document.querySelector('.menu-toggle');
const sider = document.querySelector('.sidebar-panel');
const viewWrapper = document.querySelector('.view-wrapper')
const dropdownTrigger = document.querySelector('.dropdown-trigger')
const closeBtn = document.querySelector('.close')
const colorNav =document.querySelector('.color-nav')
let menuOpen = false;
let dropdown= false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        sider.classList.add('active');
        colorNav.classList.add('active');
        viewWrapper.classList.add('is-pushed-full');
        menuOpen=true;  
    }
    else {
        sider.classList.remove('active');
        viewWrapper.classList.remove('is-pushed-full');
        colorNav.classList.remove('active');
        menuOpen=false;
    }

  });
  
  dropdownTrigger.addEventListener('click', () => {
    if (!dropdown) {
    dropdownTrigger.classList.add('is-active');
    dropdown= true;
} else {
    dropdownTrigger.classList.remove('is-active');
    dropdown=false;
}
  });
closeBtn.addEventListener('click', () => {
    colorNav.classList.remove('active');
    sider.classList.remove('active');
    viewWrapper.classList.remove('is-pushed-full');
    menuOpen=false;

});
  