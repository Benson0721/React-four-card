import Card from "./Card"
import "./css/FourCards.css"


const cards = [{
    header: "Supervisor",
    content: "Monitors activity to identify project roadblocks",
    icon: "supervisor",
    color: "Cyan",
    id:"a",
},
{
    header: "Team Builder",
    content: "Scans our talent network to create the optimal team for your project",
    icon: "team-builder",
    color: "Red",
    id:"b",
},
{
    header: "Karma",
    content: "Regularly evaluates our talent to ensure quality",
    icon: "karma",
    color: "Orange",
    id:"c",
},
{
    header: "Calculator",
    content: "Uses data from past projects to provide better delivery estimates",
    icon: "calculator",
    color: "Blue",
    id:"d",
}]

export default function FourCards() {

    return (
        <>
            <div className="layout">
                {cards.map((card, idx) => {
                    return <Card card={card} id={idx} />
                })}

            </div>
        </>
    )
}