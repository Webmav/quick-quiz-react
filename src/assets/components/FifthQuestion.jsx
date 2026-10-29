import { useState } from "react";
import { saveAnswer } from "../../lib/applicants";

export default function Fifth({ applicantId, fifthSubmitted }) {
    const [fifth, setFifth] = useState("");

// //for remote hosting
//     async function fifthSubmit() {
//         await saveAnswer(applicantId, "fifth", fifth)
//         fifthSubmitted(fifth)
//     }

//for local hosting
    async function fifthSubmit() {
        const newFifth = {
            fifth,
        }

        try {
            const res = await fetch(`/api/applicants/${applicantId}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newFifth),
            })
        } catch(error) {
            console.error("Could not fetch data due to : ", error)
        }

        fifthSubmitted(fifth)
    }

    return(
        <div className="flex items-center justify-center min-w-[250px] h-[650px]">
            <div className="bg-[#00ffff] items-center w-[1500px] min-w-[200px] h-[200px] px-[15px] py-[10px] m-[1px]">
                <h3 className="justify-self-center">How many days are in a leap year?</h3>

                <div className="flex justify-center items-center mx-[1px] my-[5px]">
                    <input 
                        type="number" 
                        name="fifthAnswer"
                        className="flex text-center hover:bg-[#01d8d8] items-center mx-[1px] my-[5px] px-3 py-1 rounded border border-gray-500 w-[125px]" 
                        placeholder="Answer (Enter Number)" 
                        value={fifth}
                        onChange={ (e) => { setFifth(e.target.value) } }
                    />
                </div>

                <div className="flex justify-center items-center mx-[1px] my-[5px]">
                    <button 
                        className="bg-[#01eeee] hover:bg-[#01d8d8] hover:text-yellow-100 rounded px-3 py-1 border"
                        onClick={fifthSubmit}
                    >
                        Complete
                    </button>
                </div>
            </div>
        </div>
    )
}