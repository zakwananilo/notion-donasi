// import './styles.css'

type Props = {
  children: React.ReactNode;
  className?: string;
}

function CardHeader(props: Props) {
  return (
    <div className={`card-header ${props.className || ''}`}>
      {props.children}
    </div>
  )
}

export default CardHeader