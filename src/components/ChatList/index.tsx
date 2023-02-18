import NavBarr from './NavBarr'
import CardUser from './CardUser'
import style from './scss/index.module.scss'

interface user {
  id: number,
  name: string
}

export default function ChatList () {
  const users: user[] = [
    {
      id: 1,
      name: 'pepito'
    },
    {
      id: 2,
      name: 'carlos'
    },
    {
      id: 3,
      name: 'komanche'
    },
    {
      id: 4,
      name: 'rivers'
    }
  ]

  return (
    <div className={style.container}>
      <NavBarr />
      <div className={style.cardsContainer}>
        {users?.map((user: user) => <CardUser key={user.id} user={user} />)}
      </div>
    </div>
  )
}
