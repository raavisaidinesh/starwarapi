import React from 'react';
import { useState, useEffect } from 'react';
import styles from "./Starwar.module.css";

export const Starwar = () => {
  const [planets, setplanets] = useState([]);
  const [people, setpeople] = useState([]);
  const [nextPage, setNextPage] = useState("https://swapi.dev/api/planets/?format=json");
  const [prevPage, setprevPage] = useState("https://swapi.dev/api/planets/?format=json");
  

  async function fetchplanets(){
    let res= await fetch(nextPage);
    let data = await res.json();
    setplanets(data.results);
    setNextPage(data.next);
    setprevPage(data.previous);
   }
   async function fetchplanetsprev(){
    let res= await fetch(prevPage);
    let data = await res.json();
    setplanets(data.results);
    setNextPage(data.next);
    setprevPage(data.previous);
   }
  useEffect(() => {
       fetchplanets();
       
  }, []);
  return (
    <>
    <div className={styles.peoplebox}>
      {planets.map((list,index)=>(
        <ul className={styles.peoplecard}>
          <li><span>name : </span>{list.name}</li>
          <li><span>diameter : </span>{list.diameter}</li>
          <li><span>climate : </span>{list.climate}</li>
          <li><span>gravity : </span>{list.gravity}</li>
          <li><span>terrain : </span>{list.terrain}</li>
          <li><span>surface_water : </span>{list.surface_water}</li>
          <li><span>population : </span>{list.population}</li>
        </ul> 
      ))}
    </div>
    <footer>
      <button onClick={fetchplanetsprev} disabled={!prevPage}>Prev</button>
      <button onClick={fetchplanets} disabled={!nextPage}>next</button>
    </footer>
    </>
  );
};
// import React, { useState, useEffect } from 'react';
// import styles from "./Starwar.module.css";

// export const Starwar = () => {
//   const [planets, setPlanets] = useState([]);
//   const [people, setPeople] = useState([]);
//   const [nextPage, setNextPage] = useState("https://swapi.dev/api/planets/?format=json");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [loading, setLoading] = useState(false);

//   const fetchPeople = async (url) => {
//     setLoading(true);
//     try {
//       let res = await fetch(url);
//       let data = await res.json();
//       setPeople(data.results);
//       setNextPage(data.next);
//     } catch (error) {
//       console.error("Error fetching people:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchPlanets = async () => {
//     try {
//       let res = await fetch(`https://swapi.dev/api/planets/?page=${currentPage}&format=json`);
//       let data = await res.json();
//       setPlanets(data.results);
//     } catch (error) {
//       console.error("Error fetching planets:", error);
//     }
//   };

//   useEffect(() => {
//     fetchPeople(nextPage);
//     fetchPlanets();
//   }, [currentPage]);

//   const handleNextPage = () => {
//     setCurrentPage(currentPage + 1);
//   };

//   const handlePrevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   return (
//     <>
//       <div className={styles.h}>starwar</div>
//       <div>heyyy</div>
//       <div className={styles.peoplebox}>
//         {people.map((list, index) => (
//           <ul className={styles.peoplecard} key={index}>
//              <li><span>name : </span>{list.name}</li>
//              <li><span>diameter : </span>{list.diameter}</li>
//              <li><span>climate : </span>{list.climate}</li>
//              <li><span>gravity : </span>{list.gravity}</li>
//              <li><span>terrain : </span>{list.terrain}</li>
//              <li><span>surface_water : </span>{list.surface_water}</li>
//              <li><span>population : </span>{list.population}</li>
//           </ul>
//         ))}
//       </div>
//       <div>
//         <button onClick={handlePrevPage} disabled={currentPage === 1}>
//           Prev
//         </button>
//         <button onClick={handleNextPage} disabled={!nextPage || loading}>
//           Next
//         </button>
//       </div>
//       {loading && <div>Loading...</div>}
//     </>
//   );
// };
