import React from "react";
import classes from './YogaCart.module.css';
import Paschimottanasana from '../../assets/Yoga/1.jpg';
import Padmasana from '../../assets/Yoga/2.jpg';
import Dhanurasana from '../../assets/Yoga/3.jpeg';
import Chakrasana from '../../assets/Yoga/4.jpg';
import Sarvangasana from '../../assets/Yoga/5.jpg';
import Halasana from '../../assets/Yoga/6.jpg';
import Matsyasana from '../../assets/Yoga/7.jpg';
import Trikonasana from '../../assets/Yoga/8.jpg';
import Card from "../Card/Card";

const YogaCart = () => {
    let list = [
        {
            img: Paschimottanasana,
            heading: 'Paschimottanasana',
            p1: 'Seated forward bend',
            p2: 'Yoga pose that stretches the entire back of the body, including the spinal column',
            url: 'https://en.wikipedia.org/wiki/Paschimottanasana',
        },
        {   
            img: Padmasana,
            heading: 'Padmasana',
            p1: 'The lotus position',
            p2: 'Cross-legged yoga posture that involves sitting with your feet on opposite thighs',
            url: 'https://en.wikipedia.org/wiki/Lotus_position',
        },
        {
            img: Dhanurasana,
            heading: 'Dhanurasana',
            p1: 'The Bow Pose',
            p2: 'Stretching the nerves, muscles, and ligaments in your neck, shoulders, back, hips, thighs, lower legs, and ankles',
            url: 'https://en.wikipedia.org/wiki/Dhanurasana',
        },
        {
            img: Chakrasana,
            heading: 'Chakrasana',
            p1: 'The Wheel Pose',
            p2: 'Yoga exercise that involves a full-body backward bend',
            url: 'https://en.wikipedia.org/wiki/Chakrasana',
        },
        {
            img: Sarvangasana,
            heading: 'Sarvangasana',
            p1: 'The shoulder stand',
            p2: 'Yoga pose that involves lifting the body vertically while balancing on the shoulders',
            url: 'https://en.wikipedia.org/wiki/Sarvangasana',
        },
        {
            img: Halasana,
            heading: 'Halasana',
            p1: 'The plough pose',
            p2: 'Yoga pose that involves lying on your back with your feet on the floor behind your head',
            url: 'https://en.wikipedia.org/wiki/Halasana',
        },
        {
            img: Matsyasana,
            heading: 'Matsyasana',
            p1: 'The Fish Pose',
            p2: 'Reclining back-bending pose in yoga',
            url: 'https://en.wikipedia.org/wiki/Matsyasana',
        },
        {
            img: Trikonasana,
            heading: 'Trikonasana',
            p1: 'The Extended Triangle Pose',
            p2: 'Improving flexibility, especially in the back muscles of the thigh',
            url: 'https://en.wikipedia.org/wiki/Trikonasana',
        }
    ]
    return (
        <div className={classes.items}>
            {list.map(p => (
                <Card img={p.img} heading={p.heading} p1={p.p1} p2={p.p2} url={p.url}/>
            ))}
        </div>
    )
};

export default YogaCart;