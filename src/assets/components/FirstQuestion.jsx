import { useState } from "react";

export default function First({ applicantId, firstSubmitted }){
    const [first, setFirst] = useState("")

    async function firstSubmit() {
        const newFirst = {
            first
        }

        try {
            const res = await fetch(`/api/applicants/${applicantId}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newFirst)
            })
        } catch(error) {
            console.error("Could not fetch data due to : ", error)
        }

        firstSubmitted(first)
    }

    return(
        <div className="flex items-center justify-center min-w-[250px] h-[650px]">
            <div className="bg-[#00ffff] items-center w-[1500px] min-w-[200px] h-[200px] px-[15px] py-[10px] m-[1px]">
                <h3 className="justify-self-center">What is the capital of India?</h3>

                <div className="flex justify-center items-center mx-[1px] my-[5px]">
                    <input 
                        type="text" 
                        name="firstAnswer"
                        className="flex text-center hover:bg-[#01d8d8] items-center mx-[1px] my-[5px] px-3 py-1 rounded border border-gray-500 w-[125px]" 
                        placeholder="Answer" 
                        value={first}
                        onChange={ (e) => { setFirst(e.target.value) } }
                    />
                </div>

                <div className="flex justify-center items-center mx-[1px] my-[5px]">
                    <button 
                        className="bg-[#01eeee] hover:bg-[#01d8d8] hover:text-yellow-100 rounded px-3 py-1 border"
                        onClick={firstSubmit}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}