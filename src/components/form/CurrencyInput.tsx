// import './styles.css'
import { useState } from 'react';
import { plainToDecimal } from '@/utils/string';

type Props = React.InputHTMLAttributes<HTMLInputElement>

function CurrencyInput(props : Props) {
  const { className, ...inputProps } = props;
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event: any) => {
    const input: string = event.target.value;
    const digitsOnly = input.replace(/\D/g, '');
    const formattedValue = plainToDecimal(digitsOnly);
    setInputValue(formattedValue);
  };

  return (
    <div className={`form-input-box ${className || ''}`}>
      <input className="form-input" {...inputProps} value={inputValue} onChange={handleChange} />
    </div>
  )
}

export default CurrencyInput