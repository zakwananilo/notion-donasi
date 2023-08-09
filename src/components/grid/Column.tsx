// import './styles.css'

type Props = {
  children: React.ReactNode;
  className?: string;
  weight?: number
}

function Column(props: Props) {
  return (
    <div className={`column ${props.className || ''}`} style={{ flex: props.weight }}>
      {props.children}
    </div>
  )
}

export default Column