$(document).ready(function () {
  let screen = document.getElementById("screen");

  let loading = setTimeout(() => {
    screen.innerHTML = "Loading...";
  }, 1000);

  const network = setTimeout(() => {
    screen.innerHTML = "Connecting to Network...";
  }, 2000);

  const flavours = setTimeout(() => {
    screen.innerHTML = "Loading flavours...";
  }, 3000);

  const connected = setTimeout(() => {
    screen.innerHTML = "Connected! 👍🏾";
  }, 4000);

  let welcomeInterval;

  const setWelcomeMessage = () => {
    screen.innerHTML = `<h2 class="welcome">Welcome, please select a hot drink!</h2>`;
  };

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
});
