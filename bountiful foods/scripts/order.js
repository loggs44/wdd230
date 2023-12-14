const url = "./data/fruit-data.json";

fetch(url)
    .then(response => response.json())
    .then(data => {
        const fruitSelects = document.querySelectorAll('select[name^="fruit"]');
        fruitSelects.forEach(select => {
            data.forEach(fruit => {
                const option = document.createElement('option');
                option.value = fruit.name;
                option.textContent = fruit.name;
                select.appendChild(option);
            });
        });
    })
    .catch(error => console.error('Error fetching fruits:', error));