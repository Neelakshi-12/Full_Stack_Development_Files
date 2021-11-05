import React from "react";
import UpdateList from "./UpdateList";
import DeleteList from "./DeleteList";

function Lists(props) {
  var rows = [];
  props.alldata.forEach((element) => {
    rows.push(
      <tr key={element.id}>
        <td>{element.id}</td>
        <td>{element.title}</td>
        <td>{element.category}</td>
        <td>{element.desc}</td>
        <td>
          <img
            src={element.photo}
            class="img-thumbnail"
            alt="..."
            style={{ height: "100px", width: "50em" }}
          />
        </td>
        <td>
          <UpdateList
            elementId={element.id}
            singledata={props.singledata}
            getList={props.getList}
            updateList={props.updateList}
            handleChange={props.handleChange}
          ></UpdateList>
        </td>
        <td>
          <DeleteList
            elementId={element.id}
            singledata={props.singledata}
            getList={props.getList}
            deleteList={props.deleteList}
          ></DeleteList>
        </td>
      </tr>
    );
  });
  return (
    <table className="table table-striped table-bordered">
      <thead>
        <tr>
          <th>Book S.No.</th>
          <th>Title</th>
          <th>Category</th>
          <th>Description</th>
          <th>Cover Pic</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default Lists;
