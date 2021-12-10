import React from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { filterByTemps } from '../../redux/actions/index';

export default function FilterTemps({paginaLocal}) {
    const allTemps = useSelector((state) => state.temperamentos);
    // console.log(allTemps)
    
    const dispatch = useDispatch();


    function onInputChange(e) {
        e.preventDefault();
        paginaLocal(1);
        dispatch(filterByTemps(e.target.value))
    }

// ​    ​function​ ​handleSelect​(​el​)​ ​{ 
// ​        ​if​ ​(​input​.​temperament​.​includes​(​(​el​.​target​.​value​)​)​)​ ​{ 
// ​            ​alert​(​"Temperament already selected. Try again :)"​)​ 
// ​        ​}​ ​else​ ​{ 
// ​            ​setInput​(​{ 
// ​                ...​input​, 
// ​                ​temperament​:​[​...​input​.​temperament​,​ ​el​.​target​.​value​] 
// ​            ​}​) 
// ​        ​} 
// ​    ​};

    return (
        <div>
            <p><u>Filter from:</u></p>
            <select 
                onChange={onInputChange} 
                style={{fontFamily: "Audiowide, sans-serif", letterSpacing: "1.1px"}} >
               
                <option name='Temperaments' key='keyT'> Temperaments </option>

                {allTemps && allTemps.map((e) => (
                <option key={e.id} value={e.name} >{e.name}</option>
                ))}

            </select>
        </div>
    )
};

//     function handleChange(el) {
//         setSelectTemp(el.target.value)
//     }

//     return (
//         <div className={styles.card}>
//         <form onSubmit={handleSubmit}>
//             <label className={styles.labelTemp}>Temperament!!</label>   
//             <br/>  
//             <select 
//                 onChange={handleChange}
//                 name='By Temperaments'
//                 style={{fontFamily: "Audiowide, sans-serif", letterSpacing: "1.1px"}} >

//                 <option value="all" >Temperaments:</option>
//                 {
//                     allTemps?.map((temp) => {
//                         return <option value={temp.name}>{temp.name}</option>
//                     })
//                 }
//             </select>
//             <button type='submit' className={styles.button}>Filter</button>
//         </form>
//     </div>
//     );
// };