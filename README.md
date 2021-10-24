# Домашняя работа 18
HomeWork done according to the video tutorial
Done.

# Домашняя работа 16
HomeWork done according to the video tutorial
Done.

# Домашняя работа 15
HomeWork done according to the video tutorial
Done.

# Домашняя работа 14

1 - сделать рефакторинг src/redux/actionTypes.js и src/redux/actionCreators.js, чтобы можно было обращаться к экшнам через actionTypes.age.INCREMENT, actionTypes.counter.DECREMENT, actionTypes.counter.DECREMENT1, actionTypes.counter.INCREMENT, actionTypes.counter.MULTIPLY, actionTypes.todos.ADD и actionTypes.user.UPDATE

Done.

2 - вместо src/redux/reducers.js реализовать:

src/redux/reducers/counterReducers.js (actionTypes.counter.INCREMENT, actionTypes.counter.DECREMENT, actionTypes.counter.MULTIPLY)
src/redux/reducers/ageReducer.js (actionTypes.age.INCREMENT)
src/redux/reducers/todoReducer.js (actionTypes.todos.ADD)
src/redux/reducers/userReducer.js (actionTypes.user.UPDATE)
чтобы итоговый стэйт заполнялся в следующем формате:

{
  counter: '7',
  age: 15,
  todos: [
    {
      id: '1'
    },
    {
      id: '1'
    },
    {
      id: '1'
    },
    {
      id: '3'
    },
    {
      id: '4'
    },
    {
      id: '7'
    }
  ],
  userInfo: {
    country: 'France'
  }
}

Done.

3 - реализовать rootReducer.js используя combineReducers:

const rootReducder = combineReducers({
    counter: counterReducer,
    age: ageReducer,
    todos: todosReducer,
    userInfo: userReducer
});

Done.

4 - в src/redux/store.js заменить counterReducer на rootReducder

Done.

5 - в src/components/Counter/Counter.jsx наряду с уже существующими кнопками добавить кнопки:

Add todo, которая диспатчит addTodo({ id: counter }), что добавляет новую запись в массив todos в стэйте
Update user, которая диспатчит udpateUser({ country: "France" }), что устанавливает в стэйте свойству userInfo значение { country: 'France' }
остальные кнопки в Counter.jsx и CounterButtons.jsx изменяют значение свойства counter в строковом форма, а age - в числовом

Done.

6 - сделать рефакторинг структуры counter, чтобы все функциональные и классовые компоненты лежали в соответствующих папках и импортировались в app.js следующим образом:

import Counter from "../Counter/function/Counter/Counter";
import CounterViaContext from "../Counter/function/CounterViaContext/CounterViaContext";
import CounterViaUseState from "../Counter/function/CounterViaUseState/CounterViaUseState";
import CounterViaUseStateAndClasses from "../Counter/class/CounterViaUseStateAndClasses/CounterViaUseStateAndClasses";
import CounterViaContextAndClassesWithStore from "../Counter/class/CounterViaContextAndClassesWithStore/CounterViaContextAndClassesWithStore";

Done.

7* - на основе функциональных компонентов из src\components\Counter\function\Counter создать классовые компоненты в src\components\Counter\class\Counter

# Домашняя работа 13
1 - на основе функционального компонента CounterViaContext и связанного с ним функционального CounterButtons создать классовые компоненты CounterViaContextAndClassesWithStore, CounterViaContextAndConnect, а также классовый CounterButtons, где:

в CounterViaContextAndClassesWithStore оборачиваем CounterViaContextAndConnect в Provider из react-redux

в CounterViaContextAndConnect оборачиваем CounterViaContext в connect из react-redux Для контекста используем Context.Consumer либо Component.contextType на выбор.

в CounterViaContext оборачиваем CounterButtons в CounterContext.Provider, через который прокидываем в CounterButtons все props компонента CounterViaContext

в CounterButtons получаем данные age, counter, onButtonClick, onAgeButtonClick из контекста через Component.contextType либо Context.Consumer на выбор и реализуем весь функционал CounterButtons кроме обработчика Multiply и связанного с ним multiplyCurrentCounterAsync (разберем это на следующем занятии)

