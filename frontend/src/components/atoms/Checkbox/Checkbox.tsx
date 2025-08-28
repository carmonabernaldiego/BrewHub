import React from 'react';

interface CheckboxProps {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  id?: string;
  className?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange, label, id, className = '' }) => {
  return (
    <label htmlFor={id} className={`inline-flex items-center gap-2 cursor-pointer ${className}`}>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 rounded border-neutral-300 text-blue-600 focus:ring-blue-500"
      />
      {label && <span className="text-sm text-neutral-700">{label}</span>}
    </label>
  );
};

export default Checkbox;
