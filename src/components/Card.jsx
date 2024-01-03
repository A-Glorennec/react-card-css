import React from 'react';
import "./Card.scss";
import star from "../assets/star.svg";
import affiche from "../assets/lsda.jpg";

const Card = () => {
    return (
        
        <section className='card-container'>
            <img src={affiche} alt="affiche du seigneur des anneaux" />
            <h1>The Lord Of The Rings</h1>
            <div className='ratings'>
                <img src={star} alt="stars" />
                <img src={star} alt="stars" />
                <img src={star} alt="stars" />
                <img src={star} alt="stars" />
                <img src={star} alt="stars" />
                <p>4.5 (413)</p>
            </div>
            <article className='secondary-container'>
                <h2 className='secondary-container-text'>Secondary text</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ipsa quasi voluptatem nemo laborum eligendi possimus maxime vero, deserunt eos non, blanditiis natus doloremque a ipsam totam accusamus recusandae iure?</p>
                <div className='secondary-container-border'></div>
            </article>
            <article className='container-subtitles'>
            <h2 className='container-subtitles-text'>Subtitles</h2>
            <div className='container-subtitles-items'>
                <p>Item 1</p>
                <p>Item 2</p>
                <p>Item3</p>
                <p>Item4</p>
            </div>
            </article>
        </section>
        
    );
}

export default Card;
