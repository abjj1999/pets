// let dogBreeds = []

// // This function is called when the page loads
// function getFromLocalStorage() {
//     // If there is nothing in localStorage, initialize the dogBreeds variable as an empty array
//     if (!localStorage.getItem("dogBreeds")) {
//         dogBreeds = []
//     }
//     // Otherwise, retrieve the dogBreeds array from localStorage
//     else {
//         dogBreeds = JSON.parse(localStorage.getItem("dogBreeds"))
//     }
// }

// getFromLocalStorage()

function stars (rating) {
    if (rating === "Low" || rating === 1 ) {
        return `
        <i id="icon" class="fa-solid fa-star"></i>
        <i id="icon" class="fa-regular fa-star"></i>
        <i id="icon" class="fa-regular fa-star"></i>
        <i id="icon" class="fa-regular fa-star"></i>
        <i id="icon" class="fa-regular fa-star"></i>
        `
    }
    else if ( rating === "Moderate" || rating === 2) {
        return `
        <i id="icon" class="fa-solid fa-star"></i>
        <i id="icon" class="fa-solid fa-star"></i>
        <i id="icon" class="fa-regular fa-star"></i>
        <i id="icon" class="fa-regular fa-star"></i>
        <i id="icon" class="fa-regular fa-star"></i>
        `

    }
    else if (rating === "Medium" || rating === 3) {
        return `
        <i id="icon" class="fa-solid fa-star"></i>
        <i id="icon" class="fa-solid fa-star"></i>
        <i id="icon" class="fa-solid fa-star"></i>
        <i id="icon" class="fa-regular fa-star"></i>
        <i id="icon" class="fa-regular fa-star"></i>
        `
    }
    else if (rating === "High" || rating === 4) {
        return `
        <i id="icon" class="fa-solid fa-star"></i>
        <i id="icon" class="fa-solid fa-star"></i>
        <i id="icon" class="fa-solid fa-star"></i>
        <i id="icon" class="fa-solid fa-star"></i>
        <i id="icon" class="fa-solid fa-star"></i>
        `
    }
    else {
        return rating;
    }


}

function convertSize(rating){
    if (rating === 1 ) {
        return "Small"
}
    else if ( rating === 2) {
        return "Medium"
    }
    else if (rating === 3) {
        return "Large"
    }
    else if (rating === 4) {
        return "Giant"
    }
    else {
        return rating;
    }
}

function convertWeight(rating){
    if (rating === 1 ) {
        return "0-20 lbs"
}
    else if ( rating === 2) {
        return "21-50 lbs"
    }
    else if (rating === 3) {
        return "51-70 lbs"
    }
    else if (rating === 4) {
        return "71-110 lbs"
    }
    
    else {
        return rating;
    }

}

document.addEventListener("DOMContentLoaded", function() {
    
    var pageSize = 3;
    var currentPage = 1;
    console.log(dogBreeds)
    function showPage(page) {
        var dogBreedList = document.getElementById("dogBreedList");
        dogBreedList.innerHTML = '';
        for (var i = (page-1) * pageSize; i < page * pageSize && i < dogBreeds.length; i++) {
           var div = document.createElement('div');
              div.className = 'col-xxl-3 col-xl-4 col-lg-4 col-md-5 col-sm-8 p-4 card_div';
              const card = `
              <div class="card card_bg" style="">
                <h4 class="card-title text-center primary_font mt-2">${dogBreeds[i].breed}</h1>
                <div class="card_img">
                    <img src="./assets/imgs/doggo.jpg" class="card-img-top img_class" alt="...">
                </div>
                <div class="card-body secondary_font fw-semibold gap-2">
                    <p class="card-text">Size: ${convertSize(dogBreeds[i].size)}</p>
                    <p class="card-text">Weight: ${convertWeight(dogBreeds[i].weight)}</p>
                    <p class="card-text ">Shedding: ${stars(dogBreeds[i].shedding)}</p>
                    <p class="card-text">Life Expectancy: ${dogBreeds[i].life_expectancy}</p>
                    <p class="card-text">Barking: ${stars(dogBreeds[i].barking)}</p>
                    <p class="card-text">Energy: ${stars(dogBreeds[i].energy)}</p>
                    <p class="card-text">Trainability: ${stars(dogBreeds[i].trainability)}</p>
                    <p class="card-text">Protectiveness: ${stars(dogBreeds[i].protectiveness)}</p>
                    </div>
            </div>
              `
                div.innerHTML = card;
                dogBreedList.appendChild(div);
              
        }
    }

    function setupPagination() {
        var pagination = document.getElementById("pagination");
        pagination.innerHTML = '';
        for (var i = 1; i <= Math.ceil(dogBreeds.length / pageSize); i++) {
            var li = document.createElement('li');
            li.className = 'page-item' + (i === currentPage ? 'underline' : '');
            var a = document.createElement('a');
            a.className = 'p_btns page-link' +(i === currentPage ? ' active_t' : '');;
            a.href = '#';
            a.textContent = i;

            a.addEventListener('click', function(e) {
                e.preventDefault();
                currentPage = parseInt(this.textContent);
                showPage(currentPage);
                setupPagination();
            });

            li.appendChild(a);
            pagination.appendChild(li);
        }
    }

    showPage(currentPage);
    setupPagination();
});