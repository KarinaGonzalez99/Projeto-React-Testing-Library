import React from 'react';
import { screen } from '@testing-library/react';
import About from '../pages/About';
import renderWithRouter from '../renderWithRouter';

describe('Testando componente About.js', () => {
  it('h2 com texto About Pokédex', () => {
    renderWithRouter(<About />);
    const heading = screen.getByRole('heading', { name: /About Pokédex/i });
    expect(heading).toBeDefined();
  });

  it('src da imagem corresponde', () => {
    renderWithRouter(<About />);
    const srcc = screen.getByRole('img');
    expect(srcc).toHaveProperty('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
