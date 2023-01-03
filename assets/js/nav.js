const menuBtn = document.querySelector('.menu-toggle');
const sider = document.querySelector('.sidebar-panel');
const viewWrapper = document.querySelector('.view-wrapper')
const dropdownTrigger = document.querySelector('.dropdown-trigger')

let menuOpen = false;
let dropdown= false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        sider.classList.add('active');
        viewWrapper.classList.add('is-pushed-full');
        menuOpen=true;  
    }
    else {
        sider.classList.remove('active');
        viewWrapper.classList.remove('is-pushed-full');
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