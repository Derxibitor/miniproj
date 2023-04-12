const button = document.querySelector('.hello__btn')
const modal = document.querySelector('.modal')
const content = document.querySelector('.content')
const playerSec = document.querySelector('.players')

button.addEventListener('click', (e) => {
  e.preventDefault
  modal.classList.add('animation')

  playerSec.classList.add('active')

  const mainText = document.querySelectorAll('.players__text')

  const el1 = mainText[0]
  const el2 = mainText[1]

  setTimeout(() => {
    el1.style.animation = 'player1 forwards 6s'
    el2.style.animation = 'player2 forwards 2s'
    el2.style.animationDelay = '6s'
  }, 3000)
})

var ScrollDebounce = true;

content.addEventListener('wheel', (e) => {
  const deltaY = e.deltaY

  if (ScrollDebounce) {
  ScrollDebounce = false;

    if(deltaY > 0) { // Скрол вниз
      const currentSec = document.querySelector('.active')
      const nextSec = currentSec.nextElementSibling
      const currentText = currentSec.getElementsByClassName('sec__content')
      const nextText = nextSec.getElementsByClassName('sec__content')

      if(nextSec) {
        setTimeout(() => {
          currentSec.classList.add('pastSec')
          currentSec.classList.remove('active')
          nextSec.classList.add('active')

          const nextEl = nextText[0]
          const nextEl1 = nextText[1]
          
          if(nextSec.classList.contains('nesanya')) {
            nextEl.style.animation = 'nesanya1 6s forwards'
            nextEl1.style.animation = 'nesanya2 2s forwards'
            nextEl1.style.animationDelay = '6s'
          } else if(nextSec.classList.contains('shadows')) {
            nextEl.style.animation = 'shadows1 6s forwards'
            nextEl1.style.animation = 'shadows2 2s forwards'
            nextEl1.style.animationDelay = '6s'
          } else if(nextSec.classList.contains('boshy')) { 
            nextEl.style.animation = 'boshy1 6s forwards'
            nextEl1.style.animation = 'boshy2 2s forwards'
            nextEl1.style.animationDelay = '6s'
        } 
        }, 2000)

        for (let i = 0; i < currentText.length; i++) {
          const el = currentText[i]

          if(currentSec.classList.contains('players')) {
            el.style.animation = 'playerDis 1s forwards'
            el.style.color = 'rgb(9, 5, 22)'
          } else if(currentSec.classList.contains('nesanya')) {
            el.style.animation = 'playerDis 1s forwards'
            el.style.color = 'rgb(9, 5, 22)'
          } else if(currentSec.classList.contains('shadows')) {
            el.style.animation = 'playerDis 1s forwards'
            el.style.color = 'rgb(9, 5, 22)'
          }
        }

      }

    } else if (deltaY < 0) { // Скрол вверх
      const currentSec = document.querySelector('.active')
      const prevSec = currentSec.previousElementSibling
      const currentText = currentSec.getElementsByClassName('sec__content')
      const prevText = prevSec.getElementsByClassName('sec__content')

      if(prevSec) {
        setTimeout(() => {
          currentSec.classList.remove('pastSec')
          currentSec.classList.remove('active')
          prevSec.classList.add('active')
          prevSec.classList.remove('pastSec')

          setTimeout(() => {
            const el1 = prevText[0]
            const el2 = prevText[1]
    
            if(prevSec.classList.contains('players')) {
              el1.style.animation = 'player1 forwards 6s'
              el2.style.animation = 'player2 forwards 2s'
              el2.style.animationDelay = '6s'
            } else if(prevSec.classList.contains('nesanya')) {
              el1.style.animation = 'nesanya1 forwards 6s'
              el2.style.animation = 'nesanya2 forwards 2s'
              el2.style.animationDelay = '6s'
            } else if(prevSec.classList.contains('shadows')) {
              el1.style.animation = 'shadows1 forwards 6s'
              el2.style.animation = 'shadows2 forwards 2s'
              el2.style.animationDelay = '6s'
            }
          }, 1000)
        }, 2000)

          const el1 = currentText[0]
          const el2 = currentText[1]

          if(currentSec.classList.contains('players')) {
            el1.style.animation = 'playerDis 1s forwards'
            el2.style.animation = 'playerDis 1s forwards'
            el2.style.color = 'rgb(9, 5, 22)'
          } else if(currentSec.classList.contains('nesanya')) {
            el1.style.animation = 'playerDis2 1s forwards'
            el2.style.animation = 'playerDis 1s forwards'
            el2.style.color = 'rgb(9, 5, 22)'
          } else if(currentSec.classList.contains('shadows')) {
            el1.style.animation = 'playerDis2 1s forwards'
            el2.style.animation = 'playerDis 1s forwards'
            el2.style.color = 'rgb(9, 5, 22)'
          } else if(currentSec.classList.contains('boshy')) { 
            el1.style.animation = 'playerDis2 1s forwards'
            el2.style.animation = 'boshyDis 1s forwards'
            el2.style.color = 'rgb(9, 5, 22)'
          }
      }
    }

  setTimeout(function () { ScrollDebounce = true; }, 1000);
  }
})