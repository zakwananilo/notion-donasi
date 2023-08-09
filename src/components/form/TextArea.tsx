// import './styles.css'

type Props = React.InputHTMLAttributes<HTMLTextAreaElement>;

function TextArea(props : Props) {
  const { className, ...inputProps } = props;

  return (
    <div className={`form-input-box ${className || ''}`}>
      <textarea className="form-input" rows={3} {...inputProps}/>
    </div>
  )
}

export default TextArea