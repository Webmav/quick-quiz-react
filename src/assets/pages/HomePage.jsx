import { useState } from 'react';

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

    const [score, setScore] = useState(0);

//Adding new applicant to server
    async function newApplicant(newApplicant) {
        try{
            const res = await fetch('/api/applicants', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }, 
                body: JSON.stringify(newApplicant)
            })

            if(!res.ok) {
                console.error("Could not fetch data.")
                return;
            }

            const data = await res.json()

            setApplicantId(data.id)
            setIsDetailsSubmitted(true)
        }
        catch(error) {
            console.error("Error in fetching : ", error)
        }
    }

    return(
        <div className='flex m-0 bg-[#00ffff] flex-row flex-wrap w-full h-full'>
            { ( (!isDetailsSubmitted) && (!isFirstSubmitted) ) ? <Details detailsSubmitted={newApplicant} /> : "" }

            { ( (!isFirstSubmitted) && (isDetailsSubmitted) ) 
                ?   <First 
                        applicantId={applicantId} 
                        firstSubmitted={ (e) => { 
                            setIsFirstSubmitted(true); 
                            { { (e == "delhi") || (e == "Delhi") ? setScore(score++) : "" } }
                        } } 
                    /> 
                : ""  
            }

            { ( (isFirstSubmitted) && (!isSecondSubmitted) ) ? <Second applicantId={applicantId}/> : ""  }

            { ( (isSecondSubmitted) && (!isThirdSubmitted) ) ? <Third applicantId={applicantId}/> : ""  }

            { ( (isThirdSubmitted) && (!isFourthSubmitted) ) ? <Fourth applicantId={applicantId}/> : ""  }

            { ( (isFourthSubmitted) && (!isFifthSubmitted) ) ? <Fifth applicantId={applicantId}/> : ""  }

            { ( (isFifthSubmitted) && (!isScoreSubmitted) ) ? <Score applicantId={applicantId}/> : ""  }
        </div>
    )
}