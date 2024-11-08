import { useFormInput } from "../../assets/hooks/useFormInput";

export default function Form(){
    const firstNameProps = useFormInput("Vinicius")
    const lastNameProps = useFormInput("Dias")

    return(
        <>
            <label>
                First name:
                <input {...firstNameProps} />
            </label>
            <label>
                Last name:
                <input {...lastNameProps} />
            </label>
            <p>Bom dia, {firstNameProps.value} {lastNameProps.value}.</p>
        </>
    )
}