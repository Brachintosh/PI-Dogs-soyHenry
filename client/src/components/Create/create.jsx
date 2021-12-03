import React, { useState, useEffect} from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {createDog, obtainTemperament } from "../../redux/actions/index";


export default function Create(){

    const dispatch = useDispatch();
    const temps = useSelector((state) => state.temperamentos);

    // Me guardo los valores del formulario en un estado local nuevo.
    const [input, setInput] = useState({
        name: "",
        image: "",
        weight: "",
        height: "",
        life_span: "",
        temperament: [],
        // origin: ""
    });

    useEffect(() => {
        dispatch(obtainTemperament());
    }, [dispatch]);

    function handleOnChanges(e) {
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    };

    return(

        <div>
            <div><br />
                <Link to="/home">
                    <button>Go Home</button>
                </Link>
            </div><br />
            <h3>CREATE A BREED:</h3><br />
            
            <form>
                <div>
                    <label>Name:</label>
                    <input 
                        type="text"
                        placeholder="e.g. John"
                        value={input.name}
                        name="name"
                    />
                </div>

                <div>
                    <label>Image:</label>
                    <input
                        type="text"
                        placeholder="Image link..."
                        value={input.image}
                        name="image"

                    />
                </div>

                <div>
                    <label>Weight:</label>
                    <input 
                        type="text"
                        placeholder="e.g. 2 - 10 kgs"
                        value={input.weight}
                        name="weight"

                    />
                </div>

                <div>
                    <label>Height:</label>
                    <input
                        type="text"
                        placeholder="e.g. 20 - 80 cms"
                        value={input.height}
                        name="height"

                    />
                </div>

                <div>
                    <label>Life-Span:</label>
                    <input
                        type="text"
                        placeholder="e.g. 8 - 10 years"
                        value={input.life_span}
                        name="life_span"

                    />
                </div>

                {/* <div>
                    <label>Origin:</label>
                    <input
                        type="text"
                        placeholder="e.g. Brazil"
                        value={input.origin}
                        name="origin"
                    />
                [[ ES OPCIONAL ... ]]
                </div> */}

                <div>
                    <label>Temperaments:</label>
                    <select>
                        {temps?.map((t) => (
                            <option value={t.name}>{t.name}</option>
                        ))}
                    </select>
                </div><br />
                
                <button type="submit">SUBMIT</button>
                    
            </form>
        </div>
    )

};