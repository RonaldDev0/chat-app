import style from './scss/CardUser.module.scss'

interface user {
  id: number,
  name: string
}

export default function List ({ user }: { user: user}) {
  return (
    <div className={style.container}>
      <p>{user.name}</p>
    </div>
  )
}
