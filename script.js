let questions = [
    {
        ques: "White-Orchid",
        ansdis: ["Bonding","Purity and Innocence","Relationship","Respect"],
        correct: 1
    },
    {
        ques: "Rain-Lily",
        ansdis: ["True love","Kindness","Purity","Inception"],
        correct: 3
    },
    {
        ques: "Forget me not-",
        ansdis: ["True love","Kindness","Relationship","Respect"],
        correct: 0
    },
    {
        ques: "Lily of the valley-",
        ansdis: ["Purity","Sincerity","Happiness","All of them"],
        correct: 3
    },
    {
        ques: "Daisy-",
        ansdis: ["Cheerfulness","Hopefulness","Respect","Kindness"],
        correct: 0
    },
    {
        ques: "Sunflower-",
        ansdis: ["Hopefulness","Kindness","Purity","Inception"],
        correct: 0
    }

];

let cor = 0;
let counter = 0;
let question = document.querySelector(".Question");
let strt = document.querySelector(".strtmain");
let right;
let limit=questions.length;
let begin = false;


strt.addEventListener("click",function (){
    
    if(begin!=true){
        document.querySelector(".bodyC").classList.remove("bodyC");
        document.querySelector(".popup").style.display = "none";
        begin = true;
    }
    next();

})

function next(){
    if(limit == counter){
        document.querySelector("main").classList.add("bodyC");
        let temp = document.querySelector(".result");
        temp.style.display = "initial";
        temp.innerHTML = `<div>You have Scored ${cor}</div>
        <button class="strtmain" onclick="exit()">Exit</button>`
        return;
    }
    let temp = document.querySelector(".nxtbtn")
    for(let i=0;i<questions[counter].ansdis.length;i++){
        let temp = document.getElementById(`ans_${i}`);
        temp.classList.remove("right");
        temp.classList.remove("wrong");
        temp.disabled = false;
        
    }
    question.innerHTML = `${questions[counter].ques}`
    for(let i=0;i<questions[counter].ansdis.length;i++){
        let temp = document.querySelector(`.ans_${i}`);
        temp.innerHTML = questions[counter].ansdis[i];
    }
    right = questions[counter].correct;
}

function checker(event){
    let num = Number(event);
    if(event == right){
        let temp = document.querySelector(`.ans_${event}`);
        temp.classList.add("right");
        for(let i=0;i<questions[counter].ansdis.length;i++){
            
                let temp = document.getElementById(`ans_${i}`);
                temp.disabled = true;
        }
        cor+= 1;
    }
    else{
        let temp = document.querySelector(`.ans_${event}`);
        temp.classList.add("wrong");
        for(let i=0;i<questions[counter].ansdis.length;i++){
                let temp = document.getElementById(`ans_${i}`);
                temp.disabled = true;
            
        }
        let temp2 = document.querySelector(`.ans_${right}`);
        temp2.classList.add("right");
        
    }
    counter += 1;
    if(counter==limit){
        let temp = document.querySelector(".nxtbtn");
        temp.innerHTML = "FINISH";
    }
}

function exit(){
    window.location.reload();
}
