import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Testando componente App.js', () => {
  it('link Home', () => {
    renderWithRouter(<App />);
    const home = screen.getByRole('link', { name: /Home/i });
    expect(home).toBeDefined();
  });

  it('link About', () => {
    renderWithRouter(<App />);
    const about = screen.getByRole('link', { name: /About/i });
    expect(about).toBeDefined();
  });

  it('link Favorite Pokémon', () => {
    renderWithRouter(<App />);
    const favoritePokemon = screen.getByRole('link', { name: /Favorite Pokémon/i });
    expect(favoritePokemon).toBeDefined();
  });
});
