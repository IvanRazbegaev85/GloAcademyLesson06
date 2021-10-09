const random = function () {
    let num = (Math.random()*100).toFixed();
    let tries = 10;

    const checkInput = function () {
        let playersNumber = prompt("Введите число от 1 до 100:");

        const numberInput = function(num) {                                //проверяем пользовательский ввод и если надо - приводим к числу

            const isNumber = function(num) {
                return !isNaN(parseFloat(num)) && isFinite(num);
            };
            if (isNumber(num)) {
                playersNumber = parseFloat(num.trim());
                return playersNumber;
            } else return false;
        };

        const playersGuess = function () {                                  // Рекурсивно спрашиваем игрока число, если не равно загаданному
                if (playersNumber < num && tries > 1){

                    alert(`Загаданное число больше, осталось попыток ${--tries}`);

                    checkInput();
                } else if(playersNumber > num && tries > 1) {
                    alert(`Загаданное число меньше, осталось попыток ${--tries}`);
                    checkInput();
                } else if (tries == 1) {
                    const newGame = confirm("Попытки закончились, хотите сыграть еще?");
                    if (newGame){
                        random();
                    }
                    return;
                } else {
                    const newGame = confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?");
                    if (newGame){
                        random();
                    }
                    return;
                }
            };
            if (!playersNumber){                                            // Проверяем на false ввод пользователя
                alert("Игра окончена");
                return;
            } else if (!numberInput(playersNumber)){                        // Проверяем на введено ли число, нет - алертим
                alert("Введите число!");
                checkInput();
            } else playersGuess();                                          // Если все ок - уходим сравнивать число с загаданным

    };
    checkInput();                                                           // Запускаем проверку введенного

};

random();



