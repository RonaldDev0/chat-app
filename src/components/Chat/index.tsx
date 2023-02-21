import BackgroundDefault from './BackgroundDefault'
import NavBarr from './NavBarr'
import FormMessage from './FormMessage'
import ChatHistory from './ChatHistory'

import style from './scss/index.module.scss'

export default function Chat ({ chatOpen, messages }: {chatOpen: String | null, messages: any}) {
  return (
    <div className={style.container}>
      {
      !chatOpen
        ? <BackgroundDefault />
        : <>
          <NavBarr chatOpen={chatOpen} />
          <ChatHistory chatOpen={chatOpen} messages={messages} />
          <FormMessage />
          </>
      }
    </div>
  )
}
