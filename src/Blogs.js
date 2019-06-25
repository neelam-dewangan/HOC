  import React from 'react';
  import Blog from './Blog';
import HOC from './HOC';
  

class Blogs extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            blogList: [
            {
                name: "1st Blog",
                views: 465,
                id: 1
            }, 
            {
                name: "2nd Blog",
                views: 365,
                id: 2
            },
            {
                name: "3rd Blog",
                views: 432,
                id: 3
            }
        ]
        }
    } 
  render() {
    return (
      <div className="blog-List">{
        this.state.blogList.map((blog, index) => {
            return <Blog blog={blog} key = {index} />;
        })}    
        
      </div>
    );
  }
}

export default Blogs;