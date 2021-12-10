import axios from "axios";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import './detail.css';

export default function DogDetails() {
    const [dogDetail, setdogDetail] = useState(null);

    let {id} = useParams();

    useEffect(()=> {
        axios.get(`http://localhost:3001/api/dogs/${id}`)
            .then((responseBack) => {
                setdogDetail(responseBack.data)
            })

            return() => {
                setdogDetail(null)  // CleanUp
            }
// eslint-disable-next-line
        }, []);

    return  <div className='details-container'>
        {
            dogDetail ?
            <div className='details-container'><br/>
            <h2><u>Details of the breed:</u></h2><br/><br />
            <div key={dogDetail[0].id} >
                <h1 style={{fontSize:"52px"}} ><u>{dogDetail[0].name}: </u></h1>
                <img className="dog-img" src={dogDetail[0].image} alt="Look's like of a puppy" height="250px" width="230px"/><br/><br/>
                <h4>Weight:</h4>
                <p>     {dogDetail[0].weight}kgs.   </p><br/>
                <h4>Height:</h4>
                <p>     {dogDetail[0].height}"  </p><br/>
                <h4>Life Span:</h4>
                <p> {dogDetail[0].life_span}.</p><br/>
                <h4> Temperament's: </h4>
                <p>{!dogDetail[0].createdInDb? dogDetail[0].temperament + ", " : dogDetail[0].Temperaments?.map(el => el.name + (', ')) }</p><br/>
            </div> 
            </div>
            :
            <div><br/><br/><br/><br/>
                <h1 className="name-loading"> Loading... </h1><br /><br /><br/><br/><br/>
                <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
        }
        <Link to='/home'><br />
            <button className='btn'> Go Home </button><br/><br /><br />
        </Link><br /><br />
    </div>
}