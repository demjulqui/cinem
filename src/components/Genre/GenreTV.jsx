import React, { useState, useEffect } from 'react';
//http://127.0.0.1:2000/api/tv/ricercaperGenere?page=1&genre=azione
// http://127.0.0.1:2000/api/movie/genre ---> lista generi


const GenreTV = () => {
    const [ id, setId ] = useState([]);
    const [ genre, setGenre ] = useState([]);
    const [ page, setPage ] = useState(1);
    const [ total_pages, setTotal_pages ] = useState(1);

    useEffect(() => {
        axios.get(`http://127.0.0.1:2000/api/movie/genre`).then((res) => {
            setId(res.data.results);
        });
    }, []);

    useEffect(() => {
        axios.get(`http://127.0.0.1:2000/api/tv/ricercaperGenere?page=${page}&genre=${genre}`).then((res) => {
            setId(res.data.results);
            setTotal_pages(res.data.total_pages);
        }
        );
    }, [page, genre]);

    const handleChange = (e) => {
        setGenre(e.target.value);
    }

    const handlePage = (e) => {
        setPage(e.target.value);
    }

    return (
        
