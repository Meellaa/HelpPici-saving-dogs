document.addEventListener('DOMContentLoaded', (event) => {
    generateAsociatii();
    attachEventListeners();
});

const asociatii = [
{
    id: 'asociatia-silvania',
    name: 'Asociatia Silvania',
    location: 'Simleu Silvaniei, Salaj',
    phonenumber: '0751169602',
    numberOfDogs: 500,
    image: '/Poze/240_F_451518224_QBgvrmipPTfxfjowNUTVoSQYgRrUUze3.jpg',
    dogs: [
        {
            id: 11,
            name: 'Caffi',
            age: '2 ani',
            gender: 'mascul',
            durationInShelter: '1 an',
            image: '/LibrarieAsociatii/pozelibrarie/alberto-bigoni-m_9PXk-07f8-unsplash.jpg'
          },
          {
            id:12,
            name: 'Sky',
            age: '5 ani',
            gender:'mascul',
            durationInShelter : 2,
            image: '/LibrarieAsociatii/pozelibrarie/alex-person-Mh9nu3mwvs4-unsplash.jpg'
          },
           {
            id: 13,
            name: 'Shy',
            age: '5 ani',
            gender: 'mascul',
            durationInShelter: '1 an',
            image: '/LibrarieAsociatii/pozelibrarie/brad-starkey-ipyXCQu2Qwk-unsplash.jpg'
          }, {
            id: 14,
            name: 'Caffi',
            age: '2 ani',
            gender: 'mascul',
            durationInShelter: '1 an',
            image: '/LibrarieAsociatii/pozelibrarie/alberto-bigoni-m_9PXk-07f8-unsplash.jpg'
          }, {
            id: 15,
            name: 'Caffi',
            age: '2 ani',
            gender: 'mascul',
            durationInShelter: '1 an',
            image: '/LibrarieAsociatii/pozelibrarie/alberto-bigoni-m_9PXk-07f8-unsplash.jpg'
          }, {
            id: 16,
            name: 'Caffi',
            age: '2 ani',
            gender: 'mascul',
            durationInShelter: '1 an',
            image: '/LibrarieAsociatii/pozelibrarie/alberto-bigoni-m_9PXk-07f8-unsplash.jpg'
          },
        ],
    about: 'Asociatia Silvania orem ipsum dolor sit amet consectetur adipisicing elit. Numquam repellendus placeat odio necessitatibus quod ea possimus eos autem culpa eveniet voluptas debitis, optio voluptatum, nemo nisi deserunt fuga odit praesentium?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam neque dolor accusantium? Dignissimos reprehenderit nihil dolore! Accusamus nulla deleniti, dolorum debitis corrupti laudantium ducimus labore, ut nemo facilis, ad voluptas.'    
},
{
    id: 'asociatia-oradea',
    name:'Asociatia Oradea ',
    location: 'Oradea, Bihor',
    numberOfDogs:5000,
    image: '/Poze/240_F_451518224_QBgvrmipPTfxfjowNUTVoSQYgRrUUze3.jpg',
    dogs: [
        {
            id:21,
            name: 'Micuta',
            age: 2,
            gender: 'femela',
            durationInShelter : 5, 
            image: '/LibrarieAsociatii/pozelibrarie/robert-koorenny-rhH4DnfBwJo-unsplash.jpg'
        },
        {
            id:22,
            name: 'Sky',
            age: '5 ani',
            gender:'mascul',
            durationInShelter : 2,
            image: '/LibrarieAsociatii/pozelibrarie/alex-person-Mh9nu3mwvs4-unsplash.jpg'
        }
    ],
    about: 'Asociatia Oradea orem ipsum dolor sit amet consectetur adipisicing elit. Numquam repellendus placeat odio necessitatibus quod ea possimus eos autem culpa eveniet voluptas debitis, optio voluptatum, nemo nisi deserunt fuga odit praesentium?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam neque dolor accusantium? Dignissimos reprehenderit nihil dolore! Accusamus nulla deleniti, dolorum debitis corrupti laudantium ducimus labore, ut nemo facilis, ad voluptas.' 
},
{
    id: 'asociatia-silvaniaaa',
    name: 'Asociatia Silvania',
    location: 'Simleu Silvaniei, Salaj',
    phonenumber: '0751169602',
    numberOfDogs: 500,
    image: '/Poze/240_F_451518224_QBgvrmipPTfxfjowNUTVoSQYgRrUUze3.jpg',
    dogs: [
        {
            id: 31,
            name: 'Caffi',
            age: '2 ani',
            gender: 'mascul',
            durationInShelter: '1 an',
            image: '/LibrarieAsociatii/pozelibrarie/alberto-bigoni-m_9PXk-07f8-unsplash.jpg'
          },
          {
            id:32,
            name: 'Sky',
            age: '5 ani',
            gender:'mascul',
            durationInShelter : 2,
            image: '/LibrarieAsociatii/pozelibrarie/alex-person-Mh9nu3mwvs4-unsplash.jpg'
          },
           {
            id: 33,
            name: 'Shy',
            age: '5 ani',
            gender: 'mascul',
            durationInShelter: '1 an',
            image: '/LibrarieAsociatii/pozelibrarie/brad-starkey-ipyXCQu2Qwk-unsplash.jpg'
          }, {
            id: 34,
            name: 'Caffi',
            age: '2 ani',
            gender: 'mascul',
            durationInShelter: '1 an',
            image: '/LibrarieAsociatii/pozelibrarie/alberto-bigoni-m_9PXk-07f8-unsplash.jpg'
          }, {
            id: 35,
            name: 'Caffi',
            age: '2 ani',
            gender: 'mascul',
            durationInShelter: '1 an',
            image: '/LibrarieAsociatii/pozelibrarie/alberto-bigoni-m_9PXk-07f8-unsplash.jpg'
          }, {
            id: 36,
            name: 'Caffi',
            age: '2 ani',
            gender: 'mascul',
            durationInShelter: '1 an',
            image: '/LibrarieAsociatii/pozelibrarie/alberto-bigoni-m_9PXk-07f8-unsplash.jpg'
          },
        ],
    about: 'Asociatia Silvania orem ipsum dolor sit amet consectetur adipisicing elit. Numquam repellendus placeat odio necessitatibus quod ea possimus eos autem culpa eveniet voluptas debitis, optio voluptatum, nemo nisi deserunt fuga odit praesentium?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam neque dolor accusantium? Dignissimos reprehenderit nihil dolore! Accusamus nulla deleniti, dolorum debitis corrupti laudantium ducimus labore, ut nemo facilis, ad voluptas.'    
},
{
    id: 'asociaascasctia-silvania',
    name: 'Asociatia Silvania',
    location: 'Simleu Silvaniei, Salaj',
    phonenumber: '0751169602',
    numberOfDogs: 500,
    image: '/Poze/240_F_451518224_QBgvrmipPTfxfjowNUTVoSQYgRrUUze3.jpg',
    dogs: [
        {
            id: 41,
            name: 'Caffi',
            age: '2 ani',
            gender: 'mascul',
            durationInShelter: '1 an',
            image: '/LibrarieAsociatii/pozelibrarie/alberto-bigoni-m_9PXk-07f8-unsplash.jpg'
          },
          {
            id:42,
            name: 'Sky',
            age: '5 ani',
            gender:'mascul',
            durationInShelter : 2,
            image: '/LibrarieAsociatii/pozelibrarie/alex-person-Mh9nu3mwvs4-unsplash.jpg'
          },
           {
            id: 43,
            name: 'Shy',
            age: '5 ani',
            gender: 'mascul',
            durationInShelter: '1 an',
            image: '/LibrarieAsociatii/pozelibrarie/brad-starkey-ipyXCQu2Qwk-unsplash.jpg'
          }, {
            id: 44,
            name: 'Caffi',
            age: '2 ani',
            gender: 'mascul',
            durationInShelter: '1 an',
            image: '/LibrarieAsociatii/pozelibrarie/alberto-bigoni-m_9PXk-07f8-unsplash.jpg'
          }, {
            id: 45,
            name: 'Caffi',
            age: '2 ani',
            gender: 'mascul',
            durationInShelter: '1 an',
            image: '/LibrarieAsociatii/pozelibrarie/alberto-bigoni-m_9PXk-07f8-unsplash.jpg'
          }, {
            id: 46,
            name: 'Caffi',
            age: '2 ani',
            gender: 'mascul',
            durationInShelter: '1 an',
            image: '/LibrarieAsociatii/pozelibrarie/alberto-bigoni-m_9PXk-07f8-unsplash.jpg'
          },
        ],
    about: 'Asociatia Silvania orem ipsum dolor sit amet consectetur adipisicing elit. Numquam repellendus placeat odio necessitatibus quod ea possimus eos autem culpa eveniet voluptas debitis, optio voluptatum, nemo nisi deserunt fuga odit praesentium?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam neque dolor accusantium? Dignissimos reprehenderit nihil dolore! Accusamus nulla deleniti, dolorum debitis corrupti laudantium ducimus labore, ut nemo facilis, ad voluptas.'    
},
{
    id: 'asociatsxia-silvania',
    name: 'Asociatia Silvania',
    location: 'Simleu Silvaniei, Salaj',
    phonenumber: '0751169602',
    numberOfDogs: 500,
    image: '/Poze/240_F_451518224_QBgvrmipPTfxfjowNUTVoSQYgRrUUze3.jpg',
    dogs: [
        {
            id: 51,
            name: 'Caffi',
            age: '2 ani',
            gender: 'mascul',
            durationInShelter: '1 an',
            image: '/LibrarieAsociatii/pozelibrarie/alberto-bigoni-m_9PXk-07f8-unsplash.jpg'
          },
          {
            id:52,
            name: 'Sky',
            age: '5 ani',
            gender:'mascul',
            durationInShelter : 2,
            image: '/LibrarieAsociatii/pozelibrarie/alex-person-Mh9nu3mwvs4-unsplash.jpg'
          },
           {
            id: 53,
            name: 'Shy',
            age: '5 ani',
            gender: 'mascul',
            durationInShelter: '1 an',
            image: '/LibrarieAsociatii/pozelibrarie/brad-starkey-ipyXCQu2Qwk-unsplash.jpg'
          }, {
            id: 54,
            name: 'Caffi',
            age: '2 ani',
            gender: 'mascul',
            durationInShelter: '1 an',
            image: '/LibrarieAsociatii/pozelibrarie/alberto-bigoni-m_9PXk-07f8-unsplash.jpg'
          }, {
            id: 55,
            name: 'Caffi',
            age: '2 ani',
            gender: 'mascul',
            durationInShelter: '1 an',
            image: '/LibrarieAsociatii/pozelibrarie/alberto-bigoni-m_9PXk-07f8-unsplash.jpg'
          }, {
            id: 56,
            name: 'Caffi',
            age: '2 ani',
            gender: 'mascul',
            durationInShelter: '1 an',
            image: '/LibrarieAsociatii/pozelibrarie/alberto-bigoni-m_9PXk-07f8-unsplash.jpg'
          },
        ],
    about: 'Asociatia Silvania orem ipsum dolor sit amet consectetur adipisicing elit. Numquam repellendus placeat odio necessitatibus quod ea possimus eos autem culpa eveniet voluptas debitis, optio voluptatum, nemo nisi deserunt fuga odit praesentium?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam neque dolor accusantium? Dignissimos reprehenderit nihil dolore! Accusamus nulla deleniti, dolorum debitis corrupti laudantium ducimus labore, ut nemo facilis, ad voluptas.'    
},
{
    id: 'asociatia-scxxasilvania',
    name: 'Asociatia Silvania',
    location: 'Simleu Silvaniei, Salaj',
    phonenumber: '0751169602',
    numberOfDogs: 500,
    image: '/Poze/240_F_451518224_QBgvrmipPTfxfjowNUTVoSQYgRrUUze3.jpg',
    dogs: [
        {
            id: 61,
            name: 'Caffi',
            age: '2 ani',
            gender: 'mascul',
            durationInShelter: '1 an',
            image: '/LibrarieAsociatii/pozelibrarie/alberto-bigoni-m_9PXk-07f8-unsplash.jpg'
          },
          {
            id:62,
            name: 'Sky',
            age: '5 ani',
            gender:'mascul',
            durationInShelter : 2,
            image: '/LibrarieAsociatii/pozelibrarie/alex-person-Mh9nu3mwvs4-unsplash.jpg'
          },
           {
            id: 63,
            name: 'Shy',
            age: '5 ani',
            gender: 'mascul',
            durationInShelter: '1 an',
            image: '/LibrarieAsociatii/pozelibrarie/brad-starkey-ipyXCQu2Qwk-unsplash.jpg'
          }, {
            id: 64,
            name: 'Caffi',
            age: '2 ani',
            gender: 'mascul',
            durationInShelter: '1 an',
            image: '/LibrarieAsociatii/pozelibrarie/alberto-bigoni-m_9PXk-07f8-unsplash.jpg'
          }, {
            id: 65,
            name: 'Caffi',
            age: '2 ani',
            gender: 'mascul',
            durationInShelter: '1 an',
            image: '/LibrarieAsociatii/pozelibrarie/alberto-bigoni-m_9PXk-07f8-unsplash.jpg'
          }, {
            id: 66,
            name: 'Caffi',
            age: '2 ani',
            gender: 'mascul',
            durationInShelter: '1 an',
            image: '/LibrarieAsociatii/pozelibrarie/alberto-bigoni-m_9PXk-07f8-unsplash.jpg'
          },
        ],
    about: 'Asociatia Silvania orem ipsum dolor sit amet consectetur adipisicing elit. Numquam repellendus placeat odio necessitatibus quod ea possimus eos autem culpa eveniet voluptas debitis, optio voluptatum, nemo nisi deserunt fuga odit praesentium?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam neque dolor accusantium? Dignissimos reprehenderit nihil dolore! Accusamus nulla deleniti, dolorum debitis corrupti laudantium ducimus labore, ut nemo facilis, ad voluptas.'    
},
]
function generateAsociatii(){
    const container = document.getElementById('asociatii-container');
    container.innerHTML = '';
    asociatii.forEach(asociatie =>{
        const sectiune = document.createElement('section');
        sectiune.classList.add('sect-asociatie');
        sectiune.id = asociatie.id;
        sectiune.innerHTML = `
        <div class = "container">
       <div class= "infomatii">
        <div class = "asociatia">
        <h2 id = "${asociatie.id}"> ${asociatie.name}</h2>
        <div class="pentruasociatie">   
        <div class="hover-cumpara">
        <p class=" cumpara"><a href="/Shop/shop.html"><i class="fa-solid fa-basket-shopping"></i></a></p>
            <p class = "cumpara-hover">CUMPARĂ PENTRU ASOCIAȚIE</p>
        </div> 
        <div class="hover-doneaza">
    <p class="doneaza"><a href="/formulardonati/formulardonatii.html"><i class="fa-solid fa-shield-dog"></i></a></p>
            <p class ="doneaza-hover">DONEAZĂ PENTRU ASOCIAȚIE</p>
        </div>
        </div>
        <div class="detalii">
            <img src= "${asociatie.image}" alt = "${asociatie.name}">
            <div class="donad">
            <p> <i class="fa-solid fa-location-dot"></i>${asociatie.location}</p>
            <p><i class="fa-solid fa-phone-volume"></i><a itemprop="telephone" </a>${asociatie.phonenumber}</p>
            <p><i class="fa-solid fa-shield-dog"></i> ${asociatie.numberOfDogs} caini in grija </p>
        </div>
        </div>
        </div>
        <button class="toggle-gallery" onclick="showDogs('${asociatie.id}')">VEZI CAINI</button>
        </div>
        <div class="gallery">

        <ul class="carosel">
            ${asociatie.dogs.map(dog => `
         
            <img class="btn-left but" src="/LibrarieAsociatii/pozelibrarie/pngegg.png">
                <li class="card">
                    <img src="${dog.image}" alt="${dog.name}">
                    <h2>${dog.name}</h2>
                    <div class="despre">
                        <p>Vârsta: ${dog.age} </p>
                        <p>Gen: ${dog.gender}</p>
                        <p>În adăpost de: ${dog.durationInShelter}</p>
                    </div>
                </li>
                <div ><img class="btn-right but" src="/LibrarieAsociatii/pozelibrarie/pngegg.png" ></div>
            `).join('')}
        </ul>
    </div>
    <p class="about" style="display: none;">${asociatie.about}</p>
`,
    container.appendChild(sectiune);
    });
}

