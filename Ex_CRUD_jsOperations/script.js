const postsList = document.querySelector(".posts-list");
const addPostForm = document.querySelector(".add-post-form");
const titleValue = document.querySelector("#title");
const summaryValue = document.querySelector("#summary");
const dateValue = document.querySelector("#date");
const timeValue = document.querySelector("#time");
const btnSubmit = document.querySelector("#btnUpdate");

//second form
const postsListTwo = document.querySelector(".posts-list-two");
const addPostTwoForm = document.querySelector(".add-posttwo-form");
const statusValue = document.querySelector("#status");
const inputSummaryValue = document.querySelector("#inputsummary");
const inputDateValue = document.querySelector("#inputdate");
const inputTimeValue = document.querySelector("#inputtime");
const btnsetScheduler = document.querySelector("#setscheduler");

let output = "";

const renderPosts = (posts) => {
  posts.forEach((post) => {
    console.log("post", post);
    output += ` <div class="card col-md-6 mt-2" style="background-color: #457b9d;color:white;width: 18rem;margin-right:8px;margin-left:8px">
                  <div class="card-body" data-id = ${post.id}>
                      <h5 class="card-title">${post.title} </h5>
                      <h6 class="card-subtitle mb-2"  style="color: yellow">Edited Date :${post.date}</h6>
                      <p class="card-text">${post.summary}</p>
                      <p class="time">Last Updated : ${post.time}</p>
                      
                      <a href="#" class="card-link btn btn-warning btn-sm" id="edit">EDIT</a>
                      <a href="#" class="card-link btn btn-danger btn-sm" id="delete">DELETE</a>
                  </div>
              </div> `;
  });
  postsList.innerHTML = output;
};

const url = "http://localhost:3000/tasks";

fetch(url)
  .then((res) => res.json())
  .then((data) => renderPosts(data));

postsList.addEventListener("click", (e) => {
  e.preventDefault();
  let delButtonIsPressed = e.target.id == "delete";
  let editButtonIsPressed = e.target.id == "edit";

  let id = e.target.parentElement.dataset.id;
  if (delButtonIsPressed) {
    fetch(`${url}/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => location.reload());
  }

  if (editButtonIsPressed) {
    console.log("edit post");
    const parent = e.target.parentElement;
    let titleContent = parent.querySelector(".card-title").textContent;
    let bodyContent = parent.querySelector(".card-text").textContent;
    let bodyDate = parent.querySelector(".card-subtitle").textContent;
    let bodyTime = parent.querySelector(".time").textContent;

    console.log(titleContent, bodyContent, bodyDate, bodyTime);

    titleValue.value = titleContent;
    summaryValue.value = bodyContent;
    dateValue.value = bodyDate;
    timeValue.value = bodyTime;
  }
  //update
  btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("update");
    fetch(`${url}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        title: titleValue.value,
        summary: summaryValue.value,
        date: dateValue.value,
        time: timeValue.value,
      }),
    })
      .then((res) => res.json())
      .then(() => location.reload());
  });
});

//create
addPostForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(titleValue.value);
  console.log(summaryValue.value);
  console.log(dateValue.value);
  console.log(timeValue.value);
  fetch(url, {
    method: "POST",

    body: JSON.stringify({
      title: titleValue.value,
      summary: summaryValue.value,
      date: dateValue.value,
      time: timeValue.value,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      const dataArr = [];
      dataArr.push(data);
      renderPosts(dataArr);
    });

  //reset input field
  titleValue.value = "";
  summaryValue.value = "";
  dateValue.value = "";
  timeValue.value = "";
});

//******************************************************************************************************** */

let outputTwo = "";

const renderPostsTwo = (poststwo) => {
  poststwo.forEach((posts) => {
    console.log("posts", posts);
    output += `  <div class="card" style="background-color: rgb(235, 172, 206);color:rgb(12, 11, 11);margin-top: 3%;">
    <div class="card-header">Date : ${posts.inputdate}<a href="#"
            class="btn btn-light btn-sm float-lg-end">Open Task</a></div>
    <div class="card-body">
        <h6 class="card-title"> ${posts.status}</h6>
        <p class="card-text">${posts.inputsummary}</p>

    </div>
    <div class="card-footer bg-transparent">${posts.inputtime}</div>
</div>`;
  });
  postsListTwo.innerHTML = outputTwo;
};

const urlTwo = "http://localhost:3000/scheduler";

fetch(urlTwo)
  .then((res) => res.json())
  .then((data) => renderPostsTwo(data));

//create
addPostTwoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  fetch(urlTwo, {
    method: "POST",

    body: JSON.stringify({
      status: statusValue,
      inputsummary: inputSummaryValue,
      inputdate: inputDateValue,
      inputtime: inputTimeValue,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      const dataTwoArr = [];
      dataTwoArr.push(data);
      renderPostsTwo(dataTwoArr);
    });
});
