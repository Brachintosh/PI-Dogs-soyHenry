import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import './detail.css';

export default function DogDetails() {
    const [dogDetail, setdogDetail] = useState(null);

    let {id} = useParams();

    useEffect(()=> {
        axios.get('http://localhost:3001/api/dogs/' + id)
            .then((responseBack) => {
                setdogDetail(responseBack.data)
            })

            return() => {
                setdogDetail(null)  // CleanUp
            }

        }, []);
        console.log(dogDetail)

    return <div className='details-container'>
            <br/><h2><u>Details of the breed:</u></h2><br/>
        {
            dogDetail ?
            <div className='card-detail'>
                <h3>{dogDetail[0].name}</h3><br/>
                <img className="dog-img" src={dogDetail[0].image} alt="Image of a puppy" height="250px" width="230px"/><br/><br/>
                <h4>Weight:</h4>
                <p>     {dogDetail[0].weight}kgs.   </p><br/>
                <h4>Height:</h4>
                <p>     {dogDetail[0].height}"  </p><br/>
                <h4>Life Span:</h4>
                <p> {dogDetail[0].life_span}.</p><br/>
                <h4> Temperament's: </h4>
                <p>{!dogDetail[0].createdInDb? dogDetail[0].temperament + ", " : dogDetail[0].Temperaments?.map(el => el.name + (', ')) }</p><br/>
            </div> 
            
            :

            <div>
                <div className="loading">Loading...</div>
            </div>
        }
        <Link to='/home'><br />
            <button className='btnm'> Go Home </button><br/><br /><br />
        </Link><br /><br />
    </div>
}