function showDogs(asociatieId){
    const sections = document.querySelectorAll('.sect-asociatie');

    sections.forEach(section => {
        const title = section.querySelector('button.toggle-gallery');
        const gallery = section.querySelector('.gallery');
        const about = section.querySelector('.about');
        const asociatia = section.querySelector('.asociatia');

        if (section.id === asociatieId) {
            const isExpanded = section.classList.contains('expand');

            if (isExpanded) {
                // Dacă secțiunea este deja extinsă, închide-o
                section.classList.remove('expand');
                gallery.style.display = "none";
                about.style.display = "none";
                asociatia.classList.remove('expands');
                if (title) {
                    title.textContent = "VEZI CAINI";
                }
            } else {
                // Altfel, extinde secțiunea
                section.classList.add('expand');
                gallery.style.display = "block";
                about.style.display = "block";
                asociatia.classList.add('expands');
                if (title) {
                    title.textContent = "INCHIDE GALERIE";
                }
                gallery.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        } else {
            // Închide toate celelalte secțiuni
            section.classList.remove('expand');
            gallery.style.display = "none";
            about.style.display = "none";
            asociatia.classList.remove('expands');
            if (title) {
                title.textContent = "VEZI CAINI";
            }
        }
    });
}
    function attachEventListeners() {
        const backBtns = document.querySelectorAll(".btn-left");
        const nextBtns = document.querySelectorAll(".btn-right");

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
}