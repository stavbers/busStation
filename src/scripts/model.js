import image from '../images/316237-P8UKLL-902.jpg'

export const model = [
    {type: 'fScreenImage', value: image},
    {type: 'fScreenTitle', value: 'Bus Stations'},
    {type: 'fScreenDescr', value: 'Сервис для расчета временных промежутков между отправлениями транспорта'},
    {type: 'fScreenBtns', value: [
            'Перейти',
            'Отказаться'
        ]},
    {type: 'fScreenLang', value: [
            'Рус',
            'Укр',
            'Engl'
        ]}
]
export const model2 = [
    {type: 'sScreenImage', value:'./images/316237-P8UKLL-902.jpg'},
    {type: 'sScreenTitle', value: 'Bus Stations!!'},
    {type: 'sScreenDescr', value: 'Введите название маршрута в форму 1, введите время начала двежения транспорта во второй инпут, введите время окончание маршрута в 3 инпут, после нажмите на кнопку - РАссчитать'},
    {type: 'sScreenInputs', value: [
        ['Номер маршрута', ['49']],
        ['Время начала движения', ['07.00']],
        ['Время окончания движения', ['19.00']]
        ]},
    {type: 'sScreenBtns', value: 'Рассчитать'}
        ]

export const screen = [
    {type: 'firstScreen', value: model},
    {type: 'secondScreen', value: model2}
]

