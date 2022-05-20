import React from 'react';
import {
  MDBFooter,
} from 'mdb-react-ui-kit';

export default function FooterLanding() {
  return (
    <MDBFooter className='text-center text-white' style={{ backgroundColor: '#0a4275' }}>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright: Film'S
      </div>
    </MDBFooter>
  );
}