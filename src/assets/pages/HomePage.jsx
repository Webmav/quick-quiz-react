import { useState } from 'react';

import Details from '/src/assets/components/Details.jsx';
import First from '/src/assets/components/FirstQuestion.jsx';
import Second from '/src/assets/components/SecondQuestion.jsx';
import Third from '/src/assets/components/ThirdQuestion.jsx';
import Fourth from '/src/assets/components/FourthQuestion.jsx';
import Fifth from '/src/assets/components/FifthQuestion.jsx';
import Score from '/src/assets/components/Score.jsx';

export default function HomePage() {
    const [applicantId, setApplicantId] = useState(null);

    async function newApplicant(newApplicant) {
        const res = await fetch('/api/applicants', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(newApplicant)
        })

        if(!res.ok) console.error("Could not fetch data.")

        const data = await res.json()

        setApplicantId(data.id)
    }

    return(
        <div className='flex m-0 bg-[#00ffff] flex-row flex-wrap w-full h-full'>
            <Details detailsSubmitted={newApplicant}/>

            <First applicantId={applicantId}/>

            <Second applicantId={applicantId}/>

            <Third applicantId={applicantId}/>

            <Fourth applicantId={applicantId}/>

            <Fifth applicantId={applicantId}/>

            <Score />
        </div>
    )
}