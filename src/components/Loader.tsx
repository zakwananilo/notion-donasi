type Props = {
  show?: boolean
}

function Loader(props: Props) {
  return (
    <div className={`loader ${props.show ? 'show' : ''}`}>
      <img src="/img/loader.png" width="50px" height="50px"/>
    </div>
  )
}

export default Loader