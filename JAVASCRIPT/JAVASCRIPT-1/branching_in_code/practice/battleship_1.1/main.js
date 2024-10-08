// позиция корабля
const randomLoc = Math.floor(Math.random() * 5) // Эта строка генерирует случайное целое число в диапазоне от 0 до 4. Это число будет начальной позицией корабля. Выбор диапазона от 0 до 4 гарантирует, что корабль, занимающий три смежные ячейки, всегда будет полностью находиться на поле (т.е. его позиции будут в пределах 0-6)
const location1 = randomLoc // устанавливает первую позицию корабля
const location2 = location1 + 1 // устанавливает вторую позицию корабля, которая находится на одну ячейку правее первой
const location3 = location2 + 1 // устанавливает третью позицию корабля, которая находится на одну ячейку правее второй

// потоплен или нет
let isSunk = false; // исходное значение в виде false показывает, что корабль не потоплен

// предполагаемая позиция корабля ('выстрел')
let guess; // переменная получающая новое значение с каждым новым выстрелом

// добавляем счётчик попаданий
let hits = 0; // в начале игры имеем 0 попаданий

// добавляем счётчик выстрелов
let guesses = 0;


while (isSunk === false) { // До тех пор пока переменная isSunk будет равна false мы будем продолжать стрелять в корабль
    // превращаем строку в число
    guess = +prompt('Fire! Enter a number 0 - 6') // Строковое значение prompt превратим в число с помощью +prompt, попросим игрока произвести выстрел и напишу "введи число от 0 до 6"
    if (guess < 0 || guess > 6) { // будет происходить ошибка если переменная guess меньше 0, или если она больше 6, то 
        alert('Please, enter a valid cell number') // пользователь получит сообщение: 'введите правильный номер ячейки!'
    } else { // если пользователь ввёл правильное значение
        // увеличиваем счётчик выстрелов
        guesses = guesses + 1
        // логическое 'ИЛИ'
        if (guess === location1 || guess === location2 || guess === location3) {// // Если пользователь ввёл число 3, 4, 5 то мы выполняем код
            alert('HIT!') // выводит сообщение, что пользователь 'Попал'

            // считаем попадания
            hits = hits + 1 // при каждом попадании счетчик будет увеличиваться на 1, 

            // если подбили
            if (hits === 3) { // когда будет 3 попадания получим переменную hits = 3
                isSunk = true // переменная isSunk получит значение 'true'
                alert('You sank my battleship!') // ты подбил мой корабль
            }
        } else { // во всех остальных случаях будет выведено
            alert('MISS!') // во всех других случаях выведется сообщение 'Мимо'
        }
    }
}

const stats = 'You have ' + hits + ' hits out of ' + guesses + ' shots.' // создаём статистику в которой будет отображено: 'Ты имел' столько-то попаданий и столько-то 'выстрелов'
alert(stats)