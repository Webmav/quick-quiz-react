//first
const inputName = document.querySelector("#nGSubmitName");
const inputGmail = document.querySelector("#nGSubmitGmail");
const startButton = document.querySelector("#startButton");
const nextButtons = document.querySelectorAll(".next");
 
const details = document.querySelector('#details');
const first = document.querySelector('#first');
const second = document.querySelector("#second");
const third = document.querySelector("#third");
const fourth = document.querySelector("#fourth");
const fifth = document.querySelector("#fifth");
const score = document.querySelector("#score");

const qFirst = document.querySelector("#qCapital");
const qSecond = document.querySelector("#qArabian");
const qThird = document.querySelector("#qHimalayan");
const qFourth = document.querySelector("#qEmerald");
const qFifth = document.querySelector("#qLeap");
const scoress = document.querySelector("#scoress");

let name1;
let gmail1;
let scores = 0;

let numbers;

let ans1;
let ans2;
let ans3;
let ans4;
let ans5;

first.style.display = "none";
second.style.display = "none";
third.style.display = "none";
fourth.style.display = "none";
fifth.style.display = "none";
score.style.display = "none";

function clean(str) {
    return str.replace(/[\s.]/g,'').toLowerCase;
}


startButton.addEventListener('click',()=>{
    name1 = inputName.value;
    gmail1 = inputGmail.value;

    if((name1 == "") || (gmail1 == "")){
        alert("Fill in all the details");
    }
    else if (/\d/.test(name1)){
        alert("Name CANNOT contain numbers");
    }
    else if (!gmail1.endsWith("@gmail.com")){
        alert("Enter a valid email");
    }
    else {
        details.style.display = "none";

        first.style.display = "";
    }
})


nextButtons.forEach((button)=>{
    button.addEventListener('click',()=>{
        if((ans1 == "") || (ans1 == undefined)){
            ans1 = qFirst.value ;
            if(ans1 == ""){
                alert("Enter ANSWER!!!")
            }
            else{
                first.remove();
                second.style.display = '';
                    if((ans1 == "delhi") || (ans1 == "Delhi")){
                        scores += 20;
                    }
            }
        }
        else if((ans2 == "") || (ans2 == undefined)){
            ans2 = qSecond.value ;
            if(ans2 == ""){
                alert("Enter ANSWER!!!")
            }
            else{
                second.remove();
                third.style.display = '';
                    if((ans2 == "jupiter") || (ans2 == "Jupiter")){
                        scores += 20;
                    }
            }
        }
        else if((ans3 == "") || (ans3 == undefined)){
            ans3 = qThird.value ;
            if(ans3 == ""){
                alert("Enter ANSWER!!!")
            }
            else{
                third.remove();
                fourth.style.display = '';
                    if((ans3 == "paris") || (ans3 == "Paris")){
                        scores += 20;
                    }
            }
        }
        else if((ans4 == "") || (ans4 == undefined)){
            ans4 = qFourth.value ;
            if(ans4 == ""){
                alert("Enter ANSWER!!!")
            }
            else{
                fourth.remove();
                fifth.style.display = '';
                    if((ans4 == "green") || (ans4 == "Green")){
                        scores += 20;
                    }
            }
        }
        else if((ans5 == "") || (ans5 == undefined)){
            ans5 = qFifth.value ;
            if(ans5 == ""){
                alert("Enter ANSWER!!!")
            }
            else{
                fifth.remove();
                score.style.display = '';
                    if(ans5 == "366"){
                        scores += 20;
                    }
                scoress.textContent = `${scores} / 100`;
            }
        }
    })
})

//remaining

//View answers (right or wrong)

document.addEventListener('keypress',(event)=>{
    key = event.key;
    if(key == 'Enter'){
        console.log(key);
//details page
        if(details.style.display == ""){
            name1 = inputName.value;
            gmail1 = inputGmail.value;

            if((name1 == "") || (gmail1 == "")){
                alert("Fill in all the details");
            }
            else {
                details.style.display = "none";

                first.style.display = "";
            }
        }
//other pages
        else {
            if((ans1 == "") || (ans1 == undefined)){
                ans1 = qFirst.value ;
                if(ans1 == ""){
                    alert("Enter ANSWER!!!")
                }
                else{
                    first.remove();
                    second.style.display = '';
                        if((ans1 == "delhi") || (ans1 == "Delhi")){
                            scores += 20;
                        }
                }
            }
            else if((ans2 == "") || (ans2 == undefined)){
                ans2 = qSecond.value ;
                if(ans2 == ""){
                    alert("Enter ANSWER!!!")
                }
                else{
                    second.remove();
                    third.style.display = '';
                        if((ans2 == "jupiter") || (ans2 == "Jupiter")){
                            scores += 20;
                        }
                }
            }
            else if((ans3 == "") || (ans3 == undefined)){
                ans3 = qThird.value ;
                if(ans3 == ""){
                    alert("Enter ANSWER!!!")
                }
                else{
                    third.remove();
                    fourth.style.display = '';
                        if((ans3 == "paris") || (ans3 == "Paris")){
                            scores += 20;
                        }
                }
            }
            else if((ans4 == "") || (ans4 == undefined)){
                ans4 = qFourth.value ;
                if(ans4 == ""){
                    alert("Enter ANSWER!!!")
                }
                else{
                    fourth.remove();
                    fifth.style.display = '';
                        if((ans4 == "green") || (ans4 == "Green")){
                            scores += 20;
                        }
                }
            }
            else if((ans5 == "") || (ans5 == undefined)){
                ans5 = qFifth.value ;
                if(ans5 == ""){
                    alert("Enter ANSWER!!!")
                }
                else{
                    fifth.remove();
                    score.style.display = '';
                        if(ans5 == "366"){
                            scores += 20;
                        }
                    scoress.textContent = `${scores} / 100`;
                }
            }
        }
    //score page
        if(ul.style.display == "none"){
            ul.style.display = "";
        }
        else if(ul.style.display == ""){
            ul.style.display = "none";
        }
    }
})