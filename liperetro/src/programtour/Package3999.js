// import React, { useState } from 'react';
// import { Link } from "react-router-dom";
// import LRbar from "../bar/Bar";
// import './Package.css';

// function Package3999() {

//     const [value, setValue] = useState('Bann Peangpor Hostel');

//     const handleChange = (event) => {
//         setValue(event.target.value);
//     };

//     return (
//         <>
//             <LRbar />
//             <link href="https://fonts.googleapis.com/css2?family=Mitr:wght@500&display=swap" rel="stylesheet" />
//             <div className='backgrand-status2'>
//                 <br />
//                 <div className="pics">
//                     <img src='https://www.chillpainai.com/src/wewakeup/img_hotels/3211/1487070806-_MG_9750.JPG' />
//                 </div>

//                 <p className='description'>
//                     In this 1999฿ Package is including with 3 island tour and a free 1 meal at your place
//                     feel free to choose what you like with to following Hotel/Motel and Meal.
//                 </p>

//                 <form className='hotel-form' >

//                     <h2>Hotel</h2>
//                     {/* <div className="container"> */}
//                     <select onChange={(e) => { setBook({ ...book, hotels: e.target.value }) }}
//                         className="custom-select"
//                         value={hotel?.id}

//                     >
//                         {hotel.map((item) => (
//                             <option key={item.id} value={item.id} >
//                                 {item.Name}
//                             </option>

//                         ))}
//                     </select>
//                     {hotel.id ? (
//                         <img
//                             src={`http://localhost:1337${hotel.Image.url}`}
//                             width="100%"
//                             height="100%" />
//                     ) : (""
//                     )}
//                     {/* {hotel.id ? (
//                             <img
//                             src={`http://localhost:1337${hotel.Image.url}`}
//                             width="100%"
//                             height="100%"/>
//                         ) : ( ""
//                             )} */}
//                     {/* </div> */}

//                     {/* </form> */}

//                     <br /><br />

//                     {/* <form className='meal-form'> */}

//                     <h2>Meal</h2>
//                     {/* <div className="container"> */}
//                     <select onChange={(e) => setBook({ ...book, foods: e.target.value })}
//                         className="custom-select"
//                         value={food?.id}

//                     >
//                         {food.map((item) => (
//                             <option key={item.id} value={item.id}>
//                                 {item.Coursename}
//                             </option>
//                         ))}
//                     </select>
//                     <h1 className='topic'>
//                         Date
//                         <FormControl value={book.Date} onChange={(e) => setBook({ ...book, Date: e.target.value })} type="date" required></FormControl>
//                     </h1>


//                     <h1 className='topic'>
//                         Additional :
//                     </h1>


//                     <input type="text" className='additional' rows="2" value={book.Additional} onChange={(e) => setBook({ ...book, Additional: e.target.value })} required />

//                     <h1 className='topic'>
//                         Person
//                     </h1>

//                     <input min="1" max="10" className='person' type="number" value={book.Person} onChange={(e) => setBook({ ...book, Person: e.target.value })} />
//                     <div className='price-booking' value={book.Prices = pack.Price * book.Person} onChange={(e) => setBook({ ...book, Prices: e.target.value })}>Total : {pack.Price * book.Person} Baht</div>
//                     {/* <a value={pack.Price*book.Person} onChange={(e) => setBook({ ...book, Prices: e.target.value })}>{pack.Price*book.Person}</a> */}

//                 </form>

//                 <Link state={{ book: book }} to="/payment" className="btn-booking">Booking</Link>
//                 <a href='/package' className='btn-back'>Back</a>


//                 <br />


//             </div>
//         </>
//     )
// }

// export default Package3999;