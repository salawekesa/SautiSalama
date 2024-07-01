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

  return (
    <>
      <main className="app">
        <Layout>
          <Nav />
          <style>{`
            .reporting {
              display: flex;
              justify-content: center;
              align-items: center;
              min-height: 100vh;
              padding: 1rem;
              box-sizing: border-box;
            }
            .report-form {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              max-width: 500px;
              width: 100%;
              background: white;
              padding: 2rem;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              border-radius: 8px;
            }
            @media (max-width: 768px) {
              .report-form {
                padding: 1rem;
              }
            }
          `}</style>
          <Box as="main">
            <div className="reporting">
              <div className="report-form">
                <script
                  src="https://static.elfsight.com/platform/platform.js"
                  data-use-service-core
                  defer
                ></script>
                <div className="elfsight-app-b6acaaa6-45c3-4085-8443-927103f317c2" data-elfsight-app-lazy></div>
              </div>
            </div>
          </Box>
          <Footer />
        </Layout>
      </main>
    </>
  );
};

export default Report;
