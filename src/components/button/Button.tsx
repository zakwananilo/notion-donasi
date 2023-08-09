import { ButtonHTMLAttributes } from 'react';
// import './styles.css';

type Props = React.DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
& {
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  color: "primary" | "secondary" | "white" | "blue";
  children: React.ReactNode;
  className?: string
}

function Button(props: Props) {
  const { sm, md, lg, color, className, ...originalProps } = props;
  if (props.lg) return (
    <button className={`button button-large button-${props.color} ${props.className || ''}`} {...originalProps} type={props.type || 'button'}>
      {props.children}
    </button>
  )

  if (props.md) return (
    <button className={`button button-medium button-${props.color} ${props.className || ''}`} {...originalProps} type={props.type || 'button'}>
      {props.children}
    </button>
  )

  // If sm or nothing chosen
  return (
    <button className={`button button-small button-${props.color} ${props.className || ''}`} {...originalProps} type={props.type || 'button'}>
      {props.children}
    </button>
  )
}

export default Button