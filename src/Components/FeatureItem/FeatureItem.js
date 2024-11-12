import "./FeatureItem.css"


export default function FeatureItem({columns = 1, img, text}){

    return(
        <div className="feature-item" style={{gridColumn: `span ${columns}`}}>
            <img src={img} />
            {text}
        </div>
    )
}