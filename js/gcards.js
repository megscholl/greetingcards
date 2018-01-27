
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
  

        let bDayCard = new Card('Happy Birthday!!', 'From, yours truly.');
        console.log("Happy Birthday card messages: ", bDayCard);

        let vDayCard = new Card("Happy Valentine's Day!!", "I love you, but I hate having to shave my legs all the time.");
        console.log("Valentine's Day Card Marketing: ", vDayCard);

        let missYouCard = new Card('I miss you!', 'I miss you, but I love not having to shave my legs.');
        console.log("Show someone how much you really miss them: ", missYouCard);

        let congratsCard = new Card('Congratulations on graduating college!', 'You achieved a piece of paper saying you paid a bunch of money to not get a job! Welcome to adulthood.');
        console.log("College Graduate accomplishments: ", congratsCard);








