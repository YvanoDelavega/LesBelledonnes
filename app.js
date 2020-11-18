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