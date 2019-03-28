import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

import css from './cards.module.sass';
import { renameDeck } from '../actions';

import CardsNav from './cardsNav/CardsNav';
import CardsContainer from './CardsContainer/CardsContainer';

class Cards extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const state = this.props.store.getState();
    const { store } = this.props;
    const { id } = this.props.match.params;
    const currentDeck = state.decks.find(deck => deck.id === id);
    const cards = state.cards.filter(card => card.deckId === id);
    return (
      // TODO: title нужно будет получать из deck, где id = idDeck
      // TODO: при помощи роута достаем из URL id колоды
      <div className="container">
        <input className={css.input_deck_name}
               defaultValue={currentDeck.title}
               type="text"
               onBlur={(e) => {
                 const newName = e.target.value
                 store.dispatch( renameDeck(id, newName) )
               }}
               onMouseOver={(e) => e.target.focus() }
        />
        <CardsNav deckId={id} />
        <CardsContainer store={store} cards={cards} deckId={id} />
      </div>
    )
  }
}

Cards.propTypes = {
  store: PropTypes.object,
}

Cards.defaultProps = {
  store: {},
}

export default Cards;