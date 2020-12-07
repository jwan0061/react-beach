import React, { Component } from 'react';
import Title from "./Title";
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa";

export default class Services extends Component {
    state = {
        services:[
            {
                icon: <FaCocktail />,
                title: "free cocktails",
                info: "Lorem ipsum dolor sit amet consectetur adipisceing elit, Magni, cour"
            },
            {
                icon: <FaHiking />,
                title: "free hiking",
                info: "Lorem ipsum dolor sit amet consectetur adipisceing elit, Magni, cour"
            },
            {
                icon: <FaShuttleVan />,
                title: "free shuttle van",
                info: "Lorem ipsum dolor sit amet consectetur adipisceing elit, Magni, cour"
            },
            {
                icon: <FaBeer />,
                title: "free beer",
                info: "Lorem ipsum dolor sit amet consectetur adipisceing elit, Magni, cour"
            },
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services"></Title>
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                         return (
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                         )
                    })}
                </div>
            </section>
        )
    }
}
