let btn = document.getElementById('btn-request');


btn.onclick = function() {
    fetch('https://randomuser.me/api/?results=5000')
    .then(response => response.json())
    .then(data => {

        let div = '';

        data.results.forEach(user => {

            div += `
            <div class="col-lg-3 col-6">
            <div class="card">
                <img src=${user.picture.medium} class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${user.name.first} ${user.name.last}</h5>
                  <p class="card-text">${user.email}</p>
                  <p class="card-text">${user.location.city} / ${user.location.country}</p>
                  <a href="">${user.phone}</a>
                </div>
              </div>
            </div>
            `
        })

        document.getElementById('list').innerHTML = div
    })
    .catch(error => console.log(error))
}

let btn2 = document.getElementById('btn-request2')