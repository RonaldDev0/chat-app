import style from './scss/FormMessage.module.scss'

export default function FormMesage () {
  return (
    <form className={style.container}>
      <input type='text' className={style.input__text} autoFocus placeholder='Type a message' />
    </form>
  )
}
