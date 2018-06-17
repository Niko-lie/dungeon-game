import React from 'react';

const InfoItem = ({ stat, value }) => (
  <div>
    <p>{stat}: {value}</p>
  </div>
);

export default InfoItem;