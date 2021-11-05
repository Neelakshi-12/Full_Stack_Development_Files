import React from "react";
import CreateList from "./components/CreateList";
import Lists from "./components/Lists";
import ReactPaginate from "react-paginate";
import "./App.css";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      alldata: [],
      singledata: {
        title: "",
        author: "",
        description: "",
        urlToImage: "",
        publishedAt: "",
        content: "",
        url: "",
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
      fetch(`http://localhost:3000/articles?_page=1&_limit=6`)
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
    var author = this.state.singledata.author;
    var description = this.state.singledata.description;
    var urlToImage = this.state.singledata.urlToImage;
    var publishedAt = this.state.singledata.publishedAt;
    var content = this.state.singledata.content;
    var url = this.state.singledata.url;

    if (event.target.name === "title") title = event.target.value;
    else if (event.target.name === "author") author = event.target.value;
    else if (event.target.name === "description")
      description = event.target.value;
    else if (event.target.name === "urlToImage")
      urlToImage = event.target.value;
    else if (event.target.name === "publishedAt")
      publishedAt = event.target.value;
    else if (event.target.name === "content") content = event.target.value;
    else url = event.target.value;

    this.setState({
      singledata: {
        title: title,
        author: author,
        description: description,
        urlToImage: urlToImage,
        publishedAt: publishedAt,
        content: content,
        url: url,
      },
    });
  }

  createList() {
    console.log("yooo");
    fetch("http://localhost:3000/articles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.singledata),
    }).then(
      this.setState({
        singledata: {
          title: "",
          author: "",
          description: "",
          urlToImage: "",
          publishedAt: "",
          content: "",
          url: "",
        },
      })
    );
  }

  getList(event, id) {
    this.setState(
      {
        singledata: {
          title: "Loading...",
          author: "Loading...",
          description: "Loading...",
          urlToImage: "Loading...",
          publishedAt: "Loading...",
          content: "Loading...",
          url: "Loading...",
        },
      },
      () => {
        fetch("http://localhost:3000/articles/" + id)
          .then((res) => res.json())
          .then((result) => {
            this.setState({
              singledata: {
                title: result.title,
                author: result.author ? result.author : "",
                description: result.description,
                urlToImage: result.urlToImage,
                publishedAt: result.publishedAt,
                content: result.content,
                url: result.url,
              },
            });
          });
      }
    );
  }

  updateList(event, id) {
    fetch("http://localhost:3000/articles/" + id, {
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
            author: "",
            description: "",
            urlToImage: "",
            publishedAt: "",
            content: "",
            url: "",
          },
        });
      });
    alert("Reload Page to see the Results.");
  }

  deleteList(event, id) {
    fetch("http://localhost:3000/articles/" + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          singledata: {
            title: "",
            author: "",
            description: "",
            urlToImage: "",
            publishedAt: "",
            content: "",
            url: "",
          },
        });
      });
    alert("Reload Page to see the Results.");
  }
  fetchNews = async (currentPage) => {
    const res = await fetch(
      `http://localhost:3000/articles?_page=${currentPage}&_limit=6`
    );
    const data = await res.json();
    console.log("dataaaa", data);
    return data;
  };

  handlePageClick = async (data) => {
    console.log("selected", data.selected);

    let currentPage = data.selected + 1;
    const newsFromServer = await this.fetchNews(currentPage);

    this.setState({
      alldata: newsFromServer,
    });
    console.log("all data", this.state.alldata);
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
          <h1 className="display-4">Get Updated..!!</h1>
          <p className="lead">
            Comprehensive, up-to-date news coverage, aggregated from sources all
            over the world by Google News.
          </p>
          <hr className="my-4" />
          <p>
            Today News - Get the latest news from politics, entertainment,
            sports and other feature stories.
          </p>

          <CreateList
            singledata={this.state.singledata}
            createList={this.createList}
            handleChange={this.handleChange}
          />
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
          {listTable}
        </div>
        <br />
        <br></br>
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={4}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={this.handlePageClick}
          containerClassName={"pagination justify-content-center"}
          activeClassName={"active"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakLinkClassName={"page-link"}
          breakClassName={"page-item"}
        />
      </div>
    );
  }
}

export default App;
