import Select from "react-select";

export default function FormSelect(props: any) {
  const {
    className, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    validation, 
    invalid = "false", 
    dirty = "false", 
    onTurnDirty, 
    ...selectProps 
  } = props;

  function handleBlur() {
    onTurnDirty(props.name);
  }

  return (
    <div
      className={className}
      data-invalid={invalid} 
      data-dirty={dirty}
    >
      <Select 
        {...selectProps} 
        onBlur={handleBlur} 
      />
    </div>
  );
}
