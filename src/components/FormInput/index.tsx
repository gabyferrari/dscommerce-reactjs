export default function FormInput(props: any) {

    const{ validation, ...inputProps } = props;

    return(
        <input { ...inputProps }
        onBlur={(e) => {
            if (validation && !validation(e.target.value)) {
                console.log("Valor inválido");
            }
        }}
        />
    )
}