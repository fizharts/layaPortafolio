'use strict'

    const aqui = document.querySelector('#aqui')
    


    const datos = async ()=>{

        let aqui = await fetch('galeria.html')

            let data = await aqui.text()

            return data

    }
        
    datos().then(value=> {
            console.log(value);

            aqui.innerHTML = value
    })