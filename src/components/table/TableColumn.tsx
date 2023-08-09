// import './styles.css'

type Props = {
  header?: boolean;
  children: React.ReactNode;
  className?: string;
}

function TableColumn(props: Props) {
  if (props.header) return (
    <th className={props.className}>
      {props.children}
    </th>
  )

  return (
    <td className={props.className}>
      {props.children}
    </td>
  )
}

export default TableColumn