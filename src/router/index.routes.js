import Home from "../views/home";

let content = document.getElementById("root");

const router = (route) => {
  content.innerHTML = '';
  switch (route) {
    case "#/": {
      return content.appendChild(Home());
    }

    case "#/posts":
      return console.log("posts...!!");

    case "#/products":
      return console.log("products...!!");

    default:
      return console.log("404 ...!!");
  }
};

export { router };
