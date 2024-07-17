
var Quotes = [    , 
    {'author': 'Albert Einstein', 
     'quote': 'Two things are infinite: the universe and human stupidity; and I am not sure about the universe.'},
    {'author': 'Marcus Tullius Cicero', 
     'quote': 'A room without books is like a body without a soul.'},
    {'author': 'Frank Zappa', 
     'quote': 'So many books, so little time.'},
    {'author': 'Robert Frost', 
     'quote': 'In three words I can sum up everything I have learned about life: it goes on.'},
    {'author': 'Oscar Wilde', 
     'quote': 'Always forgive your enemies; nothing annoys them so much.'},
    {'author': 'Ralph Waldo Emerson', 
     'quote': 'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment'},
];

function generateQuote(){
    const random =Math.floor((Math.random() * Quotes.length) + 1);
    document.querySelector('#newquote').textContent = `\"${Quotes[random].quote}\"`;
    document.querySelector('#newauthor').textContent = `--${Quotes[random].author}`;
}







  








































