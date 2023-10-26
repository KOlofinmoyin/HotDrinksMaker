$(document).ready(function () {
  let screen = document.getElementById("screen");

  //   A dummy list of messages simulating asynchronous messages displayed from the network
  let fakeNetworkMessages = [
    "Loading...",
    "Connecting to Network...",
    "Loading flavours...",
    "Connected! 👍🏾",
  ];

  for (let timeTaken = 0; timeTaken < fakeNetworkMessages.length; timeTaken++) {
    screen.innerHTML = fakeNetworkMessages[timeTaken];
  }

  //   Hot-Drinks machine 'Welcome' state
  let welcomeInterval;

  const setWelcomeMessage = () => {
    screen.innerHTML = `<h2 class="welcome">Welcome, please select a hot drink!</h2>`;
  };

  //   Welcome state selection-message effect
  welcomeInterval = setInterval(setWelcomeMessage, 5000);

  $(function () {
    var $element = $("#screen");
    function fadeInOut() {
      $element.fadeIn(1000, function () {
        $element.fadeOut(1500, function () {
          $element.fadeIn(1500, function () {
            setTimeout(fadeInOut, 500);
          });
        });
      });
    }

    fadeInOut();
  });

  //   Prepare Lemon Tea
  $("#lemonTeaButton").on("click", function () {
    $("#brew").show();
    let preparing = lemonTea();
    $("#preparing").html(preparing);
    clearInterval(welcomeInterval);
    screen.innerHTML = "";
  });

  const lemonTea = () => {
    let lemonTeaDrink = {
      "Lemon Tea": [
        "Boil some water",
        "Steep the water in the tea",
        "Pour tea in the cup",
        "Add lemon",
      ],
    };

    let preparing = `<p class="displayProgress"> Making ${
      Object.keys(lemonTeaDrink)[0]
    }:</p><br>`;
    let i = 0;

    const displayNextLine = () => {
      if (i < lemonTeaDrink["Lemon Tea"].length) {
        preparing += `${i + 1}. ${lemonTeaDrink["Lemon Tea"][i]}<br>`;
        $("#preparing").html(preparing);
        i++;

        if (i < lemonTeaDrink["Lemon Tea"].length) {
          setTimeout(displayNextLine, 2000);
        }

        if (i === lemonTeaDrink["Lemon Tea"].length) {
          preparing += `${i + 1}. Ready. <br>`;
          $("#preparing").html(preparing);
        }
      }
    };

    displayNextLine();

    return preparing;
  };

  //   Prepare Coffee
  $("#coffeeButton").on("click", function () {
    $("#brew").show();
    let preparing = coffee();
    $("#preparing").html(preparing);
    clearInterval(welcomeInterval);
    screen.innerHTML = "";
  });

  const coffee = () => {
    let coffeePreparation = {
      Coffee: [
        "Boil some water",
        "Brew the coffee grounds",
        "Pour coffee in the cup",
        "Add sugar and milk",
      ],
    };

    let preparing = `<p class="displayProgress"> Making ${
      Object.keys(coffeePreparation)[0]
    }:</p><br>`;
    let i = 0;

    const displayNextLine = () => {
      if (i < coffeePreparation["Coffee"].length) {
        preparing += `${i + 1}. ${coffeePreparation["Coffee"][i]}<br>`;
        $("#preparing").html(preparing);
        i++;

        if (i < coffeePreparation["Coffee"].length) {
          setTimeout(displayNextLine, 2000);
        }

        if (i === coffeePreparation["Coffee"].length) {
          preparing += `${i + 1}. Ready. <br>`;
          $("#preparing").html(preparing);
        }
      }
    };

    displayNextLine();

    return preparing;
  };

  //   Prepare Chocolate
  $("#chocolateButton").on("click", function () {
    $("#brew").show();
    let preparing = chocolate();
    $("#preparing").html(preparing);
    clearInterval(welcomeInterval);
    screen.innerHTML = "";
  });

  const chocolate = () => {
    let chocolatePreparation = {
      Chocolate: [
        "Boil some water",
        "Add drinking chocolate powder to the water",
        "Pour chocolate in the cup",
      ],
    };

    let preparing = `<p class="displayProgress"> Making ${
      Object.keys(chocolatePreparation)[0]
    }:</p><br>`;
    let i = 0;

    const displayNextLine = () => {
      if (i < chocolatePreparation["Chocolate"].length) {
        preparing += `${i + 1}. ${chocolatePreparation["Chocolate"][i]}<br>`;
        $("#preparing").html(preparing);
        i++;

        if (i < chocolatePreparation["Chocolate"].length) {
          setTimeout(displayNextLine, 2000);
        }

        if (i === chocolatePreparation["Chocolate"].length) {
          preparing += `${i + 1}. Ready. <br>`;
          $("#preparing").html(preparing);
        }
      }
    };

    displayNextLine();

    return preparing;
  };
});
