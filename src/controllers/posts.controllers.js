import view from "../views/posts.html";

const getPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  
  
  return await response.json();
};

export default async () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = view;

  const postsElement = divElement.querySelector("#posts");
  let totalPosts = divElement.querySelector("#total");

  const posts = await getPosts();
  

  posts.forEach((post) => {
    console.log(post);
    
    postsElement.innerHTML += `
      <li class="list-group-item border-primary bg-dark text-white>
        <h5>${post.title}</h5>
        <p>${post.body}</p>
      </li>
    `;
  });

  totalPosts.innerHTML += posts.length;

  return divElement;
};
