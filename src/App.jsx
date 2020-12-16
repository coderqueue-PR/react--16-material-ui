// import React, { useState } from 'react';
// import Notes from './Notes';
// import AddIcon from '@material-ui/icons/Add';

// const App = () =>{

//     const [inputList , setInputList] = useState("");
//     //current Data , updated Data= initial Data
//     const [Items , setItems] = useState([]); 

//     const itemEvent = (event) =>{
//         setInputList(event.target.value);
//     }

//     const listOfItems = () =>{
//         setItems((oldItems) =>{
//             return [...oldItems , inputList];
//         })
//         setInputList("");
//     }

//     return(
//         <>
//         <div className = 'main_div'>
//             <div className='center_div'>
//             <br />
//             <h1>NotesTake</h1>
//             <br />
//             <input type = "text" placeholder = "write a note" 
//             value={inputList}
//             onChange={itemEvent}/>
//             <button onClick={listOfItems}>+</button>
//             <ol>
//                 {/* <li>{inputList}</li> */}
//                 {
//                     Items.map((itemval) =>{
//                       return <Notes text ={itemval} />
//                     })
//                 }
//             </ol>
//             </div>
//         </div>
//         </>
//     )
// }

// export default App;
