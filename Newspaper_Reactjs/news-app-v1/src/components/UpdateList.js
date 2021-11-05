import React from "react";

function UpdateList(props) {
  const modalIdentifier = "update" + props.elementId;
  const dataTarget = "#" + modalIdentifier;
  return (
    <React.Fragment>
      <button
        type="button"
        className="btn btn-warning"
        data-bs-toggle="modal"
        data-bs-target={dataTarget}
        onClick={(e) => props.getList(e, props.elementId)}
      >
        <i class="bi bi-pencil-square"></i> Update
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
                Update News
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
              />
              <br />
              <input
                type="text"
                class="form-control"
                placeholder="Author"
                name="author"
                value={props.singledata.author}
                onChange={props.handleChange}
              />
              <br />
              <textarea
                type="text"
                class="form-control"
                placeholder="Enter Description"
                name="description"
                value={props.singledata.description}
                onChange={props.handleChange}
              />
              <br />
              <input
                type="text"
                class="form-control"
                placeholder="Copy Image URL"
                name="urlToImage"
                value={props.singledata.urlToImage}
                onChange={props.handleChange}
              />
              <br />
              <input
                type="text"
                class="form-control"
                placeholder="published At"
                name="publishedAt"
                value={props.singledata.publishedAt}
                onChange={props.handleChange}
              />
              <br />
              <textarea
                type="text"
                class="form-control"
                placeholder="Content to Display in Brief"
                name="content"
                value={props.singledata.content}
                onChange={props.handleChange}
              />
              <br />
              <input
                type="text"
                class="form-control"
                placeholder="Copy Website URL"
                name="url"
                value={props.singledata.url}
                onChange={props.handleChange}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                class="btn btn-dark"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={(event) => props.updateList(event, props.elementId)}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default UpdateList;
