window.addEventListener("hashchange", function() {
    scrollBy(0, -55);
});

particlesJS("particles-js", {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: {
            type: "circle",
            stroke: { width: 0, color: "#000000" },
            polygon: { nb_sides: 5 },
            image: { src: "img/github.svg", width: 100, height: 100 }
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
        },
        size: {
            value: 3,
            random: true,
            anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: { enable: false, rotateX: 600, rotateY: 1200 }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true
        },
        modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
            repulse: { distance: 100, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 }
        }
    },
    retina_detect: true
});


window.onload = function () {
    show(0);
    start();
}

let userName = sessionStorage.getItem("Name")
let wel = document.getElementById('userNameId')
wel.innerHTML = userName
// question and answer in object

var questions = [{
    id: 1,
    question: "What is the World's Largest Animal?",
    answer: "Blue Whale",
    options: [
        "Elephant",
        "Girraffe",
        "Blue Whale",
        "Great White Shark"
    ]
},
{
    id: 2,
    question: "When did Quaid-e-Azam die?",
    answer: "September 11, 1948",
    options: [
        "September 11, 1948",
        "December 22, 1920",
        "November 25, 1876",
        "August 14, 1947"
    ]
},
{
    id: 3,
    question: "What is Jeff Bezos net worth?",
    answer: "178.1 billion USD",
    options: [
        "110.1 billion USD",
        "200 billion USD",
        "180 billion USD",
        "178.1 billion USD"
    ]
},
{
    id: 4,
    question: "CPEC stands for ...",
    answer: "China-Pakistan Economic Corridor",
    options: [
        "Canada-Panama Economy Correspondance",
        "China-Pakistan Political Corridor",
        "China-Pakistan Economic Corridor",
        "Cambodia-Pakistan Economic Corridor"
    ]
},
{
    id: 5,
    question: "What is the red planet?",
    answer: "Mars",
    options: [
        "Jupiter",
        "Venus",
        "Saturn",
        "Mars"
    ]
},
{
    id: 6,
    question: "After whom is august named",
    answer: "Roman Emperor Augustus",
    options: [
        "Roman Emperor Augustus",
        "Greek God Augustus",
        "Egyption Ruler Augustus",
        "Roman God Augustus"
    ]
},
{
    id: 7,
    question: "Who founded youtube?",
    answer: "Jawed Karim, Chad Hurley, Steve Chan",
    options: [
        "Steve Jobs, Bill Gates, Satya Nadella",
        "Jan Koum, Brian Acton",
        "Jawed Karim, Chad Hurley, Steve Chan",
        "Jack Dorsey, Biz Stone, Evan Williams, Noath Glass"
    ]
},
{
    id: 8,
    question: "Who founded KFC?",
    answer: "Colonel Sanders",
    options: [
        "Colonel Sandars",
        "Duncan Rouleau",
        "Abraham Lincoln",
        "John F.Kennedy"
    ]
},
{
    id: 9,
    question: "Who invented the light bulb?",
    answer: "Thomas Edison",
    options: [
        "Isaac Newton",
        "Albert Eintein",
        "Louis Pasteur",
        "Thomas Edison"
    ]
},
{
    id: 10,
    question: "Where was the first ever International cricket match played?",
    answer: "New York, America vs Canada",
    options: [
        "Sydney, Australia vs England",
        "London, England vs Australia",
        "New York, America vs Canada",
        "Karachi, Pakistan vs India"
    ]
},
]

let question_count = 0;
var point = 0;
var c = 0;
function next() {
    let user_answer = document.querySelector('li.option.active').innerHTML;
    if (user_answer == questions[question_count].answer) {
        point += 10;
        c++;
        sessionStorage.setItem("Correct", c)
        var a = user_answer + " is " + "RIGHT";
        sessionStorage.setItem("points", point)
    } else {
        var a = user_answer + " is " + "wrong"
        console.log(a)
        point += 0

    }
    if (question_count == questions.length - 1) {
        stop()
        location.href = "end.html"
        return;
    }
    question_count++;
    show(question_count)
}


function show(e) {
    var ques = document.getElementById('questions')
    ques.innerHTML = `
        <h2 class="text questionHead">Q ${question_count + 1 + " : "}${questions[e].question}</h2>
        <ul class="ul" >
            <li class="option lead" >${questions[e].options[0]}</li>
            <li class="option lead">${questions[e].options[1]}</li>
            <li class="option lead">${questions[e].options[2]}</li>
            <li class="option lead">${questions[e].options[3]}</li>
        </ul>
        `;

    toggleActive()
}

function toggleActive() {
    let option = document.querySelectorAll("li.option")
    for (let i = 0; i < option.length; i++) {
        option[i].onclick = function () {
            for (let j = 0; j < option.length; j++) {
                if (option[j].classList.contains("active")) {
                    option[j].classList.remove("active")
                }
            }
            option[i].classList.add('active')

        }

    }
}

var getCounter = document.getElementById("counter")
var ms = 60;
var s = 60;
var m = 5;
var interval;

function watch() {
    return (m < 10 ? "0" + m : m) + " : " + (s < 10 ? "0" + s : s) + " : " + (ms < 10 ? "0" + ms : ms);
}

function timer() {
    getCounter.innerHTML = watch();
    --ms
    if (ms == 0) {
        --s;
        ms = 60;
    } else if (s == 0) {
        --m;
        s = 60
    }
}
function start() {
    interval = setInterval(timer, 10)
}
function stop() {
    clearTimeout(interval)
}
function submitForm(e){
    e.preventDefault();
    let name = document.forms["form"]["name"].value
    sessionStorage.setItem("Name",name)
}
function locate(){
    location.href = "index1.html"
}