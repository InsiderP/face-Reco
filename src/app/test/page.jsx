"use client";
import React from 'react';
import { useMediaQuery } from '@mui/material';

const FoodBloggingPage = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <div>
      {/* Hero Section */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '80vh',
          backgroundImage: 'url(/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          style={{
            maxWidth: '800px',
            padding: '32px',
            textAlign: 'center',
            backgroundColor: 'white',
            borderRadius: '8px',
          }}
        >
          <h1 style={{ fontSize: isMobile ? '2.5rem' : '3rem' }}>Discover the Best Recipes</h1>
          <p style={{ fontSize: isMobile ? '1rem' : '1.25rem', marginTop: '16px' }}>
            Explore a world of delicious culinary creations, from classic dishes to innovative flavors.
          </p>
          <button
            style={{
              marginTop: '24px',
              padding: '12px 24px',
              backgroundColor: '#0070f3',
              color: '#fff',
              borderRadius: '8px',
              cursor: 'pointer',
            }}
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Featured Recipes Section */}
      <div style={{ padding: '32px' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '24px', fontSize: isMobile ? '2.5rem' : '3rem' }}>
          Featured Recipes
        </h1>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '24px',
          }}
        >
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              style={{
                maxWidth: '300px',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
              }}
            >
              <img
                src={`/recipe-${item}.jpg`}
                width={300}
                height={200}
                alt={`Recipe ${item}`}
              />
              <div style={{ padding: '16px' }}>
                <h2 style={{ fontSize: isMobile ? '1.5rem' : '2rem' }}>Recipe {item}</h2>
                <p style={{ fontSize: isMobile ? '1rem' : '1.25rem', marginTop: '8px' }}>
                  Explore a world of delicious culinary creations, from classic dishes to innovative flavors.
                </p>
                <button
                  style={{
                    marginTop: '16px',
                    padding: '8px 16px',
                    backgroundColor: '#0070f3',
                    color: '#fff',
                    borderRadius: '8px',
                    cursor: 'pointer',
                  }}
                >
                  View Recipe
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodBloggingPage;
