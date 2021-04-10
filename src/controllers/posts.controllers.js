import view from "../views/posts.html";

const getPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return await response.json();
}

export default async () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = view;

  const posts = await getPosts();
  console.log(posts);
  
  return divElement;
};
