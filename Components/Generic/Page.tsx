import React from 'react'
interface PageProps extends ChildProps {}

export default function Page(props: PageProps) {
  return (
    <>{props.children}</>
  )
}
