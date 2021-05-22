
// This section is for Admin Panel control
axios.get("http://127.0.0.1:8001/Courses/")
    .then((response) => {
        generateCourses(response);
    })
    .then(error => console.log(error))

axios.get("http://127.0.0.1:8001/Events/")
    .then((response) => {
        generateEvents(response);
    })
    .then(error => console.log(error))

axios.get("http://127.0.0.1:8001/Gallery/")
    .then((response) => {
        generateImages(response);
    })
    .then(error => console.log(error))

// For Getting Courses
function generateCourses(response) {

    let all_courses_available = document.getElementById("all_courses_available");
    let all_courses = '';
    response.data.forEach(el => {
        all_courses += `
            <div class="course">
                <h1 class="course_name">
                ${el.Coursename}
                </h1>
                <div class="sub_course_part">
                    <p>${el.Coursefullform}</p>
                    <p>Availability = ${el.Availabilty}</p>
                    <p>Id = ${el.id}</p>
                </div>
            </div>`
    })

    all_courses_available.insertAdjacentHTML('afterbegin', all_courses)

}

// For Posting Courses
function postCourses() {
    let course_name = document.getElementById("course_name").value;
    let course_full_form = document.getElementById("course_full_form").value;
    let radios = document.getElementsByName("select");
    let available;

    if (radios[0].checked) {
        available = 'true';
    } else {
        available = 'false'
    }
    axios.post("http://127.0.0.1:8001/Courses/", {
        "Coursename": course_name,
        "Coursefullform": course_full_form,
        "Availabilty": available
    }).then((response) => {
    }).then(error => console.log(error))
}

// For Updating Courses
function updateCourses() {
    let course_id = document.getElementById("u_course_id").value;
    let course_name = document.getElementById("u_course_name").value;
    let course_full_form = document.getElementById("u_course_full_form").value;
    let radios = document.getElementsByName("select_u");
    let available;

    if (radios[0].checked) {
        available = 'true';
    } else {
        available = 'false'
    }
    axios.put("http://127.0.0.1:8001/Courses/" + course_id + "/", {
        "Coursename": course_name,
        "Coursefullform": course_full_form,
        "Availabilty": available
    }).then((response) => {
    }).then(error => console.log(error))
}

// For Deleting Courses
function deleteCourses() {
    let course_id = document.getElementById("d_course_id").value;

    axios.delete("http://127.0.0.1:8001/Courses/" + course_id + "/", {
    }).then((response) => {
    }).then(error => console.log(error))
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
            <p class="id">Id = ${el.id}</p>
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

// For Posting Events
function postEvents() {
    let event_name = document.getElementById("event_name").value;
    let event_description = document.getElementById("event_description").value;
    let event_date = document.getElementById("event_date").value;

    axios.post("http://127.0.0.1:8001/Events/", {
        "Eventname": event_name,
        "Eventdescription": event_description,
        "Date": event_date
    }).then((response) => {
    }).then(error => console.log(error))
}

// For Updating Events
function updateEvents() {
    let event_id = document.getElementById("u_event_id").value;
    let event_name = document.getElementById("u_event_name").value;
    let event_description = document.getElementById("u_event_description").value;
    let event_date = document.getElementById("event_date").value;

    axios.put("http://127.0.0.1:8001/Events/" + event_id + "/", {
        "Eventname": event_name,
        "Eventdescription": event_description,
        "Date": event_date
    }).then((response) => {
    }).then(error => console.log(error))
}

// For Deleting  Events
function deletEvents() {
    let event_id = document.getElementById("d_event_id").value;

    console.log(event_id)
    axios.delete("http://127.0.0.1:8001/Events/" + event_id + "/", {
    }).then((response) => {
    }).then(error => console.log(error))
}


















// For Getting Images
function generateImages(response) {
    let image = document.getElementById("all_images");
    let all_image = '';

    response.data.forEach(el => {
        all_image += `
        <div class="images_collection">
            <img src="${el.Imagepath}" alt="">
            <p class="image_id">Id = ${el.id}</p>
         </div>
        `
    })
    image.insertAdjacentHTML('afterbegin', all_image)
}


// For Posting Image
function postImage() {
    console.log("Hello World!!");
    // let image_path = document.getElementById("add_image");

    const input = document.querySelector('input[type="file"]')
    input.addEventListener('', function () {
        console.log(input.files);
    }, false);

    // axios.post("http://127.0.0.1:8001/Gallery/", {
    //     "Imagepath": "abc/abc/",
    // }).then((response) => {
    // }).then(error => console.log(error))
}