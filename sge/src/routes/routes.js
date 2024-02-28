// routes.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import CrudDocente from '../pages/CrudDocente';
import CrudPresidente from '../pages/CrudPresidente';
import CrudDireccion from '../pages/CrudDireccion';
import Permisos from '../pages/AdminstradorPermisos';
import DashAlumno from '../pages/DashAlumno';
import EditarPerfil from '../pages/EditarPerfil';

const RoutesComponent = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Login />} />
                <Route path="/crudDocente" element={<CrudDocente />} />
                <Route path="/crudPresidente" element={<CrudPresidente />} />
                <Route path="/crudDireccion" element={<CrudDireccion />} />
                <Route path="/permisos" element={<Permisos />} />
                <Route path="/dashalumno" element= {<DashAlumno/>}/>
                <Route path="/editarperfil" element={<EditarPerfil />} />

            </Routes>
        </Router>
    );
};

export default RoutesComponent;
