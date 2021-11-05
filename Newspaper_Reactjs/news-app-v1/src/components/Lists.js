import React from "react";
import UpdateList from "./UpdateList";
import DeleteList from "./DeleteList";

function Lists(props) {
  var rows = [];
  props.alldata.forEach((element) => {
    rows.push(
      <div className="col" key={element.id}>
        <div className="card h-100">
          <img
            src={element.urlToImage}
            className="card-img-top"
            alt="..."
            style={{ height: "15em" }}
          />
          <div className="card-body">
            <h5 className="card-title">{element.title}</h5>
            <p className="card-text">{element.content}</p>

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
                  className="btn btn-info"
                  data-bs-toggle="modal"
                  data-bs-target={"#modalopen" + element.id}
                >
                  <i class="bi bi-eye-fill"></i> View Brief
                </button>
              </div>
            </div>

            <div
              className="modal fade"
              id={"modalopen" + element.id}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog ">
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

                  <div className="modal-body">
                    {element.description}
                    <br />
                    <br />
                    <img
                      src={element.urlToImage}
                      alt="..."
                      style={{ height: "15em", width: "20em" }}
                    />
                    <br />
                    <br />
                    by - <h4>{element.author}</h4>
                  </div>

                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" className="btn btn-primary">
                      <a
                        href={element.url}
                        target="_blank"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Read More
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <small className="text-muted">
              Published At : {element.publishedAt}
            </small>
          </div>
        </div>
      </div>
    );
  });
  return <div className="row row-cols-1 row-cols-md-3 g-4">{rows}</div>;
}

export default Lists;
