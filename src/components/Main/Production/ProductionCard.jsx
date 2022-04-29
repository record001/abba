import "./production.css"


export default function ProductionCard({imgSrc, title, text}) {
    return(
        <div className="proCard">
                <img src={imgSrc} alt="pro" />
                <div className="proCard__context">
                    <h2>{title}</h2>
                    <p>{text}</p>
                </div>
        </div>
    )
}