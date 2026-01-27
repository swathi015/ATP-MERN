class Book{
    title;
    author;
    pages;
    isAvailable;

    constructor(title,author,pages,isAvailable=true){
        this.title=title
        this.author=author
        this.pages=pages
        this.isAvailable=isAvailable
    }

    borrow(){
        this.isAvailable=false
    }

    returnbook(){
        this.isAvailable=true
    }

    getInfo(title,author,pages){
        console.log("Title:",this.title)
        console.log("Author:",this.author)
        console.log("Pages:",this.pages)
        console.log("Available?",this.isAvailable)
    }

    isLongbook(){
        return this.pages>300
    }
}

let book1=new Book("Harry Potter","J.K.Rowling",350)
book1.borrow()
book1.returnbook()
book1.getInfo()
book1.isLongbook()