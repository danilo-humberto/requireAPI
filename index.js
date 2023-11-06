async function getMarcas(type) {
    const url = `https://parallelum.com.br/fipe/api/v1/${type}/marcas`
    try {
      const response = await fetch(url)
      const data = await response.json()
      
      const container = document.querySelector('.container')
      data.forEach(el => {
        const span = document.createElement('span')
        span.innerHTML = `Codigo: ${el.codigo} | Nome: ${el.nome} <br>`
        container.appendChild(span)
      })
    } catch (error) {
      const container = document.querySelector('.container')
      const errorP = document.createElement('p')
      errorP.innerText = error
      container.appendChild(errorP)
    }
  }
  
  getMarcas('carros')