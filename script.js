document.addEventListener('DOMContentLoaded', function(){
    var games = document.querySelector('.games');
    gamescontent(games);
    //  Create the game elements first
    showgames(1); // Then display the first batch of games
    hover();
    counterincrement();
});

function showgames(n){
    var a = getMaxId();  // Call getMaxId after games are created
    let start = a - (10 * (n - 1));  // Calculate the starting index
    let end = Math.max(start - 9, 1);  // Ensure the end is at least 1
    
    for(let j = 1; j<=a; j++){
        let game = document.getElementById(j);
        if (game){
            game.style.display = 'none';
        }
    }
    // Display the current batch of games
    for(let i = start; i >= end; i--){
        let game = document.getElementById(i);
        if(game) game.style.display = 'inline-block';  // Show the game if it exists
    }
}

function getMaxId() {
    let maxId = 0;
    
    // Select all elements with class "game"
    let games = document.querySelectorAll('.game');
    
    // Iterate over the games to get the maximum ID
    games.forEach(function(game) {
        let gameId = parseInt(game.id);
        if (!isNaN(gameId)) {
            maxId = Math.max(maxId, gameId);
        }
    });
    return maxId;
}

function gamescontent(games){
    let gamesData = [
        {
            id: "23",
            alt: "Call of Duty Warzone",
            title: "Call of Duty Warzone",
            class: "pc emulator paid mobile",
            img: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/03/call-of-duty-mobile-warzone.jpg",
            p: "Captain Price and the SAS partner with the CIA and the Urzikstani Liberation Force to retrieve stolen chemical weapons. The fight takes you from London to the Middle East and beyond, as this joint task force battles to stop a global war.",
        },
        {
            id: "22",
            alt: "GTA",
            title: "GTA",
            class: "pc emulator paid mobile",
            img: "https://m.media-amazon.com/images/M/MV5BMWMxNzg0MGYtMTkxNS00MDE4LWFiZjYtN2U5MGMzNzk0ZGU3XkEyXkFqcGc@._V1_.jpg",
            p: "The protagonist begins their career in Liberty City working for Robert Bubby Seragliano's gang. After completing a number of jobs, they are warned by a rival gang that their actions are causing great harm to their boss, Sonetti.",
        },
        {
            id: "21",
            alt: "GTA II",
            title: "GTA II",
            class: "pc emulator paid mobile",
            img: "https://m.media-amazon.com/images/M/MV5BYjU1ZWRhMTktZjQ1Ny00MDVlLWFjMzMtNmFiYTBjMjdiZjM4XkEyXkFqcGc@._V1_.jpg",
            p: "Set within a retrofuturistic metropolis known as Anywhere City, the game focuses on players taking the role of a criminal as they roam an open world, conducting jobs for various crime syndicates and having free rein to do whatever they wish to achieve their goal.",
        },
        {
            id: "20",
            alt: "GTA Advance",
            title: "GTA Advance",
            class: "pc emulator paid mobile",
            img: "https://m.media-amazon.com/images/M/MV5BNmQ1M2MzMGItMGIwOS00Nzg4LWJiYmItM2ZjMmRmMDYyMWQ5XkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_.jpg",
            p: "Mike, who in his quest to avenge the supposed death of his partner, Vinnie, crosses paths with several prominent criminals that offer him assistance.",
        },
        {
            id: "19",
            alt: "GTA Chinatown Wars",
            title: "GTA Chinatown Wars",
            class: "pc emulator paid mobile",
            img: "https://upload.wikimedia.org/wikipedia/en/7/75/ChinatownWars.jpg",
            p: "Following his father's murder, Huang Lee has a simple mission: deliver an ancient sword to his Uncle Kenny to ensure his family retains control of the Triad gangs of Liberty City. Huang is a spoiled rich kid who expects everything to run smoothly, but his trip does not go exactly as planned.",
        },
        {
            id: "18",
            alt: "GTA Vice City Stories",
            title: "GTA Vice City Stories",
            class: "pc emulator paid mobile",
            img: "https://upload.wikimedia.org/wikipedia/en/3/3e/GTA_Vice_City_Stories_PSP_boxart.jpg",
            p: "As a soldier, Vic Vance has always protected his dysfunctional family, his country, himself. One bad decision later and that job is about to get much harder. Kicked out onto the streets of a city torn between glamour and gluttony, Vic is faced with a stark choice — build an empire or be crushed.",
        },
        {
            id: "17",
            alt: "GTA Liberty City Stories",
            title: "GTA Liberty City Stories",
            class: "pc emulator paid mobile",
            img: "https://i.redd.it/d5ampodoqshb1.jpg",
            p: "Toni Cipriani works for Don Salvatore Leone and must clear Salvatore's path against the other gang organizations contending to be the boss of the crime world. The year is 1998 and Toni Cipriani has been laying low for a while now.",
        },
        {
            id: "16",
            alt: "GTA III",
            title: "GTA III",
            class: "pc emulator paid pc mobile",
            img: "https://upload.wikimedia.org/wikipedia/en/thumb/b/be/GTA3boxcover.jpg/220px-GTA3boxcover.jpg",
            p: "After a Young Criminal's Girlfriend betrays him in a Bank Robbery. He is arrested the Police but manages to escape from Custody, He must now get revenge on his Girlfriend but in order to do so he must work his way up in the Criminal Underworld by any means necessary in Liberty City.",
        },
        {
            id: "15",
            alt: "GTA Vice City",
            title: "GTA Vice City",
            class: "pc emulator paid pc mobile",
            img: "https://m.media-amazon.com/images/I/61Iew5dQy7L._AC_UF1000,1000_QL80_.jpg",
            p: "After being released from prison, Tommy Vercetti, a former mobster, is sent to the sunny and dangerous Vice City. When a deal within the city goes horribly wrong, Tommy embarks on a jorney across the city to reclaim what is rightfully his, no matter how many lives it takes.",
        },
        {
            id: "14",
            alt: "GTA San Andreas",
            title: "GTA San Andreas",
            class: "pc emulator paid pc mobile",
            img: "https://i.pinimg.com/474x/ac/7e/3c/ac7e3cc6ce789e43555862b9e01edfeb.jpg",
            p: "In 1992, Carl Johnson, a member of the Grove Street gang, comes home after a family tragedy to find the streets of Los Santos, San Andreas, overtaken by crime and corruption, which he must take back before things become worse.",
        },
        {
            id: "13",
            alt: "Minecraft",
            title: "Minecraft",
            class: "pc emulator paid pc mobile",
            img: "https://preview.redd.it/8b15yijpcgtc1.png?width=640&crop=smart&auto=webp&s=cc1c2b08679da5a6e01a22ae3052d926f2c9826f",
            p: "In Minecraft, players explore a procedurally generated, three-dimensional world with virtually infinite terrain made up of voxels. Players can discover and extract raw materials, craft tools and items, and build structures, earthworks, and machines.",
        },
        {
            id: "12",
            alt: "Call of Duty Mobile",
            img: "https://myhotposters.com/cdn/shop/products/mL3656_1024x1024.jpg?v=1571445734",
            title: "Call of Duty Mobile",
            class: "emulator mobile free",
            p: "Call of Duty is a first-person shooter video game based on id Tech 3, and was released on October 29, 2003. The game was developed by Infinity Ward and published by Activision. The game simulates the infantry and combined arms warfare of World War II.",
        },
        {
            id: "11",
            alt: "Battleground mobile India",
            img: "https://rukminim2.flixcart.com/image/850/1000/l3g7gy80/poster/e/6/1/small-pubg-poster-indian-pubg-poster-bgmi-poster-pubg-weapons-original-imagekbavmruz9rj.jpeg?q=90&crop=false",
            title: "Battleground mobile India",
            class: "emulator mobile pc free",
            p: "BGMI is a player versus player shooter game in which up to one hundred players fight in a battle royale, a type of large-scale last man standing deathmatch where players fight to remain the last alive. Players can choose to enter the match solo, duo, or with a small team of up to four people.",
        },
        {
            id: "10",
            alt: "Garena Free Fire",
            img: "https://wallpapers.com/images/hd/free-fire-gaming-poster-rvwjmxxbs6hmk4y6.jpg",
            title: "Garena Free Fire",
            class: "emulator mobile free",
            p: "Free Fire is the ultimate survival shooter game available on mobile. Each 10-minute game places you on a remote island where you are pit against 49 other players, all seeking survival. Players freely choose their starting point with their parachute, and aim to stay in the safe zone for as long as possible.",
        },
        {
            id: "9",
            alt: "Cyberpunk 2077",
            img: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/1a370e109185507.5fce615a93ba3.png",
            title: "Cyberpunk 2077 paid",
            class: "pc ps5 ps4 xbox paid",
            p: "In Night City, a mercenary known as V navigates a dystopian society in which the line between humanity and technology becomes blurred. In 2077, America is in pieces. Megacorps control life in all its aspects from the top floors of their sky-high fortresses.",
        },
        {
            id: "8",
            alt: "Red Dead Redemption 2",
            img: "https://m.media-amazon.com/images/I/81k9mAngCkL.jpg",
            title: "Red Dead Redemption 2",
            class: "pc ps5 ps4 xbox paid",
            p: "In 1899, after a failed bank robbery has forced Arthur Morgan and the Van Der Linde gang to flee, the outlaw gang experiences internal conflicts that will inevitably tear the them apart. Arthur must make a choice between his morals and loyalty to the gang that raised him.",
        },
        {
            id: "7",
            alt: "Red Dead Redemption",
            img: "https://m.media-amazon.com/images/I/61F0m7m+DPL._UF1000,1000_QL80_.jpg",
            title: "Red Dead Redemption",
            class: "ps4 xbox paid",
            p: "John Marston is a former outlaw looking for an all new life in 1911 America. When government agents from the newly-established Federal Bureau threaten his and his family's freedom, Marston is sent across the American West to help uphold the law and to achieve redemption.",
        },
        {
            id: "6",
            alt: "Spider-man 2 Remastered",
            img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a8f1a0f4-b0c4-4985-b3c4-1d13ca88ab8d/dh3oa9p-daf51d52-62f0-445e-b46d-b80720015693.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E4ZjFhMGY0LWIwYzQtNDk4NS1iM2M0LTFkMTNjYTg4YWI4ZFwvZGgzb2E5cC1kYWY1MWQ1Mi02MmYwLTQ0NWUtYjQ2ZC1iODA3MjAwMTU2OTMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.oNspF7NCu2jtJClig6Bra2TJE83tRv5Joztpm6oBKgM",
            title: "Spider-man 2 Remastered",
            class: "ps5 ps4 xbox paid",
            p: "Peter and Miles have been protecting the city as a Spider-Man duo when all of a sudden a new villain known as Kraven the Hunter leading a group called the Hunters shows up and starts kidnapping New-York's supervillains.",
        },
        {
            id: "5",
            alt: "Spider-man Miles Morales Remastered",
            img: "https://i.etsystatic.com/22985714/r/il/98043f/3880343217/il_fullxfull.3880343217_9heb.jpg",
            title: "Spider-man Miles Morales Remastered",
            class: "pc ps5 ps4 xbox paid",
            p: "The narrative focuses on Miles' struggle to balance the duties of his civilian persona and his role as the second Spider-Man when his new home, Harlem, is threatened by a war between the Roxxon Energy Corporation and a high-tech criminal army called the Underground, led by the mysterious Tinkerer.",
        },
        {
            id: "4",
            alt: "Spider-man Remastered",
            img: "https://nevtan.com/wp-content/uploads/2024/02/Marvels-Spider-Man-Remastered.jpg",
            title: "Spider-man Remastered",
            class: "pc ps5 ps4 xbox paid",
            p: "Assuming a secret identity as the superhero Spider-Man, Peter uses these abilities to protect the residents of New York City. Eight years into his superhero career, Peter has become an experienced crime fighter but struggles to balance his superhero and personal lives.",
        },
        {
            id: "3",
            alt: "GTA Trilogy The Definitive Edition",
            img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/49ec1464-d899-400a-b608-c48c76b500d2/detu6kp-2d5d1829-4d38-438d-81d8-8918fa88e12b.jpg/v1/fill/w_1280,h_1810,q_75,strp/gta_the_trilogy___definitive_edition___fan_art_by_patrickbrown_detu6kp-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTgxMCIsInBhdGgiOiJcL2ZcLzQ5ZWMxNDY0LWQ4OTktNDAwYS1iNjA4LWM0OGM3NmI1MDBkMlwvZGV0dTZrcC0yZDVkMTgyOS00ZDM4LTQzOGQtODFkOC04OTE4ZmE4OGUxMmIuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.IfSEW9HsrnhmYjI36BCqtq358auRT3aJFol5s-3cCuY",
            title: "GTA Trilogy The Definitive Edition",
            class: "pc ps5 ps4 xbox mobile paid",
            p: "The games feature different protagonists and locations within the same continuity. Grand Theft Auto III follows silent protagonist Claude in Liberty City; Vice City, set in 1986, features mobster Tommy Vercetti in the fictional Vice City; and San Andreas, set in 1992, follows gangster Carl Johnson within the state of San Andreas.",
        },
        {
            id: "2",
            alt: "GTA IV",
            img: "https://images.ctfassets.net/wn7ipiv9ue5v/5cnxELe5IVKqLdmTUo2YM8/4a817d9ab34d031b84edabe3bcc0fe03/GTAIV_FOB_1212x1497.jpg",
            title: "GTA IV",
            class: "pc ps5 ps4 xbox paid",
            p: "Niko Bellic, an Eastern European ex-soldier, arrives in Liberty City aboard a cargo ship, the Platypus, to escape his criminal past, pursue the American Dream, and search for the man who betrayed his unit to an ambush during a war ten years prior.",
        },
        {
            id: "1",
            alt: "GTA V",
            img: "https://i.pinimg.com/736x/aa/16/d9/aa16d9bcae36d800859345d02b5921fd.jpg",
            title: "GTA V",
            class: "pc ps5 ps4 xbox paid",
            p: "Set within the fictional state of San Andreas, based on Southern California, the single-player story follows three protagonists—retired bank robber Michael De Santa (Ned Luke), street gangster Franklin Clinton (Shawn Fonteno), and drug dealer and gunrunner Trevor Philips (Steven Ogg), and their attempts to commit heists while under pressure from a corrupt government agency and powerful criminals.",
        }
    ];

    gamesData.forEach(data => {
        var gameDiv = document.createElement('div');
        gameDiv.id = data.id;
        gameDiv.className = "game shooting";  // Class includes 'game'

        var innerDiv = document.createElement('div'); // Create a div for inner content
        innerDiv.className = "inner"; 

        var anchor = document.createElement('a');
        anchor.href = "./GamePage/"+gameDiv.id+".html";

        var image = document.createElement('img');
        image.src = data.img;
        image.alt = data.alt;

        var span = document.createElement('span');
        span.textContent = data.title;

        var para = document.createElement('p');
        para.textContent = data.p;

        anchor.appendChild(image);
        anchor.appendChild(span);
        anchor.appendChild(para);
        innerDiv.appendChild(anchor);
        gameDiv.appendChild(innerDiv);
        if(games){
            games.appendChild(gameDiv);
        }
    });
}

