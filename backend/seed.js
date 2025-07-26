const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Book = require('./models/Book');

dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(async () => {
  await Book.deleteMany();

  await Book.insertMany([
    { title: "1984", author: "George Orwell", publicationYear: 1949, genre: "Dystopian" },
    { title: "To Kill a Mockingbird", author: "Harper Lee", publicationYear: 1960, genre: "Fiction" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", publicationYear: 1925, genre: "Classic" },
    { title: "Moby Dick", author: "Herman Melville", publicationYear: 1851, genre: "Adventure" },
    { title: "The Hobbit", author: "J.R.R. Tolkien", publicationYear: 1937, genre: "Fantasy" },
    { title: "Brave New World", author: "Aldous Huxley", publicationYear: 1932, genre: "Sci-Fi" },
    { title: "Frankenstein", author: "Mary Shelley", publicationYear: 1818, genre: "Horror" },
    { title: "Pride and Prejudice", author: "Jane Austen", publicationYear: 1813, genre: "Romance" },
    { title: "Animal Farm", author: "George Orwell", publicationYear: 1945, genre: "Political Satire" },
    { title: "Catch-22", author: "Joseph Heller", publicationYear: 1961, genre: "War" },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", publicationYear: 1951, genre: "Fiction" },
    { title: "Lord of the Flies", author: "William Golding", publicationYear: 1954, genre: "Allegory" },
    { title: "Jane Eyre", author: "Charlotte Brontë", publicationYear: 1847, genre: "Romance" },
    { title: "Wuthering Heights", author: "Emily Brontë", publicationYear: 1847, genre: "Classic" },
    { title: "The Odyssey", author: "Homer", publicationYear: -800, genre: "Epic" },
    { title: "The Iliad", author: "Homer", publicationYear: -750, genre: "Epic" },
    { title: "Crime and Punishment", author: "Fyodor Dostoevsky", publicationYear: 1866, genre: "Philosophical" },
    { title: "War and Peace", author: "Leo Tolstoy", publicationYear: 1869, genre: "Historical" },
    { title: "Les Misérables", author: "Victor Hugo", publicationYear: 1862, genre: "Drama" },
    { title: "The Brothers Karamazov", author: "Fyodor Dostoevsky", publicationYear: 1880, genre: "Philosophical" },
    { title: "A Tale of Two Cities", author: "Charles Dickens", publicationYear: 1859, genre: "Historical" },
    { title: "Great Expectations", author: "Charles Dickens", publicationYear: 1861, genre: "Classic" },
    { title: "Don Quixote", author: "Miguel de Cervantes", publicationYear: 1605, genre: "Adventure" },
    { title: "Ulysses", author: "James Joyce", publicationYear: 1922, genre: "Modernist" },
    { title: "The Divine Comedy", author: "Dante Alighieri", publicationYear: 1320, genre: "Poetry" },
    { title: "The Stranger", author: "Albert Camus", publicationYear: 1942, genre: "Absurdist" },
    { title: "Fahrenheit 451", author: "Ray Bradbury", publicationYear: 1953, genre: "Dystopian" },
    { title: "The Road", author: "Cormac McCarthy", publicationYear: 2006, genre: "Post-apocalyptic" },
    { title: "The Alchemist", author: "Paulo Coelho", publicationYear: 1988, genre: "Fiction" },
    { title: "The Kite Runner", author: "Khaled Hosseini", publicationYear: 2003, genre: "Drama" },
    { title: "A Thousand Splendid Suns", author: "Khaled Hosseini", publicationYear: 2007, genre: "Drama" },
    { title: "Life of Pi", author: "Yann Martel", publicationYear: 2001, genre: "Adventure" },
    { title: "The Book Thief", author: "Markus Zusak", publicationYear: 2005, genre: "Historical" },
    { title: "Gone Girl", author: "Gillian Flynn", publicationYear: 2012, genre: "Thriller" },
    { title: "The Girl on the Train", author: "Paula Hawkins", publicationYear: 2015, genre: "Mystery" },
    { title: "The Silent Patient", author: "Alex Michaelides", publicationYear: 2019, genre: "Thriller" },
    { title: "Educated", author: "Tara Westover", publicationYear: 2018, genre: "Memoir" },
    { title: "Sapiens", author: "Yuval Noah Harari", publicationYear: 2011, genre: "History" },
    { title: "Becoming", author: "Michelle Obama", publicationYear: 2018, genre: "Biography" },
    { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", publicationYear: 2011, genre: "Psychology" }
  ]);

  console.log("📚 40 books inserted successfully.");
  mongoose.disconnect();
});
