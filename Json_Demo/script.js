var employeesList;
function getEmployeeList() {
  var xhttp = new XMLHttpRequest();
  var obj = this;
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      employeesList = JSON.parse(xhttp.response);
      obj.displayEmployees();
    }
  };
  console.log("heyy!!");
  xhttp.open("GET", "http://localhost:3000/employees");
  console.log("yoooo");
  xhttp.send();
}

//Read Employees
function displayEmployees() {
  console.log("displayEmployees");
  let employeesDispCont = employeesList.map(
    (employee) => `<li> ${employee.first_name}-${employee.email} </li>`
  );
  console.log("employeesDispCont", employeesDispCont);
  let element = document.getElementById("employeeList");
  let innerHTML = "";
  for (let index = 0; index < employeesDispCont.length; index++) {
    innerHTML = innerHTML.concat(employeesDispCont[index]);
  }
  element.innerHTML = innerHTML;
}
//Create Employees
function addEmployee() {
  console.log("In Post Request");
  let employee = {
    first_name: "Shweta",
    last_name: "Rai",
    email: "shweta@gmail.com",
  };
  fetch("http://localhost:3000/employees", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(employee),
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}
//Update Employees
function updateEmployee() {
  fetch("http://localhost:3000/employees/1", {
    method: "PUT",
    body: JSON.stringify({
      id: 1,
      first_name: "Neelakshi",
      last_name: "T",
      email: "neelakshi12@gmail.com",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}
//Delete Employees
function deleteEmployee() {
  fetch("http://localhost:3000/employees/4", {
    method: "DELETE",
  });
}
