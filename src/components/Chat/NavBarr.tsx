import style from './scss/NavBarr.module.scss'

export default function NavBarr ({ chatOpen }: {chatOpen: String}) {
  return (
    <div className={style.container}>
      <div className={style.user}>
        <p>user_Image</p>
        <p>{chatOpen}</p>
      </div>
      <p>user_Options</p>
    </div>
  )
}
