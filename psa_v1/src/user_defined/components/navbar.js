import React from 'react';
import { HashRouter, Link, Route, Routes } from 'react-router-dom';
import HomeComponent from './home';
// import MasterComponent from './master';
import MasterFirestoreComponent from './master-firestore';
import DisplayComponent from './display';
import CreditsComponent from './credits';

export default function NavbarComponent() {
 
    return (
        <HashRouter>
        {/* <BrowserRouter> */}
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
                                <Link to={'/display'} className="text-warning text-decoration-none">Display</Link>
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
            <p className='text-center text-warning bg-danger'>Click <a className='text-white' href='https://zvdas.github.io'> here </a> to go to portfolio website.</p>

            <Routes>
                <Route exact path="/home" element={<HomeComponent/>}/>
                {/* <Route exact path="/master" element={<MasterComponent/>}/> */}
                <Route exact path="/master" element={<MasterFirestoreComponent/>}/>
                <Route exact path="/display" element={<DisplayComponent/>}/>
                <Route exact path="/credits" element={<CreditsComponent/>}/>
            </Routes>   
        {/* </BrowserRouter> */}
        </HashRouter>
    )
}