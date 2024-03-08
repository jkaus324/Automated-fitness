import React from "react";
import classes from './DietPlan.module.css'
import Card from "../Card/Card";
import milk from '../../assets/DietPlan/1.webp';
import dryfruit from '../../assets/DietPlan/2.webp';
import Broccoli from '../../assets/DietPlan/3.webp';
import sweetpotato from '../../assets/DietPlan/4.webp';
import banana from '../../assets/DietPlan/5.webp';
import tomato from '../../assets/DietPlan/6.webp';
import nuts from '../../assets/DietPlan/7.webp';
import blueberries from '../../assets/DietPlan/8.webp';

const DietPlan = () => {
    let list = [
        {
            img: milk,
            heading: 'Cow Milk',
            p1: 'With hydrating water, muscle-healing protein, refuelling sugar and bone-healthy calcium',
            p2: 'A warm glass around bedtime may also help you drift off and get the rest you need',
            url: 'https://www.bbcgoodfood.com/howto/guide/our-top-10-fitness-foods',
        },
        {
            img: dryfruit,
            heading: 'Dried fruit',
            p1: 'High in natural sugars, dried fruits provide a concentrated source of carbohydrate, making them a great energy booster',
            p2: 'You will also get a dose of fibre as well as vitamins and minerals, including potassium, with every mouthful',
            url: 'https://www.bbcgoodfood.com/howto/guide/our-top-10-fitness-foods',
        },
        {
            img: Broccoli,
            heading: 'Broccoli (and other green veg)',
            p1: 'With free-radical-busting antioxidants, digestion-promoting fibre, plus a whole army of vitamins and minerals',
            p2: 'They’re also a great source of folate that is thought to be good for heart health and for women hoping to conceive.',
            url: 'https://www.bbcgoodfood.com/howto/guide/our-top-10-fitness-foods',
        },
        {
            img: sweetpotato,
            heading: 'Sweet potatoes',
            p1: 'Sweet potatoes are versatile, count as one of your 5-a-day and provide disease-fighting beta-carotene, iron, fibre and vitamin C',
            p2: 'Sweet potatoes are a good addition to a carb-loading diet and especially before a long race, such as a half marathon',
            url: 'https://www.bbcgoodfood.com/howto/guide/our-top-10-fitness-foods',
        },
        {
            img: banana,
            heading: 'Bananas',
            p1: 'Bananas are the perfect fitness food: compact, portable, soft to chew, and packed with nutrients',
            p2: 'Taiwanese nutritionists found the peel is not only packed with even more potassium, but mood-boosting serotonin, eye-protecting lutein',
            url: 'https://www.bbcgoodfood.com/howto/guide/our-top-10-fitness-foods',
        },
        {
            img: tomato,
            heading: 'Tomatoes',
            p1: 'Loaded with vitamin C, tomatoes contain a powerful antioxidant called lycopene',
            p2: 'Tomatoes may help with a weight-loss programme: the fruit has been linked with natural weight management hormones',
            url: 'https://www.bbcgoodfood.com/howto/guide/our-top-10-fitness-foods',
        },
        {
            img: nuts,
            heading: 'Brazil nuts',
            p1: 'Brazil nuts are one of the few good sources of selenium, a mineral and micronutrient',
            p2: 'The heart-healthy fats in nuts may help manage cholesterol levels, but be wary: they can be high in calories if you nibble too many.',
            url: 'https://www.bbcgoodfood.com/howto/guide/our-top-10-fitness-foods',
        },
        {
            img: blueberries,
            heading: 'Blueberries',
            p1: 'Free radicals are thought to travel around your body damaging cells, causing disease, and triggering signs of premature aging',
            p2: 'Frozen blueberries (often far cheaper than fresh) are brilliant whizzed up into a post-exercise smoothie to replenish your muscles glycogen',
            url: 'https://www.bbcgoodfood.com/howto/guide/our-top-10-fitness-foods',
        },
    ]

    return (
        <div className={classes.yoga}>
            <div className={classes.yogaheading}>Diet for Fitness</div>
            <div className={classes.desc}><p>Try these basic diet plan for having a fit body lifestyle</p></div>
            <div className={classes.items}>
            {list.map(p => (
                <Card img={p.img} heading={p.heading} p1={p.p1} p2={p.p2} url={p.url}/>
            ))}
        </div>
        </div>
    )
};

export default DietPlan;