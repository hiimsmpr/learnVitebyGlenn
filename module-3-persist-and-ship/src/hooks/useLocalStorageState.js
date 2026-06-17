import { useEffect, useState } from 'react'

export default function useLocalStorageState(key, initialValue) {
  // Read from localStorage once during initialization.
  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key)
      return saved ? JSON.parse(saved) : initialValue
    } catch {
      return initialValue
    }
  })

  // Save to localStorage whenever value changes.
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}
