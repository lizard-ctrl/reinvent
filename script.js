function forceCSSReload() {
    let link = document.querySelector('link[rel="stylesheet"]');
    let newLink = document.createElement("link");
    newLink.rel = "stylesheet";
    newLink.href = link.href.split("?")[0] + "?v=" + new Date().getTime();
    document.head.appendChild(newLink);
    setTimeout(() => {
        link.remove(); // Remove old CSS after new one loads
    }, 50);
}


const firstHalfSentences = [
    "800 Shocking Tips to",
    "80 Best Ways to",
    "Spilling All the Secrets to",
    "How to",
    "100 Mind Blowing Ideas to",
    "The Sexy Guide to",
    "Top 5 Destinations You Must Be",
    "7 Secrets of",
    "1,000,000 Secrets to",
    "A Beginner’s Guide to"
];

const secondHalfSentences = [
    "Dropping 40 Pants Sizes",
    "Crying and Doomscrolling",
    "Get Your Toxic Ex Back",
    "Achieve the Perfect Instagram",
    "Get Your 15 Minutes of Fame on Tiktok",
    "Facetuning your Friends",
    "Facetuning your Life",
    "Curating your Life",
    "Spending more time Online",
    "Increasing your Screentime",
    "Decoding his Instagram",
    "Decoding his Spotify Listens",
    "Analyze your ex's Instagram",
    "Tweeting your way to the top",
    "Being Offputting on Tinder",
    "Being Mysterious and Weird on Hinge",
    "Achieving Cottagecore",
    "Achieving Dark Academia",
    "Achieving CoreCore",
    "Understanding CoreCore",
    "Keep up with Every Trend!!"
];

function generateRandomSentences() {
    let sentences = [];
    for (let i = 0; i < 20; i++) {
        let firstHalf = firstHalfSentences[Math.floor(Math.random() * firstHalfSentences.length)];
        let secondHalf = secondHalfSentences[Math.floor(Math.random() * secondHalfSentences.length)];
        sentences.push(`${firstHalf} ${secondHalf}`);
    }
    return sentences;
}

function appendSentencesToDiv(divId) {
    let sentences = generateRandomSentences();
    let div = document.getElementById(divId);

    sentences.forEach(sentence => {
       
        let sentenceElement = document.createElement("div");
        sentenceElement.classList.add("sentence");
        sentenceElement.textContent = sentence;

    
        let randomFontSize = Math.floor(Math.random() * (50 - 12 + 1)) + 12;
        sentenceElement.style.fontSize = `${randomFontSize}px`;

    
        let line = document.createElement("div");
        line.classList.add("line");

        
        div.appendChild(sentenceElement);
        div.appendChild(line);
    });
}

appendSentencesToDiv("left-div");
appendSentencesToDiv("right-div");



const infoWingdingContainers = document.querySelectorAll(".info-container"); 
const infoWingdingCharacters = ['✦', '✧', '★', '☆', '♡', '❥']; 
const wingdingColors = ['#2ef1ff', '#6A5ACD', '#f207cb']; 
const infoWingdingCount = 10; 


function createInfoWingdings() {
    infoWingdingContainers.forEach(container => {
        const infoWingdingElements = [];
        
        for (let i = 0; i < infoWingdingCount; i++) {
            const wingding = document.createElement("div");
            wingding.classList.add("info-wingding");
            wingding.textContent = infoWingdingCharacters[Math.floor(Math.random() * infoWingdingCharacters.length)];

            
            const randomFontSize = Math.floor(Math.random() * 200) + 12;  
            wingding.style.fontSize = `${randomFontSize}px`;

            
            const randomColor = wingdingColors[Math.floor(Math.random() * wingdingColors.length)];
            wingding.style.color = randomColor;

            container.appendChild(wingding);
            infoWingdingElements.push(wingding);
        }

        repositionInfoWingdings(container, infoWingdingElements); 
    });
}


function repositionInfoWingdings(container, wingdingElements) {
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    wingdingElements.forEach(wingding => {
        const randomX = Math.random() * (containerWidth - 50); 
        const randomY = Math.random() * (containerHeight - 50); 

        wingding.style.transform = `translate(${randomX}px, ${randomY}px)`;
    });
}

createInfoWingdings();



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
const rejectedSentence = document.getElementById("rejected-sentence");

