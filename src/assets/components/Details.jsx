export default function Details() {
    return(
        <div className="flex items-start justify-center w-[1500px] min-w-[250px] h-[650px]">
            <div className="bg-[#00ffff] items-center w-[1500px] min-w-[200px] h-[200px] px-[15px] py-[10px] m-[1px]">
                <h3 align="center">Your Details : </h3>
                <div className="flex justify-center items-center mx-[1px] my-[5px]">
                    <input type="text" className="flex justify-center items-center mx-[1px] my-[5px]" id="nGSubmitName"
                        placeholder="Name" /><br /><br />
                </div>
                <div className="flex justify-center items-center mx-[1px] my-[5px]">
                    <input type="text" className="flex justify-center items-center mx-[1px] my-[5px]"  id="nGSubmitGmail"
                        placeholder="Gmail" /><br /><br />
                </div>
                <div className="flex justify-center items-center mx-[1px] my-[5px]"> 
                    <button id="startButton">Start</button>
                </div>
            </div>
        </div>
    )
}