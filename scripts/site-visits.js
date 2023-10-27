// Create a key
const VISITS_KEY = 'site-visits'

function getSiteVisits() {
    // Check to see if the key exists in the local storage.
    let currentValue = localStorage.getItem(VISITS_KEY)
    let siteVisits = 1

    // If the key doesn't exist, initialize the key to 1.
    if (currentValue != null) {   
    // If key does exist add one to the current value.
        siteVisits = parseInt(currentValue) + 1
    }
    // Save the new value for current visits.
    localStorage.setItem(VISITS_KEY, `${siteVisits}`)
    return siteVisits
}
// Update hte HTML page with current visits.
document.getElementById("visitcount").textContent = `${getSiteVisits()}`