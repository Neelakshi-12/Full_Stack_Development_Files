import React from "react";

function CreateList(props) {
  return (
    <React.Fragment>
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        class="btn btn-success"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <i class="bi bi-plus-circle"></i> Add Tasks
      </button>

      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Add Tasks || Complete Your Schedule
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <input
                class="form-control"
                type="text"
                placeholder="Enter Title"
                name="title"
                value={props.singledata.title}
                onChange={props.handleChange}
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
              />
              <br />
              <input
                type="text"
                class="form-control"
                placeholder="Date"
                name="date"
                value={props.singledata.date}
                onChange={props.handleChange}
              />
              <br />
              <input
                type="text"
                class="form-control"
                placeholder="Time"
                name="time"
                value={props.singledata.time}
                onChange={props.handleChange}
              />
              <br />

              <br />
              <input
                type="text"
                class="form-control"
                placeholder="Status"
                name="status"
                value={props.singledata.status}
                onChange={props.handleChange}
              />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
                onClick={props.createList}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CreateList;
