        if((numbers<=20) && ((ans1 == "") || (ans1 == undefined))){
            ans1 = qFirst.value ;
            if(ans1 == ""){
                alert("Enter ANSWER!!!")
            }
            else{
                first.remove();
            }
        }
        else if((numbers<=40) && ((ans2 == "") || (ans2 == undefined))){
            ans2 = qSecond.value;
            if(ans2 == ""){
                alert("Enter ANSWER!!!")
            }
            else{
                second.remove();
            }
        }
        else if((numbers<=60) && ((ans3 == "") || (ans3 == undefined))){
            ans3 = qThird.value;
            if(ans3 == ""){
                alert("Enter ANSWER!!!")
            }
            else{
                third.remove();
            }
        }
        else if((numbers<=80) && ((ans4 == "") || (ans4 == undefined))){
            ans4 = qFourth.value;
            if(ans4 == ""){
                alert("Enter ANSWER!!!")
            }
            else{
                fourth.remove();
            }
        }
        else if((numbers<=100) && ((ans5 == "") || (ans5 == undefined))){
            ans5 = qFifth.value;
            if(ans5 == ""){
                alert("Enter ANSWER!!!")
            }
            else{
                fifth.remove();
            }
        }

        numbers = Math.floor(Math.random() * 100) - 20;

        if(
            ((ans1 !== "") && (ans1 !== undefined)) &&
            ((ans2 !== "") && (ans2 !== undefined)) &&
            ((ans3 !== "") && (ans3 !== undefined)) &&
            ((ans4 !== "") && (ans4 !== undefined))
        ) {
            fifth.style.display = "";
        }