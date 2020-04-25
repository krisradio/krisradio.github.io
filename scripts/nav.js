/* nav 
 * Functionality to show/hide the nav pane. 
 * Params: none.
 * Returns: none. 
 * Originally written by the mdBook team. 
 * Source: https://github.com/rust-lang/mdBook/blob/master/src/theme/book.js */
(function nav() {
    var html = document.querySelector("html");
    var main = document.getElementById("main");
    var nav = document.getElementsByTagName("nav")[0];
    var navLinks = document.querySelectorAll('nav a');
    var navToggleButton = document.getElementById("nav-toggle");
    
    function shownav() {
        html.classList.remove('nav-hidden')
        html.classList.add('nav-visible');
        nav.style.transform = "translateX(0px)";
        main.style.marginLeft = "300px";
        Array.from(navLinks).forEach(function (link) {
            link.setAttribute('tabIndex', 0);
        });
        navToggleButton.setAttribute('aria-expanded', true);
        nav.setAttribute('aria-hidden', false);
        try { sessionStorage.setItem('navpane', 'visible'); } catch (e) { }
    }

    function hidenav() {
        html.classList.remove('nav-visible')
        html.classList.add('nav-hidden');
        nav.style.transform = "translateX(-300px)";
        main.style.marginLeft = "0px";
        Array.from(navLinks).forEach(function (link) {
            link.setAttribute('tabIndex', -1);
        });
        navToggleButton.setAttribute('aria-expanded', false);
        nav.setAttribute('aria-hidden', true);
        try { sessionStorage.setItem('navpane', 'hidden'); } catch (e) { }
    }

    // Toggle nav
    navToggleButton.addEventListener('click', function navToggle() {
        if (html.classList.contains("nav-hidden")) {
            shownav();
        } else if (html.classList.contains("nav-visible")) {
            hidenav();
        } else {
            if (getComputedStyle(nav)['transform'] === 'none') {
                hidenav();
            } else {
                shownav();
            }
        }
    });

    /* Zero transition times to maintain hidden/shown nav pane from session data,
     * with no transition times */
    nav.style.transition = "transform 0s";
    main.style.transition = "margin 0s";

    if (sessionStorage.getItem('navpane') == 'hidden') {
        hidenav();
    } else {
        shownav();
    }
    
    /* Set transition times after menu has been shown/hid based on session data */
    setTimeout(function setTransitionTimes() {
        nav.style.transition = "transform 0.3s";
        main.style.transition = "margin 0.3s";
    }, 10);
})();