// import './styles.css'
type Props = React.InputHTMLAttributes<HTMLInputElement>;

function Radio(props : Props) {
  const { className, children, ...inputProps } = props;

  return (
    <div className={`form-input-radio-box ${className || ''}`}>
      <div className="form-radio-group">
        <input type="radio" {...inputProps}/>
        {children}
      </div>
    </div>
  )
}

export default Radio