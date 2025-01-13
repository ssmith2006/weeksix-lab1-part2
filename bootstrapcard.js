"use strict";

let blogPosts = [

 {   id: 1,
    title: "Blog Post 1",
    author: "Author A",
    date: "2023-11-15"
 },
 {
    id: 2,
    title: "Blog Post 2",
    author: "Author B",
    date: "2023-12-01"
 }
];

let blogPosts1 = [
  {
    id: 1,
    title: "Blog Post 1",
    author: "Author A",
    date: "2023-11-15"
  }
];


function render(info) {
    let section = document.getElementById('blogPosts');

    for (let i = 0; i < info.length; i++) {
    let bootstrapCard = `
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${info[i].title}</h5>
    <p class="card-text">${info[i].date}</p>
    <p class="card-text">${info[i].author}</p>
    
  </div>
</div>
`;
    section.innerHTML += bootstrapCard;
}
}



let fiveMore = [
  {
    id: 3,
    title: "Blog Post 3",
    author: "Author C",
    date: "2023-12-25"
  },
  { 
    id: 4, 
    title: "Blog Post 4", 
    author: "Author D", 
    date: "2023-12-31" 
  },
  { 
    id: 5, 
    title: "Blog Post 5", 
    author: "Author E", 
    date: "2024-1-01" 
  },
  { 
    id: 6,
    title: "Blog Post 6",
    author: "Author F",
    date: "2024-1-15"
 },
 {  
    id: 7,
    title: "Blog Post 7",
    author: "Author G",
    date: "2024-2-14"
 }
];

render(blogPosts);
render(blogPosts1);
render(fiveMore);