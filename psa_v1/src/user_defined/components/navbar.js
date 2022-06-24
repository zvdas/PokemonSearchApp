import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomeComponent from './home';
import MasterComponent from './master';
import CreditsComponent from './credits';

export default function NavbarComponent() {
 
    return (
        <BrowserRouter>
            <nav className="navbar navbar-expand-lg bg-warning">
                <div className="container-fluid">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-5">
                        <li className="d-flex justify-content-left nav-item mx-5">
                            <button className="nav-link btn btn-outline bg-danger" data-bs-toggle="tab">
                                <Link to={'/home'} className="text-warning text-decoration-none">Home</Link>
                            </button>
                        </li>
                        <li className="nav-item mx-5">
                            <button className="nav-link btn btn-outline bg-danger" data-bs-toggle="tab">
                                <Link to={'/master'} className="text-warning text-decoration-none">Pokémon Master</Link>
                            </button>
                        </li>
                        <li className="nav-item mx-5">
                            <button className="nav-link btn btn-outline bg-danger" data-bs-toggle="tab">
                                <Link to={'/credits'} className="text-warning text-decoration-none">Credits</Link>
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
            
            <Routes>
                <Route exact path="/home" element={<HomeComponent/>}/>
                <Route exact path="/master" element={<MasterComponent/>}/>
                <Route exact path="/credits" element={<CreditsComponent/>}/>
            </Routes>   
        </BrowserRouter>
    )
}