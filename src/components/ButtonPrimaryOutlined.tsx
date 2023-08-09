import React from 'react'

type Props = {
  className?: string,
  text: string
}

function ButtonPrimaryOutlined({ className, text }: Props) {
  return (
    <button
      className={`button-primary-outlined ${className}`}
      type="submit"
    >
      {text}
    </button>
  )
}

export default ButtonPrimaryOutlined