var selectedRow = null;

function onFormSubmit() {
  var formData = readFormData();
  if (selectedRow == null) insertNewRecord(formData);
  else updateRecord(formData);
  resetForm();
}

//Read Employees
function displayEmployees() {
  console.log("displayEmployees");
  fetch("http://localhost:3000/employeesList").then((res) => {
    res.json().then((data) => {
      console.log("data", data);
      if (data.length > 0) {
        var temp = " ";

        data.forEach((u) => {
          temp += "<tr>";
          temp += "<td>" + u.fullName + "</td>";
          temp += "<td>" + u.email + "</td>";
          temp += "<td>" + u.empCode + "</td>";

          temp += "<td>" + u.salary + "</td>";
          temp += "<td>" + u.city + "</td>";
          temp += "<td>" + u.status + "</td>";
          temp +=
            "<td>" +
            "<button onclick='onEdit(this)' data-bs-toggle='modal' data-bs-target='#exampleModal' type='button' class='btn btn-warning'> <i class='bi bi-pencil-square'></i> Update Employee</button> " +
            " " +
            " <button onclick='onDelete(this)'  type='button' class='btn btn-danger'> <i class='bi bi-trash-fill'></i>  Delete Employee</button>" +
            "</td> </tr>";
        });

        document.getElementById("data").innerHTML = temp;
      }
    });
  });
}

function readFormData() {
  fetch("http://localhost:3000/employeesList").then((res) => {
    res.json().then((data) => {
      console.log("data", data);
    });
  });
  var formData = {};
  formData["fullName"] = document.getElementById("fullName").value;
  formData["email"] = document.getElementById("email").value;
  formData["empCode"] = document.getElementById("empCode").value;
  formData["salary"] = document.getElementById("salary").value;
  formData["city"] = document.getElementById("city").value;
  formData["status"] = document.getElementById("status").value;
  return formData;
}

function insertNewRecord(data) {
  fetch("http://localhost:3000/employeesList", {
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

function resetForm() {
  document.getElementById("fullName").value = "";
  document.getElementById("email").value = "";
  document.getElementById("empCode").value = "";
  document.getElementById("salary").value = "";
  document.getElementById("city").value = "";
  document.getElementById("status").value = "";
  selectedRow = null;
}

function onEdit(td) {
  console.log("td", td);
  selectedRow = td.parentElement.parentElement;
  console.log("selectedRow", selectedRow);
  fetch("http://localhost:3000/employeesList", {
    method: "PUT",
    body: JSON.stringify(selectedRow),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
  document.getElementById("exampleModal");
  document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
  document.getElementById("email").value = selectedRow.cells[1].innerHTML;
  document.getElementById("empCode").value = selectedRow.cells[2].innerHTML;
  document.getElementById("salary").value = selectedRow.cells[3].innerHTML;
  document.getElementById("city").value = selectedRow.cells[4].innerHTML;
  document.getElementById("status").value = selectedRow.cells[5].innerHTML;
}
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.fullName;
  selectedRow.cells[1].innerHTML = formData.email;
  selectedRow.cells[2].innerHTML = formData.empCode;
  selectedRow.cells[3].innerHTML = formData.salary;
  selectedRow.cells[4].innerHTML = formData.city;
  selectedRow.cells[5].innerHTML = formData.status;
}

function onDelete(td) {
  if (confirm("Are you sure to delete this record ?")) {
    row = td.parentElement.parentElement;
    document.getElementById("employeeList").deleteRow(row.rowIndex);
    resetForm();
    fetch("http://localhost:3000/employeesList/" + td, {
      method: "DELETE",
    });
  }
}
