/*!
* YieldFarming
* Boilerplate for a Static website using EJS and SASS
* https://yieldfarming.info
* @author Jongseung Lim -- https://yieldfarming.info
* Copyright 2021. MIT Licensed.
*/

$(function() {
  main()
});

const main = async() => {

  let tableData = {
    "title":"OKEX Network",
    "heading":["Pool Provider","LP", "Reward Tokens", "INFO"],
    "rows": [
      ["Sakeswap",      `<a href='sakeswap'     >Various</a>`,  "SAKE",    "https://okapp.sakeswap.fi"],
      ["WePiggy",       `<a href='wepiggy'      >Various</a>`,  "WPC",     "https://okexchain.wepiggy.com/markets"],
      ["KSwap",         `<a href='kswap'        >Various</a>`,  "KST",     "https://kswap.finance"],
      ["CherrySwap",    `<a href='cherryswap'   >Various</a>`,  "CHE",     "https://www.cherryswap.net"],
      ["BoneSwap",      `<a href='boneswap'     >Various</a>`,  "BONE",    "https://farm-okex.boneswap.finance"],
      ["FarmHero",      `<a href='farmhero'     >Various</a>`,  "GLORY",   "https://oec.farmhero.io"],
      ["SpaceX-MOONX",  `<a href='moonx'        >Various</a>`,  "MOONX",   "https://spacex.finanancial"],
    ]
  }

  let table = new AsciiTable().fromJSON(tableData);
  document.getElementById('log').innerHTML += table + '<br />';
  hideLoading();
}
