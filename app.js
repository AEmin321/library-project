const mainSection = document.querySelector('main');

let myLibrary = [];

addBookToLibrary();
displayBooks();



function Book (title,author,pages,read) {
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
}

function addBookToLibrary () {
    let book1=new Book("Hello","iamtheauthor",123,true);
    let book2=new Book("bye","meamo",322,true);
    myLibrary.push(book1,book2);
}


// function to display the books list to table
function displayBooks () {
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


// handles the book status read or not read
function handleBookStatus (item) {
    if (item){
        return "Read";
    }
    else {
        return "Not Read";
    }
}