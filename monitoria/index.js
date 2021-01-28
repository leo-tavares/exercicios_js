let urlRequest = "https://randomuser.me/api/";
let request = new XMLHttpRequest();
request.open("GET", urlRequest);
request.addEventListener("load", () => {
  let { results } = JSON.parse(request.response);
  let nome = results[0].name;
  console.log(nome);
});
request.send();
