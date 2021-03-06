import React from 'react'

import GraphExample from './graphExample/GraphExample'

import Title from '../../common/title1/Title'
import ArticleBlock from '../acticleBlock/ArticleBlock'
import Text from '../../common/text/Text'

import css from './howDoesItWork.module.sass'

const HowDoesItWork = () => {
  return (
    <div className={css.container}>
      <div className='container'>
        <ArticleBlock>
          <Title margin='bottom'>Какую задачу решает приложение</Title>
          <Text>
            Наверное, все знают такую поговорку — "Повторение мать учения".
            Эта поговорка имеет и научное объяснение. Когда человек встречает информацию,
            которую он уже где-то видел или слышал, укрепляются нейронные связи головного мозга.
            И человек постепенно запоминает информацию.
          </Text>
          <Text>
            Таким образом смысл всего обучения сводится к повторению информации. Но как часто её нужно повторять?
          </Text>
          <Text>
            На этот вопрос может ответит статья <a target='_blank' href='https://ru.wikipedia.org/wiki/%D0%98%D0%BD%D1%82%D0%B5%D1%80%D0%B2%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5_%D0%BF%D0%BE%D0%B2%D1%82%D0%BE%D1%80%D0%B5%D0%BD%D0%B8%D1%8F'>клик (wikipedia.org)</a>
          </Text>
        </ArticleBlock>
        <ArticleBlock>
          <Title margin='bottom'>Я не хочу читать статью</Title>
          <Text>
            Тогда я постораюсь объяснить, но очень кратко.
          </Text>
          <Text>
            Есть формула: y = x*2+1, где x - прыдудущий интервал повторения
            (разница между предудущей и следующей датой повторения), а y - через сколько дней повторять.
          </Text>
          <Text>
          Вот и все. Это приложение позволяет организовать повторение информации с этим алгоритмом
          </Text>
        </ArticleBlock>
        <ArticleBlock>
          <Title margin='bottom'>График — для наглядности</Title>
          <Text>Таким образом, если мы начнем повторение с 1 апреля, будут следующие даты повторения: 4 апреля, 11 апреля, 26 апреля, 27 мая, 28 июля.</Text>
          <Text>И так, пока вы не ошибетесь. Если это произойдет, переменная интервала сбросится и все начнется с начала.</Text>
          <GraphExample />
        </ArticleBlock>
      </div>
    </div>
  )
}

export default HowDoesItWork
