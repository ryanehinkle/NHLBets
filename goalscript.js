// Paste the contents into this variable as a multiline string
const contentText = `EDM Mattias Ekholm No Goal (46) (5/5) (10/10) (33 Straight)
NYR Jacob Trouba No Goal (33) (5/5) (10/10) (20 Straight)
EDM Darnell Nurse No Goal (31) (5/5) (10/10) (18 Straight)
EDM Connor McDavid No Goal (23) (5/5) (10/10) (10 Straight)
STL Brayden Schenn No Goal (23) (5/5) (10/10) (10 Straight)
STL Justin Faulk No Goal (20) (5/5) (9/10) (8 Straight)
STL Torey Krug No Goal (17) (5/5) (9/10) (5 Straight)
EDM Zach Hyman Goal (15) (5/5) (7/10) (5 Straight)
NYR Adam Fox No Goal (15) (4/5) (9/10) (3 Straight)
EDM Evander Kane No Goal (14) (4/5) (7/10) (4 Straight)
EDM Warren Foegele No Goal (14) (3/5) (8/10) (3 Straight)
CBJ Johnny Gaudreau No Goal (14) (4/5) (9/10) (2 Straight)
STL Jordan Kyrou No Goal (13) (4/5) (6/10) (4 Straight)
CBJ Zachary Werenski No Goal (13) (3/5) (8/10) (2 Straight)
CBJ Yegor Chinakhov No Goal (12) (4/5) (7/10) (2 Straight)
NYR Chris Kreider No Goal (11) (3/5) (6/10) (2 Straight)
NYR Vincent Trocheck No Goal (11) (2/5) (6/10) (2 Straight)
NYR Mika Zibanejad No Goal (11) (3/5) (6/10) (2 Straight)
CBJ Jack Roslovic-2 No Goal (11) (4/5) (8/10) (0 Straight)
EDM Evan Bouchard No Goal (10) (4/5) (7/10) (0 Straight)
EDM Leon Draisaitl Goal (10) (3/5) (6/10) (1 Straight)
NYR Alexis Lafreniere No Goal (10) (3/5) (6/10) (1 Straight)
CBJ Kirill Marchenko No Goal (10) (3/5) (7/10) (0 Straight)
EDM Ryan Nugent-Hopkins No Goal (10) (4/5) (7/10) (0 Straight)
STL Pavel Buchnevich No Goal (9) (2/5) (6/10) (0 Straight)
CBJ Boone Jenner No Goal (9) (3/5) (4/10) (2 Straight)
CBJ Dmitri Voronkov No Goal (8) (2/5) (5/10) (0 Straight)
NYR Artemi Panarin No Goal (7) (5/5) (10/10) (0 Straight)`;

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

