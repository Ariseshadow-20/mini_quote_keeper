let quotes = [];
let btn = document.getElementById("saveQuo");
let bttn = btn.addEventListener("click", function(evt){
    evt.preventDefault();
    let quoteContent = document.getElementById("quote").value;
    let quoteAuthor = document.getElementById("author").value;

    if(quoteContent.trim() === "" && quoteAuthor.trim() === ""){
        alert("Enter a quote and it's author!");
        return;
    }
    else if(quoteContent.trim() === ""){
        alert("Enter a quote!");
        return;
    }
    else if(quoteAuthor.trim() === ""){
        alert("Enter an author!");
        return;
    }

    let quote = {
        content: quoteContent,
        author: quoteAuthor,
        id : quotes.length,
    };

    document.getElementById("quote").value = "";
    document.getElementById("author").value = "";
    quotes.push(quote);
    renderquotes();
    localStorage.setItem("quotes", JSON.stringify(quotes));
})
window.addEventListener("load", function(evt){
    let storedQuotes = localStorage.getItem("quotes");
    if(storedQuotes !== null){
        quotes = JSON.parse(storedQuotes);
        renderquotes();
    }
}) 

function renderquotes(){
    document.getElementById("saquoli").innerHTML = "";
    quotes.forEach(function(quote){
        let p = document.createElement("p");
        p.innerText = quote.content + " ~  " + quote.author;
        document.getElementById("saquoli").appendChild(p);
        let butt = document.createElement("button");
        butt.innerHTML = "🗑️";
        butt.addEventListener("click", function(evt){
            let quotesFiltered = JSON.parse(localStorage.getItem("quotes"));
            quotesFiltered = quotesFiltered.filter(function(q){
                return q.id!=quote.id;
            });
            localStorage.setItem("quotes", JSON.stringify(quotesFiltered));
            p.remove();
            quotes = quotesFiltered;
            renderquotes();            
        })
        p.appendChild(butt);
    });
}
// let dmode = true;
// document.getElementById("mode").addEventListener("click",function(evt){
//     if(dmode){
//         document.body.style.backgroundColor = "black";
//         dmode = false;
//     }
//     else{
//         document.body.style.backgroundColor = "white";
//         document.innerHTML.style.color = "black";
//         dmode = true;
//     }
// })

