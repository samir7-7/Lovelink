import React, { useState } from 'react';
import TinderCard from "react-tinder-card";
import './ProfileCards.css';

function ProfileCards() {
    const [people, setPeople] = useState([
        {
            name: 'Samir Nepal',
            url: 'https://hips.hearstapps.com/hmg-prod/images/apple-ceo-steve-jobs-speaks-during-an-apple-special-event-news-photo-1683661736.jpg?crop=0.757xw:0.534xh;0.0799xw,0.0372xh&resize=1200:*'
        },
        {
            name: 'Aalok Upreti',
            url: 'https://scontent.fbdp1-1.fna.fbcdn.net/v/t1.15752-9/412437089_939030050907751_1125998211816907682_n.jpg?stp=dst-jpg_s100x100&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=cHmV5SwPzzkAX8cGW-J&_nc_ht=scontent.fbdp1-1.fna&oh=03_AdRsBOmokhCs3Ac2Y7bb4BgFpW7vple-r2n6CJ8lhHaIig&oe=66193C26'
        },
        {
            name: 'Manish Bhattarai',
            url: 'https://thefappening.pro/wp-content/uploads/2020/11/Dua-Lipa-Tattoos-TheFappening.Pro-16.jpg'
        },
      
        {
            name: 'Simran Pokhrel',
            url: 'https://scontent.fbdp1-1.fna.fbcdn.net/v/t39.30808-6/416043114_1028555141589969_4183173660042975788_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=4fyAPktFpgYAX9i_KSO&_nc_ht=scontent.fbdp1-1.fna&oh=00_AfBLlJoDqKz459kPvNHMr7rjammGQUgkyqgoLwqdFyFGqA&oe=660061A7'
        }
    ]);
    return (
        
             <div className='ProfileCards'>
            <div className='cardContainer'>
                {people.map(person => (
                    <TinderCard className='swipe' key={person.name} preventSwipe={['up', 'down']}>
                        <div style={{ backgroundImage: `url(${person.url})` }} className='card'>
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>

        </div>
       
    )
}


export default ProfileCards;