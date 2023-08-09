// import './styles.css'

type Props = {
  children: React.ReactNode;
  shadow?: boolean;
  rounded?: number;
  className?: string;
}

function Card(props: Props) {
  return (
    <div className={`card ${props.shadow ? 'card-shadow' : ''} ${props.className || ''}`} style={{
      borderRadius: props.rounded
    }}>
      {props.children}
    </div>
  )
}

export default Card