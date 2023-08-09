// import './styles.css'

type Props = React.SelectHTMLAttributes<HTMLSelectElement>;

function Select(props : Props) {
  const { className, children, ...inputProps } = props;

  return (
    <div className={`form-input-box ${className || ''}`}>
      <select className="form-input-select" {...inputProps}>
        {children}
      </select>
    </div>
  )
}

export default Select