const temaBtn = document.getElementById("tema")
const temaIcon = document.getElementById("tema-icon")
const body = document.body

const temaSalvo = localStorage.getItem("tema")
if (temaSalvo === "light") {
  body.classList.add("light-mode")
  temaIcon.textContent = "☀️"
}

temaBtn.addEventListener("click", () => {
  body.classList.toggle("light-mode")

  if (body.classList.contains("light-mode")) {
    temaIcon.textContent = "☀️"
    localStorage.setItem("tema", "light")
  } else {
    temaIcon.textContent = "🌙"
    localStorage.setItem("tema", "dark")
  }
})

window.addEventListener("scroll", () => {
  const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
  const scrolled = (window.scrollY / windowHeight) * 100
  document.getElementById("barra_progresso").style.width = scrolled + "%"

  const voltarTopo = document.getElementById("voltar-topo")
  if (window.scrollY > 500) {
    voltarTopo.classList.add("visible")
  } else {
    voltarTopo.classList.remove("visible")
  }
})

const buscarBtn = document.getElementById("buscar-btn")
const buscaContainer = document.getElementById("busca-container")
const fecharBusca = document.getElementById("fechar-busca")
const buscaInput = document.getElementById("busca-input")

buscarBtn.addEventListener("click", () => {
  buscaContainer.classList.remove("busca-oculta")
  buscaInput.focus()
})

fecharBusca.addEventListener("click", () => {
  buscaContainer.classList.add("busca-oculta")
  buscaInput.value = ""
})

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !buscaContainer.classList.contains("busca-oculta")) {
    buscaContainer.classList.add("busca-oculta")
    buscaInput.value = ""
  }
})

const navLinks = document.querySelectorAll(".nav-link")
const sections = document.querySelectorAll(".content-section, .hero")

window.addEventListener("scroll", () => {
  let current = ""

  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight
    if (window.scrollY >= sectionTop - 200) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("ativo")
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("ativo")
    }
  })
})

const moodBtns = document.querySelectorAll(".mood-btn")
const moodContent = document.getElementById("mood-content")

