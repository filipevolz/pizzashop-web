import { useEffect } from 'react'

interface TitlePageProps {
  title: string
}

export function TitlePage({ title }: TitlePageProps) {
  useEffect(() => {
    document.title = `${title} | pizza.shop`
  }, [title])

  return (
    <>
      <title>{title} | pizza.shop</title>
    </>
  )
}
