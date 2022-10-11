const quotes = [
	{
		quote: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
		author: "Buddha"
	},
	{
		quote: "There are no mistakes, only opportunities.",
		author: "Tina Fey"
	},
	{
		quote: "Sometimes you can't see yourself clearly until you see yourself through the eyes of others.",
		author: "Ellen DeGeneres"
	},
	{
		quote: "Don't limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.",
		author: "Mary Kay Ash",
	},
	{
		quote: "If you spend your whole life waiting for the storm, you'll never enjoy the sunshine.",
		author: "Morris West"
	},
	{
		quote: "When you cease to dream you cease to live.",
		author: "Malcolm Forbes"
	},
	{
		quote: "Watch your thoughts; they become words. Watch your words; they become actions. Watch your actions; they become habits. Watch your habits; they become character. Watch your character; it becomes your destiny.",
		author: "Lao-Tze"
	},
	{
		quote: "Live for each second without hesitation.",
		author: "Elton John"
	},
	{
		quote: "You never really learn much from hearing yourself speak.",
		author: "George Clooney"
	},
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote= quotes[Math.floor(Math.random()*quotes.length)];

// quote.innerText = todaysQuote.quote;
// quote.innerText = todaysQuote.author;

quote.innerText = todaysQuote.quote;
author.innerText = ` - ${todaysQuote.author}`;