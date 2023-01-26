import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Teste o componente FavoritePokemon', () => {
  it('título certo', () => {
    renderWithRouter(<App />);
    const h2 = screen.getByRole('heading', { name: /Encountered Pokémon/i });
    expect(h2).toBeInTheDocument();
  });

  it('clicar no botão Próximo Pokémon', () => {
    renderWithRouter(<App />);
    const botaum = screen.getByRole('button', { name: /Próximo Pokémon/i });
    expect(botaum).toBeInTheDocument();
    const umPokemon = screen.getByText('Pikachu');
    expect(umPokemon).toBeInTheDocument();
    userEvent.click(botaum);
    const doisPokemon = screen.getByText('Charmander');
    expect(doisPokemon).toBeInTheDocument();
  });

  it('botão com nome correto', () => {
    renderWithRouter(<App />);
    const tipos = [
      { name: 'all', regex: /all/i },
      { name: 'electric', regex: /electric/i },
      { name: 'fire', regex: /fire/i },
      { name: 'bug', regex: /bug/i },
      { name: 'poison', regex: /poison/i },
      { name: 'psychic', regex: /psychic/i },
      { name: 'normal', regex: /normal/i },
      { name: 'dragon', regex: /dragon/i },
    ];
    tipos.forEach((type) => {
      const botaum = screen.getByRole('button', { name: type.regex });
      expect(botaum).toBeInTheDocument();
    });
  });

  it('botao all clicado', () => {
    const pokemons = ['Pikachu', 'Charmander', 'Caterpie', 'Ekans', 'Alakazam', 'Snorlax', 'Dragonair'];
    renderWithRouter(<App />);
    const botaums = screen.getAllByTestId('pokemon-type-button');
    expect(botaums.length).toBe(7);
    botaums.forEach((button, index) => {
      userEvent.click(button);
      const elemento = screen.getByText(pokemons[index]);
      expect(elemento).toBeInTheDocument();
    });
    const allButton = screen.getByRole('button', { name: /All/i });
    userEvent.click(allButton);
    const umPokemon = screen.getByText(pokemons[0]);
    expect(umPokemon).toBeInTheDocument();
  });
});
