export default function Score({applicantId, score}) {

    async function fifthSubmit() {
        const newFifth = {
            fifth,
        }

        try {
            const res = await fetch(`/api/applicants/${applicantId}`)
            const data = await res.json()
            console.log(data)

        } catch(error) {
            console.error("Could not fetch data due to : ", error)
        }

        fifthSubmitted(fifth)
    }

    return(
        <>
                <div id="score">
                    <div id="scoreDiv">
                        <div className="score">
                            <h2>Your score is : {score} </h2>
                        </div>
                        <b>
                        <div className="score" id="scoress">
                            
                        </div>
                        </b>
                    </div>
                </div>
        </>
    )
}