function startQuizYay(){
    forceCSSReload();
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
    repositionWingdings()
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
    
    return `You Are ${words} core.`;
}

function generateRejectedSentence() {
    let sortedTags = Object.keys(tagCount).sort((a, b) => tagCount[a] - tagCount[b]);
    let bottomTags = sortedTags.slice(0, 2);
    let words = bottomTags.map(tag => getRandomWords(tag === "A" ? wordsA : tag === "B" ? wordsB : wordsC)).join(" and ");
    return `You have hidden ${words}.`;
}

function showResults() {
    forceCSSReload(); 

    document.getElementById("image-container").style.display = "none";
    document.getElementById("buttons").style.display = "none";

    
    setTimeout(() => {
        resultSection.style.display = "block";
    }, 50);

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
        rejectedSentence.textContent = generateRejectedSentence();
        startRandomTyping(generateRejectedSentence());
        console.log('heyy');
    }

    // Check if #rejected-section is visible before starting typing
    if (window.getComputedStyle(document.getElementById("rejected-section")).display === "block") {
        console.log('comeon');
        startRandomTyping(generateRejectedSentence());
    }
}

// Function to start typing rejected sentence in random positions within #random-sentences
function startRandomTyping(sentence) {
    function typeOutRandom(text, delay = 50) {
        let rejectedContainer = document.getElementById("random-sentences");
        let containerWidth = rejectedContainer.clientWidth;
        let containerHeight = rejectedContainer.clientHeight;

        // Create a temporary element to calculate text width and height
        let tempElement = document.createElement("div");
        tempElement.style.position = "absolute";
        tempElement.style.visibility = "hidden";
        tempElement.style.fontSize = "16px"; // Default font size
        tempElement.style.whiteSpace = "normal";
        tempElement.style.wordWrap = "break-word";
        tempElement.textContent = text;
        rejectedContainer.appendChild(tempElement);

        // Calculate the text element's width and height
        let textWidth = tempElement.offsetWidth;
        let textHeight = tempElement.offsetHeight;

        // Remove the temporary element after calculating size
        rejectedContainer.removeChild(tempElement);

        // Generate random position within #random-sentences boundaries
        let randomX = Math.random() * (containerWidth - 800); // Ensure element stays within container
        let randomY = Math.random() * (containerHeight - textHeight); // Ensure element stays within container
        let randomFontSize = Math.floor(Math.random() * 36) + 6; // Font size between 12px and 48px

        let rejectedElement = document.createElement("div");
        rejectedElement.style.position = "absolute";
        rejectedElement.style.left = `${randomX}px`;
        rejectedElement.style.top = `${randomY}px`;
        rejectedElement.style.fontSize = `${randomFontSize}px`;
        rejectedElement.style.whiteSpace = "normal"; // Allow text to wrap
        rejectedElement.style.wordWrap = "break-word"; // Wrap words if necessary
        rejectedElement.style.maxWidth = `${containerWidth - randomX - 20}px`; // Ensure it fits within container
        rejectedElement.style.color = "black"; // Optional: You can style the text color
        rejectedElement.style.padding = "5px";
        rejectedElement.style.borderRadius = "4px";
        
        // Append to #random-sentences instead of document.body
        rejectedContainer.appendChild(rejectedElement);

        let i = 0;
        function typeCharacter() {
            if (i < text.length) {
                rejectedElement.textContent += text.charAt(i);
                i++;
                setTimeout(typeCharacter, delay);
            } else {
                // Start typing another version after a slight delay
                setTimeout(() => {
                    startRandomTyping(generateRejectedSentence());
                }, 1000);
            }
        }
        typeCharacter();
    }

    typeOutRandom(sentence);
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
    const wingdings = document.querySelectorAll(".wingding");

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

        wingdings.forEach(wingding => {
            wingding.style.color = "red";
        });

        setTimeout(randomizePositions, 100);
    } else {
      
        rejectedSection.style.display = "none";
        resultSection.style.display = "block";
        toggleButton.textContent = "ARCHIVE";

       
        body.style.backgroundColor = ""; 
        body.style.backgroundImage = ""; 
        body.style.color = ""; 

        wingdings.forEach(wingding => {
            wingding.style.color = "";
        });
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