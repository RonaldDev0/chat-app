import BackgroundDefault from './BackgroundDefault'
import NavBarr from './NavBarr'
import FormMessage from './FormMessage'
import ChatHistory from './ChatHistory'

import style from './scss/index.module.scss'

export default function Chat ({ chatOpen }: {chatOpen: String | null}) {
  return (
    <div className={style.container}>
      {
      !chatOpen
        ? <BackgroundDefault />
        : <>
          <NavBarr chatOpen={chatOpen} />
          <ChatHistory />
          <FormMessage />
          </>
      }
    </div>
  )
}
