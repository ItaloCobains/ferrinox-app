import { AppContext } from '@/contexts/app-context'
import { useContext } from 'react'
import styles from './page.module.css'

export default function Home() {
  const { count, decrementCount, incrementCount } = useContext(AppContext)

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
    </div>
  )
}
