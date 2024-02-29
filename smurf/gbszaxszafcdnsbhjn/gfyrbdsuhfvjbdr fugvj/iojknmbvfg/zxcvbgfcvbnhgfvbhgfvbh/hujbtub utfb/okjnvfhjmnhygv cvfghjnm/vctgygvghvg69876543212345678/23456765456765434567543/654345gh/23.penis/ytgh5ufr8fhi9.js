function cheatCodes() {
const cheats = {
    'Smurf.Cool': () => {
      SmurfCheat();
      console.log('Oh lord, you fat smelly monkey. Stop cheating.')
    },
    'Game.Silly': () => {
      GameSilly();
      console.log('Ha. Bozo.')
    },
    'MilkAndWax': () => {
      MilkAndWax();
    },
    'Game.Win': () => {
        GameWin();
      },
    'Helpy': () => {
        GameReveal();
      },
  };
  
  // Prompt the user for a password
  const enteredCheats = prompt('Enter cheat code (CASE SENSITIVE):');
  
  if (enteredCheats in cheats) {
    cheats[enteredCheats]();
  } else {
    alert('Invalid cheat code.');
  }
}




GameSilly=function()
{
	document.cookie='CookieClickerSave=0; expires=Fri, 3 Aug 2001 20:47:11 UTC;';
	ResetResponse();
	//ajax('backend.php?q=reset',ResetResponse);
}
MilkAndWax = function()
{
Milks = 100000000
console.log('You monkey, you got', Milks, 'milks. Thats WAY too many.');
}
SmurfCheat = function() 
{
    var howmany = 1000000000000000000000000000000000;
    Cookies += howmany;
    if (Pops.length < 260 && NumbersOn) new Pop('cookie', '+' + howmany);
    Clicking = 1;
}
GameWin = function()
{
    alert('WARNING: Everything may not load.');
    Cursors=1000;
    Grandmas=1000;
    Factories=1000;
    Mines=1000;
    Shipments=1000;
    Labs=1000;
    Portals=1000;
    Times=1000;
    Cools=1000;
    Milks=1000;
    Berrys=1000;
    Cookies = 1000000000000000000000000000000000;
}
GameReveal = function()
{
    alert('List of cheat codes: Smurf.Cool, Game.Silly, MilkAndWax, Game.Win, Helpy');

}