const sections = document.querySelectorAll('.all > section');

sections.forEach(section => {
    const title = section.querySelector('button'); 
    const gallery = section.querySelector('.gallery'); 
    const container = section.querySelector('.container'); 
    const about = section.querySelector('.about');

    if (title) {
        title.addEventListener('click', () => {
            sections.forEach(otherSection => {
                if (otherSection !== section) {
                    otherSection.classList.remove('expand');
                    otherSection.querySelector('.gallery').style.display = "none";
                    otherSection.querySelector('.container').classList.remove('expands');
                    otherSection.querySelector('button').textContent = 'VEZI CAINI'; 
                    otherSection.querySelector('.about').classList.remove('about-on');
                }
            });

            section.classList.toggle('expand');
            if (section.classList.contains('expand')) {
                gallery.style.display = "block";
                title.textContent = 'INCHIDE GALERIE'; // Modifică textul butonului la expand
                container.classList.add('expands');
                section.scrollIntoView({ behavior: "smooth", block: "start" });
                about.classList.add('about-on');
            } else {
                gallery.style.display = "none";
                title.textContent = 'VEZI CAINI'; 
                about.classList.remove('about-on');
            }
        });
    }
});



let backBtns = document.querySelectorAll(".btn-left");
let nextBtns = document.querySelectorAll(".btn-right");

backBtns.forEach(backBtn => {
    backBtn.addEventListener("click", () =>{
        let galleryContainer = backBtn.closest(".gallery");
        let carousel = galleryContainer.querySelector(".carosel");
            galleryContainer.style.scrollBehavior = "smooth";
            carousel.scrollLeft -= 900;
    });
});

nextBtns.forEach(nextBtn => {
    nextBtn.addEventListener("click", () =>{
        let galleryContainer = nextBtn.closest(".gallery");
        let carousel = galleryContainer.querySelector(".carosel");
            galleryContainer.style.scrollBehavior = "smooth";
            carousel.scrollLeft += 900;
    });
});