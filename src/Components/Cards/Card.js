import React, {useEffect, useState} from 'react';
import axios from "axios";
import './CardScss.scss'
import './MediaCard.scss'

const Card = () => {
    const intialState = [
            {
                "userId": 1,
                "id": 1,
                "img": "https://cdn-icons-png.flaticon.com/512/10691/10691802.png",
                "title": "Conveninent Booking",
                "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            },
            {
                "userId": 1,
                "id": 2,
                "img": "https://img.icons8.com/external-creatype-two-colour-colourcreatype/64/000000/external-files-crime-and-law-creatype-two-colour-colourcreatype.png",
                "title": "Real-Time Avaibility",
                "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
            },
            {
                "userId": 1,
                "id": 3,
                "img": "https://img.icons8.com/cotton/64/000000/file.png",
                "title": "Personalized Services",
                "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
            },
            {
                "userId": 1,
                "id": 4,
                "img": "https://cdn-icons-png.flaticon.com/512/1584/1584942.png",
                "title": "Timely Reminders",
                "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
            },
            {
                "userId": 1,
                "id": 5,
                "img": "https://cdn-icons-png.flaticon.com/512/3037/3037258.png",
                "title": "Secure Payments",
                "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
            },
            {
                "userId": 1,
                "id": 6,
                "img": "https://cdn-icons-png.flaticon.com/512/726/726476.png",
                "title": "Exclusive Offers",
                "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
            },
    ]
    const [data, setData] = useState(intialState)

        // useEffect(()=>{
        //     axios({
        //         method:'get',
        //         url:"http://localhost:5000/posts"
        //     }).then((res) => setData(res.data))
        // },[])


    return (
        <div className='card-block'>
            {
                data.map((item,index) => <div key={index} className='card'>
                    <div className='img'><img src={item.img} alt=""/></div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                </div>)
            }
        </div>
    );
};

export default Card;