import React from "react";
import ReactDOM from "react-dom";
import { render } from "react-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import Data from "./Data";
import Cell from "./Cell";
import "./Body.css";

//function Body() {
class Body extends React.Component {
  container = React.createRef();
  state = {
    //items: Array.from({ length: 20 }),
    items: Data,
    hasMore: true,
    open: false,
    id: 0,
  };

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
    //this.addTask()
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside = (event) => {
    /*
    if (this.container.current && !this.container.current.contains(event.target)) {
      this.setState({
        open: false,
      });
    }
    */
  };

  /*
    fetchMoreData = () => {
        console.log(this.state);
        console.log(Data);
        setTimeout(() => {
          this.setState({
            items: this.state.items.concat(Array.from({ length: 20 }))
          });
        }, 500);
      };
    */
  fetchMoreData = () => {
    setTimeout(() => {
      const Data2 = {
        task_list: this.state.items.task_list.concat(
          Array(["20201127", "Fri", "2", "2", "2", "2", "2"])
        ),
      };
      this.setState({
        //items: this.state.items.task_list.concat(["20201127", "2", "2", "2", "2", "2"])
        items: Data2,
      });
    }, 5);
  };

  addTask = (e) => {
    const id = e.target.id + "ul";
    //console.log(id)
    //console.log(this.container.current)
    //this.container.current.className = 'hide'

    var node = ReactDOM.findDOMNode(this.container.current);
    node.classList.toggle("hide");
    console.log(this.container);

    //document.getElementById(id).style.color = 'blue'
    //ReactDOM.render(<p>Hallo</p>, document.getElementById(id));
    this.setState((state) => {
      return {
        open: !state.open,
      };
    });
  };

  render() {
    return (
      <div className="body__container">
        <div className="salat__table">
          <h3>Salat Table</h3>
          <hr />
          <InfiniteScroll
            dataLength={this.state.items.task_list.length}
            next={this.fetchMoreData}
            hasMore={this.state.hasMore}
            loader={<h4>Loading...</h4>}
            height={250}
            initialScrollY={0}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            {Object.values(this.state.items.task_list).map((row) => (
              <div className="row">
                {Object.values(row).map((val, k) => (
                  <Cell props={{ val, k , row}} />
                ))
                }
                {
                  // This line tested that row value change inside Cell component is being persisted in the ROW array
                  //console.log(row)
                }
              </div>
            ))}
          </InfiniteScroll>
          {
            // This line tested that row value change inside Cell component is being persisted in the main 2D array!
            //   console.log(this.state.items.task_list)
          }
          <button>Save</button>
        </div>
        <div className="body__container__right">
          <div className="github__grid">Monthly Grid</div>
          <div className="motivational__quotes">Quotes from Quran</div>
        </div>
      </div>
    );
  }
}

export default Body;
