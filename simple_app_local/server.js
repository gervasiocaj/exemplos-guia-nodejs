const request = require('request-promise')
const cheerio = require('cheerio')

const loadPage = url => request(url, { transform: res => cheerio.load(res) })

// o .map() de jQuery não funciona como o Array.prototype.map()
// é necessário chamar o .get() no final
// para entender melhor, veja https://api.jquery.com/map/

loadPage('https://super.abril.com.br/')
  .then($ => {
    return $('.widget-home-box-list-item-title')
      .map((i, el) => $(el).find('a').attr('href')).get()
  })
  .then(urls => Promise.all(urls.map(loadPage)))
  .then(paginasCarregadas => paginasCarregadas.map(function ($) {
    return {
      titulo: $('.article-title').text(),
      tags: $('.article-tags a').map((i, el) => $(el).text()).get()
    }
  }))
  .then(materias => console.log(JSON.stringify(materias, null, 2)))
  .catch(console.error)