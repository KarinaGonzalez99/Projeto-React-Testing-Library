import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FavoritePokemon from '../pages/FavoritePokemon';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testando componente About.js', () => {
  it('Exibido No Favorite Pokemon Found', () => {
    renderWithRouter(<FavoritePokemon />);
    const notFound = screen.getByText(/No favorite pokémon found/i);
    expect(notFound).toBeInTheDocument();
  });

  it('Exibido na tela apenas os pokémons favoritados', () => {
    renderWithRouter(<App />);
    const moreDetails = screen.getByRole('link', { name: /more details/i });
    userEvent.click(moreDetails);
    const checkbox = screen.getByRole('checkbox', { name: /pokémon favoritado\?/i });
    userEvent.click(checkbox);
    const favoritePokemon = screen.getByRole('link', { name: /favorite pokémon/i });
    userEvent.click(favoritePokemon);
    const pokemon = screen.getByText(/pikachu/i);
    expect(pokemon).toBeInTheDocument();
    const calories = screen.getByText(/average weight: 6\.0 kg/i);
    expect(calories).toBeInTheDocument();
    const style = screen.getByText(/electric/i);
    expect(style).toBeInTheDocument();
  });
});
