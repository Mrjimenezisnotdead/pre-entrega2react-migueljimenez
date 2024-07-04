// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ShoppingCart from './components/ShoppingCart'; // Importa el componente ShoppingCart
import './App.css'; // Importa los estilos de la aplicación si es necesario

const App = () => {
    return (
        <Router>
            <div className="App">
                <NavBar />

                <div className="main-content">
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/category/:id" component={ItemListContainer} />
                        <Route path="/item/:id" component={ItemDetailContainer} />
                    </Switch>
                </div>

                <ShoppingCart /> {/* Integra el componente ShoppingCart al final de la App */}
            </div>
        </Router>
    );
};

// Componente de inicio para la ruta '/'
const Home = () => {
    return (
        <div>
            <h2>Bienvenido al e-commerce</h2>
            <ItemListContainer />
        </div>
    );
};

export default App;
