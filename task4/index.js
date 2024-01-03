document.getElementById('setupButton').addEventListener('click', () => {
    const cards = [
        {
            name: "Цитата пацана",
            imageLink: "https://chelny-izvest.ru/images/uploads/news/2022/2/15/c288cb40b090f1484ec62b9784d4244b.jpg",
            description: "А теперь запомни, ты теперь пацан, ты теперь с улицы, а кругом враги",
            productCode: 1,
            supplier: "Пацан",
        },
        {
            name: "Цитата Стетхема",
            imageLink: "https://citatnica.ru/wp-content/uploads/2019/08/Jason-Statham-bald-768x490.jpg",
            description: '"Моя тренировка начинается, когда я открываю ногой бутылочку пивка. На этом она и заканчивается"',
            productCode: 2,
            supplier: "Стетхем",
        }
    ];
    const listCards = window.document.querySelector(".list-cards");
    cards.map((cardInfo) => listCards.append(createCard(cardInfo)));
    window.localStorage.setItem("card-info", JSON.stringify(cards));
    window.location.reload();
})

const form = document.querySelector('.data-form');
form.addEventListener("submit", addCard);

function addCard(event) {
    event.preventDefault();
    const cardsInfo = JSON.parse(window.localStorage.getItem("card-info"));
    let cardInfo = {};
    const inputs = event.target.querySelectorAll("input");
    inputs.forEach((item) => (cardInfo[item.id] = item.value));
    cardsInfo.push(cardInfo);
    window.localStorage.setItem("card-info", JSON.stringify(cardsInfo));
    const listCards = window.document.querySelector(".list-cards");
    listCards.append(createCard(cardInfo));
    inputs.forEach((item) => (item.value = ""));
}

const createEditButton = (name, imageLink, description, productCode, supplier) => {
    let editButton = document.createElement("button");
    editButton.addEventListener("click", (e) => {
        e.preventDefault();
        editCard({name, imageLink, description, productCode, supplier});
    });
    editButton.append(document.createTextNode("Изменить"));

    editButton.classList.add('card__btns');
    return editButton;
}

function editCard(data) {
    const inputs = form.querySelectorAll("input");
    inputs.forEach((cardInfo) => (cardInfo.value = data[cardInfo.id]));
    form.removeEventListener("submit", addCard);
    form.addEventListener('submit', (evt) => {
        evt.preventDefault();
        deleteCard(data.productCode);
        addCard(evt);
        form.addEventListener("submit", addCard);
    })
}

const createDeleteButton = (productCode) => {
    const deleteButton = document.createElement("button");
    deleteButton.addEventListener("click", (e) => {
        e.preventDefault();
        deleteCard(productCode);
    });
    deleteButton.append(document.createTextNode("Удалить"));
    deleteButton.classList.add('card__btns');
    return deleteButton;
}

function deleteCard(productCode) {
    let card = document.getElementById(productCode);
    let cards = JSON.parse(window.localStorage.getItem("card-info"));
    const nonDeletedCards = cards.filter((item) => item.productCode !== productCode);
    window.localStorage.setItem("card-info", JSON.stringify(nonDeletedCards));
    card.remove();
}

(function onLoad() {
    let cardsInfo = JSON.parse(window.localStorage.getItem("card-info"));
    const listCards = window.document.querySelector(".list-cards");
        cardsInfo.map((item) => listCards.append(createCard(item)));
}());

function createCard({name, description, imageLink, productCode, supplier}) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.id = productCode;

    const image = document.createElement('img');
    image.classList.add('card__image');
    image.src = imageLink;

    const cardInfo = document.createElement("div");
    cardInfo.classList.add("card-info");

    const nameContainer = document.createElement("div");
    nameContainer.classList.add("card__name");
    nameContainer.append(document.createTextNode(`Навзание: ${name}`));

    const descriptionContainer = document.createElement("div");
    descriptionContainer.classList.add("card__description");
    descriptionContainer.append(document.createTextNode(`Описание: ${description}`));

    const supplierContainer = document.createElement("div");
    supplierContainer.classList.add("card__supplier");
    supplierContainer.append(document.createTextNode(`Поставщик: ${supplier}`));

    const productCodeContainer = document.createElement("div");
    productCodeContainer.classList.add("card__code");
    productCodeContainer.append(document.createTextNode(`Код товара: ${productCode}`));
    cardInfo.append(nameContainer);
    cardInfo.append(descriptionContainer);
    cardInfo.append(supplierContainer);
    cardInfo.append(productCodeContainer);

    const buttonsContainer = document.createElement("div");
    const editButton = createEditButton(name, imageLink, description, productCode, supplier);
    const deleteButton = createDeleteButton(productCode);
    buttonsContainer.append(editButton);
    buttonsContainer.append(deleteButton);

    card.append(image);
    card.append(cardInfo);
    card.append(buttonsContainer);
    return card;
}