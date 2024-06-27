/* Butonul pentru donate si contact on and of */
let donateBtn = document.querySelector("#donate");
let adoptBtn = document.querySelector("#adopt");

let ibanVisible = false;
let contactNr = false;

donateBtn.addEventListener("click", () =>{
    donateBtn.textContent = ibanVisible ? "DONATE" : "IBAN0086543249594432";
    ibanVisible = !ibanVisible;
});
adoptBtn.addEventListener("click", () =>{
    adoptBtn.textContent = contactNr ? "ADOPT" : "CONTACT: 07********" ;
    contactNr = !contactNr;
});

/* Scroll galeria photo*/
let carousel = document.querySelector(".carosel");
let backBtn = document.getElementById("left");
let nextBtn = document.getElementById("right");
let scrollBtn = document.querySelector(".gallery1");

carousel.addEventListener ("wheel", (e) => {
    e.preventDefault();
    carousel.scrollLeft += e.deltaY;
    carousel.style.scrollBehavior = "auto";
});
nextBtn.addEventListener("click", () =>{
    scrollBtn.style.scrollBehavior = "smooth";
    carousel.scrollLeft += 900;
});
backBtn.addEventListener("click", () =>{
    scrollBtn.style.scrollBehavior = "smooth";
    carousel.scrollLeft -= 900;
});




