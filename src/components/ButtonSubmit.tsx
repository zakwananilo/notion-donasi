import React from 'react'

type Props = {
  className?: string,
  text: string
}

function ButtonSubmit({ className, text }: Props) {
  return (
    <button
      className={`button-primary ${className}`}
      type="submit"
    >
      {text}
    </button>
  )
}

export default ButtonSubmit