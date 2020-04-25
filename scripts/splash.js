/* splash 
 * Functionality to fade in subsection descriptions. 
 * Params: none.
 * Returns: none. 
 */
(function splash() {
    var html = document.querySelector("html");
    var main = document.getElementById("main");
    var subs = document.getElementsByClassName("sub");
    
    for (let sub of subs) {
        var h = sub.getElementsByTagName("h3")[0];
        var spanHeight = sub.getElementsByTagName("span")[0].offsetHeight + "px";;
        
        h.style.top = spanHeight;
        
        sub.addEventListener('mouseenter', function splashSpan() {
            var span = this.getElementsByTagName("span")[0];
            span.style.opacity = "1";
            
            var spanHeight = span.offsetHeight + "px";
            var h = this.getElementsByTagName("h3")[0];
            h.style.top = "0px";
        });
        
        sub.addEventListener('mouseleave', function unsplash() {
            var span = this.getElementsByTagName("span")[0];
            span.style.opacity = "0";
            
            var spanHeight = span.offsetHeight + "px";
            var h = this.getElementsByTagName("h3")[0];
            h.style.top = spanHeight;
        });
    }
})();