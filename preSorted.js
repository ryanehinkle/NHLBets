// Paste the contents into this variable as a multiline string
const contentText = `STL Torey Krug To record 1+ shots (94.83%) (36.21%)
EDM Ryan Nugent-Hopkins To record 1+ shots (92.73%) (36.36%)
EDM Evan Bouchard To record 1+ shots (91.07%) (23.21%)
STL Justin Faulk To record 1+ shots (90.24%) (31.71%)
STL Brayden Schenn To record 1+ shots (87.93%) (31.03%)
EDM Darnell Nurse To record 1+ shots (87.50%) (25.00%)
NYR Vincent Trocheck To record 1+ shots (86.67%) (20.00%)
CBJ Zachary Werenski To record 2+ shots (86.36%) (40.91%)
NYR Chris Kreider To record 2+ shots (86.21%) (34.48%)
NYR Artemi Panarin To record 2+ shots (86.21%) (20.69%)
EDM Connor McDavid To record 2+ shots (85.71%) (28.57%)
EDM Mattias Ekholm To record 1+ shots (85.45%) (30.91%)
CBJ Yegor Chinakhov To record 1+ shots (81.82%) (27.27%)
CBJ Boone Jenner To record 2+ shots (81.40%) (27.91%)
CBJ Johnny Gaudreau To record 1+ shots (80.36%) (26.79%)
CBJ Dmitri Voronkov To record 1+ shots (80.00%) (30.00%)
EDM Leon Draisaitl To record 2+ shots (77.59%) (32.76%)
NYR Adam Fox To record 1+ shots (77.08%) (25.00%)
CBJ Kirill Marchenko To record 2+ shots (75.93%) (27.78%)
CBJ Jack Roslovic-2 To record 1+ shots (73.53%) (29.41%)
EDM Zach Hyman To record 3+ shots (72.73%) (25.45%)
EDM Warren Foegele To record 2+ shots (67.86%) (32.14%)
EDM Evander Kane To record 3+ shots (63.64%) (25.45%)
STL Pavel Buchnevich To record 3+ shots (57.14%) (30.36%)
NYR Jacob Trouba To record 2+ shots (57.14%) (37.50%)
STL Jordan Kyrou To record 3+ shots (56.90%) (27.59%)
NYR Alexis Lafreniere To record 3+ shots (56.90%) (31.03%)
NYR Mika Zibanejad To record 3+ shots (49.12%) (22.81%)`;

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

