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
        }))

        /*console.log(input); // Para poder controlar qué tiene el INPUT*/
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
        } else if(!input.temperament) {
            alert("Breed must have at least one Temperament.");
        }
        return errors;
    };

    function handleDelete(el) {
        setInput({
            ...input,
            temperament: input.temperament.filter( temp => temp !== el)
        })
    };

    return(
        <div className="bg">
            <form onSubmit={(e) => handleSubmit(e)}>
                <div><br />
                    <Link to="/home">
                        <button className='btn'>Go Home</button><br />
                    </Link><br />
                    <h3>CREATE A BREED:</h3><br /> 
                    <label>Name:    </label>
                    <input 
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
                        className='input-form'
                        type="text"
                        placeholder="Image link..."
                        value={input.image}
                        name="image"
                        onChange={(e) => handleOnChanges(e)}
                    />
                </div>

                <div>
                    <label>Weight:  </label>
                    <input 
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
                        className='input-form'
                        type="text"
                        placeholder="e.g. 8 - 10 years"
                        value={input.life_span}
                        name="life_span"
                        onChange={(e) => handleOnChanges(e)}
                    />
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
                            <option value={t.name}>{t.name}</option>
                        ))}
                    </select>
                    {errors.temperament && (
                        <p className='error'>{errors.temperament}</p>
                    )}
                </div><br />
                <button className='btn' type="submit">SUBMIT</button><br /><br />
                <br />
                {input.temperament.map(el => 
                    <div onClick={() => handleDelete(el)}>
                        <div><p>x</p></div>
                        <button >{el}
                        </button>
                    </div>
                )}
                    
            </form>
        </div>
    
    )

};