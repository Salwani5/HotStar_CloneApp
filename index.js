let movies = [
    {
        name: "Falcon and Winter Soilder",
        des: 
        "Falcon and the Winter Soldier are a mismatched duo who team up for a global adventure that will test their survival skills -- as well as their patience. The Falcon and the Winter Soldier, set after 2019's Avengers: Endgame, is about two Marvel superheroes, namesakes Falcon and Winter Soldier, as they team up on a globe-trotting thriller to take down an old enemy, Baron Zemo.",
        image: "Images/slider 2.png"
    },
    {
        name: "Loki",
        des: 
        "In Norse mythology Loki is a cunning trickster who has the ability to change his shape and sex. Although his father is the giant Fárbauti, he is included among the Aesir. Loki is represented as the companion of the great gods Odin and Thor. The big ending saw Loki, who is the God of Mischief, join an alternate version of himself, named Sylvie, as they uncover the path to the castle hideout of the mysterious mastermind controlling the cosmic cops of the Time Variance Authority. That's where Kang comes in.",
        image: "Images/slider 1.png"
    },
    {
        name: "Wanda Vision",
        des: 
        "It follows Wanda Maximoff and Vision as they live an idyllic suburban life in the town of Westview, New Jersey, until their reality starts moving through different decades of sitcom homages and television tropes. Schaeffer served as head writer for the series, which was directed by Matt Shakman.",
        image: "Images/slider 3.png"
    },
    {
        name: "Raya and The last dragon",
        des: 
        "The film follows Raya, a warrior princess who must find the fabled last dragon in order to save her divided home world from a ravenous plague. Throughout her journey, Raya traverses the various kingdoms of Kumandra, with an unusual band of misfits by her side.",
        image: "Images/slider 4.png"
    },
    {
        name: "Luca",
        des: 
        "A young boy experiences an unforgettable seaside summer on the Italian Riviera filled with gelato, pasta and endless scooter rides. Luca shares these adventures with his newfound best friend, but all the fun is threatened by a deeply-held secret: he is a sea monster from another world just below the ocean's surface.",
        image: "Images/slider 5.png"
    },
];

const carousel=document.querySelector('.carousel');
let sliders=[];

let slideIndex=0;

const createSlide = () => {
    if(slideIndex>=movies.length){
        slideIndex=0;
    }


    //create DOM Elements
    let slide= document.createElement("div");
    var imgElement= document.createElement("img");
    let content= document.createElement("div");
    let h1= document.createElement("h1");
    let p= document.createElement("p");

    //attaching all elements
    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    imgElement.src=movies[slideIndex].image;
    slideIndex++

    slide.className="slider";
    content.className="slide-content";
    h1.className="movie-title";
    p.className="movie-des";

    sliders.push(slide);

    if (sliders.length){
        sliders[0].style.marginLeft = ` calc(-${100 * (sliders.length - 2)}% - ${ 30 * (sliders.length - 2)
        }px)`;
    }
};

for (let i = 0; i < 3; i++) {
    createSlide();
}

setInterval(() => {
    createSlide();
}, 3000);

//Video Cards
const videoCards= [...document.querySelectorAll(".video-card")];

videoCards.forEach(item => {
    item.addEventListener("mouserover", () => {
        let video = item.children[1];
        video.play();
    })
    item.addEventListener("mouserleave", () => {
        let video = item.children[1];
        video.pause();
    })
})

//card sliders

let cardContainers = [...document.querySelectorAll('.card-container')];
let preBtns = [...documents.querySelectorAll('.pre-btn')];
let nxtBtns = [...document.querySelectorAll('.nxt-btn')];

cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtns[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth - 200;
    });

    preBtns[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth + 200;
    });
});