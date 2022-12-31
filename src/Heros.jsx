import React, { useState, useEffect } from "react";
import Google from './images/travellogo.png';
import './style.css'
import Herosimg from './images/heros.jpg'
const url =
    "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json";

const Heros = () => {
    const [superhero, setsuperheros] = useState([]);
    const fetchHeros = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setsuperheros(data);
    };
    const RemoveHero = (name) => {
        const Hero = superhero.filter((FvrtHero) => FvrtHero.name !== name);
        setsuperheros(Hero);
    }
    useEffect(() => {
        fetchHeros();
    }, []);
    return (
        <div class="hero">
            <div class="navbar1">
             <img src={Google} alt="logo" width={250} height={200} />
             <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About us</a></li>
                    <li><a href="">Services</a></li>
                    <li><a href="">Games</a></li>
                    <li><a href="">Features</a></li>
                    <li><a href="">How its Work</a></li>
                    <button className="btn">Sign In</button>
                </ul>
            </div>     
           <div className="main">
            <div className="herosimg" style={{ backgroundImage: `url(${Herosimg})` }}>
                </div>
            
            <div className="cards">
                {superhero.map((FvrtHero) => {
                    return (
                        <div className="card">
                            <div className="cardcontent">
                                <div className="profile">
                                    <div className="cardimg">
                                        <img src={FvrtHero.images.lg} alt="" />
                                        <div className="name">
                                            <h2>{FvrtHero.name}</h2>
                                            <p>@{FvrtHero.biography.fullName}</p>
                                        </div>
                                    </div>
                                    <div className="Button"><button className="btnread">Power: {FvrtHero.powerstats.power}</button></div>
                                </div>
                                <div className="content">
                                    <br />
                                    <p>Work:</p>
                                    <h5>{FvrtHero.work.occupation}</h5>
                                    <p>Connection:</p>
                                    <h5>{FvrtHero.connections.relatives}</h5><br />
                                    <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates esse accusamus porro? Veritatis asperiores omnis assumenda illum necessitatibus maxime tenetur cum est, alias eveniet exercitationem eum eligendi pariatur ducimus laborum!</h6><br />
                                </div>
                            </div>
                            <div className="footer">
                                <div className="publisher">
                                    <p>Publisher:</p>
                                    <h4>{FvrtHero.biography.publisher}</h4>
                                </div>
                                <div className="Removebtn">
                                    <button onClick={() =>RemoveHero (FvrtHero.name)}>Remove</button>
                                </div>
                            </div>
                        </div>
                    )
                })
                }
            </div>
        </div>  </div>
    )   
}

export default Heros