Done.

2 - Реализовать CounterViaUseStateAndClasses.jsx через классы

Done.

3* - На основе функциональных Counter.jsx и CounterButtons.jsx создать классовые CounterViaClasses.jsx (без useEffect и multiplyCurrentCounterAsync - разберем это на следующем занятии) и CounterButtons.jsx, для редакса используем connect
# Домашняя работа 12

1 - изучить примеры использования контекста в классовых компонентах

Done. 

2 - на основе функционального компонента CounterViaContext и связанного с ним функционального CounterButtons создать классовый компонент CounterViaContextAndClasses и связанный с ним классовый CounterButtons. Для контекста используем Context.Consumer либо Component.contextType на выбор.

Homework13 

3 - Реализовать возможность просмотра деталей любого todo из списка todo по клику на 'Edit'. Данные о выбранном todo выводим по url в формате todos/uniqueId, например, http://localhost:3000/todos/-MgCPApgFq87q2YfOi0e, где uniqueId, в данном случае -MgCPApgFq87q2YfOi0e, это уникальный идентификатор, полученный из записей todos в realtime database:

Done.

Этот идентификатор используем в методе getById для выполнения GET запроса по адресу https://[ваше имя realtime database].firebaseio.com/todos/${uniqueId}.json, сам getById импортируем в CounterViaContextAndClasses и прокидываем в CounterButtons через props.

Done.

4* - реализовать логику изменения данных выбранного todo в отдельных input полях по нажатию на кнопку save отправляя PUT либо PATCH запрос в realtime database.

позже после апрува.
# Домашняя работа 11

1 - используя NavLink реализовать выделение выбранной ссылки меню
Done            

2 - изучить Управляемые компоненты
Done

3 - опираясь на теорию про Функциональные и классовые компоненты, создать новую ссылку меню Counter Via Classes, которая ведет на родительский компонент CounterViaUseStateAndClasses, который в свою очередь подключает дочерний классовый компонент CounterButtons
Done

4* - реализовать сохранение значений всех инпутов в localStorage, чтобы при переходе между каунтерами значения инпутов брались из localstorage, при этом весь остальной функционал, в частности обработка нажатий кнопок, продолжил работать с соответствующим стэйтом (redux, useReducer+context и useState) как и прежде.
позже (после апрува)

5* - Изучить теорию про connect, в частности, то, как работает mapStateToProps, и mapDispatchToProps
позже (после апрува)

6* - Прочитать теорию про Использование хука эффекта
позже (после апрува)

7* - Прочитать теорию про Согласование (Reconciliation)
позже (после апрува)

# Домашняя работа 10

ДЗ 10 -
по переходу на любой из 3х линок - Counter Counter, Via Context, Counter Via useState - реализовать возможность ввести Multiplier, Seconds и нажать Multiply, чтобы counter обновился через [seconds] секунд по формуле [новый counter]=[текущий counter]*multiplier

Done.

# Домашняя работа 9

1 - Counter - через редакс, где мы вынесли action creators + к increment для CustomButtons подключили thunk

Done.   

2 - Counter Via Context - классический coutner (без setTimeout), только через Context

Done.

3 - Counter Via useState - классический coutner (без setTimeout), только через useState

Done.

#  Домашняя работа 8

0 - Установить пакеты redux и react-redux

Done.

1 - Создать store в src/redux/store.js

Done.

2 - Описать типы экшнов INCREMENT, INCREMENT_AGE, DECREMENT, DECREMENT1 в src/redux/actionTypes.js

Done.

3 - Описать редьюсер в src/redux/reducers.js

Done.

4 - Создать компоненты src/components/Counter/Counter.jsx, используя useEffect, useState реализуем 
требования:

