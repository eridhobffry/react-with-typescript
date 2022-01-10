import React from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import styled from "styled-components"
import { FormPeople, People } from "../interfaces"

const StyledForm = styled.form`
    display: flex;
    width: 100%;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

const StyledInput = styled.input`
    width: 50%;
    margin: 5px 0px;
`
const StyledTextArea = styled.textarea`
    width: 50%;
    margin: 10px 0px;
`

const StyledError = styled.span`
    color: red;
    font-size: small;
`

interface Props {
    people: People
    setPeople: React.Dispatch<React.SetStateAction<People>>
}

const Form: React.FC<Props> = ({setPeople, people}) => {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormPeople>()
    const onSubmit: SubmitHandler<FormPeople> = data => {
        setPeople([
            ...people,
            data
        ])
        setValue("name", '')
        setValue("age", 0)
        setValue("imageUrl", '')
        setValue("note", '')
    }
    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <StyledInput type={'text'} placeholder="Fullname" {...register("name", { required: true })} />
            {errors.name && <StyledError>This field is required</StyledError>}
            <StyledInput defaultValue={0} type={'number'} placeholder="Age" {...register("age")}/>
            <StyledInput type={'text'} placeholder="Image url" {...register("imageUrl", { required: true })} />
            {errors.imageUrl && <StyledError>This field is required</StyledError>}
            <StyledTextArea placeholder="Notes" {...register("note")} />
            <input type="submit" />
        </StyledForm>
    )
}

export default Form
