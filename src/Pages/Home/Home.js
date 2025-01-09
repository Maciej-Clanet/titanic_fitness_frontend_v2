import "./Home.css"
import HeroBanner from "../../Components/HeroBanner/HeroBanner"
import HeroImage from "../../Assets/images/banner_main.png"
import WaveHeader from "../../Components/WaveHeader/WaveHeader"
import Treadmill from "../../Assets/images/treadmill.png"
import ArticleThumbnail from "../../Components/ArticleThumbnail/ArticleThumbnail"

export default function Home() {
    return (
        <>
            <HeroBanner bgImage={HeroImage}>
                <h1>UNSINKABLE GAINS</h1>
                <h2>Crash through  your fitness goals</h2>
            </HeroBanner>
            <WaveHeader text="LET THESE BENEFITS SINK IN" />

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
            </section>

        </>
    )
}