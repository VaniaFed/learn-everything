import React from 'react'
import PropTypes from 'prop-types'

import css from './howDoesItWork.module.sass'
import Title from '../../common/title1/Title';

const HowDoesItWork = props => {
  return (
    <div className={`container ${css.container}`}>
      <Title content='Какую задачу решает приложение' />
      <p>Наверное, все знают такую поговорку — "Повторение мать учения".
        Эта поговорка имеет и научное объяснение. Когда человек встречает информацию,
        которую он уже где-то видел или слышал, укрепляются нейронные связи головного мозга.
        И человек постепенно запоминает информацию. </p>
      <p>Таким образом смысл всего обучения сводится к повторении информации. Но как часто её нужно повторять?</p>
      <p>На этот вопрос может ответит статья <a target='_blank' href='https://ru.wikipedia.org/wiki/%D0%98%D0%BD%D1%82%D0%B5%D1%80%D0%B2%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5_%D0%BF%D0%BE%D0%B2%D1%82%D0%BE%D1%80%D0%B5%D0%BD%D0%B8%D1%8F'>клик (wikipedia.org)</a> </p>
      <Title content='Я не хочу читать статью' />
      <p>Тогда я постораюсь объяснить, но очень кратко.</p>
      <p>Есть формула: y = x*2+1, где x - прыдудущий интервал повторения
        (разница между предудущей и следующей датой повторения), а y - через сколько дней повторять.</p>
      <p>Вот и все. Это приложение позволяет организовать повторение информации с этим алгоритмом</p>
      <Title content='График — для наглядности' />

    </div>
  )
}

HowDoesItWork.propTypes = {

}

export default HowDoesItWork
