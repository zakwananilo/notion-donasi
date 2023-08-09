// import './styles.css'

type Props = React.InputHTMLAttributes<HTMLInputElement>;

function Input(props : Props) {
  const { className, ...inputProps } = props;

  return (
    <div className={`form-input-box ${className || ''}`}>
      <input className="form-input" {...inputProps} />
    </div>
  )
}

export default Input