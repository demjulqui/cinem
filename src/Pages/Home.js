

import AzionGenre from '../components/Genre/CardGenre';
import React, { useEffect } from 'react';
import HookLook from "../components/auth/HookLook";


import { gapi } from "gapi-script";



const clientId = "786066878087-jgnsj8gl3p61sljp3pbbuotj9iremar0.apps.googleusercontent.com"
const Home = () => {
    useEffect(() => {
        function start() {
            gapi.load('auth2', () => {
                gapi.auth2.init({
                    client_id: clientId
                });
            });
        }
        start();
    }, []);

    return (
        <>
            <div>
                <HookLook />


            </div>

        </>
    )
}

export default Home;