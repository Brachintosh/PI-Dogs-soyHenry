import React, { useState, useEffect} from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {createDog, obtainTemperament } from "../../redux/actions/index";
import './Create.css';

// ! ARREGLAR EL EFECTO DEL BOTON QUE ELIMINA AL CLICKEARSE

export default function Create(){

    const dispatch = useDispatch();
    const history = useHistory();
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

    const [errors, setErrors] = useState({});

    useEffect(() => {
        dispatch(obtainTemperament());
    }, [dispatch]);

    function handleOnChanges(e) {
        setInput({
            ...input,
            [e.target.name] : e.target.value
        });

        setErrors(validation({
            ...input,
            [e.target.name] : e.target.value
        }));
    };

    function handleSelected(e) {
        e.preventDefault();
        setInput({
            ...input,
            // Le paso lo que ya tiene en "...input.temperament" y despues lo que contiene en "e.target.value"
            // Guarda en el arreglo cada select que sea clickeado.
            temperament: [...input.temperament, e.target.value]
        });
    };

    function handleSubmit(e) {
        e.preventDefault();
        console.log(input)  // Controlo qué tiene el input antes de ser enviado...
        // Llamo a la function que conecta con el back-end y le mando lo recibido por "input"

        dispatch(createDog(input));
        // Para que el usuario vea que fue creado se envía un "alert"
        alert("Breed was created successfully");
        // Reseteo el formulario:
        setInput({
            name: "",
            image: "",
            weight: "",
            height: "",
            life_span: "",
            temperament: [],
        });
        // Al terminar, re-dirigo al Home. >>> useHistory()
        history.push('/home');

    };

    function validation(input) {
        let errors = {};

        if(!input.name) {
            errors.name = "Breed must have a name."
        } else if(!input.weight) {
            errors.weight = "No weight was specified..."
        } else if(!input.height) {
            errors.height = "No height was specified..."
        } else if(!input.life_span) {
            errors.life_span = "No life span was specified..."
        }
        if(!input.image) {
            errors.image = "Breed must have an Image."
        }
        return errors;
    };

    function handleDelete(e) {
        console.log("SOY E", e);
        e.preventDefault();
        setInput({
            ...input,
            temperament: input.temperament.filter( temp => temp !== e.target.value)
        })
    };

    return(
        <div className="bg">
            <form onSubmit={handleSubmit}>
                <div><br />
                    <Link to="/home">
                        <button className='btn'>Go Home</button><br />
                    </Link><br />
                    <h3>CREATE A BREED:</h3><br /> 
                    <label>Name:    </label>
                    <input 
                        key={input.name}
                        className='input-form'
                        type="text"
                        placeholder="e.g. John"
                        value={input.name}
                        name="name"
                        onChange={(e) => handleOnChanges(e)}
                    />
                    {errors.name && (
                        <p className='error'>{errors.name}</p>
                    )}
                </div>

                <div>
                    <label>Image:   </label>
                    <input
                        key={input.image}
                        className='input-form'
                        type="text"
                        placeholder="Image link..."
                        value={input.image}
                        name="image"
                        onChange={(e) => handleOnChanges(e)}
                    />
                    {errors.image && (
                        <p className='error'>{errors.image}</p>
                    )}
                </div>

                <div>
                    <label>Weight:  </label>
                    <input 
                        key={input.weight}
                        className='input-form'
                        type="text"
                        placeholder="e.g. 2 - 10 kgs"
                        value={input.weight}
                        name="weight"
                        onChange={(e) => handleOnChanges(e)}
                    />
                    {errors.weight && (
                        <p className='error'>{errors.weight}</p>
                    )}
                </div>

                <div>
                    <label>Height:  </label>
                    <input
                        key={input.height}
                        className='input-form'
                        type="text"
                        placeholder="e.g. 20 - 80 cms"
                        value={input.height}
                        name="height"
                        onChange={(e) => handleOnChanges(e)}
                    />
                    {errors.height && (
                        <p className='error'>{errors.height}</p>
                    )}
                </div>

                <div>
                    <label>Life-Span:   </label>
                    <input
                        key={input.life_span}
                        className='input-form'
                        type="text"
                        placeholder="e.g. 8 - 10 years"
                        value={input.life_span}
                        name="life_span"
                        onChange={(e) => handleOnChanges(e)}
                    />
                    {errors.life_span && (
                        <p className='error'>{errors.life_span}</p>
                    )}
                </div>

                {/* <div>
                    <label>Origin:</label>
                    <input
                        type="text"
                        placeholder="e.g. Brazil"
                        value={input.origin}
                        name="origin"
                        onChange={handleOnChanges}
                    />
                [[ ES OPCIONAL ... ]]
                </div> */}

                <div>
                    <label>Temperaments:    </label>
                    <select onChange={(e) => handleSelected(e)} className='input-form'>
                        {/* state.temperamentos.name >>> para acceder a la lista de temperament en DB */}
                        {temps?.map((t) => (
                            <option key={t.name} value={t.name}>{t.name}</option>
                        ))}
                    </select>
                    {/* {errors.temperament && (
                        <p className='error'>{errors.temperament}</p>
                    )} */}
                </div><br />
                
                <div  className='buttons'>
                {input.temperament.map(e => (
                    <div >
                        <button onClick={handleDelete} className='btn-create' value={e} key={e.id}>{e}
                        </button>
                    </div>
                ))}
                </div><br />    
                <button className='btn' type="submit">SUBMIT</button><br /><br />
                <br />
            </form>
        </div>
    
    )

};