var selectedRow = null;

function onFormSubmit() {
  var formData = readFormData();
  if (selectedRow == null) insertNewRecord(formData);
  else updateRecord(formData);
  resetForm();
}

//Read Employees
function displayTasks() {
  console.log("displayTasks");
  fetch("http://localhost:3000/tasks").then((res) => {
    res.json().then((data) => {
      console.log("data", data);
      if (data.length > 0) {
        var temp = " ";

        data.forEach((u) => {
          temp += "<div class='col-sm-6'>";
          temp +=
            "<div class='card' style='background-color: rgb(192, 87, 87);color:antiquewhite;margin-bottom: 8%;'>";
          temp += " <div class='card-header'>Date :" + u.date + "</td>";
          temp += `<button onclick='onEdit(this,${u.id})'  data-bs-target='#exampleModal' type='button' class='float-lg-end btn btn-light btn-sm'> Update Tasks</button> `;
          temp += " </div>";
          temp += " <div class='card-body'>";
          temp += "  <h5 class='card-title'> " + u.title + "</h5>";
          temp += " <p class='card-text'>" + u.summary + "</p>";
          temp += " </div>";
          temp +=
            "<div class='card-footer bg-transparent'>" + u.time + "</div>";
          temp += " </div>";
          temp += " </div>";
        });

        document.getElementById("data").innerHTML = temp;
      }
    });
  });
}

function readFormData() {
  fetch("http://localhost:3000/tasks").then((res) => {
    res.json().then((data) => {
      console.log("data", data);
    });
  });
  var formData = {};
  formData["title"] = document.getElementById("title").value;
  formData["summary"] = document.getElementById("summary").value;
  formData["date"] = document.getElementById("date").value;
  formData["time"] = document.getElementById("time").value;
  return formData;
}

function insertNewRecord(data) {
  fetch("http://localhost:3000/tasks", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      console.log("res" + res);
      alert("Data Inserted  : Refresh the page to see results.");
    })
    .catch((err) => console.log("err" + err));
}

// function onEdit() {
//   fetch("http://localhost:3000/tasks/" + id, {
//     method: "PUT",
//     body: JSON.stringify(id),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   })
//     .then((response) => response.json())
//     .then((json) => console.log(json));
// }
function onEdit(td, id) {
  console.log("td", td);

  selectedRow = td;
  console.log("selectedRow", selectedRow);
  fetch("http://localhost:3000/tasks/" + id).then((res) => {
    res.json().then((data) => {
      console.log("data", data);
    });
  });
}
