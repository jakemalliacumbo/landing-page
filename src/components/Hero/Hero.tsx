import './Hero.css'

import { GoPlus } from "react-icons/go";
import { PiStarFour } from "react-icons/pi";
import { LuArrowRight } from "react-icons/lu";
import { IoIosTrendingUp } from "react-icons/io";

const statistics = [
    {
        icon: PiStarFour,
        value: "2.4M",
        title: "Students reached",
        description: "Across 31 countries since 2011.",
    },
    {
        icon: GoPlus,
        value: "1,284",
        title: "Schools partnered",
        description: "In 14 countries, from Kenya to Guatemala.",
    },
    {
        icon: LuArrowRight,
        value: "38K",
        title: "Teachers trained",
        description: "Equipped with modern tools and methodology.",
    },
    {
        icon: IoIosTrendingUp,
        value: "3.1x",
        title: "Graduation lift",
        description: "Partner schools outperform national averages 3x.",
    },
];

export default function Hero() {
    return (
        <section className="hero">
            <div className="main-card">
                <div className="main-card-body">
                    <h1>A classroom for every child.</h1>
                    <p>We fund the schools, train the teachers, and measure what works — so every child we reach today becomes a graduate tomorrow.</p>
                </div>
            </div>
            <div className="cards">
                {statistics.map(({ icon: Icon, value, title, description }) => (
                    <div className="card" key={title}>
                        <div className="card-header">
                            <div className="icon"><Icon /></div>
                            <h2>{value}</h2>
                        </div>
                        <div className="card-body">
                            <h3>{title}</h3>
                            <p>{description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
