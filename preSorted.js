// Paste the contents into this variable as a multiline string
const contentText = `BUF Alex Tuch To record 1+ shots (95.92%) (26.53%)
WPG Nikolaj Ehlers To record 1+ shots (94.44%) (20.37%)
MIN Mats Zuccarello To record 1+ shots (93.62%) (27.66%)
CHI Seth Jones To record 1+ shots (92.86%) (35.71%)
EDM Evan Bouchard To record 1+ shots (92.45%) (24.53%)
WPG Sean Monahan To record 1+ shots (90.91%) (29.09%)
CBJ Zachary Werenski To record 2+ shots (88.10%) (42.86%)
CHI Philipp Kurashev To record 1+ shots (88.00%) (34.00%)
WPG Kyle Connor To record 2+ shots (87.18%) (20.51%)
BUF Tage Thompson To record 2+ shots (86.96%) (26.09%)
EDM Darnell Nurse To record 1+ shots (86.79%) (24.53%)
MIN Kirill Kaprizov To record 2+ shots (86.00%) (26.00%)
CHI Nick Foligno To record 1+ shots (86.00%) (30.00%)
EDM Connor McDavid To record 2+ shots (84.91%) (28.30%)
MIN Marco Rossi To record 1+ shots (83.93%) (25.00%)
MIN Matthew Boldy To record 2+ shots (81.63%) (28.57%)
CBJ Johnny Gaudreau To record 1+ shots (81.48%) (25.93%)
CBJ Yegor Chinakhov To record 1+ shots (80.95%) (26.19%)
CBJ Boone Jenner To record 2+ shots (80.49%) (29.27%)
BUF Casey Mittelstadt To record 1+ shots (80.36%) (30.36%)
CBJ Dmitri Voronkov To record 1+ shots (79.17%) (31.25%)
MIN Joel Eriksson-Ek To record 3+ shots (76.79%) (25.00%)
EDM Leon Draisaitl To record 2+ shots (76.36%) (30.91%)
CHI Tyler Johnson To record 1+ shots (76.19%) (28.57%)
CBJ Kirill Marchenko To record 2+ shots (75.00%) (26.92%)
BUF Jordan Greenway To record 1+ shots (75.00%) (38.64%)
EDM Zach Hyman To record 3+ shots (73.08%) (25.00%)
CBJ Jack Roslovic-2 To record 1+ shots (71.88%) (31.25%)
BUF Dylan Cozens To record 2+ shots (69.81%) (28.30%)
EDM Warren Foegele To record 2+ shots (67.92%) (33.96%)
CHI Connor Bedard To record 3+ shots (62.79%) (27.91%)
BUF Jeff Skinner To record 3+ shots (62.50%) (20.83%)
EDM Evander Kane To record 3+ shots (61.54%) (26.92%)
BUF Rasmus Dahlin To record 3+ shots (57.89%) (22.81%)
BUF John-Jason Peterka To record 3+ shots (57.14%) (23.21%)
WPG Gabriel Vilardi To record 3+ shots (52.94%) (23.53%)
WPG Mark Scheifele To record 3+ shots (52.08%) (37.50%)
MIN Brock Faber To record 2+ shots (51.79%) (33.93%)
WPG Joshua Morrissey To record 3+ shots (48.15%) (25.93%)
MIN Ryan Hartman To record 3+ shots (47.06%) (27.45%)`;

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
        //const firstname = lineElements[0].toLowerCase(); // First name (assumed to be the first word)
        //const lastname = lineElements[1].toLowerCase(); // Last name (assumed to be the second word)
        
        // Construct the player statistics URL
        //const playerStatsURL = `https://www.foxsports.com/nhl/${firstname}-${lastname}-player-game-log?season=2023&seasonType=reg`;

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
        //const prop = lineElements[2].toString().toLowerCase();
        //const outof5 = lineElements[5].split('/')[0].slice(1);
        //const outof10 = lineElements[6].split('/')[0].slice(1);
        //const streak = lineElements[7].slice(1);
        //const tooltipText = `Hit the ${prop} in:\n${outof5} of last five games\n${outof10} of last ten games\n${streak} straight games`;

        // Add tooltip
        //lineContainer.setAttribute('title', tooltipText);

        // Add click event listener to open player statistics URL in a new page
        //lineContainer.addEventListener('click', function() {
            //window.open(playerStatsURL, '_blank');
        //});

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

