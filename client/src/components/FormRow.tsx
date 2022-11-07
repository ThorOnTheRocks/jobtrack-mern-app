import React, { ChangeEvent, ReactNode } from 'react';
import { IRegisterState } from '../pages/Register';

export interface IFormRow {
  type: string;
  value: string;
  name: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  labelText: string;
}

const FormRow: React.FC<IFormRow> = ({ type, value, name, handleChange, labelText }) => {
  return (
    <div className='form-row'>
      <label htmlFor={name} className='form-label'>
        {labelText || name}
      </label>
      <input type={type} value={value} name={name} onChange={handleChange} className='form-input' />
    </div>
  );
};

export default FormRow;
