import React from 'react';

const ItemDetailContainer = ({ match }) => {
    const itemId = match.params.id;

    

    return (
        <div>
            <h2>Detalle del Producto</h2>
            {/* Mostrar detalle producto */}
        </div>
    );
};

export default ItemDetailContainer;
