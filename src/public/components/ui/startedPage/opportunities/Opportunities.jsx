import React from 'react'
import css from './opportunities.module.sass'
import Title from '../../common/title1/Title'
import Text from '../../common/text/Text'
import List from '../../common/list/List'
import ArticleBlock from '../acticleBlock/ArticleBlock'

const Opportunities = () => {
  return (
    <div className={css.container}>
      <div className='container'>
        <ArticleBlock>
          <Title>Возможности</Title>
          <Text>Приложение позволяет:</Text>
          <List>
            <Text>Работать с колодами и карточками - создавать, удалять и переименовывать (в случае с колодами)</Text>
            <Text>Проходить тест</Text>
            <Text>Собственно, само заучивание</Text>
            <Text>Делиться карточками (пока только посредством импорта / экспорта)</Text>
          </List>
        </ArticleBlock>
        <ArticleBlock>
          <Title>Планы на будущее</Title>
          <List>
            <Text>Добавление сервера для хранения данных в базе данных MongoDB</Text>
            <Text>Залитие на хостинг</Text>
            <Text>Возможно, какие-то графики для теста и заучивания</Text>
          </List>
        </ArticleBlock>
      </div>
    </div>
  )
}

export default Opportunities
