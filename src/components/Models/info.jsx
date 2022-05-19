import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

//creo una pagina con la id di ogni film con la info
const PagineInfo = () => {
    const [ movies, setMovies ] = useState([]);

    useEffect(() => {
        axios.get(`http://127.0.0.1:2000/api/trending/day `).then((res) => {
            setMovies(res.data.results);
        }

        );
    }, []);

    const settings = {
        
  