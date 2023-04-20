import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Office() {
  const location = useLocation();
  const projectId = new URLSearchParams(location.search).get('id');

  useEffect(() => {
    window.location.replace('https://app.datacamp.com/workspace/w/acb50bbb-a2de-41ba-ba97-4a2f3b234c55/edit?file=notebook.ipynb');
  }, []); // The second argument to useEffect is an empty array, which means the effect will only run once when the component is mounted

  return null; // This component doesn't need to render anything
}

export default Office;

