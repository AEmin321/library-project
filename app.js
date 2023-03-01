const mainSection = document.querySelector('main');

let myLibrary = [
    {
        title:"filani",
        author:"filanias",
        pages:324,
        read:false
    },
    {
        title:"alksdjf",
        author:"alksdjkf;la",
        pages:22,
        read:true
    },
    {
        title:"fukin",
        author:"no way im",
        pages:222,
        read:true
    }
];

displayBooks();

function Book () {
    // constructor goes here
}

function addBookToLibrary () {

}

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

function handleBookStatus (item) {
    if (item){
        return "Read";
    }
    else {
        return "Not Read";
    }
}