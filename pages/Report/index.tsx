// pages/report.tsx
import React, { useState } from 'react';
import Head from 'next/head';
import { Layout } from '../../components/navbar/layout';
import { Nav } from '../../components/navbar/navbar';
import { Box } from '../../components/styles/box';
import { Footer } from '../../components/footer';

const Report = () => {
  const [communication, setCommunication] = useState<string>('phone');
  const [contactTime, setContactTime] = useState<string>('anytime');

  const showContactInput = (value: string) => {
    setCommunication(value);
  };

  const showContactTimeInput = (value: string) => {
    setContactTime(value);
  };

  const formContainerStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: 'white',
    padding: '20px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    width: '90%',
    maxWidth: '500px'
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column' as 'column'
  };

  const labelStyle = {
    marginTop: '10px'
  };

  const inputStyle = {
    marginTop: '5px',
    padding: '10px',
    border: '1px solid #ced4da',
    borderRadius: '4px',
    width: '100%'
  };

  const buttonStyle = {
    marginTop: '20px',
    padding: '10px',
    border: 'none',
    borderRadius: '4px',
    background: '#007bff',
    color: 'white',
    cursor: 'pointer'
  };

  const buttonHoverStyle = {
    background: '#0056b3'
  };

  const hiddenStyle = {
    display: 'none'
  };

  return (


    <>
      <main className="app">
      <Layout>
      
      <Nav />
         
          <style>{`
        
            .report-form,  {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              max-width: 500px;
              margin:2rem;
              padding:2rem;
             
            }
          `}</style>
       
          
              <Box as="main">
                <div className='report-form'>
                <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script>
                <div className="elfsight-app-b6acaaa6-45c3-4085-8443-927103f317c2" data-elfsight-app-lazy></div>
                
                </div>
                
              </Box>
              <Footer />
            </Layout>
          </main>
    </>
  );
};

export default Report;
