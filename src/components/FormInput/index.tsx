export default function FormInput(props: any) {

    const{ validation, invalid, ...inputProps } = props;

    return(
        <input { ...inputProps } data-invalid={invalid}
        onBlur={(e) => {
            if (validation && !validation(e.target.value)) {
                console.log("Valor inválido");
            }
        }}
        />
    )
}