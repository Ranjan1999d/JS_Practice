const menu = [{
        id: 1,
        category: '8th',
        name: 'bhupender',
        img: 'img/bhupender.png',
        desp: 'Lorem Ipsum is simply dummy text of e printing and typesetting industry. Lorem Ipsum has been e industrys standard dummy text ever since e 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries'
    },
    {
        id: 2,
        category: '9th',
        name: 'dhaval',
        img: 'img/dhaval.png',
        desp: 'Lorem Ipsum is simply dummy text of e printing and typesetting industry. Lorem Ipsum has been e industrys standard dummy text ever since e 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries'
    },
    {
        id: 3,
        category: '8th',
        name: 'dr-pai',
        img: 'img/dr-pai.png',
        desp: 'Lorem Ipsum is simply dummy text of e printing and typesetting industry. Lorem Ipsum has been e industrys standard dummy text ever since e 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries'
    },
    {
        id: 4,
        category: '10th',
        name: 'girish',
        img: 'img/girish.png',
        desp: 'Lorem Ipsum is simply dummy text of e printing and typesetting industry. Lorem Ipsum has been e industrys standard dummy text ever since e 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries'
    }, {
        id: 5,
        category: '9th',
        name: 'kriti',
        img: 'img/kriti.png',
        desp: 'Lorem Ipsum is simply dummy text of e printing and typesetting industry. Lorem Ipsum has been e industrys standard dummy text ever since e 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries'
    },
    {
        id: 6,
        category: '8th',
        name: 'palak',
        img: 'img/palak.png',
        desp: 'Lorem Ipsum is simply dummy text of e printing and typesetting industry. Lorem Ipsum has been e industrys standard dummy text ever since e 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries'
    },
    {
        id: 7,
        category: '10th',
        name: 'priti',
        img: 'img/priti.png',
        desp: 'Lorem Ipsum is simply dummy text of e printing and typesetting industry. Lorem Ipsum has been e industrys standard dummy text ever since e 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries'
    },
    {
        id: 7,
        category: '9th',
        name: 'Sanjog',
        img: 'img/sanjog.png',
        desp: 'Lorem Ipsum is simply dummy text of e printing and typesetting industry. Lorem Ipsum has been e industrys standard dummy text ever since e 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries'
    },
    {
        id: 9,
        category: '10th',
        name: 'srinivas',
        img: 'img/srinivas.jpeg',
        desp: 'Lorem Ipsum is simply dummy text of e printing and typesetting industry. Lorem Ipsum has been e industrys standard dummy text ever since e 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries'
    },
    {
        id: 10,
        category: '10th',
        name: 'Vivek',
        img: 'img/vivek.jpeg',
        desp: 'Lorem Ipsum is simply dummy text of e printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries'
    }
]

const img = document.getElementById('img');
const name = document.querySelectorAll('.name');
const desp = document.querySelectorAll('.desp');
const grid = document.getElementById('main');

const filter_container = document.querySelector('.filter-container');

window.addEventListener('DOMContentLoaded', function() {
    displayMenuItems(menu);
    allFilterBtns();
})



function allFilterBtns() {
    const categories = menu.reduce(function(value, key) {
        if (!value.includes(key.category)) {
            value.push(key.category);
        }
        return value
    }, ["all"])
    const categoryBtns = categories
        .map(function(category) {
            return `<button class="filter-btn" data-id=${category}>${category}</button>`;
        })
        .join("");
    filter_container.innerHTML = categoryBtns;
    const filter_btn = document.querySelectorAll('.filter-btn');
    filter_btn.forEach(function(btn) {
        btn.addEventListener("click", function(e) {
            // console.log(e.currentTarget.dataset);
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function(menuItem) {
                // console.log(menuItem.category);
                if (menuItem.category == category) {
                    return menuItem;
                }
            });
            if (category === "all") {
                displayMenuItems(menu);
            } else {
                displayMenuItems(menuCategory);
            }
        });
    });
}

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function(item) {
        // console.log(item);

        return `<div class="grid-content">
                    <img src=${item.img} alt="">
        
                    <div class="details">
                        <div class="name">${item.name}</div>
                        <hr>
                        <p class="desp">${item.desp}</p>
                    </div>
                </div>`;
    });
    displayMenu = displayMenu.join("");
    // console.log(displayMenu);
    grid.innerHTML = displayMenu;
}