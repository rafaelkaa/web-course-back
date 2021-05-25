## Задания

1. Создать каркас сервера
  - Реализовать запрос `GET /ping`, ответ на запрос
  ```js
  {
    "status": "ok"
  }
  ```
  - Реализовать запрос, определяющий день недели по номеру дня текущего месяца. К примеру если сейчас январь 2021 года, то запрос будет выглядеть как `GET /weekday?day=3`, а ответ:
  ```js
  {
    "weekday" : "Sunday"
  }
  ``` 
  - Реализовать запрос для выполнения простых математических операций:
  ```js
  POST `/calc`
  body:
  {
    "value1" : 2,
    "value2" : 1,
    "operation" : "subtraction", // 'addition' | 'multiplication' | 'division'
  }
  response:
  {
    "status": "ok", // 'error'
    "body": 1 // or error description 
  }
  ```
2. Настроить логирование в файл
    - всех запросов к серверу в следующем формате `{Date and time in UTC} {Ip} {Method} {Url} {Status code}`
    - всех исключений на сервере
## Установка модуля и запуск сервера:
устанавливаем модуль для создания сервера: `npm install express --save`
запускаем сервер: `npm start`
## Функционал программы:
GET :
`/ping` -  статус сервера
`/weekday?day=*` - получение дня недели в текущем месяце по введенному  числу.
POST :
`/calc/` - математические операции. На вход принимает 3 переменные:
  1. `"value1"` - число 1
  2. `"value2"` - число 2
  3. `"operation"` - операция: "subtraction","addition","multiplication","division".       

Логгирование запросов и исключений в формате `{Date and time in UTC} {Ip} {Method} {Url} {Status code}`

##Видео 
