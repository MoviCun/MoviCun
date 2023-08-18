import React, { useState } from 'react';
import './Paraderos.css';
import Rutauno from './components-routes/Ruta-1';
import Rutadosvd from './components-routes/Ruta-2-vd';
import Rutadosjoya from './components-routes/Ruta-2-joya';
import Rutadoslh from './components-routes/Ruta-2-lh';
import Rutadoslp from './components-routes/Ruta-2-lp';

const routes = [
  { id: 1, name: 'Seleciona el tipo de ruta' },
  { id: 2, name: 'Ruta 1' },
  { id: 3, name: 'Ruta 2 Villas del mar' },
  { id: 4, name: 'Ruta 2 La joya' },
  { id: 5, name: 'Ruta 2 Los heroes' },
  { id: 6, name: 'Ruta 2 Las palmas' },
];

const Paraderos = () => {
  const [selectedRoute, setSelectedRoute] = useState(null);

  const handleRouteChange = event => {
    const selectedId = parseInt(event.target.value);
    setSelectedRoute(selectedId);
  };

  return (
    <div className='paraderos'>
      <div className='container__paraderos'>
        <div className='title__routes'>
          <h2>Tipos de rutas</h2>
        </div>
        <div className='container__routes'>
          {routes.map(route => (
            <div className='item__routes' key={route.id}>
              <i className='bx bxs-bus'></i>
              <h3>{route.name}</h3>
            </div>
          ))}
        </div>
        <div className='container__routes-two'>
          <select className='item__routes-two' onChange={handleRouteChange}>
            {routes.map(route => (
              <option key={route.id} value={route.id}>{route.name}</option>
            ))}
          </select>
        </div>
      </div>
      {selectedRoute === 2 && <Rutauno />}
      {selectedRoute === 3 && <Rutadosvd />}
      {selectedRoute === 4 && <Rutadosjoya />}
      {selectedRoute === 5 && <Rutadoslh />}
      {selectedRoute === 6 && <Rutadoslp />}
    </div>
  );
};

export default Paraderos;
