var mynew = document.getElementById("demo");
const Url = "http://127.0.0.1:8001/Courses/"

axios.get(Url)
    .then((response) => {
        generate(response);
    })
    .then(error => console.log(error))


function generate(response) {
    let output = '';
    response.data.forEach(el => {
        output += `<h2 class="my">${el.id}</h2>`
    })
    
    mynew.insertAdjacentHTML('afterbegin', output)
}