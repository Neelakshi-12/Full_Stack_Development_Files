import React from "react";
import CreateList from "./components/CreateList";
import Lists from "./components/Lists";

import "./App.css";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      alldata: [],
      singledata: {
        title: "",
        summary: "",
        date: "",
        time: "",
        status: "",
      },
    };
    this.getList = this.getList.bind(this);
    this.createList = this.createList.bind(this);
    this.updateList = this.updateList.bind(this);
    this.deleteList = this.deleteList.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.setState({ loading: true }, () => {
      fetch(` http://localhost:3000/tasks?`)
        .then((res) => res.json())
        .then((result) =>
          this.setState({
            loading: false,
            alldata: result,
          })
        )
        .catch(console.log);
    });
  }

  handleChange(event) {
    var title = this.state.singledata.title;
    var summary = this.state.singledata.summary;
    var date = this.state.singledata.date;
    var time = this.state.singledata.time;
    var status = this.state.singledata.status;

    if (event.target.name === "title") title = event.target.value;
    else if (event.target.name === "summary") summary = event.target.value;
    else if (event.target.name === "date") date = event.target.value;
    else if (event.target.name === "time") time = event.target.value;
    else status = event.target.value;

    this.setState({
      singledata: {
        title: title,
        summary: summary,
        date: date,
        time: time,
        status: status,
      },
    });
  }

  createList() {
    console.log("yooo");
    fetch(" http://localhost:3000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.singledata),
    }).then(
      this.setState({
        singledata: {
          title: "",
          summary: "",
          date: "",
          time: "",
          status: "",
        },
      })
    );
  }

  getList(event, id) {
    this.setState(
      {
        singledata: {
          title: "Loading...",
          summary: "Loading...",
          date: "Loading...",
          time: "Loading...",
          status: "Loading...",
        },
      },
      () => {
        fetch(" http://localhost:3000/tasks/" + id)
          .then((res) => res.json())
          .then((result) => {
            this.setState({
              singledata: {
                title: result.title,
                summary: result.summary ? result.summary : "",
                date: result.date,
                time: result.time,
                status: result.status,
              },
            });
          });
      }
    );
  }

  updateList(event, id) {
    fetch(" http://localhost:3000/tasks/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.singledata),
    })
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          singledata: {
            title: "",
            summary: "",
            date: "",
            time: "",
            status: "",
          },
        });
      });
    alert("Reload Page to see the Results.");
  }

  deleteList(event, id) {
    fetch(" http://localhost:3000/tasks/" + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          singledata: {
            title: "",
            summary: "",
            date: "",
            time: "",
            status: "",
          },
        });
      });
    alert("Reload Page to see the Results.");
  }
  fetchNews = async (currentPage) => {
    const res = await fetch(` http://localhost:3000/tasks`);
    const data = await res.json();
    console.log("dataaaa", data);
    return data;
  };

  render() {
    const listTable = this.state.loading ? (
      <span>Loading...😑...</span>
    ) : (
      <Lists
        alldata={this.state.alldata}
        singledata={this.state.singledata}
        fetchNews={this.fetchNews}
        getList={this.getList}
        updateList={this.updateList}
        deleteList={this.deleteList}
        handleChange={this.handleChange}
      />
    );
    return (
      <div>
        <div className="jumbotron">
          <div className="row">
            <div className="col">
              <h3 className="display-8">Get Updated..!</h3>
            </div>
            <div className="col">
              <h3 className="display-8" style={{ textAlign: "right" }}>
                Task Manager..!!
              </h3>
            </div>
          </div>
        </div>
        <div className="container">
          <span className="title-bar">
            {/* <button
              type="button"
              className="btn btn-secondary"
              onClick={this.getLists}
            >
              Get Lists
            </button> */}
          </span>
          <br />
          <div className="container">
            <div class="row mt-3">
              <div className="col-md-6">
                <div className="card scroll">
                  <div className="card-body">{listTable}</div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card">
                  <div className="card-body">
                    <CreateList
                      singledata={this.state.singledata}
                      createList={this.createList}
                      handleChange={this.handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br></br>
      </div>
    );
  }
}

export default App;
