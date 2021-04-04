import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const items = [
{
  rota: '/',
  icon: (<i className="fas fa-copy"></i>),
  title: 'Pedidos'
}
]

const ListItems = ({ open, history }) => (
  <div className="items-wrapper">
   {
     items.map((item, idx) => (
      <Link to={item.rota} key={idx}>
      <div className="menu-item flex horizontal">
        <div className="flex-1 flex flex-center">
          {item.icon}
        </div>
        {open && (
          <div className="flex-2 flex flex-start">
            <span>{item.title}</span>
          </div>
        )}
      </div>
    </Link>
     ))
   }
  </div>
);

export default ListItems;
