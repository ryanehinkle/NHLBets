// Paste the contents into this variable as a multiline string
const contentText = `NYR Alexis Lafreniere Over 2.5 (17) (5/5) (9/10) (5 Straight)
EDM Ryan Nugent-Hopkins Under 2.5 (17) (5/5) (8/10) (6 Straight)
CBJ Jack Roslovic-2 Over 1.5 (16) (5/5) (7/10) (6 Straight)
EDM Connor McDavid Under 3.5 (13) (3/5) (8/10) (2 Straight)
NYR Artemi Panarin Under 3.5 (13) (4/5) (9/10) (4 Straight)
CBJ Johnny Gaudreau Under 2.5 (12) (3/5) (6/10) (3 Straight)
CBJ Boone Jenner Over 2.5 (12) (4/5) (7/10) (2 Straight)
STL Torey Krug Over 1.5 (12) (3/5) (7/10) (2 Straight)
STL Jordan Kyrou Under 2.5 (11) (4/5) (7/10) (4 Straight)
CBJ Zachary Werenski Over 2.5 (11) (3/5) (7/10) (1 Straight)
STL Justin Faulk Over 1.5 (11) (3/5) (5/10) (3 Straight)
CBJ Dmitri Voronkov Over 1.5 (11) (4/5) (6/10) (2 Straight)
EDM Evan Bouchard Over 2.5 (10) (2/5) (6/10) (1 Straight)
EDM Warren Foegele Under 2.5 (10) (2/5) (6/10) (1 Straight)
STL Brayden Schenn Over 1.5 (10) (3/5) (6/10) (1 Straight)
NYR Jacob Trouba Over 1.5 (10) (1/5) (6/10) (1 Straight)
EDM Evander Kane Over 3.5 (9) (3/5) (6/10) (3 Straight)
CBJ Kirill Marchenko Over 2.5 (9) (2/5) (5/10) (1 Straight)
EDM Darnell Nurse Under 2.5 (9) (2/5) (6/10) (0 Straight)
NYR Chris Kreider Under 3.5 (8) (3/5) (5/10) (0 Straight)
NYR Vincent Trocheck Under 3.5 (8) (2/5) (5/10) (0 Straight)
CBJ Yegor Chinakhov Under 2.5 (8) (1/5) (4/10) (1 Straight)
NYR Mika Zibanejad Under 2.5 (8) (1/5) (5/10) (0 Straight)
EDM Mattias Ekholm Over 1.5 (8) (3/5) (5/10) (0 Straight)
EDM Zach Hyman Under 3.5 (7) (0/5) (0/10) (1 Straight)
STL Pavel Buchnevich Under 2.5 (7) (2/5) (6/10) (0 Straight)
EDM Leon Draisaitl Under 2.5 (7) (1/5) (4/10) (0 Straight)
NYR Adam Fox Under 1.5 (7) (3/5) (5/10) (0 Straight)`;

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
        const tooltipText = `Hit the ${prop} in:\n${outof5} of last five games\n${outof10} of last ten games\n${streak} straight games`;

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

