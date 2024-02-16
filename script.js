    // Function to fetch content from text file
    function fetchContent() {
        fetch('finalBestBets.txt')
        .then(response => response.text())
        .then(text => {
            document.getElementById('content').innerHTML = text;
        })
        .catch(error => console.error('Error fetching content:', error));
    }

    // Function to get current date
    function getCurrentDate() {
        const now = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return now.toLocaleDateString('en-US', options);
    }

    // Set date and fetch content on page load
    window.onload = function() {
        document.getElementById('date').innerText = getCurrentDate();
        fetchContent();
    };