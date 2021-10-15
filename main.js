class Player {
   constructor(player, name, hp, img, weapon) {
      this.player = player,
         this.name = name,
         this.hp = hp,
         this.img = img,
         this.weapon = weapon
   }

   attack() {
      console.log(this.name + ' Fight...')
   }
}

const $arenas = document.querySelector('.arenas')
const $button = document.querySelector('.button')

const player1 = new Player(1, 'Scorpion', 100, 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif', ['knife', 'fireball', 'arrow'])
const player2 = new Player(2, 'Sonya', 100, 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif', ['redEye', 'machete', 'fork'])

function createElement(tag, nameClass) {
   const $tag = document.createElement(tag)
   if (nameClass) {
      $tag.classList.add(nameClass)
   }

   return $tag
}

function createPlayer(player) {

   const $img = document.createElement('img')
   $img.src = player.img
   const $player = createElement('div', 'player' + player.player)
   const $progressbar = createElement('div', 'progressbar')
   const $character = createElement('div', 'character')
   const $life = createElement('div', 'life')
   $life.style.width = player.hp + '%'
   const $name = createElement('div', 'name')
   $name.innerText = player.name
   $name.style.textTransform = 'uppercase'
   $player.appendChild($progressbar)
   $player.appendChild($character)
   $progressbar.appendChild($life)
   $progressbar.appendChild($name)
   $character.appendChild($img)

   return $player
}

function backRandom(range) {
   return Math.ceil(Math.random() * range)
}

function changeHp(player) {
   const $playerLife = document.querySelector('.player' + player.player + ' .life')
   player.hp -= backRandom(20)
   $playerLife.style.width = player.hp + '%'

   if (player.hp < 0 || player.hp === 0) {
      player.hp = 0
      $playerLife.style.width = 0
      $button.disabled = true
   }
}

function playerWin(name) {
   const $winTitle = createElement('div', 'winTitle')
   $winTitle.innerText = name + ' win!'
   return $winTitle
}

$button.addEventListener('click', () => {
   changeHp(player1)
   changeHp(player2)
   if (player2.hp === 0) {
      $arenas.appendChild(playerWin(player1.name))
   } else if (player1.hp === 0) {
      $arenas.appendChild(playerWin(player2.name))
   }
})

$arenas.appendChild(createPlayer(player1))
$arenas.appendChild(createPlayer(player2))
