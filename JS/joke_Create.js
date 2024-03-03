function FetchJoke() {
  fetch("https://v2.jokeapi.dev/joke/Programming?type=twopart&amount=10")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return new Error("Error");
      }
    })
    .then((res) => {
      res.jokes.forEach((element) => {
        console.log(element.setup);
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

FetchJoke();
