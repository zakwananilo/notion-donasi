import { useState } from 'react';
import Text from '../typography/Text';
// import './styles.css'
import Button from '../button/Button';

type Props = React.InputHTMLAttributes<HTMLInputElement>;

function InputWithCopy(props : Props) {
  const { className, ...inputProps } = props;

  const doCopyText = () => {
    navigator.clipboard
             .writeText(inputProps.value?.toString() || '')
             .then(() => {
              alert(`${inputProps.value} telah disalin ke clipboard!`);
             })
             .catch(() => {
              alert(`Gagal menyalin ke clipboard!`);
             });
    
  }

  return (
    <div className={`form-input-box ${className || ''}`}>
      <input className="form-input" {...inputProps}/>
      <button className="text-[12px] absolute top-[30%] right-[16px] cursor-pointer" onClick={doCopyText}>Salin</button>
    </div>
  )
}

export default InputWithCopy