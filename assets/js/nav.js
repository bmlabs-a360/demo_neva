const menuBtn = document.querySelector('.menu-toggle');
const sider = document.querySelector('.sidebar-panel');
const viewWrapper = document.querySelector('.view-wrapper')
let menuOpen = false;
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