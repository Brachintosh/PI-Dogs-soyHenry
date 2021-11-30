// import React from 'react';
// import {useSelector, useDispatch } from 'react-redux';
// import { filterByTemps } from '../../redux/actions/index';

// export default function FilterTemps({pagina}) {
//     const allTemps = useSelector((state) => state.temperamentos);
//     const dispatch = useDispatch();

//     function onInputChange(e) {
//         e.preventDefault();
//         pagina(1);
//         dispatch(filterByTemps(e.target.value))
//     }

//     return (
//         <div>
//             <select onChange={(e)=>{onInputChange(e)}}>
//                 <option name='Temperamentos' key='keyT'> Temperamentos </option>

//                 {allTemps && allTemps.map((e) => (
//                     <option key={e.id} value={e.name} >{e.name}</option>
//                 ))}

//             </select>
//         </div>
    
//     );
// };