import React from "react";
import "./nosotros.css";
import { useEffect } from "react";

export default function Nosotros() {

    useEffect(() => {
        const hacerClick = () => {
            console.log("Click");
        }
        window.addEventListener("click", hacerClick)
        return () => {
            window.removeEventListener("Click", hacerClick)
        }
    }, [])

    return (
        <div className="nosotros"><strong style={{ fontWeight: "bold" }}>Nosotros</strong>
            <div className="video-container">
                <iframe width="560" height="315" src="https://www.youtube.com/watch?v=9dDemBxxulo&ab_channel=ExpertoAnimal" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            <div className="texto-centrado">
                <p>
                    ¿A qué esperas para aprender más sobre tu mascota o el mundo animal? Si el mundo de los animales te fascina, en Patitas Divertidas descubrirás infinidad de consejos, fotos y vídeos desarrollados por expertos y otros miembros de la comunidad. Además, podrás publicar comentarios con tus propias dudas, consejos, fotos de tus mascotas y mucho más para que otros usuarios puedan aprender también y así, entre todos, conseguir que los animales vivan en un mundo mucho mejor. Comparte, recomienda y, sobre todo, aprende.
                    <br />
                    Patitas Divertidas es la página web de animales de referencia, en la que descubrirás contenido de calidad elaborado por distintos profesionales del sector, como veterinarios, adiestradores y educadores caninos, expertos en etología, auxiliares técnicos veterinarios y periodistas especializados. Nuestra filosofía se fundamenta en el respeto por los animales, la tenencia responsable, la educación basada en la etología y la defensa de los derechos animales. También apoyamos la adopción de perros y gatos y, por ello, colaboramos con varias asociaciones, fundaciones y protectoras.
                    <br />
                    Información veterinaria, estilos de adiestramiento canino en positivo, información enciclopédica, cuidados de los animales domésticos o información previa a la adopción de animales son algunas de las temáticas que podrás encontrar aquí. Patitas Divertidas sorprende con una gran variedad de temas y destaca principalmente por su veracidad, ya que todo el contenido de la web está revisado y validado por profesionales y expertos en animales. Además, siempre que es necesario, los artículos incluyen bibliografía para que los usuarios y otros profesionales puedan acceder también a contenido útil y de calidad relacionado con el mundo animal, así como comprobar la autenticidad de la información.
                    <br />
                    Nuestro objetivo es ayudar a todas aquellas personas que lo necesiten y lograr que Patitas Divertidas se convierta en la mejor página web de animales, trabajando diariamente para llegar a ser la comunidad más activa de habla hispana. ¡Conviértete en un auténtico Patitas Divertidas!
                </p>
            </div>
        </div>
    );
}