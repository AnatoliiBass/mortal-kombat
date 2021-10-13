class Player {
   constructor(name, hp, img, weapon) {
      this.name = name,
         this.hp = hp,
         this.img = img,
         this.weapon = weapon
   }

   attack() {
      console.log(this.name + ' Fight...')
   }
}
const player1 = new Player('Scorpion', 100, 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif', ['knife', 'fireball', 'arrow'])
const player2 = new Player('Sonya', 50, 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif', ['redEye', 'machete', 'fork'])

function createPlayer(className, player) {
   const $arenas = document.querySelector('.arenas')
   const $collectionDivs = []
   for (let i = 0; i < 5; i++) {
      $collectionDivs[i] = document.createElement('div')
   }
   const $img = document.createElement('img')
   $img.src = player.img
   $collectionDivs[0].classList.add(className)
   $collectionDivs[1].classList.add('progressbar')
   $collectionDivs[2].classList.add('character')
   $collectionDivs[3].classList.add('life')
   $collectionDivs[3].style.width = player.hp + '%'
   $collectionDivs[4].classList.add('name')
   $collectionDivs[4].innerText = player.name
   $collectionDivs[4].style.textTransform = 'uppercase'
   $collectionDivs[0].appendChild($collectionDivs[1])
   $collectionDivs[0].appendChild($collectionDivs[2])
   $collectionDivs[1].appendChild($collectionDivs[3])
   $collectionDivs[1].appendChild($collectionDivs[4])
   $collectionDivs[2].appendChild($img)

   $arenas.appendChild($collectionDivs[0])
}

createPlayer('player1', player1)
createPlayer('player2', player2)
