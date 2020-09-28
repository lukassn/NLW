
// Dados
const proffys = [
  {
  name: "Lukas Nascimento",
  avatar: "https://avatars2.githubusercontent.com/u/32945492?s=460&u=2abf42b151b3a4c5e730b5ddec9f018bbb43ea6e&v=4",
  whatsapp: "83991289042", 
  bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em labortórios e por udar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões",
  subject: "Química",
  cost: "20,00", 
  weekday: [0], 
  time_from: [720], 
  time_to: [1220]
  },
  {
  name: "Lukas Nascimento",
  avatar: "https://avatars2.githubusercontent.com/u/32945492?s=460&u=2abf42b151b3a4c5e730b5ddec9f018bbb43ea6e&v=4",
  whatsapp: "83991289042", 
  bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em labortórios e por udar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões",
  subject: "Química",
  cost: "20.00", 
  weekday: [0], 
  time_from: [720], 
  time_to: [1220]
  }
]

const subjects = [
  "Artes",
  "Biologia",
  "Ciência",
  "Educação Física",
  "Física",
  "Geografia",
  "História",
  "Matemática",
  "Português",
  "Química"
]

const weekdays = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado"
]

// Funcionalidades

function getSubject(index){
  return subjects[index]
}

function pageLanding(req, res){
  return res.render("index.html")
}

function pageStudy(req, res){
  const filters = req.query
  return res.render("study.html", {proffys, filters, subjects, weekdays})
}

function pageGiveClasses(req, res){
  const data = req.query

  // Object.keys() transforma tudo em um array
  // verifica o length 
  const isNotEmpty = Object.keys(data).length > 0
  
  // se tiver data
  if (isNotEmpty){
    
    data.subject = getSubject(data.subject)
    
    // adicionar data a lista de proffys
    proffys.push(data)

    return res.redirect("/study")
  }

  return res.render("give-classes.html", {subjects, weekdays})
}

// Servidor
const express = require('express')
const server = express()


// Configurar nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
  express: server,
  noCache: true,
})

// Início e configuração do servidor
server
// configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))
//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
// Start do servidor
.listen(5500);

console.log(__dirname)