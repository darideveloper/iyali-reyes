/**
 * TextArea component
 * Textarea input with label and options (based in input component)
 * 
 * @param {object} props - component props
 * @param {string} props.label - input label
 * @param {string} props.name - input name
 * @param {string} props.type - input type
 * @param {boolean} props.required - input required
 * @param {string} props.value - input value
 * @param {function} props.setValue - input value setter
 * @param {string} props.placeholder - input placeholder
 * @param {string} props.className - input class name
 * @returns {JSX.Element} Input component
 */
export default function TextArea({label, name, type, required = false, value, setValue, placeholder, className}) {

  return (
    <div 
      className={`
        input-wrapper
        ${className}
        text-brown
        border-2
        border-brown-light
        border-solid
        rounded-md
      `}
    > 
      <label 
        htmlFor={`input_${name}`}
        className={`
          w-full
          inline-block
          border-b-2
          border-brown-light
          p-4
        `}
      >
        {label} {required && <span>*</span>}
      </label>

      <textarea 
        type={type}
        name={name}
        id={`input_${name}`}
        required={required}
        className={`
          w-full
          p-4
          bg-transparent
          focus:outline-none
          duration-300
          focus:bg-brown-light
          placeholder-brown-light focus:placeholder-transparent
          h-48
          -mb-2
        `}
        onChange={(e) => setValue(e.target.value)}
        value={value}
        placeholder={placeholder}
      />
    </div>
  )
}