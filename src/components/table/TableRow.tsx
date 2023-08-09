// import './styles.css'

type Props = {
  children: React.ReactNode;
  className?: string;
}

function TableRow(props: Props) {
  return (
    <tr className={props.className}>
      {props.children}
    </tr>
  )
}

export default TableRow