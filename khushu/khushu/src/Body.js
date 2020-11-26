import React from "react";
import { render } from "react-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import Data from "./Data";
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
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside = event => {
    if (this.container.current && !this.container.current.contains(event.target)) {
      this.setState({
        open: false,
      });
    }
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
    //alert("Cell clicked!");
    console.log(e.target.id)
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
                {Object.values(row).map((val, key) =>
                  key % 7 < 2 ? (
                    <div className="cell__large">{val}</div>
                  ) : (
                    <div className="cell__small">
                      <button onClick={this.addTask} ref={this.container} id={this.state.id}>{val}</button>
                      {
                          
                        this.state.id += 1
                          
                      }
                      
                      {this.state.open && (
                        <ul>
                          <li>Option 1</li>
                          <li>Option 2</li>
                          <li>Option 3</li>
                          <li>Option 4</li>
                        </ul>
                      )}
                    </div>
                  )
                )}
              </div>
            ))}
          </InfiniteScroll>
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
