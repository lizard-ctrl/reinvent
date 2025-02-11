

const images = [
    { src: "imgs/a1.png", tag: "A" },
    { src: "imgs/a2.png", tag: "A" },
    { src: "imgs/a3.png", tag: "A" },
    { src: "imgs/a4.png", tag: "A" },
    { src: "imgs/a5.png", tag: "A" },
    { src: "imgs/a6.png", tag: "A" },
    { src: "imgs/a7.png", tag: "A" },
    { src: "imgs/a8.png", tag: "A" },
    { src: "imgs/a9.png", tag: "A" },
    { src: "imgs/a10.png", tag: "A" },
    { src: "imgs/a11.png", tag: "A" },
    { src: "imgs/a12.png", tag: "A" },
    { src: "imgs/a13.png", tag: "A" },
    { src: "imgs/b1.png", tag: "B" },
    { src: "imgs/b2.png", tag: "B" },
    { src: "imgs/b3.png", tag: "B" },
    { src: "imgs/b4.png", tag: "B" },
    { src: "imgs/b5.png", tag: "B" },
    { src: "imgs/b6.png", tag: "B" },
    { src: "imgs/b7.png", tag: "B" },
    { src: "imgs/b8.png", tag: "B" },
    { src: "imgs/b9.png", tag: "B" },
    { src: "imgs/b10.png", tag: "B" },
    { src: "imgs/b11.png", tag: "B" },
    { src: "imgs/b12.png", tag: "B" },
    { src: "imgs/b13.png", tag: "B" },
    { src: "imgs/b14.png", tag: "B" },
    { src: "imgs/b15.png", tag: "B" },
    { src: "imgs/b16.png", tag: "B" },
    { src: "imgs/c1.png", tag: "C" },
    { src: "imgs/c2.png", tag: "C" },
    { src: "imgs/c3.png", tag: "C" },
    { src: "imgs/c4.png", tag: "C" },
    { src: "imgs/c5.png", tag: "C" },
    { src: "imgs/c6.png", tag: "C" },
    { src: "imgs/c7.png", tag: "C" },
    { src: "imgs/c8.png", tag: "C" },
    { src: "imgs/c9.png", tag: "C" },
    { src: "imgs/c10.png", tag: "C" },
    { src: "imgs/c11.png", tag: "C" },
    { src: "imgs/c12.png", tag: "C" },
    { src: "imgs/c13.png", tag: "C" },
    { src: "imgs/c14.png", tag: "C" },
    { src: "imgs/c15.png", tag: "C" }
];



images.sort(() => Math.random() - 0.5);

let index = 0;
let selections = [];
let rejections = [];
let tagCount = { A: 0, B: 0, C: 0 };

const imgElement = document.getElementById("current-image");
const resultSection = document.getElementById("result");
const selectedImagesContainer = document.getElementById("selected-images");
const rejectedImagesContainer = document.getElementById("rejected-images");
const topTagElement = document.getElementById("top-tag");
const rejectedSection = document.getElementById("rejected-section");
const app = document.getElementById("app");
const welcome = document.getElementById("welcome");

function startQuizYay(){
    app.style.display = "block";
    welcome.style.display = "none";
}

const wingdingContainer1 = document.getElementById("wingding-loader");
let count = 1;

function updateWingdingLoader() {
    let wingdings = " ✂ ".repeat(count).trim(); 
    wingdingContainer1.textContent = wingdings;
    
    count++;
    if (count > 5) count = 1; 

    setTimeout(updateWingdingLoader, 1000); 
}


updateWingdingLoader();


function loadImage() {
    if (index < images.length) {
        imgElement.src = images[index].src;
    } else {
        showResults();
    }
}

const wingdingContainer = document.getElementById("wingding-container");
const wingdingCharacters = ['✦', 
  '✧',
  '★', 
  '☆', 
  '♡', 
  '❥' ];
const wingdingElements = [];
const wingdingCount = 30; 


function createWingdings() {
    for (let i = 0; i < wingdingCount; i++) {
        const wingding = document.createElement("div");
        wingding.classList.add("wingding");
        wingding.textContent = wingdingCharacters[Math.floor(Math.random() * wingdingCharacters.length)];
        
        wingdingContainer.appendChild(wingding);
        wingdingElements.push(wingding);
    }
    repositionWingdings(); 
}

