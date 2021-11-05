import React from "react";
import UpdateList from "./UpdateList";
import DeleteList from "./DeleteList";

function Lists(props) {
  var rows = [];
  props.alldata.forEach((element) => {
    rows.push(
      <div className="col-md-6" key={element.id}>
        <div className="card h-100 text-white bg-danger">
          <div className="card-header">
            <small className="card-text row">
              <div className="col">Date :{element.date}</div>
              <div className="col" style={{ float: "right" }}>
                Time : {element.time}
              </div>
            </small>
          </div>
          <div className="card-body">
            <h5 className="card-title"> {element.title}</h5>
            <p className="card-text">{element.summary}</p>

            <div
              className="modal fade"
              id={"modalopen" + element.id}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" style={{ color: "black" }}>
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      {element.title}
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>

                  <div className="modal-body" style={{ fontSize: "18px" }}>
                    {element.summary}
                    <br />
                    <br />
                    Last Updated Date - <b>{element.date}</b>
                    <br />
                    Last Updated Time - <b>{element.time}</b>
                    <br />
                    Status - <b>{element.status}</b>
                  </div>

                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-info"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <small className="card-text">
              <div className="row">
                <div>
                  <UpdateList
                    elementId={element.id}
                    singledata={props.singledata}
                    getList={props.getList}
                    updateList={props.updateList}
                    handleChange={props.handleChange}
                  ></UpdateList>
                  &nbsp;
                  <DeleteList
                    elementId={element.id}
                    singledata={props.singledata}
                    getList={props.getList}
                    deleteList={props.deleteList}
                  ></DeleteList>
                  <button
                    type="button"
                    style={{ float: "right" }}
                    className="btn btn-dark btn-sm"
                    data-bs-toggle="modal"
                    data-bs-placement="bottom"
                    title="View More"
                    data-bs-target={"#modalopen" + element.id}
                  >
                    <i class="bi bi-eye-fill"></i>
                  </button>
                </div>
              </div>
            </small>
          </div>
        </div>
      </div>
    );
  });
  return <div className="row row-cols-1 row-cols-md-3 g-4">{rows}</div>;
}

export default Lists;
