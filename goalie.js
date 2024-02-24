// Paste the contents into this variable as a multiline string
const contentText = `LAK Cam Talbot 24 Saves downward (1) (27) (17) (#28)
BOS Jeremy Swayman 29 Saves downward (3) (29) (34) (#27)
TOR Ilya Samsonov 28 Saves upward (4) (25) (25) (#9)
MTL Jake Allen 31 Saves upward (7) (33) (33) (#15)
NYI Ilya Sorokin 31 Saves downward (8) (34) (33) (#22)
MIN Marc-Andre Fleury 26 Saves downward (9) (26) (22) (#23)
VAN Thatcher Demko 29 Saves upward (11) (29) (27) (#20)
VGK Adin Hill 29 Saves stable (11) (28) (27) (#8)
CAR Pyotr Kochetkov 28 Saves upward (12) (24) (29) (#13)
NJD Nicolas Daws 28 Saves downward (13) (29) (30) (#26)
DET Alex Lyon 29 Saves downward (14) (30) (30) (#25)
CGY Jacob Markstrom 30 Saves downward (15) (29) (28) (#3)
PHI Samuel Ersson 29 Saves stable (16) (24) (28) (#10)
SEA Joey Daccord 30 Saves downward (17) (29) (33) (#19)
OTT Anton Forsberg 27 Saves downward (18) (25) (26) (#16)
DAL Jake Oettinger 28 Saves stable (21) (27) (24) (#7)
STL Jordan Binnington 30 Saves upward (23) (30) (34) (#24)
WSH Charlie Lindgren 30 Saves stable (24) (28) (26) (#1)
SJS Kaapo Kahkonen 32 Saves upward (24) (31) (39) (#18)
EDM Stuart Skinner 29 Saves upward (25) (26) (30) (#12)
COL Alexander Georgiev 30 Saves upward (26) (27) (30) (#5)
NSH Juuse Saros 27 Saves upward (29) (28) (32) (#32)
TBL Andrei Vasilevskii 29 Saves downward (32) (27) (28) (#14)
FLA Sergei Bobrovsky 27 Saves upward (33) (26) (30) (#29)
ANA John Gibson 28 Saves upward (33) (27) (22) (#4)
NYR Igor Shesterkin 32 Saves upward (37) (27) (36) (#2)`;

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

