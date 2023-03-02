const mainSection = document.querySelector('main');
const form = document.querySelector('#form');


let myLibrary = [];





function Book (title,author,pages,read) {
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
}

// adding the input values to the library object array
function addBookToLibrary () {
    form.addEventListener('submit',(event)=>{
        event.preventDefault();
        const elements=event.target.elements;
        const bookName=elements.title.value;
        const bookAuthor=elements.author.value;
        const bookPages=elements.pages.value;
        const bookStatus=elements.status.checked;

        const newBook=new Book(bookName,bookAuthor,bookPages,bookStatus);
        myLibrary.push(newBook);

        displayBooks();
    })
}


addBookToLibrary();



// function to display the books list to table
function displayBooks () {
    //reseting the html card divs
    resetDisplay();

    myLibrary.forEach((item)=>{
        const bookCard=document.createElement('div');
        const bookName=document.createElement('p');
        const bookAuthor=document.createElement('p');
        const bookPages=document.createElement('p');
        const bookStatus=document.createElement('button');
        const bookRemove=document.createElement('button');

        bookCard.classList.add('book-card');
        bookName.classList.add('book-name');
        bookAuthor.classList.add('book-author');
        bookPages.classList.add('book-pages');
        bookStatus.classList.add('book-status');
        bookRemove.classList.add('book-remove');

        bookName.textContent=item.title;
        bookAuthor.textContent=item.author;
        bookPages.textContent=item.pages;
        bookStatus.textContent=handleBookStatus(item.read);
        bookRemove.textContent="Remove";

        bookCard.appendChild(bookName);
        bookCard.appendChild(bookAuthor);
        bookCard.appendChild(bookPages);
        bookCard.appendChild(bookStatus);
        bookCard.appendChild(bookRemove);

        mainSection.appendChild(bookCard);
    })
}

// reseting display
function resetDisplay () {
    const cards=document.querySelectorAll('.book-card');
    cards.forEach((card)=>{
        card.remove();
    })
}


// handles the book status read or not read
function handleBookStatus (item) {
    if (item){
        return "Read";
    }
    else {
        return "Not Read";
    }
}



