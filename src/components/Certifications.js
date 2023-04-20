import React from 'react';

const Certifications = ({ awscert, securitycert }) => {
  return (
    <div className="certifications-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px', marginBottom: '20px'}}>
      <img src={awscert} alt="AWS Solutions Architect Associate" style={{ marginRight: '20px', maxWidth: '765px', height: 'auto' }} />
      <img src={securitycert} alt="Security+" style={{ maxWidth: '750px', height: 'auto' }} />
    </div>
  );
};

export default Certifications;
