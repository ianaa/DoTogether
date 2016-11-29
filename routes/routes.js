module.exports = function (app, express){
  app.get('/', (req, res) => {
    res.send("GET request to the homepage");
  });
  app.post('/', (req, res) => {
    res.send("POST request to the homepage");
  });
}