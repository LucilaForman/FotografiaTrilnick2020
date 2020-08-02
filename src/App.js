import React from 'react';
import './App.scss';
import {Nav} from "./components/Nav/Nav";
import {PhotoGallery} from "./components/PhotoGallery/PhotoGallery";

function App() {
    return (
        <div className="App">
            <Nav/>
            <div className={'container'}>
                <h1 className={'name'}>Lucila Forman</h1>
                <p>Fotografía 2020 - Catedra Trilnik</p>
                <PhotoGallery/>
            </div>
        </div>
    );
}

export default App;
