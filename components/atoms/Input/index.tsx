interface InputProps {
    label: string,
    type: 'text' | 'email' | 'tel',
    id: string,
    name: string,
    placeholder: string,
}
export default function Input(props: InputProps) {
  const { label, type, id, name, placeholder, ...nativeProps} = props;
  return (
    <>
      <label htmlFor={label} className="form-label text-lg fw-medium color-palette-1 mb-10">
        {label}
      </label>
      <input
        type={type}
        className="form-control rounded-pill text-lg"
        id={id}
        name={name}
        aria-describedby={name}
        placeholder={placeholder}
        {...nativeProps}
      />

    </>
  );
}