const conteudoPorHumor = {
  relaxar: [
    {
      titulo: "Brooklyn Nine-Nine",
      meta: "Comédia • 22 min",
      rating: "8.4",
      img: "https://m.media-amazon.com/images/I/81OTLa6h7iL.jpg",
    },
    {
      titulo: "Friends",
      meta: "Comédia • 22 min",
      rating: "8.9",
      img: "https://img.elo7.com.br/product/zoom/26A89B7/big-poster-serie-friends-lo01-tamanho-90x60-cm-nerd.jpg",
    },
    {
      titulo: "Modern Family",
      meta: "Comédia • 22 min",
      rating: "8.5",
      img: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-m3pq0536nwm387",
    },
    {
      titulo: "Parks and Recreation",
      meta: "Comédia • 22 min",
      rating: "8.6",
      img: "https://m.media-amazon.com/images/I/A1A3+sVFjFL._AC_UF894,1000_QL80_.jpg",
    },
    {
      titulo: "The Good Place",
      meta: "Comédia • 22 min",
      rating: "8.2",
      img: "https://m.media-amazon.com/images/M/MV5BNjI3ZGRhNDYtNDFjOS00OGFlLTg4NTEtYjZjYTViY2ZiMzBkXkEyXkFqcGc@._V1_.jpg",
    },
  ],
  rir: [
    {
      titulo: "The Office",
      meta: "Comédia • 22 min",
      rating: "9.0",
      img: "https://m.media-amazon.com/images/M/MV5BOGIwYzNmYTktZWExZC00MzAyLTk4NTItODgwZmIyNWZhNDEyXkEyXkFqcGc@._V1_.jpg",
    },
    {
      titulo: "Community",
      meta: "Comédia • 25 min",
      rating: "8.5",
      img: "https://m.media-amazon.com/images/M/MV5BOGIwYzNmYTktZWExZC00MzAyLTk4NTItODgwZmIyNWZhNDEyXkEyXkFqcGc@._V1_.jpg",
    },
    {
      titulo: "Arrested Development",
      meta: "Comédia • 22 min",
      rating: "8.7",
      img: "https://image.tmdb.org/t/p/original/p4r4RD7RsNcJVoz0H6z3dBoTBtW.jpg",
    },
    {
      titulo: "Its Always Sunny",
      meta: "Comédia • 22 min",
      rating: "8.8",
      img: "https://m.media-amazon.com/images/I/910SqCFGNvL.jpg",
    },
    {
      titulo: "Curb Your Enthusiasm",
      meta: "Comédia • 30 min",
      rating: "8.7",
      img: "https://i.ebayimg.com/images/g/tw8AAOSwswNhVfZo/s-l400.jpg",
    },
  ],
  emocionar: [
    {
      titulo: "This Is Us",
      meta: "Drama • 42 min",
      rating: "8.7",
      img: "https://uauposters.com.br/media/catalog/product/2/0/201906131379-uau-posters-series-seriado-this-is-us.jpg",
    },
    {
      titulo: "The Crown",
      meta: "Drama • 58 min",
      rating: "8.6",
      img: "https://uauposters.com.br/media/catalog/product/cache/1/thumbnail/800x930/9df78eab33525d08d6e5fb8d27136e95/1/8/181120240305-uau-posters-the-crown-series-1.jpg",
    },
    {
      titulo: "Parenthood",
      meta: "Drama • 43 min",
      rating: "8.3",
      img: "https://br.web.img3.acsta.net/r_1280_720/pictures/14/02/26/13/23/240487.jpg",
    },
    {
      titulo: "Friday Night Lights",
      meta: "Drama • 44 min",
      rating: "8.6",
      img: "https://m.media-amazon.com/images/M/MV5BNzMxNzQwODItNDFiYy00YjFhLWJjMzUtYjc0Nzk5ZTI4ODA1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    },
    {
      titulo: "The Handmaids Tale",
      meta: "Drama • 52 min",
      rating: "8.4",
      img: "https://image.tmdb.org/t/p/original/eGUT7j3n3rn5yGihlCgwUnD70HV.jpg",
    },
  ],
  adrenalina: [
    {
      titulo: "Breaking Bad",
      meta: "Crime • 47 min",
      rating: "9.5",
      img: "https://i.ebayimg.com/images/g/PpcAAOSw2qdi1CWb/s-l1200.jpg",
    },
    {
      titulo: "Peaky Blinders",
      meta: "Crime • 58 min",
      rating: "8.8",
      img: "https://i5.walmartimages.com/asr/1fb90635-6949-437f-97c3-4fc66b066141.d84ee287c4492942bfa0631495bb6455.jpeg",
    },
    {
      titulo: "Money Heist",
      meta: "Ação • 70 min",
      rating: "8.2",
      img: "https://i5.walmartimages.com/asr/183ce085-097d-4d17-b927-d23a254194a1.b61386f035aea25a4ef77b3623cac29e.jpeg",
    },
    {
      titulo: "Narcos",
      meta: "Crime • 49 min",
      rating: "8.8",
      img: "https://m.media-amazon.com/images/I/81nTw+95MyL._AC_UF894,1000_QL80_.jpg",
    },
    {
      titulo: "Ozark",
      meta: "Crime • 60 min",
      rating: "8.5",
      img: "https://uauposters.com.br/media/catalog/product/8/9/898120221026-uau-posters-ozark-series-5.jpg",
    },
  ],
  rapido: [
    {
      titulo: "Love Death Robots",
      meta: "Animação • 15 min",
      rating: "8.4",
      img: "https://image.tmdb.org/t/p/original/cRiDlzzZC5lL7fvImuSjs04SUIJ.jpg",
    },
    {
      titulo: "Black Mirror",
      meta: "Sci-Fi • 45 min",
      rating: "8.7",
      img: "https://uauposters.com.br/media/catalog/product/2/0/201906131100-uau-posters-series-seriado-black-mirror.jpg",
    },
    {
      titulo: "The Twilight Zone",
      meta: "Mistério • 25 min",
      rating: "8.5",
      img: "https://m.media-amazon.com/images/M/MV5BZjdmOTE3NjItY2JkMi00YjlhLWI0M2UtZjEwZTQ4ZDBkM2I0XkEyXkFqcGc@._V1_.jpg",
    },
    {
      titulo: "Inside No 9",
      meta: "Comédia • 29 min",
      rating: "8.5",
      img: "https://m.media-amazon.com/images/M/MV5BZTQ0ZGM2ZmQtMzU2Ni00MTQ0LTliZjMtMGRlNzlhNWIxNjgyXkEyXkFqcGc@._V1_.jpg",
    },
    {
      titulo: "Easy",
      meta: "Drama • 30 min",
      rating: "7.2",
      img: "https://m.media-amazon.com/images/M/MV5BMjA3MTAyNzUyNF5BMl5BanBnXkFtZTgwNDk4NzgwMDI@._V1_FMjpg_UX1000_.jpg",
    },
  ],
}

moodBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    moodBtns.forEach((b) => b.classList.remove("ativo"))
    btn.classList.add("ativo")

    const humor = btn.getAttribute("data-mood")
    const conteudos = conteudoPorHumor[humor]

    moodContent.innerHTML = ""
    conteudos.forEach((item) => {
      const card = `
                <div class="card">
                    <div class="card-image">
                        <img src="${item.img}" alt="${item.titulo}">
                        <div class="card-overlay">
                            <button class="play-btn">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M8 5v14l11-7z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="card-info">
                        <h3>${item.titulo}</h3>
                        <p class="card-meta">${item.meta}</p>
                        <p class="card-rating">⭐ ${item.rating}</p>
                    </div>
                </div>
            `
      moodContent.innerHTML += card
    })
  })
})

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card")
  cards.forEach((card) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(30px)"
    card.style.transition = "opacity 0.5s ease, transform 0.5s ease"
    observer.observe(card)
  })
})

