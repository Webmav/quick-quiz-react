import { useState } from "react";

export default function Details({ detailsSubmitted }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("")

    function detailsFormSubmit(e) {
        e.preventDefault()

        const newApplicant = {
            name,
            email,
        }

        detailsSubmitted(newApplicant)
    }

    return(
        <div 
            id="details-wrapper"
            className="flex items-center justify-center min-w-[250px] h-[650px]"
        >
            <form 
                onSubmit={detailsFormSubmit}
                className="bg-[#00ffff] items-center w-[1500px] min-w-[200px] h-[200px] px-[15px] py-[10px] m-[1px]"
            >
                <h3 className="justify-self-center">Your Details : </h3>
                
                <div className="flex justify-center items-center mx-[1px] my-[5px]">
                    <input 
                        type="text" 
                        name="name"
                        className="flex text-center hover:bg-[#01d8d8] items-center mx-[1px] my-[5px] px-3 py-1 rounded border border-gray-500 w-[150px] "
                        placeholder="Name" 
                        value={name}
                        onChange={ (e) => { setName(e.target.value) } }
                    />
                </div>
                
                <div className="flex justify-center items-center mx-[1px] my-[5px]">
                    <input 
                        type="email" 
                        name="email"
                        className="flex text-center hover:bg-[#01d8d8] items-center mx-[1px] my-[5px] px-3 py-1 rounded border border-gray-500 w-[250px] "
                        placeholder="Gmail" 
                        value={email}
                        onChange={ (e) => { setEmail(e.target.value) } }
                    />
                </div>
                
                <div className="flex justify-center items-center mx-[1px] my-[5px]"> 
                    <button 
                        className='bg-[#01eeee] hover:bg-[#01d8d8] hover:text-yellow-100 rounded px-3 py-1 border'
                        id="startButton"
                        type="submit"
                    >
                        Start
                    </button>
                </div>
            </form>
        </div>
    )
}