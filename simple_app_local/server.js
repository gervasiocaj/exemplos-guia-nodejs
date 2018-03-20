const got = require('got')
const cheerio = require('cheerio')

// o .map() de jQuery não funciona como o Array.prototype.map()
// é necessário chamar o .get() no final
// para entender melhor, veja https://api.jquery.com/map/

got('https://super.abril.com.br/')
  .then(pagina => cheerio.load(pagina.body))
  .then($ => {
    return $('.widget-home-box-list-item-title')
      .map((i, el) => $(el).find('a').attr('href')).get()
  })
  .then(urls => Promise.all(urls.map(got)))
  .then(respostas => respostas.map(pagina => cheerio.load(pagina.body)))
  .then(paginasCarregadas => paginasCarregadas.map(function ($) {
    return {
      titulo: $('.article-title').text(),
      tags: $('.article-tags a').map((i, el) => $(el).text()).get()
    }
  }))
  .then(materias => console.log(JSON.stringify(materias, null, 2)))
  .catch(console.error)