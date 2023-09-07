const quotes = [
    {
        text: `"Spread love everywhere you go. Let no one ever come to you without leaving happier. "`,
        person: "-- Mother Teresa --",
    },
    {
        text: `"The only thing we have to fear is fear itself"`,
        person: "-- Franklin D. Roosevelt --",
    },
    {
        text: `"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that."`,
        person: "-- Martin Luther King Jr. --"
    },
    {
        text: `"Do one thing every day that scares you"`,
        person: "-- Eleanor Roosevelt --"
    }
]

const btnQuote = document.getElementById("new_quote");
const persons = document.getElementById("person");
const text = document.getElementById("text");

btnQuote.addEventListener("click", function(){
    let random = Math.floor(Math.random() * quotes.length);
    text.innerText = quotes[random].text
    persons.innerText = quotes[random].person

})




