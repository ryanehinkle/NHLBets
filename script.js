// Paste the contents into this variable as a multiline string
const contentText = `LAK Quinton Byfield Over 1.5 (26) (5/5) (10/10) (13 Straight)
NYI Bo Horvat Over 2.5 (21) (5/5) (9/10) (9 Straight)
COL Cale Makar Under 3.5 (15) (4/5) (8/10) (4 Straight)
PIT Reilly Smith Over 1.5 (15) (5/5) (7/10) (5 Straight)
NYR Jacob Trouba Over 1.5 (15) (5/5) (7/10) (5 Straight)
ARI Lawson Crouse Over 1.5 (15) (5/5) (7/10) (5 Straight)
NYR Artemi Panarin Under 2.5 (14) (5/5) (8/10) (6 Straight)
NYI Anders Lee Under 2.5 (14) (5/5) (6/10) (5 Straight)
NYI Brock Nelson Over 2.5 (14) (4/5) (8/10) (3 Straight)
COL Ross Colton Under 2.5 (13) (3/5) (7/10) (3 Straight)
PIT Kris Letang Under 2.5 (13) (4/5) (7/10) (3 Straight)
PIT Rickard Rakell Under 2.5 (13) (4/5) (8/10) (2 Straight)
LAK Adrian Kempe Over 2.5 (12) (3/5) (7/10) (2 Straight)
NYR Adam Fox Under 1.5 (12) (5/5) (7/10) (5 Straight)
COL Devon Toews Over 1.5 (12) (4/5) (6/10) (3 Straight)
COL Artturi Lehkonen Under 2.5 (11) (3/5) (7/10) (1 Straight)
LAK Trevor Moore Over 2.5 (11) (2/5) (6/10) (2 Straight)
NYI Kyle Palmieri Over 2.5 (11) (2/5) (6/10) (2 Straight)
NYR Mika Zibanejad Under 2.5 (11) (4/5) (8/10) (0 Straight)
ARI Nick Bjugstad Over 1.5 (11) (3/5) (6/10) (2 Straight)
ARI Sean Durzi Over 1.5 (11) (4/5) (5/10) (3 Straight)
PIT Lars Eller Over 1.5 (11) (4/5) (8/10) (0 Straight)
LAK Alex Laferriere Over 1.5 (11) (3/5) (7/10) (1 Straight)
COL Nathan MacKinnon Over 4.5 (10) (2/5) (5/10) (2 Straight)
PIT Sidney Crosby Under 3.5 (10) (4/5) (7/10) (3 Straight)
PIT Erik Karlsson Under 2.5 (10) (3/5) (7/10) (0 Straight)
ARI Nick Schmaltz Over 1.5 (10) (3/5) (7/10) (0 Straight)
ARI Jason Zucker Over 1.5 (10) (3/5) (7/10) (0 Straight)
COL Mikko Rantanen Under 3.5 (9) (1/5) (6/10) (0 Straight)
NYI Mathew Barzal Over 2.5 (9) (4/5) (6/10) (0 Straight)
LAK Kevin Fiala Under 2.5 (9) (3/5) (6/10) (3 Straight)
NYR Alexis Lafreniere Over 2.5 (9) (4/5) (6/10) (0 Straight)
PIT Bryan Rust Over 2.5 (9) (3/5) (5/10) (1 Straight)
NYR Vincent Trocheck Under 2.5 (9) (1/5) (6/10) (0 Straight)
LAK Pierre-Luc Dubois Over 1.5 (9) (3/5) (5/10) (1 Straight)
NYI Pierre Engvall Over 1.5 (9) (2/5) (6/10) (0 Straight)
NYR Chris Kreider Under 3.5 (8) (2/5) (5/10) (0 Straight)
NYI Noah Dobson Over 2.5 (8) (3/5) (6/10) (2 Straight)
ARI Clayton Keller Over 2.5 (8) (2/5) (5/10) (0 Straight)
PIT Evgeni Malkin Over 2.5 (8) (2/5) (4/10) (1 Straight)
COL Miles Wood Over 2.5 (8) (4/5) (6/10) (2 Straight)
LAK Phillip Danault Over 1.5 (8) (1/5) (5/10) (0 Straight)
COL Zach Parise Over 1.5 (8) (2/5) (3/10) (2 Straight)
LAK Viktor Arvidsson Over 2.5 (7) (2/5) (2/10) (2 Straight)
NYI Mike Reilly Under 1.5 (3) (0/5) (0/10) (0 Straight)`;

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

