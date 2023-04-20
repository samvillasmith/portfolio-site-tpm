import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Netflix() {
  const location = useLocation();
  const projectId = new URLSearchParams(location.search).get('id');

  useEffect(() => {
    window.location.replace('https://www.newschannel10.com/2018/11/12/great-task-fritch-native-leads-civil-operations-counter-drug-task-force/');
  }, []); // The second argument to useEffect is an empty array, which means the effect will only run once when the component is mounted

  return null; // This component doesn't need to render anything
}

export default Netflix;
