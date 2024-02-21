// Paste the contents into this variable as a multiline string
const contentText = `BOS Jake DeBrusk To record 1+ shots (96.30%) (31.48%)
BUF Alex Tuch To record 1+ shots (95.83%) (27.08%)
MTL Nick Suzuki To record 1+ shots (94.64%) (32.14%)
TOR Mitchell Marner To record 1+ shots (94.55%) (25.45%)
EDM Ryan Nugent-Hopkins To record 1+ shots (94.23%) (36.54%)
PHI Morgan Frost To record 1+ shots (93.33%) (35.56%)
CHI Seth Jones To record 1+ shots (92.68%) (36.59%)
EDM Evan Bouchard To record 1+ shots (92.31%) (25.00%)
ARI Nick Bjugstad To record 1+ shots (90.91%) (38.18%)
BOS Charles McAvoy To record 1+ shots (89.58%) (31.25%)
PHI Travis Konecny To record 2+ shots (89.47%) (24.56%)
ANA Adam Henrique To record 1+ shots (88.89%) (33.33%)
ARI Dylan Guenther To record 1+ shots (88.89%) (33.33%)
CBJ Zachary Werenski To record 2+ shots (87.80%) (41.46%)
CHI Nick Foligno To record 1+ shots (87.76%) (30.61%)
BUF Tage Thompson To record 2+ shots (86.67%) (26.67%)
EDM Darnell Nurse To record 1+ shots (86.54%) (25.00%)
ANA Leo Carlsson To record 1+ shots (86.11%) (27.78%)
CBJ Cole Sillinger To record 1+ shots (85.42%) (31.25%)
TOR Max Domi To record 1+ shots (85.19%) (44.44%)
MTL Alex Newhook To record 1+ shots (85.19%) (40.74%)
EDM Connor McDavid To record 2+ shots (84.62%) (28.85%)
MTL Cole Caufield To record 2+ shots (83.33%) (16.67%)
MTL Josh Anderson To record 1+ shots (82.00%) (24.00%)
CBJ Johnny Gaudreau To record 1+ shots (81.13%) (26.42%)
CBJ Dmitri Voronkov To record 1+ shots (80.85%) (31.91%)
PHI Sean Couturier To record 2+ shots (80.77%) (32.69%)
CBJ Yegor Chinakhov To record 1+ shots (80.49%) (26.83%)
CBJ Boone Jenner To record 2+ shots (80.00%) (27.50%)
BUF Casey Mittelstadt To record 1+ shots (80.00%) (29.09%)
BOS Brad Marchand To record 2+ shots (78.57%) (28.57%)
PHI Cam Atkinson To record 2+ shots (78.18%) (23.64%)
CBJ Kirill Marchenko To record 2+ shots (76.47%) (27.45%)
ARI Logan Cooley To record 1+ shots (76.36%) (30.91%)
EDM Leon Draisaitl To record 2+ shots (75.93%) (29.63%)
CHI Tyler Johnson To record 1+ shots (75.61%) (29.27%)
BUF Jordan Greenway To record 1+ shots (74.42%) (37.21%)
MTL Juraj Slafkovsky To record 1+ shots (74.07%) (27.78%)
TOR Bobby McMann To record 1+ shots (73.33%) (30.00%)
EDM Zach Hyman To record 3+ shots (72.55%) (25.49%)
ANA Mason McTavish To record 2+ shots (72.34%) (38.30%)
MTL Michael Matheson To record 2+ shots (72.22%) (25.93%)
PHI Owen Tippett To record 3+ shots (71.15%) (19.23%)
BOS David Pastrnak To record 4+ shots (70.69%) (18.97%)
BUF Dylan Cozens To record 2+ shots (69.23%) (26.92%)
BOS James van-Riemsdyk To record 2+ shots (69.23%) (32.69%)
EDM Warren Foegele To record 2+ shots (67.31%) (34.62%)
ARI Lawson Crouse To record 2+ shots (64.81%) (22.22%)
PHI Scott Laughton To record 2+ shots (64.29%) (28.57%)
ANA Alex Killorn To record 2+ shots (63.89%) (25.00%)
ANA Troy Terry To record 2+ shots (63.46%) (26.92%)
MTL Brendan Gallagher To record 2+ shots (63.27%) (32.65%)
EDM Evander Kane To record 3+ shots (62.75%) (27.45%)
ARI Jason Zucker To record 2+ shots (62.22%) (37.78%)
CHI Connor Bedard To record 3+ shots (61.90%) (26.19%)
ARI Sean Durzi To record 2+ shots (61.22%) (38.78%)
TOR John Tavares To record 4+ shots (59.62%) (32.69%)
BOS Pavel Zacha To record 2+ shots (59.62%) (28.85%)
BUF Rasmus Dahlin To record 3+ shots (58.93%) (23.21%)
TOR William Nylander To record 4+ shots (58.93%) (23.21%)
TOR Auston Matthews To record 4+ shots (58.18%) (20.00%)
BUF John-Jason Peterka To record 3+ shots (58.18%) (23.64%)
TOR Tyler Bertuzzi To record 2+ shots (56.60%) (30.19%)
ARI Clayton Keller To record 3+ shots (54.39%) (24.56%)
ANA Ryan Strome To record 2+ shots (51.92%) (30.77%)
ANA Frank Vatrano To record 4+ shots (46.43%) (25.00%)
MTL Joel Armia To record 3+ shots (44.74%) (34.21%)
PHI Joel Farabee To record 3+ shots (44.64%) (28.57%)
BUF Jeff Skinner To record 4+ shots (42.55%) (21.28%)
ARI Nick Schmaltz To record 3+ shots (38.46%) (25.00%)`;

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

