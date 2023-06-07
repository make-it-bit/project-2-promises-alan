const posts = [
  { title: "Post one", body: "This is post one" },
  { title: "Post two", body: "This is post two" },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject("Error: smth went wrong");
      }
    }, 2000);
  });
}

createPost({ title: "Post there", body: "This is post three" })
  .then(getPosts)
  .catch((error) => console.log(error));

// Promise.all
const promise1 = Promise.resolve("This is promise1");
const promise2 = 10;
const promise3 = new Promise((resolve, reject) =>
  setTimeout(resolve, 200, "This is promise3")
);
const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);

Promise.all([promise1, promise2, promise3, promise4]).then((values) =>
  console.log(values)
);

// Async / await
async function init() {
  await createPost({ title: "Post there", body: "This is post three" });

  getPosts();
}
init();

// Async / await / fetch
async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
}
fetchUsers();
