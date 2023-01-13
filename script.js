//timer code 
let totalTime = 200;
let min = 0;
let sec = 0;
let counter = 0;
let time = document.querySelector("#time");
const btn = document.querySelector(".btn");
const questionBox = document.querySelector(".questionbox");
const option1 = document.querySelector(".option1");
const scorebox = document.querySelector(".scorebox")
const option3 = document.getElementById("option3")
const questionScreen = document.querySelector("#questionScreen")
const resultscreen = document.querySelector("#resultScreen");
// totalQuestion = document.querySelector("#totalQuestion");
const AttemptQuestion = document.querySelector("#attemptQuestion");
const correctAnswer = document.querySelector("#correctAnswer");

const wrongAnswer = document.querySelector("#wrongAnswer");




//const eq = [0, 1, 2, 3, 4]
let attempt = 0;
let wrong = 0;
let value = [1, 2, 3, 4]
let score = 0;



let timer = setInterval(function () {

    if (sec < 60) {
        sec++;
    } else {
        min++;
        sec = 0;
    }
    //console.log(sec, min)
    let formating_sec = sec < 10 ? `0${sec}` : `${sec}`;
    let formating_min = min < 10 ? `0${min}` : `${min}`
    document.querySelector("#time").innerText = `${formating_min} : ${formating_sec}`;

    if (sec < min) {

        clearInterval(timer)
        alert("time Up")

    }

}, 1000); //timer set for 1 sec


//print the question
let index = 0;


const questions = quiz.sort(function () {

    return 0.2 - Math.random()


    /*function sort() {
        return (
            0.5 - Math.random()
        )
    
    }
    sort();*///mistake
});
let totalQuestion = questions.length;
printQuestion(index)

function printQuestion(a) {

    document.querySelector(".questionbox").innerHTML = (questions[a].Question)
    document.querySelector(".option1 span").innerHTML = (questions[a].option[0])
    document.querySelector(".option1 p").innerHTML = (questions[a].option[1])
    document.querySelector(".option1 p1").innerHTML = (questions[a].option[2])
    document.querySelector(".option1 p2").innerHTML = (questions[a].option[3])

}



//create event

function checkAnswer(option) {
    attempt++;

    let getAnswer = (option.dataset)

    console.log(getAnswer);

    console.log(questions[index])

    if (getAnswer.opt == questions[index].answer) {


        (option).classList.add("right")


        score++;
    } else {

        (option).classList.add("wrong")


        wrong++


    }
    document.querySelector(".scorebox span").innerText = score + 0;

    if (getAnswer.opt !== questions[index].answer) {

        document.querySelector(".option1 span").setAttribute("onClick", " ");
        document.querySelector(".option1 p").setAttribute("onClick", " ");
        document.querySelector(".option1 p1").setAttribute("onClick", " ");
        document.querySelector(".option1 p2").setAttribute("onClick", " ");
    }
}


//next for question

function showNext() {

    if (index >= questions.length - 2) {  // 2 is just only value of show we can keep any number here 1 2 3 any

        showResult(0) // this means not alert to show any result without any alert permission thats why here is 0
        return;
    }

    index++;


    document.querySelector(".option1 span").classList.remove("right");
    document.querySelector(".option1 p").classList.remove("right");
    document.querySelector(".option1 p1").classList.remove("right");
    document.querySelector(".option1 p2").classList.remove("right");


    document.querySelector(".option1 span").classList.remove("wrong");
    document.querySelector(".option1 p").classList.remove("wrong");
    document.querySelector(".option1 p1").classList.remove("wrong");
    document.querySelector(".option1 p2").classList.remove("wrong");

    document.querySelector(".option1 span").setAttribute("onClick", "checkAnswer(this)");
    document.querySelector(".option1 p").setAttribute("onClick", "checkAnswer(this) ");
    document.querySelector(".option1 p1").setAttribute("onClick", "checkAnswer(this) ");
    document.querySelector(".option1 p2").setAttribute("onClick", "checkAnswer(this) ");

    printQuestion(index)

    console.log("next")

}

//for result

function showResult(j) {

    if (j == 2 &&    // 2 is just only value of show we can keep any number here 1 2 3 any
        index < questions.length - 2 &&  // 2 is just only value of show we can keep any number here 1 2 3 any
        !confirm("Quiz has not finesh yet. press Ok or skip Quiz & get your final result")
    ) {
        return;
    }




    questionScreen.style.display = "none";
    resultscreen.style.display = "block";
    console.log("showResult")

    document.querySelector("#attemptQuestion").innerHTML = attempt
    document.querySelector("#correctAnswer").innerHTML = score

    document.querySelector("#wrongAnswer").innerHTML = wrong

}