function searchshow(event) {
    event.preventDefault();
    let searchInput = document.getElementById("searchInput").value.toLowerCase();
    console.log("Search Input:", searchInput);
    window.location.href = "search-results.html?query=" + encodeURIComponent(searchInput);
}
function searchshowpage(event) {
    event.preventDefault();
    let searchInput = document.getElementById("searchInput").value.toLowerCase();
    console.log("Search Input:", searchInput);
    window.location.href = "../search-results.html?query=" + encodeURIComponent(searchInput);
}

function searchfile() {
    var gamesContainer = document.querySelector('.games');
    gamescontent(gamesContainer);  // Load all games into the container
    const query = new URLSearchParams(window.location.search).get('query');  // Get search query from URL
    
    if (query) {
        console.log("Search Query:", query);
        // Perform search operation
        var totalGames = getMaxId();  // Get total games count or max id
        let results = [];  // Array to store games and their similarity values

        // Collect games and similarity scores
        for (var i = 1; i <= totalGames; i++) {
            let result = spanvalue(i, query.toLowerCase());  // Get similarity value for each game
            if (result) {
                results.push(result);  // Store if the game has a similarity score
            }
        }

        // Sort the results in descending order of similarity
        results.sort((a, b) => b.similarity - a.similarity);

        // Clear the container and display the sorted games
        gamesContainer.innerHTML = '';  // Clear the container
        results.forEach(result => {
            gamesContainer.appendChild(result.game);  // Add sorted games to the container
            result.game.style.display = 'inline-block';  // Ensure they're visible
        });
    }
}

