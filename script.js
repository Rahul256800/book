

function printBookInfo() {
    // Retrieve values from input fields
    var bookName = document.getElementById("bookName").value;
    var bookTitle = document.getElementById("bookTitle").value;
    var bookYear = document.getElementById("bookYear").value;

    // Display the values
    alert("Book Name: " + bookName + "\nBook Title: " + bookTitle + "\nYear: " + bookYear);
    }