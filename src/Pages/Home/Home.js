import "./Home.css"
import HeroBanner from "../../Components/HeroBanner/HeroBanner"
import HeroImage from "../../Assets/images/banner_main.png"
import WaveHeading from "../../Components/WaveHeading/WaveHeading"
import FeatureGrid from "../../Components/FeatureGrid/FeatureGrid"
import FeatureItem from "../../Components/FeatureItem/FeatureItem"
import Treadmill from "../../Assets/images/treadmill.png"
import Clock from "../../Assets/images/clock.png"
import Notepad from "../../Assets/images/notepad.png"

export default function Home(){
    return(
        <>
            <HeroBanner bgImage={HeroImage}>
                <h1>UNSINKABLE GAINS</h1>
                <h2>Crash through  your fitness goals</h2>
            </HeroBanner>
            <WaveHeading text="LET THESE BENEFITS SINK IN" />
            <FeatureGrid>
                <FeatureItem img={Treadmill} text="State of the art equipment"/>
                <FeatureItem img={Clock} text="24/7 access"/>
                <FeatureItem columns={2} img={Notepad} text="Detailed Note Keeping"/>
            </FeatureGrid>
        </>
    )
}