function repositionWingdings() {
    wingdingElements.forEach(wingding => {
        const randomX = Math.random() * (window.innerWidth - 50);
        const randomY = Math.random() * (window.innerHeight - 50);

        wingding.style.transform = `translate(${randomX}px, ${randomY}px)`;
    });
}


function vote(yes) {
    if (yes) {
        selections.push(images[index]);
        tagCount[images[index].tag]++;
    } else {
        rejections.push(images[index]); 
    }
    index++;
    loadImage();
}


createWingdings();




const wordsA = ["earthy", "barefoot", "bold", "beat stomping", "electric", "fearless", "wind","earth","land","mud"];
const wordsB = ["dirty", "medieval", "dungeon", "rusty", "hidden", "mysterious","sharp","metallic"];
const wordsC = ["vintage", "quirky", "grandma", "tropical", "jungle", "old","wild","freak"];


function getRandomWords(wordList) {
    let shuffled = wordList.sort(() => Math.random() - 0.5); 
    return shuffled.slice(0, 4).join(" "); 
}


function generateResultSentence(topTag) {
    let words;
    
    if (topTag === "A") words = getRandomWords(wordsA);
    else if (topTag === "B") words = getRandomWords(wordsB);
    else if (topTag === "C") words = getRandomWords(wordsC);
    
    return `The new you is ${words} core.`;
}


function showResults() {
    document.getElementById("image-container").style.display = "none";
    document.getElementById("buttons").style.display = "none";
    resultSection.style.display = "block";

    let topTag = Object.keys(tagCount).reduce((a, b) => tagCount[a] > tagCount[b] ? a : b);
    topTagElement.textContent = topTag;

   
    selectedImagesContainer.innerHTML = "";

   
    selections.forEach(img => {
        let imgElement = document.createElement("img");
        imgElement.src = img.src;
        selectedImagesContainer.appendChild(imgElement);
    });


    let resultSentence = generateResultSentence(topTag);

    
    let resultBox = document.getElementById(`result-${topTag}`);
    
 
    let sentenceElement = document.createElement("p");
    sentenceElement.textContent = resultSentence;
    resultBox.appendChild(sentenceElement);

    
    document.getElementById("result-A").style.display = topTag === "A" ? "block" : "none";
    document.getElementById("result-B").style.display = topTag === "B" ? "block" : "none";
    document.getElementById("result-C").style.display = topTag === "C" ? "block" : "none";

   
    if (rejections.length > 0) {
        document.getElementById("toggle-rejected").style.display = "block";
    }
}


const externalImages = [
    "imgs/spider.png",
    "imgs/spider.png",
    "imgs/spider.png"
];

const extraImageCount = 30; 

function toggleRejected() {
    const toggleButton = document.getElementById("toggle-rejected");
    const body = document.body; 
    const grid = rejectedImagesContainer; 

    if (rejectedSection.style.display === "none") {
    
        rejectedSection.style.display = "block";
        resultSection.style.display = "none";
        toggleButton.textContent = "MAIN FEED"; 
        
     
        body.style.backgroundColor = "black"; 
        body.style.backgroundImage = "none"; 
        body.style.color = "white"; 
        
        grid.innerHTML = ""; 

     
        rejections.forEach(img => {
            let imgElement = document.createElement("img");
            imgElement.src = img.src;
            imgElement.classList.add("random-image");
            grid.appendChild(imgElement);
        });

        for (let i = 0; i < extraImageCount; i++) {
            let imgElement = document.createElement("img");
            imgElement.src = externalImages[i % externalImages.length]; 
            imgElement.classList.add("random-image");
            grid.appendChild(imgElement);
        }

        setTimeout(randomizePositions, 100);
    } else {
      
        rejectedSection.style.display = "none";
        resultSection.style.display = "block";
        toggleButton.textContent = "ARCHIVE";

       
        body.style.backgroundColor = ""; 
        body.style.backgroundImage = ""; 
        body.style.color = ""; 
    }
}

function randomizePositions() {
    document.querySelectorAll(".random-image").forEach(img => {
        img.style.position = "absolute";
        img.style.left = `${Math.random() * 90}%`;
        img.style.top = `${Math.random() * 90}%`;
        img.style.transition = "all 0.6s ease-in-out"; 
    });
}




loadImage();