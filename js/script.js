// ================================
// SABOR & CRÍTICA
// script.js
// ================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("Sabor & Crítica carregado com sucesso!");

    const formulario = document.querySelector("#formContato");

    if(formulario){

        formulario.addEventListener("submit", (e)=>{

            e.preventDefault();

            alert("Mensagem enviada com sucesso!");

            formulario.reset();

        });

    }

});

// Scroll suave

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        const destino = document.querySelector(this.getAttribute("href"));

        if(destino){

            e.preventDefault();

            destino.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});