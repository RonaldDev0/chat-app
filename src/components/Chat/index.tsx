import BackgroundDefault from './BackgroundDefault'
import NavBarr from './NavBarr'
import FormMessage from './FormMessage'
import ChatHistory from './ChatHistory'

import style from './scss/index.module.scss'

export default function Chat ({ User, chatOpen, messages }: { User: String | null, chatOpen: String | null, messages: any }) {
  return (
    <div className={style.container}>
      {
      !chatOpen ? <BackgroundDefault /> : <><NavBarr chatOpen={chatOpen} /><ChatHistory chatOpen={chatOpen} messages={messages} User={User} /><FormMessage chatOpen={chatOpen} User={User} /></>
      }
    </div>
  )
}
