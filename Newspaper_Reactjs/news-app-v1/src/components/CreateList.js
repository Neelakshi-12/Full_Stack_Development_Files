import React from "react";

function CreateList(props) {
  return (
    <React.Fragment>
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        class="btn btn-success btn-lg"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <i class="bi bi-plus-circle"></i> Add News
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
                Add News || Update your Self
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
