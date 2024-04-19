const myLibrary = [];
const addBook= document.getElementById('add');
const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author'); 
const bookPages = document.getElementById('pages'); 
const bookRead = document.getElementById('read'); 


class Book {
    constructor (title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

// const theHobbit = new Book ('The Hobbit', 'by JRR Tolkien', '295 pages', 'not read yet');
// const littleChicken = new Book ('Little Chicken', 'Chinese Writer', '10 pages', 'read');

// myLibrary.push(theHobbit); 
// myLibrary.push(littleChicken);

function addBookToLibrary() {
   let newBook = new Book (bookTitle.value, bookAuthor.value, bookPages.value, bookRead.value);
   myLibrary.push(newBook);
   console.log(myLibrary);
}

function clearInputs() {
    bookTitle.value = ""; 
    bookAuthor.value = ""; 
    bookPages.value = ""; 
    bookRead.value = ""; 
}

addBook.addEventListener('click', function() {
    addBookToLibrary();
    clearInputs();
    updateTable();
});

bookRead.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        addBook.click();
    }
});


//table 
// let tableBody = document.getElementById('tbody');

// myLibrary.forEach(book => {

//     let row = document.createElement('tr'); 
//     let cell1 = document.createElement('td')
//     let cell2 = document.createElement('td');
//     let cell3 = document.createElement('td');
//     let cell4 = document.createElement('td');

//     cell1.innerHTML = book.title;
//     cell2.innerHTML = book.author; 
//     cell3.innerHTML = book.pages; 
//     cell4.innerHTML = book.read;
//     row.appendChild(cell1);
//     row.appendChild(cell2);
//     row.appendChild(cell3);
//     row.appendChild(cell4);
//     tableBody.appendChild(row);
// });



let tableBody = document.getElementById('tbody');

function updateTable() {
    let tableBody = document.getElementById('tbody');
    tableBody.innerHTML = '';

    myLibrary.forEach((book, index) => {

        let row = document.createElement('tr'); 
        let cell0 = document.createElement('td');
        let cell1 = document.createElement('td')
        let cell2 = document.createElement('td');
        let cell3 = document.createElement('td');
        let cell4 = document.createElement('td');
        let checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.setAttribute('id', 'checkbox');
        checkbox.setAttribute('data-index', index);

        
        cell1.innerHTML = book.title;
        cell2.innerHTML = book.author; 
        cell3.innerHTML = book.pages; 
        cell4.innerHTML = book.read;
        row.appendChild(checkbox);
        row.appendChild(cell1);
        row.appendChild(cell2);
        row.appendChild(cell3);
        row.appendChild(cell4);
        tableBody.appendChild(row);
    });
}

//deleting rows from table


let deleteRows = document.getElementById('deleterows');

deleteRows.addEventListener('click', function() {
    deleteRow();
})

function deleteRow() {
    let checkedRows = tableBody.querySelectorAll("input[type='checkbox']:checked");
    checkedRows.forEach(checkbox => {
        let index = checkbox.getAttribute('data-index'); 
        myLibrary.splice(index, 1); 
        checkbox.parentElement.remove();
    });

    myLibrary.forEach((book, index) => {
        tableBody.querySelectorAll("input[type='checkbox']")[index].setAttribute('data-index', index);
    });
}

