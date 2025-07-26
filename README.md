# 📚 Books API

This is a RESTful Books API that supports **pagination**, **sorting**, and **searching** functionality. It’s ideal for managing a collection of books with various filters and views.

---

## 🚀 Base URL

```
http://localhost:5000/api/books
```

---

## ✅ Features

### 1. 📄 Pagination
- `page`: Page number to retrieve.
- `page_size`: Number of books per page.
- **Default:** `page=1`, `page_size=5`

**Example:**
```
GET /api/books?page=2&page_size=4
```

---

### 2. ↕️ Sorting
- `sort_by`: Field to sort by (`title`, `author`, `publicationYear`, `genre`)
- `sort_order`: `asc` or `desc`

**Examples:**
```
GET /api/books?sort_by=title&sort_order=asc
GET /api/books?sort_by=publicationYear&sort_order=desc
```

---

### 3. 🔍 Search
- `search`: Filter by title, author, or genre (supports partial match)

**Examples:**
```
GET /api/books?search=George Orwell
GET /api/books?search=Memoir
GET /api/books?search=Farm
```

---

## 🧪 Test Cases Covered

| #  | Test Case                               | Description                                       |
|----|------------------------------------------|---------------------------------------------------|
| 1  | Get Default Books (Page 1)               | Fetches first 5 books                             |
| 2  | Get Books - Page 2                       | Fetches books 6–10                                |
| 3  | Get Books - Page Size 5                  | Returns only 5 books per page                     |
| 4  | Sort Books by Title (A–Z)                | Alphabetical sorting                              |
| 5  | Sort Books by Title (Z–A)                | Reverse alphabetical sorting                      |
| 6  | Sort Books by Year (Old to New)          | Sorted by earliest year first                     |
| 7  | Sort Books by Year (New to Old)          | Sorted by latest year first                       |
| 8  | Search by Author “George Orwell”         | Filters books by author                           |
| 9  | Search by Genre “Memoir”                 | Filters books by genre                            |
| 10 | Search by Partial Title “Farm”           | Searches books with title containing 'Farm'       |
| 11 | Combined Filters                         | Applies page, size, sort, and search together     |

---

## 🛠️ Example Response

```json
{
  "total": 40,
  "page": 1,
  "pageSize": 5,
  "books": [
    {
      "_id": "123abc",
      "title": "1984",
      "author": "George Orwell",
      "publicationYear": 1949,
      "genre": "Dystopian"
    }
    // ...more books
  ]
}
```

---

## 📦 How to Use

**1. Clone the repository**
```bash
git clone https://github.com/CADEION/Book_Api_M.git
cd Book_Api_M
```

**2. Install dependencies**

_Backend:_
```bash
cd backend
npm install
```

_Frontend:_
```bash
cd ../frontend
npm install
```

**3. Run the servers**

_Backend:_
```bash
npm start
```

_Frontend:_
```bash
npm run dev
```

**4. Access the API**

Open your browser or API tool at:
```
http://localhost:5000/api/books
```

---

## 📄 License

MIT

