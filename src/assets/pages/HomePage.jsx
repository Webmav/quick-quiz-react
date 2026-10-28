import Details from '/src/assets/components/Details.jsx';
import First from '/src/assets/components/FirstQuestion.jsx';
import Second from '/src/assets/components/SecondQuestion.jsx';
import Third from '/src/assets/components/ThirdQuestion.jsx';
import Fourth from '/src/assets/components/FourthQuestion.jsx';
import Fifth from '/src/assets/components/FifthQuestion.jsx';
import Score from '/src/assets/components/Score.jsx';

export default function HomePage() {
    return(
        <div className='flex m-0 bg-[#00ffff] flex-row flex-wrap'>
            <Details />

            <First />

            <Second />

            <Third />

            <Fourth />

            <Fifth />

            <Score />
        </div>
    )
}