import React from 'react'

type Props = {
  text: string;
  type: 'button' | 'submit';
  className?: string;
  onClick?: () => any;
}

function ButtonPrimary(props: Props) {
  return (
    <button
      className={`button-primary ${props.className}`}
      type={props.type}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  )
}

export default ButtonPrimary