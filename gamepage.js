var y = Math.floor(Math.random() * 10 + 1);
var x = document.getElementById("guessField").Value;

if(x == y)
{
    alert("Congratulations!!! " + playername + " You guessed it right in " + x + "Guess");
}
else if(x > y)
{
    guess++;
    alert("Oops!! Try a smaller number");
}
else
{
    guess++;
    alert("Oops!! Try a greater number");
}