buscaInput.addEventListener("input", (e) => {
  const termo = e.target.value.toLowerCase()
  if (termo.length > 2) {
    console.log(`[v0] Buscando por: ${termo}`)
  }
})

document.getElementById("voltar-topo").addEventListener("click", (e) => {
  e.preventDefault()
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
})

// Elementos do player
const playerModal = document.getElementById("video-player-modal")
const playerCloseBtn = document.getElementById("player-close")
const playerTitle = document.getElementById("player-title")
const playerEpisode = document.getElementById("player-episode")
const playPauseBtn = document.querySelector(".play-pause-btn")
const progressBarPlayer = document.querySelector(".progress-bar-player")
const progressFillPlayer = document.querySelector(".progress-fill-player")
const rewindBtn = document.querySelector(".rewind-btn")
const forwardBtn = document.querySelector(".forward-btn")
const subtitleBtn = document.querySelector(".subtitle-btn")
const qualityBtn = document.querySelector(".quality-btn")
const fullscreenBtn = document.querySelector(".fullscreen-btn")
const subtitleMenu = document.getElementById("subtitle-menu")
const qualityMenu = document.querySelector(".quality-menu")
const timeCurrent = document.querySelector(".time-current")
const timeDuration = document.querySelector(".time-duration")

let isPlaying = false
let currentTime = 0
const duration = 480 // 8 minutos em segundos (valor padrão)
let currentQuality = "1080p"
let currentSubtitle = "off"

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins}:${secs.toString().padStart(2, "0")}`
}

function openPlayer(title, episode = "Temporada 1 • Episódio 1") {
  playerTitle.textContent = title
  playerEpisode.textContent = episode
  playerModal.classList.add("ativo")
  document.body.style.overflow = "hidden"
  isPlaying = true
  updatePlayButton()
  startProgressSimulation()
}

function closePlayer() {
  playerModal.classList.remove("ativo")
  document.body.style.overflow = "auto"
  isPlaying = false
  currentTime = 0
  progressFillPlayer.style.width = "0%"
  updatePlayButton()
  subtitleMenu.classList.remove("ativo")
  qualityMenu.classList.remove("ativo")
}

function updatePlayButton() {
  if (isPlaying) {
    playPauseBtn.innerHTML = `
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
      </svg>
    `
    playPauseBtn.title = "Pausar"
  } else {
    playPauseBtn.innerHTML = `
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 5v14l11-7z"/>
      </svg>
    `
    playPauseBtn.title = "Play"
  }
}

playerCloseBtn.addEventListener("click", closePlayer)

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && playerModal.classList.contains("ativo")) {
    closePlayer()
  }
})

playPauseBtn.addEventListener("click", () => {
  isPlaying = !isPlaying
  updatePlayButton()
  if (isPlaying) {
    startProgressSimulation()
  }
})

rewindBtn.addEventListener("click", () => {
  currentTime = Math.max(0, currentTime - 10)
  updateProgressBar()
})

forwardBtn.addEventListener("click", () => {
  currentTime = Math.min(duration, currentTime + 10)
  updateProgressBar()
})

progressBarPlayer.addEventListener("click", (e) => {
  const rect = progressBarPlayer.getBoundingClientRect()
  const percent = (e.clientX - rect.left) / rect.width
  currentTime = percent * duration
  updateProgressBar()
})

function updateProgressBar() {
  const percent = (currentTime / duration) * 100
  progressFillPlayer.style.width = percent + "%"
  timeCurrent.textContent = formatTime(currentTime)
}

let progressInterval = null

function startProgressSimulation() {
  if (progressInterval) clearInterval(progressInterval)

  progressInterval = setInterval(() => {
    if (isPlaying && playerModal.classList.contains("ativo")) {
      currentTime += 0.1
      if (currentTime >= duration) {
        currentTime = duration
        isPlaying = false
        updatePlayButton()
        clearInterval(progressInterval)
      }
      updateProgressBar()
    }
  }, 100)
}

subtitleBtn.addEventListener("click", () => {
  subtitleMenu.classList.toggle("ativo")
  qualityMenu.classList.remove("ativo")
})

document.querySelectorAll(".subtitle-option").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".subtitle-option").forEach((b) => b.classList.remove("active"))
    btn.classList.add("active")
    currentSubtitle = btn.getAttribute("data-subtitle")
  })
})

qualityBtn.addEventListener("click", () => {
  qualityMenu.classList.toggle("ativo")
  subtitleMenu.classList.remove("ativo")
})

document.querySelectorAll(".quality-option").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".quality-option").forEach((b) => b.classList.remove("active"))
    btn.classList.add("active")
    currentQuality = btn.getAttribute("data-quality")
    qualityBtn.textContent = currentQuality
  })
})

fullscreenBtn.addEventListener("click", () => {
  const container = document.querySelector(".player-container")
  if (document.fullscreenElement) {
    document.exitFullscreen()
  } else {
    container.requestFullscreen().catch((err) => {
      console.log(`Erro ao entrar em fullscreen: ${err.message}`)
    })
  }
})

document.addEventListener("DOMContentLoaded", () => {
  // Botões de play
  const playButtons = document.querySelectorAll(".play-btn")
  playButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault()
      e.stopPropagation()

      const card = btn.closest(".card")
      const title = card.querySelector(".card-info h3").textContent

      openPlayer(title)
    })
  })

  const posters = document.querySelectorAll(".card-image")
  posters.forEach((poster) => {
    poster.addEventListener("click", (e) => {
      const card = poster.closest(".card")
      const title = card.querySelector(".card-info h3").textContent

      openPlayer(title)
    })
  })

  // Inicializar tempo
  timeDuration.textContent = formatTime(duration)
  timeCurrent.textContent = formatTime(0)
})
