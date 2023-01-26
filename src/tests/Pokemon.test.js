import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testa o componente Pokemon', () => {
  it('card info', () => {
    renderWithRouter(<App />);
    const nome = screen.getByText('Pikachu');
    expect(nome).toBeInTheDocument();
    const moreDetails = screen.getByRole('link', { name: /more details/i });
    userEvent.click(moreDetails);
    const tipo = screen.getByTestId('pokemon-type');
    expect(tipo).toBeInTheDocument();
    const calories = screen.getByText(/average weight: 6\.0 kg/i);
    expect(calories).toBeInTheDocument();
    expect(tipo.textContent).toBe('Electric');
    const img = screen.getByRole('img', { name: /pikachu sprite/i });
    expect(img.src).toBe('https://archives.bulbagarden.net/media/upload/b/b2/Spr_5b_025_m.png');
  });

  it('detalhes pokemon', () => {
    const { history } = renderWithRouter(<App />);
    const moreDetails = screen.getByRole('link', { name: /more details/i });
    expect(moreDetails).toBeInTheDocument();
    userEvent.click(moreDetails);
    expect(screen.getByRole('heading', { name: /summary/i })).toBeInTheDocument();
    expect(history.location.pathname).toBe('/pokemon/25');
  });

  it('estrelinhaaaa em todos os favoritoss', () => {
    const { history } = renderWithRouter(<App />);
    const moreDetails = screen.getByRole('link', { name: /more details/i });
    expect(moreDetails).toBeInTheDocument();
    userEvent.click(moreDetails);
    const h2 = screen.getByRole('heading', { name: /summary/i });
    expect(h2).toBeInTheDocument();
    const { pathname } = history.location;
    expect(pathname).toBe('/pokemon/25');
    const checkbox = screen.getByLabelText(/pokémon favoritado\?/i);
    userEvent.click(checkbox);
    const img = screen.getByAltText(/pikachu is marked as favorite/i);
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', '/star-icon.svg');
  });
});
