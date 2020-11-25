import React from 'react'
import { render } from "react-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import Data from './Data'
import './Body.css'

const style = {
    height: 30,
    border: "1px solid green",
    margin: 6,
    padding: 8,
    width: 400
  };

//function Body() {
class Body extends React.Component{
    state = {
        //items: Array.from({ length: 20 }),
        items: Data,
        hasMore: true
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
        //console.log(this.state);
        //console.log(this.state.items);
        //this.state.items.task_list.concat(["20201127", "2", "2", "0", "2", "2"])
        

        setTimeout(() => {
            const Data2 = {
                task_list : this.state.items.task_list.concat(["20201127", "2", "2", "2", "2", "2"])
            } 
            this.setState({
                //items: this.state.items.task_list.concat(["20201127", "2", "2", "2", "2", "2"])
                items: Data2
            });
        }, 5);
    };
    print = () => {
        console.log(this.state.items.task_list);
        
        console.log(this.state.items);
        //console.log(this.state.items.task_list.length);
    }
    render(){
    return (
        
        <div className="body">
            {this.print()}
            <div className="salat__table">
                <h3>Salat Table</h3>
                <hr />
                <InfiniteScroll
                    dataLength = {this.state.items.task_list.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.hasMore}
                    loader={<h4>Loading...</h4>}
                    height={250}
                    endMessage={
                            <p style={{ textAlign: "center" }}>
                            <b>Yay! You have seen it all</b>
                            </p>
                        }
                    >
                    {
                        this.state.items.task_list.map((i, row) => (
                            <div style={style} key={row}>
                                Data row: {row}
                            </div>
                    ))}
                </InfiniteScroll>
            </div>
        </div>
    )
    }
}

export default Body