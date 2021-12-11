
import React from 'react';
import statusClear from '../../../assets/images/status-clear.svg';
import statusClouds from '../../../assets/images/status-cloud.svg';
import defaultAsset from '../../../assets/images/status-cloud.svg';

type Props = {
  name: string,
};

type Assets = {
  [key: string]: any
};

const assets: Assets = {
  statusClear,
  statusClouds,
};

const Illustration = ({ name }: Props) => {
  if (!assets[name]) {
    return <img src={defaultAsset} alt="default illustration" />
  }
  return (
    <img src={assets[name]} alt={name} />
  );
};

export default Illustration;
