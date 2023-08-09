// import './styles.css'

type Props = React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> & {
  children: React.ReactNode;
  size: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  color?: "primary" | "secondary" | "black";
  weight?: number;
  leading?: number;
  className?: string;
}

function Text(props: Props) {
  let size = 'text-small';
  if (props.size == 'xxl') size = 'text-very-extra-large';
  if (props.size == 'xl') size = 'text-extra-large';
  if (props.size == 'lg') size = 'text-large';
  if (props.size == 'md') size = 'text-medium';
  if (props.size == 'sm') size = 'text-small';
  if (props.size == 'xs') size = 'text-extra-small';

  const color = props.color || "black";

  return (
    <span className={`${size} text-${color} ${props.className || ''}`} style={{
      fontWeight: props.weight,
      lineHeight: (props.leading ? `${props.leading}px` : undefined)
    }}>
      {props.children}
    </span>
  )
}

export default Text