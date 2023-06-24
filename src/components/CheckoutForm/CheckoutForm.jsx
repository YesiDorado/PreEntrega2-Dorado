import React from 'react';
import './CheckoutForm.css'
import { useForm } from "react-hook-form";

const Contacto = () => {

    const { register, handleSubmit } = useForm();

    const enviar = (data) => {
        console.log(data);
    }

    return (

        <div className="Container">
            <h1 className="main-title">Contacto</h1>
            <form className="Form" onSubmit={handleSubmit(enviar)}>

                <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")} />
                <br />
                <input type="email" placeholder="Ingresá tu e-mail" {...register("email")} />
                <br />
                <input type="phone" placeholder="Ingresá tu teléfono" {...register("telefono")} />
                <br />
                <button className="Button" type="submit">Enviar</button>

            </form>
        </div>

    )
}

export default Contacto
