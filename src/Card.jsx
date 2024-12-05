import "./css/Card.css"




export default function Card({ card }) {
    const { color, header, content, icon, id } = card


    return (
        <>
            <div className={`card-border ${color} ${id}`}  >
                <div className="card-box">
                    <h2 className="box-item font-600">
                        {header}
                    </h2>
                    <p className="box-item">
                        {content}
                    </p>
                    <img src={`./images/icon-${icon}.svg`} alt="icon" className="icon" />
                </div>
            </div>
        </>
    )
}