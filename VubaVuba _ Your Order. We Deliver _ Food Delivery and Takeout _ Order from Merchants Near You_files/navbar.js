function onOpenMobileMenu() {
    const element = document.getElementById("mobo-nav-menu-id")
    const moboMenuCloseIcon = document.getElementById("mobo-menu-close-icon")
    const body = document.getElementById("app-body")
    element.classList.add('menu-slide-open')
    element.classList.add('mobo-nav-icon-menu-flex')
    element.classList.remove('menu-slide-close')
    element.style.width = "60%"
    moboMenuCloseIcon.style.display = "block"
    // body.classList.add("disable-scroll")
}

function onCloseMobileMenu() {
    const element = document.getElementById("mobo-nav-menu-id")
    const moboMenuCloseIcon = document.getElementById("mobo-menu-close-icon")
    moboMenuCloseIcon.style.display = "none"
    element.classList.add('menu-slide-close')
    element.classList.remove('menu-slide-open')
    element.style.width = "0%"
    setTimeout(() => {
        element.classList.remove('mobo-nav-icon-menu-flex')
        // body.classList.remove("disable-scroll")
    }, 700);
}

let isAdded = false;

// Sticky navbar logics
window.addEventListener("scroll", function() {
    var elementTarget = document.getElementById("slides");
    var stickyMobo = this.document.getElementById("sticky-mobo")
    const stickyLogo = this.document.getElementById("logo-sticky")
    const stickyMoboIcon = this.document.getElementById("mobo-icon-sticky")
    if (!elementTarget || !stickyMobo || !stickyLogo || !stickyMoboIcon) {
        return
    }
    if (window.scrollY > (elementTarget.offsetTop + elementTarget.offsetHeight)) {
        if (!isAdded) {
            stickyMobo.style.height = "3rem"
            stickyMobo.classList.add("sticky-mobo-nav-sticky")
            stickyMobo.classList.add("sticky-mobo-open")
            stickyLogo.style.display = "block"
            stickyMoboIcon.style.display = "block"
            stickyMobo.classList.remove("sticky-mobo-close")
            isAdded = true
        }
    } else {
        if (isAdded) {
            stickyMobo.style.height = 0
            stickyLogo.style.display = "none"
            stickyMoboIcon.style.display = "none"
            stickyMobo.classList.remove("sticky-mobo-open")
            stickyMobo.classList.add("sticky-mobo-close")
            setTimeout(() => {
                stickyMobo.classList.remove("sticky-mobo-nav-sticky")
            }, 700);
            isAdded = false
        }
    }
  });

  // navbar change bg and a colors

let isGreenSet = false

