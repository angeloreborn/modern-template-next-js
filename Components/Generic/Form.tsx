import React from 'react'

interface FormProps {
    children: any
}
export default function Form(props: FormProps) {
  return (
    <form onSubmit={(e)=> e.preventDefault()}>
        {props.children}
    </form>
  )
}
