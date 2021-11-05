import React from "react";

function DeleteList(props) {
  const modalIdentifier = "delete" + props.elementId;
  const dataTarget = "#" + modalIdentifier;
  return (
    <React.Fragment>
      <button
        type="button"
        className="btn btn-light btn-sm"
        data-bs-placement="bottom"
        title="Delete Task"
        data-bs-toggle="modal"
        data-bs-target={dataTarget}
        onClick={(e) => props.getList(e, props.elementId)}
      >
        <i class="bi bi-trash-fill"></i>
      </button>
      <div
        className="modal fade"
        id={modalIdentifier}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <span className="modal-title" id="exampleModalLabel">
                Delete News
              </span>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <input
                class="form-control"
                type="text"
                placeholder="Enter Title"
                name="title"
                value={props.singledata.title}
                onChange={props.handleChange}
                disabled={true}
              />
              <br />
              <br />
              <textarea
                type="text"
                class="form-control"
                placeholder="Enter Summary"
                name="summary"
                value={props.singledata.summary}
                onChange={props.handleChange}
                disabled={true}
              />
              <br />

              <br />
              <input
                type="text"
                class="form-control"
                placeholder="Date"
                name="date"
                value={props.singledata.date}
                onChange={props.handleChange}
                disabled={true}
              />
              <br />
              <input
                type="text"
                class="form-control"
                placeholder="Time"
                name="time"
                value={props.singledata.time}
                onChange={props.handleChange}
                disabled={true}
              />

              <br />
              <input
                type="text"
                class="form-control"
                placeholder="Status"
                name="status"
                value={props.singledata.status}
                onChange={props.handleChange}
                disabled={true}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-dark"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={(event) => props.deleteList(event, props.elementId)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default DeleteList;
