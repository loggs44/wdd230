const LAST_VISIT_DATE_KEY = 'last-visit'
const DAY_IN_MILLIS = 24*60*60*1000;

// Get site visit information
function getDiscoverMessage(){
    let message = "Welcome! Enjoy the landscapes of Story Brooke!"
    let lastVisitValue = localStorage.getItem(LAST_VISIT_DATE_KEY)
    let today = new Date();
    if (lastVisitValue != null){
        lastVisit = parseInt(lastVisitValue)
        daysSinceLastVisit = Math.floor((today - lastVisit) / DAY_IN_MILLIS)
        if (daysSinceLastVisit == 0){
            message = "Glad to see you back so soon!"
        }
        else{
            if (daysSinceLastVisit == 1){
                message = "You last visited 1 day ago."
            }
            else{
                message = `You last visited ${daysSinceLastVisit} days ago.`
            }
            
        }
    }
    localStorage.setItem(LAST_VISIT_DATE_KEY, `${today.getTime()}`)
    return message;
}


// Set the message
document.querySelector("#discover-message h3").textContent = getDiscoverMessage()