import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Netflix() {
  const location = useLocation();
  const projectId = new URLSearchParams(location.search).get('id');

  useEffect(() => {
    window.location.replace('https://app.datacamp.com/workspace/w/cd38fa61-1330-48ab-92fe-3ba9c5d52d58/edit?file=notebook.ipynb');
  }, []); // The second argument to useEffect is an empty array, which means the effect will only run once when the component is mounted

  return null; // This component doesn't need to render anything
}

export default Netflix;


