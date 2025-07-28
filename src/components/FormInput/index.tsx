export default function FormInput(props: any) {
  const { 
    validation, 
    invalid = "false", 
    dirty = "false", 
    onTurnDirty, 
    ...inputProps 
  } = props;

  function handleBlur(e: React.FocusEvent<HTMLInputElement>) {
    if (validation && !validation(e.target.value)) {
      console.log("Valor inválido");
    }

    onTurnDirty?.(props.name);
  }

  return (
    <input 
        {...inputProps} 
        onBlur={handleBlur} 
        data-invalid={invalid} 
        data-dirty={dirty}
    />
  );
}
