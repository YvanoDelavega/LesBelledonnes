const ratio = 0.1
var options = {
  root: null,
  rootMargin: "0px",
  threshold: ratio,
};
// //www.grafikart.fr/tutoriels/scroll-reveal-1176

const handleIntersect = (entries, observer) => {
  entries.forEach((entry) => {
    console.log(entry.intersectionRatio);
    if (entry.intersectionRatio > ratio) {
        entry.target.classList.add('reveal-visible');
      console.log("visible");
      //observer.unobserve(entry.target);
    } else {
        entry.target.classList.remove("reveal-visible");
      console.log("invisible");
    }
  });
};

var observer = new IntersectionObserver(handleIntersect, options);
//document.querySelectorAll('[class*="reveal-"]').forEach(r => observer.observe(r));
 document.querySelectorAll(".reveal").forEach((r) => observer.observe(r));;




var callback = function (entries, observer) {
    console.log("fdlfl");
//   entries.forEach((entry) => {
//     // chaque élément de entries correspond à une variation
//     // d'intersection pour un des éléments cible:
//     //   entry.boundingClientRect
//     //   entry.intersectionRatio
//     //   entry.intersectionRect
//     //   entry.isIntersecting
//     //   entry.rootBounds
//     //   entry.target
//     //   entry.time
//   });
};


// générer date
        $('#year').text(new Date().getFullYear());

        // scrollspy
        $('body').scrollspy({ target: '#main-nav' });

        // When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
        // https://www.w3schools.com/howto/howto_js_navbar_shrink_scroll.asp
        window.onscroll = function () { scrollFunction() };

        function scrollFunction() {
            if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
                document.getElementById("main-nav").style.padding = "0px 10px";
                // https://www.alsacreations.com/article/lire/1500-matchmedia-javascript-media-queries.html
                if (window.matchMedia("(max-width: 500px)").matches) {
                    document.getElementById("logo").style.fontSize = "25px";
                    document.getElementById("img-logo").style.width = "80px";
                } else {
                    document.getElementById("logo").style.fontSize = "25px";
                    document.getElementById("img-logo").style.width = "100px";
                }

            } else {
                document.getElementById("main-nav").style.padding = "15px 10px";

                if (window.matchMedia("(max-width: 500px)").matches) {
                    document.getElementById("logo").style.fontSize = "30px";
                    document.getElementById("img-logo").style.width = "80px";
                } else {
                    document.getElementById("logo").style.fontSize = "40px";
                    document.getElementById("img-logo").style.width = "150px";
                }
            }
        } 