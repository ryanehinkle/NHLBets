// Paste the contents into this variable as a multiline string
const contentText = `WSH John Carlson No Goal (31) (5/5) (10/10) (18 Straight)
WSH Max Pacioretty No Goal (30) (5/5) (10/10) (17 Straight)
EDM Darnell Nurse No Goal (30) (5/5) (10/10) (17 Straight)
SEA Andre Burakovsky No Goal (29) (5/5) (10/10) (16 Straight)
SEA Yanni Gourde No Goal (28) (5/5) (10/10) (15 Straight)
LAK Trevor Moore No Goal (25) (5/5) (10/10) (12 Straight)
EDM Connor McDavid No Goal (21) (5/5) (9/10) (9 Straight)
OTT Jake Sanderson No Goal (21) (5/5) (9/10) (9 Straight)
LAK Phillip Danault No Goal (21) (5/5) (9/10) (9 Straight)
DAL Jamie Benn No Goal (20) (5/5) (9/10) (8 Straight)
SEA Oliver Bjorkstrand No Goal (19) (5/5) (9/10) (7 Straight)
NYI Pierre Engvall No Goal (19) (5/5) (9/10) (7 Straight)
BOS Pavel Zacha No Goal (19) (5/5) (8/10) (8 Straight)
NYI Noah Dobson No Goal (18) (5/5) (9/10) (6 Straight)
DAL Roope Hintz No Goal (18) (5/5) (9/10) (6 Straight)
OTT Brady Tkachuk No Goal (16) (5/5) (7/10) (6 Straight)
OTT Jakob Chychrun No Goal (16) (4/5) (9/10) (4 Straight)
LAK Alex Laferriere No Goal (16) (4/5) (9/10) (4 Straight)
EDM Evan Bouchard No Goal (15) (4/5) (8/10) (4 Straight)
DAL Thomas Harley No Goal (15) (4/5) (8/10) (4 Straight)
DAL Mason Marchment No Goal (15) (4/5) (8/10) (4 Straight)
BOS James van-Riemsdyk No Goal (15) (4/5) (8/10) (4 Straight)
LAK Adrian Kempe No Goal (14) (4/5) (8/10) (3 Straight)
BOS Jake DeBrusk No Goal (14) (4/5) (9/10) (2 Straight)
OTT Claude Giroux No Goal (14) (5/5) (6/10) (5 Straight)
EDM Ryan Nugent-Hopkins No Goal (14) (4/5) (7/10) (4 Straight)
OTT Vladimir Tarasenko No Goal (14) (4/5) (8/10) (3 Straight)
SEA Matty Beniers No Goal (14) (3/5) (8/10) (3 Straight)
NYI Mike Reilly-2 No Goal (14) (4/5) (9/10) (2 Straight)
SEA Jaden Schwartz No Goal (14) (4/5) (9/10) (2 Straight)
SEA Eeli Tolvanen No Goal (14) (4/5) (8/10) (3 Straight)
EDM Zach Hyman Goal (13) (4/5) (6/10) (4 Straight)
EDM Warren Foegele No Goal (13) (3/5) (8/10) (2 Straight)
DAL Miro Heiskanen No Goal (13) (3/5) (8/10) (2 Straight)
NYI Bo Horvat No Goal (13) (4/5) (7/10) (3 Straight)
EDM Evander Kane No Goal (13) (4/5) (7/10) (3 Straight)
BOS Brad Marchand No Goal (13) (4/5) (8/10) (2 Straight)
NYI Kyle Palmieri No Goal (13) (4/5) (6/10) (4 Straight)
DAL Joe Pavelski No Goal (13) (4/5) (9/10) (1 Straight)
LAK Pierre-Luc Dubois No Goal (13) (4/5) (8/10) (2 Straight)
BOS Charles McAvoy No Goal (13) (4/5) (8/10) (2 Straight)
LAK Quinton Byfield No Goal (12) (4/5) (7/10) (2 Straight)
WSH Dylan Strome No Goal (12) (4/5) (7/10) (2 Straight)
WSH Tom Wilson No Goal (12) (4/5) (9/10) (0 Straight)
OTT Drake Batherson No Goal (11) (4/5) (8/10) (0 Straight)
DAL Matt Duchene No Goal (11) (3/5) (5/10) (3 Straight)
SEA Vince Dunn No Goal (11) (3/5) (8/10) (0 Straight)
NYI Anders Lee No Goal (11) (3/5) (8/10) (0 Straight)
OTT Shane Pinto No Goal (11) (4/5) (7/10) (1 Straight)
DAL Jason Robertson No Goal (11) (4/5) (8/10) (0 Straight)
OTT Tim Stutzle No Goal (11) (2/5) (6/10) (2 Straight)
NYI Mathew Barzal No Goal (10) (3/5) (5/10) (2 Straight)
OTT Thomas Chabot No Goal (10) (2/5) (7/10) (0 Straight)
OTT Joshua Norris No Goal (10) (3/5) (7/10) (0 Straight)
BOS David Pastrnak No Goal (9) (3/5) (7/10) (2 Straight)
NYI Brock Nelson No Goal (9) (2/5) (6/10) (0 Straight)
SEA Jordan Eberle No Goal (9) (2/5) (6/10) (0 Straight)
LAK Kevin Fiala No Goal (9) (2/5) (6/10) (0 Straight)
DAL Wyatt Johnston No Goal (9) (3/5) (6/10) (0 Straight)
SEA Jared McCann No Goal (9) (2/5) (5/10) (1 Straight)
WSH Alex Ovechkin No Goal (8) (3/5) (3/10) (2 Straight)
EDM Leon Draisaitl Goal (8) (2/5) (5/10) (0 Straight)`;

