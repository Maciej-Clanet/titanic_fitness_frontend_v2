import "./Home.css"
import HeroBanner from "../../Components/HeroBanner/HeroBanner"
import HeroImage from "../../Assets/images/banner_main.png"
import WaveHeading from "../../Components/WaveHeading/WaveHeading"
import FeatureGrid from "../../Components/FeatureGrid/FeatureGrid"
import FeatureItem from "../../Components/FeatureItem/FeatureItem"
import Treadmill from "../../Assets/images/treadmill.png"
import Clock from "../../Assets/images/clock.png"
import Notepad from "../../Assets/images/notepad.png"
import ArticleThumbnail from "../../Components/ArticleThumbnail/ArticleThumbnail"

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
            <div id='articles-section'>
                <h1>Gym is just the tip of the iceberg</h1>
                <div className="divider"/>
                <h2>Hit the books</h2>
                <div id="articles-grid">
                    <ArticleThumbnail 
                    title="Sleep" 
                    description="And why it's over rated" 
                    link="/" />
                    <ArticleThumbnail 
                    title="Nutrition" 
                    description="Why Wendy's and Monster Energy are optimal nutrition" 
                    link="/" />
                    <ArticleThumbnail 
                    title="Mewing" 
                    description="Don't stop the streak" 
                    link="/" />
                    <ArticleThumbnail 
                    title="Leg Day" 
                    description="To Do or Not to Do, that is the Question" 
                    link="/" />
                    <ArticleThumbnail 
                    title="Swimming" 
                    description="Could be useful..." 
                    link="/" />
                    <ArticleThumbnail 
                    title="Rest times" 
                    description="Why you should bring a sleeping bag to the gym" 
                    link="/" />
                </div>
            </div>
        </>
    )
}