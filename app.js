const mainSection = document.querySelector('main');
const form = document.querySelector('#form');
const addBtn=document.querySelector('.add-btn');
const cancelBtn=document.querySelector('.cancel-btn');



let myLibrary = [];

class Book {
    constructor (title,author,pages,read) {
        this.title=title;
        this.author=author;
        this.pages=pages;
        this.read=read;
    }
    toggleReadStatus(){
        if (this.read==true) {
            this.read=false;
        }else {
            this.read=true;
        }
    }
}


setOverlay();
addBookToLibrary();

//Removing the selected book card and removing from obj array
function removeBook () {
    const displayedBooks = document.querySelectorAll('.book-remove');

    displayedBooks.forEach((item)=>{
        item.addEventListener('click',(e)=>{
            const cardElement=e.target.parentElement;
            cardElement.remove();
            removeBookObject(e.target.parentElement.childNodes[0].textContent);
        })
    })
}

function removeBookObject (bookTitle) {
    myLibrary.forEach((book)=>{
        if (book.title==bookTitle) {
            const index=myLibrary.indexOf(book);
            myLibrary.splice(index,1);
            // console.log (myLibrary);
        }
    })
}


//founds clicked book from object array and updates book status
function updateBookIndex (bookTitle) {

    myLibrary.forEach((book)=>{
        if (book.title==bookTitle){
            book.toggleReadStatus();
        }
    })
}


//Updating the read status button on clicking
function updateStatus (book) {
    const displayedBooks = document.querySelectorAll('.book-status');

    displayedBooks.forEach((item)=>{
        
        item.addEventListener('click',(e)=>{
        let index=e.target.parentElement.childNodes[0].textContent;
            if(item.textContent=='Read'){
                item.style.backgroundColor='#FABB51';
                item.textContent='Not Read';
                updateBookIndex(index);
            }else {
                item.style.backgroundColor='#4ECCA3';
                item.textContent='Read';
                updateBookIndex(index);
            }
        })
    })
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
        resetOverlay();
        updateStatus(newBook);
        removeBook();
    })
}

//displaying overlay on clicking
function setOverlay () {
    addBtn.addEventListener('click',()=>{
        form.style.display='flex';
        addBtn.style.display='none';
    })
}

//reseting the values of input and hiding overlay
function resetOverlay () {
    form.style.display='none';
    addBtn.style.display='block'; 
    
    // reseting input values
    form.reset();
}

function toggleRead () {

}

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
        bookStatus.textContent=handleBookStatus(item.read,bookStatus);
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


// handles the book status read or not read changes background color according to it
function handleBookStatus (item,status) {
    if (item){
        return "Read";
    }
    else {
        status.style.backgroundColor='#FABB51';
        return "Not Read";
    }
}



