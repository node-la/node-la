import React from 'react';
import { Typography } from '@material-ui/core';

const Neighbor = ({neighborName}) => {
  return (
    <Typography variant="h5">{neighborName}</Typography>
  )
}

export default Neighbor;