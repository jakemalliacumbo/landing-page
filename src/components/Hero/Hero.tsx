import './Hero.css'

import { GoPlus } from "react-icons/go";
import { PiStarFour } from "react-icons/pi";
import { LuArrowRight } from "react-icons/lu";
import { IoIosTrendingUp } from "react-icons/io";

export default function Hero() {

    return (
        <section className="hero">
            <div className="main-card">
                <h1>A classroom for every child.</h1>
                <p>We fund the schools, train the teachers, and measure what works — so every child we reach today becomes a graduate tomorrow.</p>
            </div>
            <div className="cards">
                
                <div className="card">
                    <div className="card-header">
                        <div className="icon"><PiStarFour /></div>
                        <h2>2.4M</h2>
                    </div>
                    <div className="card-body">
                        <h3>Students reached</h3>
                        <p>Across 31 countries since 2011.</p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <div className="icon"><GoPlus /></div>
                        <h2>1,284</h2>
                    </div>
                    <div className="card-body">
                        <h3>Schools partnered</h3>
                        <p>In 14 countries, from Kenya to Guatemala.</p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <div className="icon"><LuArrowRight /></div>
                        <h2>38K</h2>
                    </div>
                    <div className="card-body">
                        <h3>Teachers trained</h3>
                        <p>Equipped with modern tools and methodology.</p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <div className="icon"><IoIosTrendingUp /></div>
                        <h2>3.1x</h2>
                    </div>
                    <div className="card-body">
                        <h3>Graduation lift</h3>
                        <p>Partner schools outperform national averages 3x.</p>
                    </div>
                </div>
            
            </div>
        </section>
    )
}