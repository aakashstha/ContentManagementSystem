
const Url = "http://127.0.0.1:8001/Courses/"
// const Url = "https://jsonplaceholder.typicode.com/users"
// el.username

axios.get(Url)
    .then((response) => {
        generateCourses(response);
    })
    .then(error => console.log(error))


axios.get("http://127.0.0.1:8001/Events/")
    .then((response) => {
        generateEvents(response);
    })
    .then(error => console.log(error))


// For Getting Courses
function generateCourses(response) {
    let courses_available = document.getElementById("courses_available");
    let courses_coming_soon = document.getElementById("courses_coming_soon");
    let available = '';
    let coming_soon = '';

    console.log("aklsdfjjasdfasdfdl");

    response.data.forEach(el => {
        console.log(el.Coursename);
        if (el.Availabilty) {
            available += `
            <div class="course">
                <h1 class="course_name">
                ${el.Coursename}
                </h1>
                <p class="sub_course_name">${el.Coursefullform}</p>
            </div>`
        } else {
            coming_soon += `
            <div class="course">
                <h1 class="course_name">
                ${el.Coursename}
                </h1>
                <p class="sub_course_name">${el.Coursefullform}</p>
            </div>`
        }

    })

    courses_available.insertAdjacentHTML('afterbegin', available)
    courses_coming_soon.insertAdjacentHTML('afterbegin', coming_soon)
}


// For Getting Events
function generateEvents(response) {
    let events = document.getElementById("all_events");
    let all_events = '';
    let day;
    let month;
    let year;
    response.data.forEach(el => {
        day = el.Date.substr(8, 2);
        month = el.Date.substr(5, 2);
        year = el.Date.substr(0, 4);;
        all_events += `
    <div class="individual_event">
        <div class="event_titles">
            <h1>${el.Eventname}</h1>
            <p>${el.Eventdescription}</p>
        </div>
        <div class="data">
            <h1>${day}</h1>
            <h2>${month}</h2>
            <h2>${year}</h2>
        </div>
    </div>`

    })

    events.insertAdjacentHTML('afterbegin', all_events)
}