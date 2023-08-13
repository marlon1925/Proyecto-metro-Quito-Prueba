import React from "react"
import { useForm } from "react-hook-form"



const Formulario = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const customSubmit = (data) => {
        //console.log(data)
        alert("Validacion exitosaa!")
    }

    return (
        <>
            <form onSubmit={handleSubmit(customSubmit)}>

                <div>
                    <label>Nombre: </label>
                    <input type="text" {...register('nombre', {
                        required: true,
                        maxLength: 5,
                        pattern: /^[A-Za-z]+$/  // Expresión regular para solo letras
                    })} />
                    {errors.nombre?.type === 'required' && <small>El campo no puede estar vacio</small>}
                    {errors.nombre?.type === 'maxLength' && <small>El máximo de caracteres es 5</small>}
                    {errors.nombre?.type === 'pattern' && <small>Solo se permiten letras</small>}

                </div>

                <div>
                    <label>Sector: </label>
                    <input type="text" {...register('sector')} />
                </div>

                <div>
                    <label>Punto de salida: </label>
                    <input type="text" {...register('salida')} />
                </div>

                <div>
                    <label>Punto de llegada: </label>
                    <input type="text" {...register('llegada')} />
                </div>

                <div>
                    <label>Nombre del maquinista: </label>
                    <input type="text" {...register('maquinista')} />
                </div>

                <div>
                    <label>Detalle:</label>
                    <input type="text" {...register('detalle')} />
                </div>

                <button type="submit">Send</button>


            </form>
        </>
    )
}

export default Formulario

