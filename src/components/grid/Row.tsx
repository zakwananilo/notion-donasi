// import './styles.css'

type Props = {
  children: React.ReactNode;
  id?: string;
  center?: boolean;
  className?: string;
}

function Row(props: Props) {
  return (
    <div id={props.id} className={`row ${props.center ? 'justify-center items-center' : ''} ${props.className || ''}`}>
      {props.children}
    </div>
  )
}

export default Row