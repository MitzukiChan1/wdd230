// Function to set the current year
function setCurrentYear() {
    const year = new Date().getFullYear();
    document.getElementById('currentYear').textContent = year;
}

// Function to set the last modified date
function setLastModifiedDate() {
    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = 'Last Updated: ' + lastModified;
}

// Call the functions to set the dates
setCurrentYear();
setLastModifiedDate();
