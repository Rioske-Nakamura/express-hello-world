const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const pokemons = [
  { name: "Pikachu", type: "Electric" },
  { name: "Caterpie", type: "Bug" },
  { name: "Pidgeotto", type: "Flying" },
  { name: "Bulbasaur", type: "Grass/Poison" },
  { name: "Charmander", type: "Fire" },
  { name: "Squirtle", type: "Water" },
  { name: "Butterfree", type: "Bug/Flying" },
  { name: "Krabby", type: "Water" },
  { name: "Primeape", type: "Fighting" },
  { name: "Muk", type: "Poison" }
];

app.get("/", (req, res) => res.type("html").send(html));

app.get("/req", (req, res) => {
  console.log("Just got a request!");
  res.send("Yo!");
});

app.get("/tico", (req, res) => {
  console.log("Just got a request!");
  res.send("teco!");
});

app.get("/meunome", (req, res) => {
  console.log("Just got a request!");
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Hello from Render!</title>
        <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
        <script>
          setTimeout(() => {
            confetti({
              particleCount: 100,
              spread: 70,
              origin: { y: 0.6 },
              disableForReducedMotion: true
            });
          }, 500);
        </script>
        <style>
          html {
            font-family: Arial, sans-serif;
            text-align: center;
            font-size: 1.5rem;
            margin: 0;
          }
          body {
            background-color: #f0f0f0;
            margin: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
          }
          section {
            background: white;
            padding: 2rem;
            border-radius: 0.5rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
        </style>
      </head>
      <body>
        <section>Meu nome é Felipe Rioske da Silva Nakamura</section>
      </body>
    </html>
  `);
});

app.get("/pokemons", (req, res) => {
  res.json(pokemons);
});

app.listen(port, () =>
  console.log(`Example app listening on http://localhost:${port}!`)
);

const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>Hello from Render!</title>
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
    <script>
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          disableForReducedMotion: true
        });
      }, 500);
    </script>
    <style>
      html {
        font-family: Arial, sans-serif;
        text-align: center;
      }
      body {
        background-color: #f0f0f0;
        margin: 0;
      }
      section {
        margin: auto;
        padding: 2rem;
      }
    </style>
  </head>
  <body>
    <section>Hello Express API</section>
  </body>
</html>
`;
