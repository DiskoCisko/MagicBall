const ans = [
    'Бесспорно',
    'Ну конечно',
    'Никаких сомнений',
    'Определённо да',
    'Можешь быть уверен в этом',
    'Можешь быть "да"',
    'Хорошие перспективы',
    'Звёзды говорят — «да»',
    'Да',
    'Пока не ясно, попробуй снова',
    'Спроси позже',
    'Отстань',
    'Тебе лучше не знать',
    'Я не скажу',
    'Я тебе что магический шар?',
    'Даже не думай',
    'Мой ответ — «нет»',
    'Все говорят — «нет»',
    'Перспективы не очень хорошие',
    'Весьма сомнительно',
]

const itemAns = document.querySelector('.ans');
const btnAns = document.querySelector('.ans-wrp');

function random(lenght){
    return Math.ceil(Math.random()*lenght - 1);
}
console.log(random(ans.length));

function getAns(ans) {
    itemAns.innerHTML = ans[random(ans.length)]
}

//getAns(ans);

btnAns.addEventListener('click', function(){
    getAns(ans);
})