nextButtons.forEach((button)=>{
    button.addEventListener('click',()=>{
        if((maths<=20) && ((ans1 !== "") || (ans1 !== undefined))){
            let mathss = Math.floor(Math.random() * 100);
            maths = mathss;

            if((mathss<=40) && ((ans2 == "") || (ans2 == undefined))){
                thirdDiv.style.display = "";
            }
            else if((mathss<=60) && ((ans3 == "") || (ans3 == undefined))){
                fourthDiv.style.display = "";
            }
            else if((mathss<=80) && ((ans4 == "") || (ans4 == undefined))){
                fifthDiv.style.display = "";
            }
            else if((mathss<=100) && ((ans5 == "") || (ans5 == undefined))){
                sixthDiv.style.display = "";
            }
        }
        else if((maths<=40) && ((ans2 !== "") || (ans2 !== undefined))){
            let mathss = Math.floor(Math.random() * 100);
            maths = mathss;

            if((mathss<=20) && ((ans1 == "") || (ans1 == undefined))){
                secondDiv.style.display = "";
            }
            else if((mathss<=60) && ((ans3 == "") || (ans3 == undefined))){
                fourthDiv.style.display = "";
            }
            else if((mathss<=80) && ((ans4 == "") || (ans4 == undefined))){
                fifthDiv.style.display = "";
            }
            else if((mathss<=100) && ((ans5 == "") || (ans5 == undefined))){
                sixthDiv.style.display = "";
            }
        }
        else if((maths<=60) && ((ans3 !== "") || (ans3 !== undefined))){
            let mathss = Math.floor(Math.random() * 100);
            maths = mathss;

            if((mathss<=20) && ((ans1 == "") || (ans1 == undefined))){
                secondDiv.style.display = "";
            }
            else if((mathss<=60) && ((ans2 == "") || (ans2 == undefined))){
                thirdDiv.style.display = "";
            }
            else if((mathss<=80) && ((ans4 == "") || (ans4 == undefined))){
                fifthDiv.style.display = "";
            }
            else if((mathss<=100) && ((ans5 == "") || (ans5 == undefined))){
                sixthDiv.style.display = "";
            }
        }
        else if((maths<=80) && ((ans4 !== "") || (ans4 !== undefined))){
            let mathss = Math.floor(Math.random() * 100);
            maths = mathss;

            if((mathss<=20) && ((ans1 == "") || (ans1 == undefined))){
                secondDiv.style.display = "";
            }
            else if((mathss<=60) && ((ans2 == "") || (ans2 == undefined))){
                thirdDiv.style.display = "";
            }
            else if((mathss<=80) && ((ans3 == "") || (ans3 == undefined))){
                fourthDiv.style.display = "";
            }
            else if((mathss<=100) && ((ans5 == "") || (ans5 == undefined))){
                sixthDiv.style.display = "";
            }
        }
        else if((maths<=100) && ((ans5 !== "") || (ans5 !== undefined))){
            let mathss = Math.floor(Math.random() * 100);
            maths = mathss;

            if((mathss<=20) && ((ans1 == "") || (ans1 == undefined))){
                secondDiv.style.display = "";
            }
            else if((mathss<=60) && ((ans2 == "") || (ans2 == undefined))){
                thirdDiv.style.display = "";
            }
            else if((mathss<=80) && ((ans3 == "") || (ans3 == undefined))){
                fourthDiv.style.display = "";
            }
            else if((mathss<=100) && ((ans4 == "") || (ans4 == undefined))){
                fifthDiv.style.display = "";
            }
        }
        else if(maths<=20){
            ans1 = qCapital.value;
            console.log(ans1);
            secondDiv.style.display = "none";
            
            let mathss = Math.floor(Math.random() * 100);
            maths = mathss;
            if((mathss<=40) && ((ans2 == "") || (ans2 == undefined))){
                thirdDiv.style.display = "";
            }
            else if((mathss<=60) && ((ans3 == "") || (ans3 == undefined))){
                fourthDiv.style.display = "";
            }
            else if((mathss<=80) && ((ans4 == "") || (ans4 == undefined))){
                fifthDiv.style.display = "";
            }
            else if((mathss<=100) && ((ans5 == "") || (ans5 == undefined))){
                sixthDiv.style.display = "";
            }
        }
        else if(maths<=40){
            ans2 = qArabian.value;
            console.log(ans2);
            thirdDiv.style.display = "none";

            let mathss = Math.floor(Math.random() * 100);
            maths = mathss;
            if((mathss<=20) && ((ans1 == "") || (ans1 == undefined))){
                secondDiv.style.display = "";
            }
            else if((mathss<=60) && ((ans3 == "") || (ans3 == undefined))){
                fourthDiv.style.display = "";
            }
            else if((mathss<=80) && ((ans4 == "") || (ans4 == undefined))){
                fifthDiv.style.display = "";
            }
            else if((mathss<=100) && ((ans5 == "") || (ans5 == undefined))){
                sixthDiv.style.display = "";
            }
        }
        else if(maths<=60){
            ans3 = qHimalayan.value;
            console.log(ans3);
            fourthDiv.style.display = "none";

            let mathss = Math.floor(Math.random() * 100);
            maths = mathss;
            if((mathss<=20) && ((ans1 == "") || (ans1 == undefined))){
                secondDiv.style.display = "";
            }
            else if((mathss<=60) && ((ans2 == "") || (ans2 == undefined))){
                thirdDiv.style.display = "";
            }
            else if((mathss<=80) && ((ans4 == "") || (ans4 == undefined))){
                fifthDiv.style.display = "";
            }
            else if((mathss<=100) && ((ans5 == "") || (ans5 == undefined))){
                sixthDiv.style.display = "";
            }
        }
        else if(maths<=80){
            ans4 = qEmerald.value;
            console.log(ans4);
            fifthDiv.style.display = "none";

            let mathss = Math.floor(Math.random() * 100);
            maths = mathss;
            if((mathss<=20) && ((ans1 == "") || (ans1 == undefined))){
                secondDiv.style.display = "";
            }
            else if((mathss<=60) && ((ans2 == "") || (ans2 == undefined))){
                thirdDiv.style.display = "";
            }
            else if((mathss<=80) && ((ans3 == "") || (ans3 == undefined))){
                fourthDiv.style.display = "";
            }
            else if((mathss<=100) && ((ans5 == "") || (ans5 == undefined))){
                sixthDiv.style.display = "";
            }
        }
        else if(maths<=100){
            ans5 = qLeap.value;
            console.log(ans5);
            fifthDiv.style.display = "none";

            let mathss = Math.floor(Math.random() * 100);
            maths = mathss;
            if((mathss<=20) && ((ans1 == "") || (ans1 == undefined))){
                secondDiv.style.display = "";
            }
            else if((mathss<=60) && ((ans2 == "") || (ans2 == undefined))){
                thirdDiv.style.display = "";
            }
            else if((mathss<=80) && ((ans3 == "") || (ans3 == undefined))){
                fourthDiv.style.display = "";
            }
            else if((mathss<=100) && ((ans4 == "") || (ans4 == undefined))){
                fifthDiv.style.display = "";
            }
        }
    })
})