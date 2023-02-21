import style from './scss/CardUser.module.scss'

export default function List ({ user, setChatOpen }: { user: String, setChatOpen: Function }) {
  const handleClick = () => {
    setChatOpen(user)
  }

  return (
    <div className={style.container} onClick={handleClick}>
      <p className={style.content}>{user}</p>
    </div>
  )
}
