import "./Home.css"
import HeroBanner from "../../Components/HeroBanner/HeroBanner"
import HeroImage from "../../Assets/images/banner_main.png"
import WaveHeader from "../../Components/WaveHeader/WaveHeader"
import Treadmill from "../../Assets/images/treadmill.png"
export default function Home(){
    return(
        <>
            <HeroBanner bgImage={HeroImage}>
                <h1>UNSINKABLE GAINS</h1>
                <h2>Crash through  your fitness goals</h2>
            </HeroBanner>
            <WaveHeader text="LET THESE BENEFITS SINK IN"/>
            
            <section className="feature-grid">
                <div className="feature-container">
                    <img src={Treadmill} />
                    <span>State of the art equipment</span>
                </div>
                <div className="feature-container">
                    <img src={Treadmill} />
                    <span>State of the art equipment</span>
                </div>
                <div className="feature-container wide">
                    <img src={Treadmill} />
                    <span>State of the art equipment</span>
                </div>
            </section>


            <section className="articles-section">
                <h2>Gym is just the tip of the iceberg</h2>
                <h3>Hit the books</h3>
                <div className="articles-container">
                    <div>test</div>
                    <div>test</div>
                    <div>test</div>
                    <div>test</div>
                    <div>test</div>
                    <div>test</div>
                </div>
            </section>

        </>
    )
}