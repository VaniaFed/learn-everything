import React, { Component } from 'react';

import css from './decks.module.sass';

import Deck from './Deck/Deck';
import Button from '../common/Button';
import { removeDeck, addDeck } from '../actions';

class Decks extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    const { store } = this.props;
    return (
      <div className="container">
        <h1>Decks</h1>
        <div className={css.lists}>
          {store.getState().decks.map((deck, i) => 
            <Deck key={deck.id}
                  id={deck.id}
                  title={deck.title}
                  quantity={deck.quantityCards}
                  onDelete={() => {
                    // TODO: I stopped here.
                    store.dispatch( removeDeck(deck.id) )
                  }}
            />
          )}
        </div>
        <Button className="default-btn"
                onClick={() => {
                  store.dispatch( addDeck() )
                }} 
                content="Добавить список"/>
      </div>
    )
  }
}

export default Decks;