при первой загрузке компонента в useEffect подписываемся на изменения стора при помощи store.subscribe, при изменении каунтера в сторе редакса обновляем каунтер в стэйте компонента (используя для этого метод, полученный через useState), в этом же useEffect диспатчатся следующие экшны:
   store.dispatch({ type: actionTypes.INCREMENT });
    // 1
    store.dispatch({ type: actionTypes.INCREMENT, payload: 3 });
    // 4
    store.dispatch({ type: actionTypes.DECREMENT });
    // 3
    store.dispatch({ type: actionTypes.DECREMENT1 });
    // 3 
Для того, чтобы store.subscribe вызвался только один раз, применяем следующий подход:
    useEffect(() => {
        if (!isStoreSubsribed) {
            // ваша логика

            setStoreSubsribed(true);
        };
    }, [isStoreSubsribed, setStoreSubsribed]);
Добиваемся того, чтобы при нажатии на Increment значение каунтара увеличивалось на 1
Добиваемся того, чтобы jsx содержало всегда актуальное значение из стэйта

Done.

5 - Реализовать src/components/CounterButtons/CounterButtons.jsx, используя Provider подключаем его к компоненту Counter, используя useSelector, useDispatch забираем и обновляем стэйт редакса таким образом, чтобы:

по нажатию на Increment значение counter увеличивалось на 1
по нажатию на Increment + 2 значение counter увеличивалось на 2 (используя payload)
по нажатию на Increment Age значение age увеличивалось на 1

Done.

6 - Установить Redux DevTools, при создании store используем следующий подход:

const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : a => a;
const store = createStore(counterReducer, devtools); 
Убеждаемся, что во вкладке Redux появилась возможность отслеживать детали всех экшнов, которые диспатчатся в приложении, включая то, как они меняют стэйт в сторе редакса.

Done.

# Домашняя работа 7

1 - заменить index.css на index.scss

Done.

2 - перенести логику (включая импорты, useEffect и верстку) по работе с todos из Feedbacks в новый компонент Todos

2 - создать базу Realtime Database

Done.

3 - заполнить Realtime Database данными в следующем формате:

Здесь:
data - данные для отображения для одного todo
todos - список todos

Для заполнения базы данных следует использовать импорт данных, которые вы экспортировали (через сохранение в json файл) из https://jsonplaceholder.typicode.com/todos/1 и https://jsonplaceholder.typicode.com/todos.

Done.

4 - Используя REST Client, создав в корне requests.http, выполняем GET и POST запросы, используя ссылку из Realtime Database, добавив в конце ссылки .json, то есть если ссылка сгенерирована в таком формате https://todos-7be86-default-rtdb.firebaseio.com/todos, то GET/POST запросы отправляем на https://todos-7be86-default-rtdb.firebaseio.com/todos.json. Убеждаемся, что запросы отработали со статусом 200, оставляем оба запроса в файле requests.http, разделяем их через ### как на картинке ниже:

В POST запросе используем header content-type: application/json как на картинке выше.

Done.

5 - Дорабатываем src/data/todos.js таким образом, чтобы он используя Fetch API реализовывал get и getAll для получения данных из http://.../data.json и https://.../todos.json, причем getAll возвращает массив объектов, это значит используем Object.values() для конвертации в массив того объекта, который нам вернет https://.../todos.json. Как get, так и getAll реализуем через async/await.

Done.

6 - В компоненте Todos используя два useEffect, в которых дергаем get и getAll из src/data/todos.js и используя методы useState отображаем полученные данные в jsx в следующем формате:

Done.

7 - В src/data/todos.js реализуем функцию add для добавления нового элемента через POST в https://.../todos.json, для отправки запроса используем Fetch API .

Done.

8 - В компоненте Todos реализуем форму, в которой при нажатии на кнопку Add срабатывает событие onSubmit, в котором вызывается evt.preventDefault, происходит вызов функции add из src/data/todos.js новый элемент попадает в стэйт. Очистку поля title, а также отображение нового элемента в верстке реализуем уже после того, как отработала функция add, для этого используем .then, например так:

Done.

# Домашняя работа 6

1 - поставить галочку Highlight updates when components render для визуализации перерисовки компонентов:

Done.

2 - Изучить теорию про useState и useContext. 

