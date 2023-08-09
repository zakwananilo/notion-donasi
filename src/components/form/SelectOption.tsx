import React from 'react'

type Props = React.DetailedHTMLProps<React.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>;

function SelectOption(props: Props) {
  return (
    <option {...props}>{props.children}</option>
  )
}

export default SelectOption