window.addEventListener("scroll", function() {
    const slides = document.getElementById("slides");
    const navbar = document.getElementById("navbar-id");
    const navMenuId = document.getElementById("nav-menu-id");
    const navLogoId = document.getElementById("navbar-logo-id");
    const download = document.getElementById("download")
    const faq = document.getElementById("faq");
    const cities = document.getElementById("cities");
    const moboHeader = document.getElementById("sticky-mobo")
    const moboNavIconSticky = document.getElementById("mobo-icon-sticky")
    if (!slides || !navbar || !navMenuId || !download || !faq || !moboHeader || !moboNavIconSticky) {
        return
    }
    const sumToFaq = download.clientHeight + slides.clientHeight + faq.clientHeight
    const sumToCitiesWeAreIn = sumToFaq + cities.clientHeight
    const isSlidesPassed = (window.scrollY + navbar.clientHeight) > slides.clientHeight
    const sumToFooter = sumToFaq + cities.clientHeight
    const showGreen1 = isSlidesPassed && (window.scrollY + navbar.clientHeight) < download.clientHeight + slides.clientHeight
    const showGreen2 = isSlidesPassed && ((window.scrollY + navbar.clientHeight) > sumToFaq) && ((window.scrollY + navbar.clientHeight) < sumToCitiesWeAreIn)
    if (!isSlidesPassed) {
        navLogoId.classList.remove("show-green-logo-main-navbar")
        navLogoId.classList.remove("show-white-logo-main-navbar")
    }
    if (showGreen1 || showGreen2) {
        if (!isGreenSet) {
            navbar.classList.remove(".white-navbar")
            navLogoId.classList.remove("show-green-logo-main-navbar")
            navbar.classList.add("green-navbar")
            navMenuId.classList.add("nav-menu-white")
            navLogoId.classList.add("show-white-logo-main-navbar")
            isGreenSet = true
        }
    } else {
        if (isGreenSet) {
            navbar.classList.remove("green-navbar")
            navLogoId.classList.remove("show-white-logo-main-navbar")
            navMenuId.classList.remove("nav-menu-white")
            navbar.classList.add(".white-navbar")
            navLogoId.classList.add("show-green-logo-main-navbar")
            isGreenSet = false
        }
    }

    if ((window.scrollY + navbar.clientHeight) > sumToFooter) {
        moboHeader.classList.add("show-green-logo")
        moboHeader.classList.remove("sticky-mobo-nav-green")
        moboHeader.classList.add("sticky-mobo-nav-white")
        moboNavIconSticky.classList.add("mobo-icon-path-green")
    }  else {
        moboNavIconSticky.classList.remove("mobo-icon-path-green")
        moboHeader.classList.remove("sticky-mobo-nav-white")
        moboHeader.classList.remove("show-green-logo")
        moboHeader.classList.add("sticky-mobo-nav-green")
    }
    // if (isSlidesPassed || isFAQPassed) {
    //     console.log("Green");
    // } else {
    //     console.log("White")
    // }
  });

  window.addEventListener('scroll', function() {
    const wrapper = document.getElementById("privacy-wrapper");
    if (!wrapper) return;
    const navbar = document.getElementById("sticky-mobo");
    const moboHeader = document.getElementById("sticky-mobo")
    const moboNavIconSticky = document.getElementById("mobo-icon-sticky")
    if ((window.scrollY + navbar.clientHeight) > wrapper.clientHeight) {
        moboHeader.classList.add("show-green-logo")
        moboHeader.classList.remove("sticky-mobo-nav-green")
        moboHeader.classList.add("sticky-mobo-nav-white")
        moboNavIconSticky.classList.add("mobo-icon-path-green")
    }  else {
        moboNavIconSticky.classList.remove("mobo-icon-path-green")
        moboHeader.classList.remove("sticky-mobo-nav-white")
        moboHeader.classList.remove("show-green-logo")
        moboHeader.classList.add("sticky-mobo-nav-green")
    }
  })

  window.addEventListener('scroll', function() {
    const wrapper = document.getElementById("terms-wrapper");
    if (!wrapper) return;
    const navbar = document.getElementById("sticky-mobo");
    const moboHeader = document.getElementById("sticky-mobo")
    const moboNavIconSticky = document.getElementById("mobo-icon-sticky")
    if ((window.scrollY + navbar.clientHeight) > wrapper.clientHeight) {
        moboHeader.classList.add("show-green-logo")
        moboHeader.classList.remove("sticky-mobo-nav-green")
        moboHeader.classList.add("sticky-mobo-nav-white")
        moboNavIconSticky.classList.add("mobo-icon-path-green")
    }  else {
        moboNavIconSticky.classList.remove("mobo-icon-path-green")
        moboHeader.classList.remove("sticky-mobo-nav-white")
        moboHeader.classList.remove("show-green-logo")
        moboHeader.classList.add("sticky-mobo-nav-green")
    }
  })

  window.addEventListener('scroll', function() {
    const wrapper = document.getElementById("get-in-touch-wrapper");
    if (!wrapper) return;
    const navbar = document.getElementById("sticky-mobo");
    const moboHeader = document.getElementById("sticky-mobo")
    const moboNavIconSticky = document.getElementById("mobo-icon-sticky")
    if ((window.scrollY + navbar.clientHeight) > wrapper.clientHeight) {
        moboHeader.classList.add("show-green-logo")
        moboHeader.classList.remove("sticky-mobo-nav-green")
        moboHeader.classList.add("sticky-mobo-nav-white")
        moboNavIconSticky.classList.add("mobo-icon-path-green")
    }  else {
        moboNavIconSticky.classList.remove("mobo-icon-path-green")
        moboHeader.classList.remove("sticky-mobo-nav-white")
        moboHeader.classList.remove("show-green-logo")
        moboHeader.classList.add("sticky-mobo-nav-green")
    }
  })