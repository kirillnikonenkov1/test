// Плюс такой реализации в том, что можем использовать this
export default function () {
    return {
        userDescriptionConfig: [
            {
                title: 'Имя',
                key: 'name'
            },
            {
                title: 'Тип пользователя',
                key: 'type'
            },
            {
                title: 'Email',
                key: 'email'
            },
            {
                title: 'Id',
                key: 'id'
            },
            {
                title: 'Компания',
                key: 'company'
            },
            {
                title: 'Местоположение',
                key: 'location'
            },
            {
                title: 'Публичные репозитории',
                key: 'public_repos'
            }
        ]
    }
}
