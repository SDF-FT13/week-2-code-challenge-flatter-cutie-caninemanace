// Your code here
document.addEventListener("DOMContentLoaded", () => {
    fetchData();
});

function fetchData() {
    fetch("http://localhost:3000/characters")
        .then(response => response.json())
        .then(data => displayCharacters(data))
        .catch(error => console.error("Error fetching data:", error));
   
}

function displayCharacters(characters) {
    let characterBar = document.getElementById("character-bar");

    
    characterBar.innerHTML = "";

    characters.forEach(character => {
        let span = document.createElement("span");
        span.textContent = character.name;
        span.style.cursor = "pointer";

        
        span.addEventListener("click", () => displayCharacterDetails(character));

        characterBar.appendChild(span);
    });

   
    if (characters.length > 0) {
        displayCharacterDetails(characters[0]);
    }
}

function displayCharacterDetails(character) {
    document.getElementById("name").textContent = character.name;
    document.getElementById("image").src = character.image;
    document.getElementById("image").alt = character.name;
    document.getElementById("vote-count").textContent = character.votes;

    
    let form = document.getElementById("votes-form");
    form.onsubmit = (e) => {
        e.preventDefault();
        let voteInput = document.getElementById("votes");
        let voteCount = document.getElementById("vote-count");

        let newVotes = parseInt(voteCount.textContent) + parseInt(voteInput.value);
        voteCount.textContent = newVotes;

        voteInput.value = ""; 
    };

    
    let resetBtn = document.getElementById("reset-btn");
    resetBtn.onclick = () => {
        document.getElementById("vote-count").textContent = "0";
    };
}


