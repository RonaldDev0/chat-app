'use client'
import { useRef, useEffect } from 'react'

export default function ScrollToBottom ({ Msg }: any) {
  const bottomRef = useRef<any>(null)

  useEffect(() => {
    bottomRef.current.scrollIntoView({ behavior: 'smooth' })
  }, [Msg])

  return <div ref={bottomRef} />
}
