// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

let wallet = JSON.parse(localStorage.getItem("amount"))
document.querySelector("#wallet").innerHTML = wallet;

function searchMovies(){
    let input = document.querySelector("#search").value;
    const url = `https://www.omdbapi.com/?s=${input}&apikey=78b1da0c`

    fetch(url)
    .then(function(res){
        return res.json();
    })
    .then(function(res){
        console.log(res.Search)
        appendData(res.Search)
    })
}

function appendData(data){
    let main = document.querySelector("#movies");
    main.innerHTML=null;
    data.map(function(el){
        let box = document.createElement("div");
        box.setAttribute("class",'innerBox');

        let poster = document.createElement("img");
        poster.src = el.Poster;

        let title = document.createElement('p');
        title.innerText = el.Title;

        let book = document.createElement("button");
        book.setAttribute('class', 'book_now');
        book.innerText = 'Book Now';

        book.addEventListener('click',function(){
            bookMovie(el);
        })
        box.append(poster,title,book)
        main.append(box);
    })
}

let id;
function debounce(func,delay){
    if(id)
    {
        clearTimeout(id);
    }
    id = setTimeout(function(){
        func();
    },delay)
}


function bookMovie(el){
    localStorage.setItem("movie",JSON.stringify(el));
    window.location.href = 'checkout.html';
}