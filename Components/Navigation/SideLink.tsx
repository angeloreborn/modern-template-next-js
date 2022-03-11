import React from 'react'
interface SideLinkProps{
    children? : any
}
export default function SideLink(props: SideLinkProps) {
  return (
    <div>{props.children}</div>
  )
}
