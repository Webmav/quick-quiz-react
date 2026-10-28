import { useState } from 'react';

export default function Score({ applicantId, reset }) {
    const [score, setScore] = useState(0);

    async function fifthSubmit() {
        try {
            const res = await fetch(`/api/applicants/${applicantId}`)
            const data = await res.json()
            setScore(data.score)

        } catch(error) {
            console.error("Could not fetch data due to : ", error)
        }
    }

    fifthSubmit()

    function resetFnct() {
        reset("yes")
    }

    return(
        <div className="flex items-center justify-center min-w-[250px] h-[650px]">
            <div className="bg-[#00ffff] items-center w-[1500px] min-w-[200px] h-[200px] px-[15px] py-[10px] m-[1px]">
                <h3 className="justify-self-center">Your Score is : </h3>

                <h1 className="justify-self-center text-[100px]"> {score} / 100 </h1>

                <div className="flex justify-center items-center mx-[1px] my-[5px] gap-[25px]">
                    <button 
                        className="bg-[#01eeee] hover:bg-[#01d8d8] hover:text-yellow-100 rounded px-3 py-1 border"
                        onClick={resetFnct}
                    >
                        Reset
                    </button>

                    <button 
                        className="bg-[#01eeee] hover:bg-[#01d8d8] hover:text-yellow-100 rounded px-3 py-1 border"
                        onClick={ () => {} }
                    >
                        Share your Score
                    </button>
                </div>
            </div>
        </div>
    )
}