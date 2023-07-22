"use strict";

    const movieAppDataset = async()=> {
        try{
        const url = `https://api.themoviedb.org/3/movie/11`;
        const options = {
           method : "GET",
           headers: {
               'Content-Type': 'application/json',
               'Authorization':'Bearer MOVIE-DB-ACCESS-TOKEN'
           }
        }
        const response = await fetch(url, options);
        const movieResponseObject = await response.json();
        return movieResponseObject;
    }catch(error){
    console.log(error);
}}


(async()=>{
const data = await movieAppDataset();
    console.log(data);



})();