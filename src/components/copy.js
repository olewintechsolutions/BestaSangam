import React from 'react';

function CopyPage() {
  return (
    <div className='text-center' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)', padding: '20px' }}>
      <p className='text-center fw-bold mb-1'>
        Designed & Developed by
      </p>
      <p style={{
        color: '#008899',
        textAlign: 'center',
        fontWeight: 'bold',
        textDecoration: 'underline',
        fontSize: '18px',
        margin: 0
      }}>
        OlewinTechSolutions
      </p>
      <p style={{
        color: '#008899',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '12px',
        textDecoration: 'underline',
        margin: 0
      }}>
        Bangalore - India
      </p>
      <p style={{ marginTop: '10px', marginBottom: '0' }}>
        © 2022 - 2024 Copyright:&nbsp;
        <a className='text-primary' target='_blank' rel='noreferrer' href='https://olewintechsolutions.com/'>
          OlewinTechSolutions.com
        </a>
      </p>
    </div>
  );
}

export default CopyPage;
