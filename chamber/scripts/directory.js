const url = "./data/members.json";

const displayBusinesses = (businesss) => {
    const cards = document.querySelector(".directory-cards");

    businesss.forEach((business) => {
        let card = document.createElement("section");
        card.innerHTML = `
        <img src="${business.imageURL}">
        <p>${business.name}</p>
        <p>${business.phonenumber}</p>
        <p>${business.streetAddress}</p>
        <p>${business.cityStateZip}</p>
        <p><a class="card-button" href="${business.websiteURL}">Website</a></p>
        `;
        if (business.membershipLevel=='gold'){
            card.classList.add('gold-member');
        }
        cards.appendChild(card);
    });
};

async function getProphetData() {
    const response = await fetch(url);
    if (response.ok){
        const data = await response.json();
        displayBusinesses(data.members);
    }
    else {
        console.error("There was an error loading the data.");
        const cards = document.querySelector("directory-cards");
        cards.innerHTML = "<section><h1>There was an error loading the data</h1></section>";
      }
  }
  
  getProphetData();