// Paste the contents into this variable as a multiline string
const contentText = `NJD Luke Hughes No Goal (35) (5/5) (10/10) (22 Straight)
WPG Neal Pionk No Goal (33) (5/5) (10/10) (20 Straight)
STL Brayden Schenn No Goal (29) (5/5) (10/10) (16 Straight)
STL Justin Faulk No Goal (27) (5/5) (10/10) (14 Straight)
BOS James van-Riemsdyk No Goal (24) (5/5) (10/10) (11 Straight)
BOS Charles McAvoy No Goal (21) (5/5) (9/10) (9 Straight)
WSH Connor McMichael No Goal (18) (5/5) (8/10) (7 Straight)
LAK Adrian Kempe No Goal (17) (5/5) (9/10) (5 Straight)
BOS Charlie Coyle No Goal (17) (5/5) (8/10) (6 Straight)
STL Robert Thomas No Goal (17) (5/5) (9/10) (5 Straight)
NJD Jesper Bratt No Goal (16) (5/5) (8/10) (5 Straight)
STL Torey Krug No Goal (16) (4/5) (9/10) (4 Straight)
NYR Mika Zibanejad No Goal (16) (5/5) (7/10) (6 Straight)
LAK Anze Kopitar No Goal (16) (4/5) (9/10) (4 Straight)
STL Jake Neighbours No Goal (16) (4/5) (9/10) (4 Straight)
WPG Joshua Morrissey No Goal (15) (4/5) (9/10) (3 Straight)
WSH Max Pacioretty No Goal (15) (4/5) (8/10) (4 Straight)
STL Pavel Buchnevich No Goal (14) (5/5) (6/10) (5 Straight)
WSH John Carlson No Goal (14) (4/5) (8/10) (3 Straight)
LAK Phillip Danault No Goal (14) (4/5) (8/10) (3 Straight)
STL Jordan Kyrou No Goal (14) (4/5) (9/10) (2 Straight)
LAK Drew Doughty No Goal (14) (4/5) (7/10) (4 Straight)
NYR Adam Fox No Goal (14) (4/5) (8/10) (3 Straight)
LAK Alex Laferriere No Goal (14) (4/5) (8/10) (3 Straight)
WSH Dylan Strome No Goal (14) (4/5) (8/10) (3 Straight)
NYI Noah Dobson No Goal (13) (4/5) (9/10) (1 Straight)
LAK Quinton Byfield No Goal (12) (4/5) (8/10) (1 Straight)
LAK Pierre-Luc Dubois No Goal (12) (4/5) (8/10) (1 Straight)
WPG Nikolaj Ehlers No Goal (12) (4/5) (8/10) (1 Straight)
NYR Alexis Lafreniere No Goal (12) (4/5) (7/10) (2 Straight)
LAK Trevor Moore No Goal (12) (3/5) (7/10) (2 Straight)
NJD Erik Haula No Goal (12) (4/5) (8/10) (1 Straight)
NJD Jack Hughes No Goal (11) (3/5) (6/10) (2 Straight)
NYR Chris Kreider Goal (11) (3/5) (6/10) (2 Straight)
NJD Timo Meier Goal (11) (5/5) (6/10) (5 Straight)
WSH Alex Ovechkin No Goal (11) (3/5) (7/10) (1 Straight)
WPG Tyler Toffoli No Goal (11) (3/5) (6/10) (2 Straight)
BOS Brad Marchand No Goal (11) (4/5) (8/10) (0 Straight)
WPG Nino Niederreiter No Goal (11) (2/5) (6/10) (2 Straight)
WPG Mark Scheifele No Goal (11) (3/5) (7/10) (1 Straight)
WPG Sean Monahan No Goal (11) (3/5) (5/10) (3 Straight)
NYR Jack Roslovic-2 No Goal (11) (3/5) (7/10) (1 Straight)
LAK Kevin Fiala Goal (10) (4/5) (8/10) (2 Straight)
NJD Nico Hischier No Goal (10) (4/5) (7/10) (0 Straight)
NYR Artemi Panarin No Goal (10) (3/5) (7/10) (3 Straight)
BOS Jake DeBrusk No Goal (10) (3/5) (7/10) (0 Straight)
NYI Anders Lee No Goal (10) (3/5) (6/10) (1 Straight)
NYI Kyle Palmieri No Goal (10) (2/5) (7/10) (0 Straight)
WSH Tom Wilson No Goal (10) (3/5) (7/10) (0 Straight)
BOS Morgan Geekie No Goal (10) (3/5) (6/10) (1 Straight)
BOS Pavel Zacha No Goal (10) (2/5) (7/10) (0 Straight)
BOS David Pastrnak Goal (9) (2/5) (4/10) (2 Straight)
WPG Kyle Connor Goal (9) (2/5) (6/10) (0 Straight)
NYI Mathew Barzal No Goal (9) (2/5) (5/10) (1 Straight)
NYI Bo Horvat No Goal (8) (4/5) (8/10) (0 Straight)
NYI Brock Nelson No Goal (7) (4/5) (9/10) (0 Straight)
NYR Vincent Trocheck No Goal (7) (3/5) (7/10) (0 Straight)`;

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

