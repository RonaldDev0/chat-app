import BackgroundDefault from './BackgroundDefault'
import NavBarr from './NavBarr'
import FormMessage from './FormMessage'
import ChatHistory from './ChatHistory'

import style from './scss/index.module.scss'

export default function Chat () {
  const chatSelect = true

  return (
    <div className={style.container}>
      {
      !chatSelect
        ? <BackgroundDefault />
        : <>
          <NavBarr />
          <ChatHistory />
          <FormMessage />
          </>
      }
    </div>
  )
}
