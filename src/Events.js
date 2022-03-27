import { threadId } from 'worker_threads';

/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    const body = document.body;
    body.insertAdjacentHTML('afterbegin', '<button>Удали меня</button>');
    const tag = body.getElementsByTagName('button')[0];
    tag.addEventListener('click', () => {
        tag.remove();
    });
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    const body = document.body;
    let ul = document.createElement('ul');
    body.append(ul);
    let li;
    arr.forEach((element) => {
        li = document.createElement('li');
        ul.append(li);
        li.innerHTML = element;
        li.addEventListener('mouseover', (event) => {
            if (!event.target.hasAttribute('title')) {
                event.target.setAttribute('title', event.target.innerHTML);
            }
        });
    });
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    const body = document.body;
    body.insertAdjacentHTML(
        'afterbegin',
        '<a href="https://tensor.ru/">tensor</a>',
    );
    const tag = body.getElementsByTagName('a')[0];
    tag.addEventListener(
        'click',
        function (event) {
            event.preventDefault();
            tag.innerHTML += ' ';
            tag.innerHTML += tag.getAttribute('href');
        },
        { once: true },
    );
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    const body = document.body;
    body.insertAdjacentHTML(
        'afterbegin',
        '<ul><li>Пункт</li></ul><button>Добавить пункт</button>',
    );
    const tag = body.getElementsByTagName('ul')[0];
    tag.addEventListener('click', function (event) {
        if (event.target && event.target.nodeName === 'LI') {
            event.target.innerHTML += '!';
        }
    });
    const btn = body.getElementsByTagName('button')[0];
    btn.addEventListener('click', function () {
        tag.insertAdjacentHTML('beforeend', '<li>Пункт</li>');
    });
}
