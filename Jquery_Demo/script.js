function getData() {
  //   $.ajax({
  //     url: "http://localhost:3000/employees",
  //     type: "GET",
  //     success: function (data) {
  //       console.log(data);
  //       //$("#load-data").append(data.id + " " + data.name + " " + data.sex + " " + data.age)
  //       $.each(data, function (key, value) {
  //         // console.log(value.id + " " + value.name + " " + value.age);
  //         $("#load-data").append(
  //           value.id +
  //             " || " +
  //             value.name +
  //             " || " +
  //             value.sex +
  //             " || " +
  //             value.age +
  //             "<br><hr>"
  //         );
  //       });
  //     },
  //   });
  $.getJSON("http://localhost:3000/employees", function (data) {
    console.log(data);
    //$("#load-data").append(data.id + " " + data.name + " " + data.sex + " " + data.age)
    $.each(data, function (key, value) {
      // console.log(value.id + " " + value.name + " " + value.age);
      $("#load-data").append(
        value.id +
          " || " +
          value.name +
          " || " +
          value.sex +
          " || " +
          value.age +
          "<br><hr>"
      );
    });
  });
}

function sendData() {
  $.ajax({
    url: "http://localhost:3000/employees",
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify({
      name: "John",
      sex: "male",
      age: "31",
    }),
    dataType: "json",
  });
  console.log("data sent");
}

function updateData() {
  $.ajax({
    url: "http://localhost:3000/employees/3",
    type: "PUT",
    contentType: "application/json",
    data: JSON.stringify({
      name: "Neelakshi",
      sex: "female",
      age: "21",
    }),
    dataType: "json",
  });
  console.log("data update");
}
function deleteData() {
  $.ajax({
    url: "http://localhost:3000/employees/5",
    type: "Delete",
    contentType: "application/json",

    dataType: "json",
  });
  console.log("data deleted");
}
