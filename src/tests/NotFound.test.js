import React from 'react';
import { screen } from '@testing-library/react';
import NotFound from '../pages/NotFound';
import renderWithRouter from '../renderWithRouter';

describe('Testando componente NotFound.js', () => {
  it('h2 com texto Page requested not found', () => {
    renderWithRouter(<NotFound />);
    const heading = screen.getByRole('heading', { name: /Page requested not found/i });
    expect(heading).toBeDefined();
  });

  it('src da imagem corresponde', () => {
    renderWithRouter(<NotFound />);
    const srcc = screen.getByRole('img');
    expect(srcc).toHaveProperty('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
