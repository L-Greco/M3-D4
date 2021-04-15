let listOfBooks = []
let ul1 = document.getElementById("ul1")
let ul2 = document.getElementById("ul2")

window.onload = () => {
fetch("https:striveschool-api.herokuapp.com/books")
.then(res=> res.json())
.then(data => {
    listOfBooks= data
    console.log(data)
    loadLists()
    return listOfBooks
}).catch(err=>console.log(err))
}
addToCart = function (e) {
    (e.currentTarget.parentElement.parentElement).style="background-color:yellow;"
    ul2.innerHTML+= (e.currentTarget.parentElement.parentElement).innerHTML
    console.log(e.currentTarget.parentElement.parentElement.firstElementChild)
    // let buttons = document.querySelectorAll("#ul2 #skip")
    // buttons.forEach(button => button.addEventListener("click" ,skipIt ))

}

const skipIt = function  (e) {
    (e.currentTarget.parentElement.parentElement).remove()
}

const loadLists = function () {
listOfBooks.forEach(book  => {
    ul1.innerHTML+=  `<li>
    <img class="mt-2"src="${book.img}" alt="${book.title}">
    <p>${book.title}</p>
    <span>  <button id="add" > Add to cart!</button></span>
    <span>  <button id="skip"> Skip!</button></span>
    </li>`})

    let buttons = document.querySelectorAll("#add")
    buttons.forEach((element,index) => {
        element.addEventListener("click" , addToCart ) })


     let buttons2 = document.querySelectorAll("#skip")
        buttons2.forEach((element,index) => {
        element.addEventListener("click" ,skipIt ) 
     })
            
    }

    const search = function () {
        let list1Items = document.querySelectorAll("#ul1 li")
        let input = document.getElementsByTagName("input")
        listOfBooks.filter(item => item.innerText.indexOf(`${input.value}`))
    }


