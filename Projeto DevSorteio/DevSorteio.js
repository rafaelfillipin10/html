function generateNumber() {

    console.log("min, max")

    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)

    const result = Math.floor(Math.random() * (max - min + 1)) + min; 

    let valorResultado = document.querySelector(".result-number")

    valorResultado.value = (result)


    


}