Done.

3 - На основе main создаем ветку 6.

Done.

4 - В компонент App добавить 2 ссылки - Light и Dark, реализовать переключение темы Light/Dark: при выборе Light бэкграунд у body окрашивается в темный цвет, а цвет текста - в светлый, и наоборот, при выборе Dark бэкграунд у body окрашивается в светлый цвет, а цвет текста - в темный, для смены стилей используем document.body.className = ..., где ... - один из классов body, заданных в index.css, стили остальных элементов меняем через атрибут className. Фон по умолчанию берем из файла utils/config.js.

Done.

5 - Реализуем изменение фона/цвета в компонентах Feedbacks и Feedback используя useContext, сам контекст создаем в utils/ThemeContext.js, а ThemeContext.Provider подключаем в компоненте App.

Done.

6 - Поднимаем пиар из ветки 6 на main с изменениями из п.4 и п.5. В терминале выполняем npm run build && firebase deploy и указываем полученный url. (Получил)[https://myfreedom-react-project-anton.web.app]

Done.

7* - На основе ветки main создаем ветку main-6-7, на основе ветки 6 создаем ветку 6-7, реализуем п.4 и п.5 через props вместо useContext. Поднимаем пиар 6[7] из ветки 6.7 на main-6-7.

Did not finish.

8 - На основе ветки 6 создаем ветку 6-8, в файле data/todos.js используя fetch и data.json() реализуем метод get, который получает данные из https://jsonplaceholder.typicode.com/todos/1. В компоненте Feedbacks используя useState и useEffect и метод get реализуем отображение полученных из сервера данных, включая userId и title, поднимаем пиар 6[8] из ветки 6-8 на main. В терминале выполняем npm run build && firebase deploy и указываем полученный url.(Получил)[https://myfreedom-react-project-anton.web.app]

Done.

9* - На основе ветки 6 создаем ветку 6-9. Реализовать сохранение текущей темы в localStorage. Поднимаем пиар 6[9] из ветки 6-9 на main.

Done.

10* - На основе ветки 6.8 создаем ветку 6-10 Реализовать п.8, только вместо https://jsonplaceholder.typicode.com/todos/1 используем https://jsonplaceholder.typicode.com/todos и выводим список всех todos на экран. Поднимаем пиар 6[10] из 6-10 на 6-8.

Done.
# Домашняя работа 5

1 - установить пакет prop-types

Done.

2 - описать PropTypes для компонента Feedback, указать, что props.name и props.feedback - обязательные, проверить, что если мы не указываем одно из полей - возникает ошибка

Done.

3* - реализовать передачу пропсов во всех компонентах из 1.4 и 1.5, включая Appartment, Room и т.п. Все пропсы описываем через PropTypes. Список PropTypes, обязательных для реализации в рамках этого пункта (часть полей делаем обязательными, часть - не обязательными):

optionalArray: PropTypes.array
optionalBool: PropTypes.bool
optionalFunc: PropTypes.func
optionalNumber: PropTypes.number
optionalObject: PropTypes.object
optionalString: PropTypes.string
optionalNode: PropTypes.node
optionalElement: PropTypes.element
optionalElementType: PropTypes.elementType
optionalEnum: PropTypes.oneOf([указать здесь разные варианты])
optionalUnion: PropTypes.oneOfType([указать разные варианты])
optionalObjectWithShape: PropTypes.shape({указать разные варианты}), реализовать вложенность объектов

Done.

4 - Поднимаем пиар 5 из ветки 5.1 на ветку main, при запуске кода не должно быть ворнингов

Done.

5* - Поднимаем пиар 5[2] из ветки 5.2 на ветку main-5 (которую своздаем на основе main), при запуске кода должен быть хотя бы один ворниг каждого вида из тех, которые указаны в п. 3

Done.

6* - Реализовать валидацию полей из 4.9 при добавлении фидбека через useState и классы

Done.

7* - В компонент App добавить 2 ссылки - Light и Dark, реализовать переключение темы Light/Dark: при выборе Light бэкграунт у body окрашивается в темный цвет, а цвет текста - в светлый, и наоборот, при выборе Dark бэкграунт у body окрашивается в светлый цвет, а цвет текста - в темный, для смены стилей используем document.body.className = ..., где ... - один из классов body, заданных в index.css, стили остальных элементов меняем через атрибут className. Все className, как у body, так и у остальных элементов устанавливаем в зависимости от того, какое значение, light либо dark лежит у нас в state

Done.

8* - прочитать про то, как использовать style, убедиться, что использование style не рекомендуется

Done.

# Домашняя работа 4


1 - Изучить Рендеринг элементов
Done.

2 - Создать компонент Feedbacks, в нем форма с полями name и feedback, а также кнопкой Add, по нажатию на 
Add данные о фидбеке попадают в стэйт, который подключается через useState, а также в localStorage используя JSON.stringify, поля очищаются.
Done.

3 - Создать компонент Feedback, который через props принимает name и feedback и отрисовывает фидбек используя стили, подтянутые через scss модули
Done.

4 - В компоненте Feedbacks реализовать отображение массива компонентов Feedback, который получаем путем конвертации при помощи map данных, полученных из localStorage и преобразованного в массив при помощи JSON.parse
Done

5 - Создать компонент Home
Done.

6 - Добавить в приложение роутинг используя https://reactrouter.com/web/guides/quick-start таким образом, что по нажатию на Home показывается компонент , а по нажатию на Feedbacks, открывается , при этом открывается при загрузке страницы, а при переходе на '/feedbacks'.
Done.

7 - Используя https://console.firebase.google.com/ создать проект в Firebase, инициировать в созданном проекте хостинг, следуя инструкциям интегрировать firebase tools в приложение таким образом, чтобы при вызове firebase deploy данные из папки build деплоились на хостинг
Done.

8 - выполнить npm run build и firebase deploy, указать ссылку на сайт в readme.md напротив соответствующего пункта
Done. [MyFirebase](https://myfreedom-react-project-anton.web.app).

9* - Реализовать валидацию полей таим образом, что если пользователь не ввел никакие значения в поля name и/или feedback при этом нажал на Add, пустые поля подсвечивались красным бордером
Done (required)

# Домашняя работа 3
0 - На основе main создать ветку 3 Done.

1 - Перенести все компоненты в соответствующие подпапки внутри папки components, например, Appartment.js в подпапку Appartment, App.js, внутри App и т.д. Done.

2 - Хотя бы один компонент должен подключать стили одним через import css файла Done.

3 - Хотя бы один компонент должен подключать стили одним через import css модуля, убедиться, что в верстке к классу добавляется префикс и постфикс Done.

4 - Установить node-sass через команду npm install node-sass --save Done.

5 - Хотя бы один компонент должен подключать стили одним через import scss файла npm install node-sass --save Done.

6 - Хотя бы один компонент должен подключать стили одним через import scss модуля, создать scss селектор, убедиться, что в верстке к классу добавляется префикс и постфикс Done.

7 - Хотя бы в одном родительском компоненте реализовать передачу данных в дочерний компонент через props Done.

8 - одном родительском компоненте реализовать передачу функции в дочерний компонент через props Done.

9 - одном родительском компоненте реализовать передачу children в дочерний компонент через props Done.

10 - установить экстеншн eslint, установить галочку format on save убедиться, пройтись по всем js файлам и сохраняя файлы убедиться, что весь код корректно отформатирован Done.

11 - Поднять пиар из 3 в main Done.

12* - Изучить React без JSX Done.

13* - Изучить Знакомство с JSX Done.

14* - Изучить Компоненты и пропсы Done.
# Домашняя работа 2
1-10. Done.

# Домашняя работа
1.1 - 1.5 Выполнил Ссылка папки components.

1.6 - 1.8 Выполнил Ссылка папки public.

1.9 В данный моент выполняется Ссылка branch 1.

1.10 Сделано, если правильно заполнил и не запутался в branch-ах. Ссылка на перенесенный PR.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

7
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
