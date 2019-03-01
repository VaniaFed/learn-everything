import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';
import { v4 } from 'uuid';

import Title from '../common/Title';
import TestItem from '../common/viewCards/TestItem';
import Button from '../common/Button';

class ManageCards extends Component {
  constructor(props) {
    super(props);

    this.deleteCard = this.deleteCard.bind(this);
    this.createCard = this.createCard.bind(this);
    this.state = {
      cards: [
        {
          id: v4(),
          question: 'Кто ты?',
          answer: 'Who are you?',
        },
        {
          id: v4(),
          question: 'Кто ты?',
          answer: 'Who are you?',
        },
      ],
    }
  }

  deleteCard(id) {
    console.log(id)
    const cards = this.state.cards.filter(card =>
      card.id !== id
    );
    this.setState({
      cards
    });
  }

  createCard() {
    console.log('created');
    const cards = [
      ...this.state.cards,
      {
        id: v4(),
        question: 'type the question...',
        answer: 'type the answer...',
      }
    ];

    this.setState({ cards });
  }

  render() {
    const { cards } = this.state;
    const { title } = this.props;
    const { deleteCard, createCard } = this;
    return (
      <div>
        <Title title={title} />
        <div className="test-items">
          {cards.length === 0 ?
          <h3>Тут пусто. (Создать карточку?)</h3> :
          cards.map((card, i) =>
            <TestItem key={i} questionText={card.question} answerText={card.answer} enabled={false} onDelete={() => deleteCard(card.id)} />
          )}
          <Button className="default-btn" content="Add new Card" onClick={() => createCard()} />
        </div>
      </div>
    )
  }
}

ManageCards.propTypes = {
  title: PropTypes.string,
  questionsList: PropTypes.array,
  answersList: PropTypes.array,
}

ManageCards.defaultProps = {
  title: 'untitled list',
  questionsList: [],
  answersList: [],
}

render(
  <ManageCards title="Present simple" />,
  document.querySelector('#manage-cards')
);