// import './styles.css'

type Props = {
  children: React.ReactNode;
  className?: string;
}

function Table(props: Props) {
  return (
    <table className={`table ${props.className || ''}`}>
      {props.children}
    </table>
  )
}

export default Table