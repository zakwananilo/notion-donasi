// import './styles.css'

type Props = {
  children: React.ReactNode;
  className?: string;
}

function CardBody(props: Props) {
  return (
    <div className={`card-body ${props.className || ''}`}>
      {props.children}
    </div>
  )
}

export default CardBody