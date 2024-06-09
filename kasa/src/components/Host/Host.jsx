// src/components/Host/Host.jsx

import React from 'react';
import './Host.scss';

const Host = ({ host }) => {
  return (
    <div className="host">
      <span className="host-name">{host.name}</span>
      <img src={host.picture} alt={host.name} className="host-picture" />
    </div>
  );
};

export default Host;
