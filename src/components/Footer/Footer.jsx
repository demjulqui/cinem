import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='text-center text-lg-start text-muted' style={{ backgroundColor: '#0a4275' }}>
      
        <div>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-facebook-f'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-twitter'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-google'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-instagram'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-linkedin'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-github'></i>
          </a>
        </div>
      

      <section className=''>
        <div className='container text-center text-md-start mt-5'>
          <div className='row mt-3'>
            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' style={{ color: 'white'}}>
                <i className='fas fa-gem me-3'></i>
                Company name

              </h6>
               <img src='https://cdn.discordapp.com/attachments/973882360368074804/977139742195974164/solobordoblu.png' alt='FilmS' width="250" height="150"></img> 
            </div>

            <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' style={{ color: 'white'}}>Products</h6>
              <p>
                <a href='#!' className='text-reset' >
                  <p style={{ color: 'white'}}>Angular</p>
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset' >
                  <p style={{ color: 'white'}}>React</p>
                </a>
              </p>
            </div>
            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' style={{ color: 'white'}}>Contact</h6>
              <p style={{ color: 'white'}}>
                <i className='fas fa-home me-3'></i> italy
              </p>
              <p style={{ color: 'white'}}>
                <i className='fas fa-envelope me-3'></i>
                info@example.com
              </p>
              <p style={{ color: 'white'}}>
                <i className='fas fa-phone me-3'></i> + 01 234 567 88
              </p>
              <p style={{ color: 'white'}}>
                <i className='fas fa-print me-3'></i> + 01 234 567 89
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)', color: 'white'}}>
        © 2021 Copyright: Film'S
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
         
        </a>
      </div>
    </MDBFooter>
  );
}