function spanvalue(gid, query) {
    let game = document.getElementById(gid);  // Select the game by id

    if (game) {
        let gameTitle = game.querySelector('span').textContent.toLowerCase();  // Get the game's title text
        console.log("Game text:", gameTitle);
        
        let similarity = 0;

        // Check for string similarity feature
        if (typeof stringSimilarity !== 'undefined') {
            console.log("Using stringSimilarity library.");
            similarity = stringSimilarity.compareTwoStrings(gameTitle, query);
            console.log("Similarity:", similarity);
        } else {
            console.log("Fallback to includes() method.");
            similarity = gameTitle.includes(query) ? 1 : 0;  // Basic match check
        }

        // If similarity is more than 0, return the game and its similarity value
        if (similarity > 0) {
            return { game: game, similarity: similarity };  // Return the game and similarity
        } else {
            game.style.display = 'none';  // Hide games that don't match
            return null;  // Return null for non-matching games
        }
    }
}
function hover() {
    let games = document.querySelectorAll('.game');

    games.forEach(game => {
        let div = game.querySelector('div'); // The inner div to change width
        let img = game.querySelector('img');
        let span = game.querySelector('span');
        // let para = game.querySelector('p');

        game.addEventListener('mouseover', function() {
            // div.style.width = "56.25vw"; // Increase width on hover
            img.style.filter = "brightness(50%)"; // Darken the image
            span.style.backgroundColor = "blue"; // Change background color of span
            
            // Correct usage of setInterval
            // const intervalId = setInterval(function() {
            //     para.style.display = "flex"; // Show paragraph
            // }, 3000); // Adjust the time as needed (1000ms = 1 second)
        
            // Clear the interval when mouse is out
            game.addEventListener('mouseout', function() {
                // clearInterval(intervalId); // Stop the interval
                div.style.width = "17vw"; // Reset width when not hovering
                img.style.filter = "brightness(100%)"; // Reset image brightness
                span.style.backgroundColor = "transparent"; // Reset span background color
                // para.style.display = "none"; // Hide paragraph
            });
        });
    });
}
function counterincrement(){
    const counterDisplay1 = document.getElementById('counter1');
    const incrementBtn1 = document.getElementById('fileContent1');
    if(counterDisplay1){
        // Initialize counter value from localStorage, or set it to 0 if not present
        let counter1 = localStorage.getItem('counter1') ? parseInt(localStorage.getItem('counter1')) : 0;
        counterDisplay1.innerText = counter1;
        
        // Function to increase the counter when the button is pressed
        incrementBtn1.addEventListener('click', (e) => {
          e.preventDefault(); // Prevent default action of anchor tag
          counter1++; // Increase the counter value
          counterDisplay1.innerText = counter1; // Update the displayed value
          localStorage.setItem('counter1', counter1);
          window.location.href = '../index.html'; // Store the updated value in localStorage
        });
    }

    const counterDisplay2 = document.getElementById('counter2');
    const incrementBtn2 = document.getElementById('fileContent2');
    if(counterDisplay2){
        // Initialize counter value from localStorage, or set it to 0 if not present
        let counter2 = localStorage.getItem('counter2') ? parseInt(localStorage.getItem('counter2')) : 0;
        counterDisplay2.innerText = counter2;
        
        // Function to increase the counter when the button is pressed
        incrementBtn2.addEventListener('click', (e) => {
          e.preventDefault(); // Prevent default action of anchor tag
          counter2++; // Increase the counter value
          counterDisplay2.innerText = counter2; // Update the displayed value
          localStorage.setItem('counter2', counter2); // Store the updated value in localStorage
        });
    }
    
}

