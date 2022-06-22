import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomeComponent from './home';
import MasterComponent from './master';
import DisplayComponent from './display';
import CreditsComponent from './credits';

export default function NavbarComponent() {
 
    return (
        <BrowserRouter>
            <nav className="navbar navbar-expand-lg bg-warning">
                <div className="container-fluid">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-5">
                        <li class="nav-item mx-5">
                            <button className="nav-link btn btn-outline bg-danger" data-bs-toggle="tab">
                                <Link to={'/home'} className="text-warning text-decoration-none">Home</Link>
                            </button>
                        </li>
                        <li class="nav-item mx-5">
                            <button className="nav-link btn btn-outline bg-danger" data-bs-toggle="tab">
                                <Link to={'/master'} className="text-warning text-decoration-none">Pokémon Master</Link>
                            </button>
                        </li>
                        <li class="nav-item mx-5">
                            <button className="nav-link btn btn-outline bg-danger" data-bs-toggle="tab">
                                <Link to={'/display'} className="text-warning text-decoration-none">Show Pokémons</Link>
                            </button>
                        </li>
                        <li class="nav-item mx-5">
                            <button className="nav-link btn btn-outline bg-danger" data-bs-toggle="tab">
                                <Link to={'/credits'} className="text-warning text-decoration-none">Credits</Link>
                            </button>
                        </li>
                    </ul>
                        <form class="d-flex mx-2" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button class="btn btn-outline-warning bg-danger" type="submit">Search</button>
                        </form>
                </div>
            </nav>
            
            <Routes>
                <Route exact path="/home" element={<HomeComponent/>}/>
                {/* <Route exact path="/master" element={<MasterComponent/>}/> */}
                {/* <Route exact path="/display" element={<DisplayComponent/>}/> */}
                {/* <Route exact path="/credits" element={<CreditsComponent/>}/> */}
                {/* <Route path="/update/:id" element={<UpdateEvent/>}/> */}
            </Routes>   
        </BrowserRouter>
    )
}