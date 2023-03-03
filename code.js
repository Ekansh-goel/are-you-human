function changeText() {
    var checkbox = document.getElementById("checkbox");
    var text = document.getElementById("text");
    if (checkbox.checked) {
      text.innerHTML = "Oh okay , i was just finding my robo girl 🥺 👉👈    !!!";
    } else {
      text.innerHTML = "Are you human?";
    }
  }