import React from 'react';
import InfoItem from './InfoItem';
import { userStats } from '../../utils/const';

const renderItem = (item, index) => <InfoItem key={index} stat={item.stat} value={item.value} />;

const Info = (props) => (
  <div>
    {userStats.map(renderItem)}
  </div>
);

export default Info;