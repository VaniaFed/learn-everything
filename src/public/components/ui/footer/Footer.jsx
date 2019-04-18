import React from 'react'
import css from './footer.module.sass'
import Title2 from '../common/title2/Title2'

const Footer = () => {
  return (
    <div className={css.footer}>
      <div className={`container ${css.columns}`}>
        <div className='column'>
          <Title2>Revise on Time!</Title2>
          <p className={css.paraghaph}>Разработано
            <a href='https://github.com/VaniaFed' className={css.link}> vaniafed</a>
          </p>
        </div>
        <div className='column'>
          <Title2>Полезные ссылки</Title2>
          <p className={css.paraghaph}><a href='https://wikium.ru' className={css.link}>Wikium</a></p>
          <p className={css.paraghaph}><a href='https://4brain.ru/' className={css.link}>4brain</a></p>
          <p className={css.paraghaph}>
            <a href='https://www.youtube.com/channel/UC_J8gecUO4gsesLXbXfjnNg'
              className={css.link}>English Galaxy</a>
          </p>
        </div>
        <div className='column'>
          <Title2>Контакты</Title2>
          <p className={css.paraghaph}><a href='https://github.com/VaniaFed' className={css.link}>GitHub</a></p>
          <p className={css.paraghaph}><a href='mailto:ztankist@gmail.com' className={css.link}>E-mail</a></p>
          <p className={css.paraghaph}><a href='https://vk.com/vaniafed' className={css.link}>Вконтакте</a></p>
        </div>
      </div>
    </div>
  )
}

export default Footer