// Store content as an array instead of a string
const contentArray = contentText.split('\n');

// Function to get border color based on team abbreviation
function getTeamColor(abbreviation) {
    const colors = {
        'ANA': '#B9975B',
        'ARI': '#8C2633',
        'BOS': '#FFB81C',
        'BUF': '#003087',
        'CGY': '#D2001C',
        'CAR': '#CE1126',
        'CHI': '#CF0A2C',
        'COL': '#6F263D',
        'CBJ': '#002654',
        'DAL': '#006847',
        'DET': '#CE1126',
        'EDM': '#FF4C00',
        'FLA': '#C8102E',
        'LAK': '#111111',
        'MIN': '#154734',
        'MTL': '#AF1E2D',
        'NSH': '#FFB81C',
        'NJD': '#CE1126',
        'NYI': '#00539B',
        'NYR': '#0038A8',
        'OTT': '#DA1A32',
        'PHI': '#F74902',
        'PIT': '#FCB514',
        'SJS': '#006D75',
        'SEA': '#99D9D9',
        'STL': '#002F87',
        'TBL': '#002868',
        'TOR': '#00205B',
        'VAN': '#00205B',
        'VGK': '#B4975A',
        'WSH': '#C8102E',
        'WPG': '#041E42'
    };
    return colors[abbreviation] || '#000000'; // Return black if no matching abbreviation found
}

// Function to set content in the HTML
function setContent() {
    const contentDiv = document.getElementById('content');
    // Iterate over the content array
    contentArray.forEach(line => {
        // Remove the first word (team abbreviation) from the line
        const lineWithoutAbbreviation = line.split(' ').slice(1).join(' ');
        
        // Extract relevant data from the line
        const lineElements = lineWithoutAbbreviation.split(' ');
        const firstname = lineElements[0].toLowerCase(); // First name (assumed to be the first word)
        const lastname = lineElements[1].toLowerCase(); // Last name (assumed to be the second word)
        
        // Construct the player statistics URL
        const playerStatsURL = `https://www.foxsports.com/nhl/${firstname}-${lastname}-player-game-log?season=2023&seasonType=reg`;

        const lineContainer = document.createElement('div'); // Create container for each line
        lineContainer.classList.add('line-container', 'oswald-font'); // Add CSS classes for styling
        lineContainer.style.display = 'flex'; // Set display to flex

        // Extract team abbreviation from the line and convert it to uppercase
        const abbreviation = line.split(' ')[0].toUpperCase(); // Assuming the abbreviation is the first word

        lineContainer.style.borderColor = getTeamColor(abbreviation);

        // Create an image element
        const logoImg = document.createElement('img');
        logoImg.src = `https://assets.nhle.com/logos/nhl/svg/${abbreviation}_light.svg`; // Set the source URL
        logoImg.alt = `${abbreviation} Logo`; // Set alt text for accessibility
        logoImg.style.maxHeight = '1.5em'; // Set maximum height
        logoImg.style.marginRight = '10px'; // Add right margin to create space between image and text
        logoImg.style.flexShrink = '0'; // Prevent image from shrinking

        // Append the image before the line
        lineContainer.appendChild(logoImg);

        // Create a div for the line text
        const lineDiv = document.createElement('div');
        lineDiv.textContent = lineWithoutAbbreviation.trim(); // Use the modified line without the abbreviation

        // Append line text to container
        lineContainer.appendChild(lineDiv);

        // Construct tooltip text using relevant data from the line
        const prop = lineElements[2].toString().toLowerCase();
        const outof5 = lineElements[5].split('/')[0].slice(1);
        const outof10 = lineElements[6].split('/')[0].slice(1);
        const streak = lineElements[7].slice(1);

        if (prop === "goal") {
            tooltipText = `Goal in:\n${outof5} of last five games\n${outof10} of last ten games\n${streak} straight games`;
        } else {
            tooltipText = `No goal in:\n${outof5} of last five games\n${outof10} of last ten games\n${streak} straight games`;
        };

        // Add tooltip
        lineContainer.setAttribute('title', tooltipText);

        // Add click event listener to open player statistics URL in a new page
        lineContainer.addEventListener('click', function() {
            window.open(playerStatsURL, '_blank');
        });

        // Append container to content
        contentDiv.appendChild(lineContainer);
    });
}

function getCurrentDate() {
    const dateNow = new Date();
    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return dateNow.toLocaleDateString('en-US', dateOptions);
}

function getCurrentDateTime() {
    const now = new Date();
    const options = { hour: 'numeric', minute: 'numeric', hour12: true, timeZoneName: 'short', timeZone: 'America/Chicago' };
    return now.toLocaleString('en-US', options);
}


window.onload = function() {
    const currentSubtitle = document.getElementById('subtitle');
    const currentTime = getCurrentDateTime();
    currentSubtitle.innerText = `Hover to see details, click to view stats (Updated ${currentTime})`;
    const currentDateSpan = document.getElementById('date');
    currentDateSpan.innerText = getCurrentDate();
    setContent();
};

// Add this JavaScript to highlight the active link based on the current page
document.addEventListener('DOMContentLoaded', function() {
    var currentUrl = window.location.href;
    var navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(function(navLink) {
        if (navLink.href === currentUrl) {
            navLink.classList.add('active');
        }
    });
});

