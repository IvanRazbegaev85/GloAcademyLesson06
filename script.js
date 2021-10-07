const random = function (num) {

    const checkInput = function () {
        let playersNumber = prompt("Введите число от 1 до 100:");

        const numberInput = function (num) {                                //проверяем пользовательский ввод и если надо - приводим к числу
            const isNumber = function (num) {
                return !isNaN(parseFloat(num)) && isFinite(num);
            };
            if (isNumber(num)) {
                playersNumber = parseFloat(num.trim());
                return playersNumber;
            } else return false;
        };

        const playersGuess = function () {                                  // Рекурсивно спрашиваем игрока число, если не равно загаданному
                if (playersNumber < num){
                    console.log("Загаданное число больше");
                    checkInput();
                } else if(playersNumber > num) {
                    console.log("Загаданное число меньше");
                    checkInput();
                } else {
                    console.log("Поздравляю, Вы угадали!!!");
                    return;
                };
            };
            if (!playersNumber){                                            // Проверяем на false ввод пользователя
                console.log("Игра окончена");
            } else if (!numberInput(playersNumber)){                        // Проверяем на введено ли число, нет - алертим
                alert("Введите число!");
                checkInput();
            } else playersGuess();                                          // Если все ок - уходим сравнивать число с загаданным

    };
    checkInput();                                                           // Запускаем проверку введенного

};

random((Math.random()*100).toFixed());



