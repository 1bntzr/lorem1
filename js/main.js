function startBirthday() {

  document.querySelector("button").style.display = "none";

  const text = "С Днём Рождения!🎉 \n Пусть каждый день приносит радость, удачу и исполнение всех желаний! 🎂";
  let i = 0;

  function type() {
    if (i < text.length) {
      document.getElementById("message").innerHTML += text.charAt(i);
      i++;
      setTimeout(type, 40);
    }
  }

  type();

  startConfetti();
}

function startConfetti() {
  setInterval(() => {
    const conf = document.createElement("div");
    conf.classList.add("confetti");

    conf.style.left = Math.random() * 100 + "vw";
    conf.style.background = `hsl(${Math.random() * 360},100%,50%)`;
    conf.style.animationDuration = (Math.random() * 3 + 2) + "s";

    document.body.appendChild(conf);

    setTimeout(() => { conf.remove() }, 5000);

  }, 150);
}
