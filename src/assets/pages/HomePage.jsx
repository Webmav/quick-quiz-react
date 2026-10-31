import { useState } from 'react';
import { supabase } from '/src/lib/supabase.js'

import Details from '/src/assets/components/Details.jsx';
import First from '/src/assets/components/FirstQuestion.jsx';
import Second from '/src/assets/components/SecondQuestion.jsx';
import Third from '/src/assets/components/ThirdQuestion.jsx';
import Fourth from '/src/assets/components/FourthQuestion.jsx';
import Fifth from '/src/assets/components/FifthQuestion.jsx';
import Score from '/src/assets/components/Score.jsx';

export default function HomePage() {
    const [applicantId, setApplicantId] = useState("");

    const [isDetailsSubmitted, setIsDetailsSubmitted] = useState(false);
    const [isFirstSubmitted, setIsFirstSubmitted] = useState(false);
    const [isSecondSubmitted, setIsSecondSubmitted] = useState(false);
    const [isThirdSubmitted, setIsThirdSubmitted] = useState(false);
    const [isFourthSubmitted, setIsFourthSubmitted] = useState(false);
    const [isFifthSubmitted, setIsFifthSubmitted] = useState(false);
    const [isScoreSubmitted, setIsScoreSubmitted] = useState(false);
    
    const [reset, setReset] = useState(false);
    const [score, setScore] = useState(10);

//Adding new applicant to server locally
    async function newApplicant(newApplicant) {
        const res = await fetch('/api/applicants', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newApplicant)
        })

        setIsDetailsSubmitted(true)
        
        const data = await res.json()
        setApplicantId(data.id)
    }

// //Adding new applicant to server remotely
//     async function newApplicant(newApplicant) {
//         const { data, error } = await supabase
//             .from("applicants")
//             .insert(newApplicant)
//             .select()
//             .single()

//         if(error) {
//             console.error("Could not save applicant : ", error.message)
//             return
//         }

//         setApplicantId(data.id)
//         setIsDetailsSubmitted(true)
//     }

//Patching last score locally
    async function scorePatch() {
        const lastScore = {
            score,
        }

        try {
            const res = await fetch(`/api/applicants/${applicantId}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(lastScore)
            })
        } catch(error) {
            console.error("Could not fetch data due to : ", error)
        }
    }

// //Patching last score remotely
//     async function scorePatch() {
//         const { error } = await supabase
//             .from("applicants")
//             .update({ score })
//             .eq("id", applicantId)

//         if(error) {
//             console.error("Could not save score : ", error.message)
//         }
//     }

    if(reset) {
        setApplicantId("");

        setIsDetailsSubmitted(false);
        setIsFirstSubmitted(false);
        setIsSecondSubmitted(false);
        setIsThirdSubmitted(false);
        setIsFourthSubmitted(false);
        setIsFifthSubmitted(false);
        setIsScoreSubmitted(false);
        
        setReset(false);
        setScore(0);
    }

    return(
        <div className='flex justify-center items-center m-0 bg-[#00ffff] flex-row flex-wrap w-full h-[700px] md:h-full'>
            { ( (!isDetailsSubmitted) && (!isFirstSubmitted) ) ? <Details detailsSubmitted={newApplicant} /> : "" }

            { ( (isDetailsSubmitted) && (!isFirstSubmitted) ) 
                ?   <First 
                        applicantId={applicantId} 
                        firstSubmitted={ (e) => { 
                            setIsFirstSubmitted(true); 
                            { ((e === "delhi") || (e === "Delhi") || (e === "DELHI")) && setScore(score + 10) }
                            console.log(e)
                        } } 
                    /> 
                : ""  
            }

            { ( (isFirstSubmitted) && (!isSecondSubmitted) ) 
                ?   <Second 
                        applicantId={applicantId} 
                        secondSubmitted={ (e) => { 
                            setIsSecondSubmitted(true); 
                            { ((e === "jupiter") || (e === "Jupiter")) || (e === "JUPITER") && setScore(score + 10)}
                            console.log(score)
                        } } 
                    /> 
                : ""  
            }

            { ( (isSecondSubmitted) && (!isThirdSubmitted) ) 
                ?   <Third 
                        applicantId={applicantId} 
                        thirdSubmitted={ (e) => { 
                            setIsThirdSubmitted(true); 
                            { ((e === "paris") || (e === "Paris") || (e === "PARIS")) && setScore(score + 10) }
                        } } 
                    /> 
                : ""  
            }

            { ( (isThirdSubmitted) && (!isFourthSubmitted) ) 
                ?   <Fourth 
                        applicantId={applicantId} 
                        fourthSubmitted={ (e) => { 
                            setIsFourthSubmitted(true); 
                            { ((e === "green") || (e === "Green") || (e === "GREEN")) && setScore(score + 10) }
                        } } 
                    /> 
                : ""  
            }

            { ( (isFourthSubmitted) && (!isFifthSubmitted) ) 
                ?   <Fifth 
                        applicantId={applicantId} 
                        fifthSubmitted={ (e) => { 
                            setIsFifthSubmitted(true); 
                            { ((e === "366") || (e === "Three Hundred Sixty Six") || (e === "three hundred sixty six")) && setScore(score + 10) };
                            scorePatch()
                        } } 
                    /> 
                : ""  
            }

            { ( (isFifthSubmitted) && (!isScoreSubmitted) ) 
                ?   <Score 
                        applicantId={applicantId} 
                        scoreSubmitted={ (e) => { 
                            setIsScoreSubmitted(true); 
                            { ((e === "paris") || (e === "Paris") || (e === "PARIS")) && setScore(score + 10) }
                        } } 
                        reset={ (e) => {
                            ( e === "yes") && setReset(true)
                        } }
                    /> 
                : ""  
            }
        </div> 
    )
}