import "./ArticleThumbnail.css"


export default function ArticleThumbnail({title, description, link}){


    return(
        <div className="article-thumb-container">
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={link}>Read More</a>
        </div>
    )
}