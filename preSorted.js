// Paste the contents into this variable as a multiline string
const contentText = `SEA Jaden Schwartz To record 1+ shots (97.56%) (39.02%)
BOS Jake DeBrusk To record 1+ shots (94.74%) (29.82%)
OTT Jakob Chychrun To record 1+ shots (94.55%) (29.09%)
DAL Joe Pavelski To record 1+ shots (93.22%) (27.12%)
SEA Oliver Bjorkstrand To record 1+ shots (93.10%) (29.31%)
WSH Tom Wilson To record 1+ shots (92.86%) (30.36%)
LAK Phillip Danault To record 1+ shots (92.86%) (32.14%)
EDM Ryan Nugent-Hopkins To record 1+ shots (92.59%) (37.04%)
OTT Drake Batherson To record 1+ shots (90.91%) (30.91%)
EDM Evan Bouchard To record 1+ shots (90.91%) (23.64%)
DAL Wyatt Johnston To record 1+ shots (89.83%) (23.73%)
BOS Charles McAvoy To record 1+ shots (88.24%) (31.37%)
NYI Noah Dobson To record 1+ shots (87.72%) (22.81%)
WSH Dylan Strome To record 1+ shots (87.50%) (25.00%)
EDM Darnell Nurse To record 1+ shots (87.27%) (25.45%)
NYI Bo Horvat To record 2+ shots (85.71%) (26.79%)
EDM Connor McDavid To record 2+ shots (85.45%) (29.09%)
OTT Vladimir Tarasenko To record 1+ shots (84.91%) (28.30%)
LAK Adrian Kempe To record 2+ shots (83.93%) (28.57%)
DAL Thomas Harley To record 1+ shots (83.93%) (28.57%)
OTT Jake Sanderson To record 1+ shots (82.69%) (26.92%)
SEA Matty Beniers To record 1+ shots (82.69%) (26.92%)
LAK Pierre-Luc Dubois To record 1+ shots (82.14%) (25.00%)
NYI Mathew Barzal To record 2+ shots (81.03%) (24.14%)
NYI Pierre Engvall To record 1+ shots (80.39%) (25.49%)
BOS Brad Marchand To record 2+ shots (77.97%) (28.81%)
EDM Leon Draisaitl To record 2+ shots (77.19%) (33.33%)
SEA Andre Burakovsky To record 1+ shots (76.92%) (34.62%)
OTT Claude Giroux To record 2+ shots (76.36%) (27.27%)
DAL Jason Robertson To record 2+ shots (76.27%) (30.51%)
WSH Alex Ovechkin To record 3+ shots (75.47%) (30.19%)
DAL Jamie Benn To record 1+ shots (74.58%) (27.12%)
LAK Kevin Fiala To record 2+ shots (73.21%) (23.21%)
SEA Jared McCann To record 2+ shots (73.21%) (23.21%)
OTT Joshua Norris To record 2+ shots (72.92%) (33.33%)
OTT Thomas Chabot To record 2+ shots (72.73%) (27.27%)
OTT Tim Stutzle To record 2+ shots (72.73%) (27.27%)
EDM Zach Hyman To record 3+ shots (72.22%) (24.07%)
BOS David Pastrnak To record 4+ shots (72.13%) (19.67%)
NYI Brock Nelson To record 3+ shots (70.18%) (28.07%)
EDM Warren Foegele To record 2+ shots (69.09%) (32.73%)
BOS James van-Riemsdyk To record 2+ shots (69.09%) (30.91%)
LAK Quinton Byfield To record 2+ shots (68.52%) (33.33%)
SEA Vince Dunn To record 2+ shots (67.92%) (32.08%)
OTT Brady Tkachuk To record 4+ shots (67.86%) (32.14%)
DAL Matt Duchene To record 2+ shots (66.67%) (29.82%)
DAL Miro Heiskanen To record 2+ shots (66.67%) (25.00%)
DAL Roope Hintz To record 2+ shots (66.67%) (26.32%)
NYI Anders Lee To record 2+ shots (66.67%) (26.32%)
NYI Mike Reilly-2 To record 2+ shots (66.67%) (27.78%)
NYI Kyle Palmieri To record 2+ shots (64.91%) (24.56%)
EDM Evander Kane To record 3+ shots (62.96%) (25.93%)
WSH John Carlson To record 2+ shots (62.50%) (26.79%)
LAK Alex Laferriere To record 2+ shots (61.82%) (34.55%)
BOS Pavel Zacha To record 2+ shots (61.82%) (29.09%)
SEA Eeli Tolvanen To record 2+ shots (57.89%) (26.32%)
WSH Max Pacioretty To record 3+ shots (52.38%) (28.57%)
LAK Trevor Moore To record 4+ shots (42.86%) (23.21%)
OTT Shane Pinto To record 4+ shots (42.86%) (28.57%)
SEA Jordan Eberle To record 3+ shots (41.51%) (28.30%)
SEA Yanni Gourde To record 3+ shots (40.00%) (27.27%)
DAL Mason Marchment To record 0+ shots (25.86%) (25.86%)`;

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

