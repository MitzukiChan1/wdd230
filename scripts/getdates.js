
function setCurrentYear() {
    const year = new Date().getFullYear();
    document.getElementById('currentYear').textContent = year;
}


function setLastModifiedDate() {
    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = 'Last Updated: ' + lastModified;
}


setCurrentYear();
setLastModifiedDate();