
// The existing `CardMaker` object below contains a single method that returns a greeting. Your job is to add one or more methods to it, then use it as a prototype for at least three other objects using `Object.create()`

// ## Minimum requirement
// Each new object should represent a different type of greeting card, such as birthday or Valentine's Day, with its own unique properties. Output two messages, one from the front and one from the inside of the card, to the console. 

const CardMaker = {
    makeFrontMessage: function(front) {
      return `<h2>${front}</h2>`
    },
    makeBackMessage: function(back) {
        return `<h2>${back}</h2>`
      },
  }

  //Refactor this to link this object to cardMaker
//   const BirthdayCard = Object.create();



      function Card(frontMsg, backMsg) {
          this.frontMsg = CardMaker.makeFrontMessage(frontMsg);
          this.backMsg = CardMaker.makeBackMessage(backMsg);
        }

      
        const birthdayCard = Object.create(CardMaker);
        const valentinesCard = Object.create(CardMaker);
        const missYouCard = Object.create(CardMaker);
        const congratsCard = Object.create(CardMaker);
        

        birthdayCard.frontMsg = "<br>Happy Birthday!! <br><br>";
        birthdayCard.backMsg = "Here's $100,000. Lol, just kidding.";
        console.log("Birthday Card: " + birthdayCard.frontMsg + " " + birthdayCard.backMsg);
        let bDayCard = birthdayCard.frontMsg + birthdayCard.backMsg;
  
        valentinesCard.frontMsg = "all you need is love* <span class='wifi'>*and good wifi</span> <br>";
        valentinesCard.backMsg = "happy valentine's day";
        console.log("Valentine's Day Card: " + valentinesCard.frontMsg + " " + valentinesCard.asterisk + " " + valentinesCard.backMsg);

        missYouCard.frontMsg = "I miss you... <br>";
        missYouCard.backMsg = "but I love not having to shave my legs :)";
        console.log("I Miss You Card: " + missYouCard.frontMsg + " " + missYouCard.backMsg);

        congratsCard.frontMsg = "Congratulations on graduating college! <br><br>";
        congratsCard.backMsg = "You achieved a piece of paper! <br>Welcome to adulthood :)";
        console.log("College Graduate Card: " + congratsCard.frontMsg + " " + congratsCard.backMsg);
       
        let bdayCard = birthdayCard.frontMsg + birthdayCard.backMsg;
        let vDayCard = valentinesCard.frontMsg + valentinesCard.backMsg;
        let missYou = missYouCard.frontMsg + missYouCard.backMsg;
        let congratdsCard = congratsCard.frontMsg + congratsCard.backMsg;

        document.getElementById("bday").innerHTML = bdayCard;
        document.getElementById("vday").innerHTML = vDayCard;
        document.getElementById("missyou").innerHTML = missYou;
        document.getElementById("congrats").innerHTML = congratdsCard;


