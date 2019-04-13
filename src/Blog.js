
import React from 'react';
import './Blog.css'
// import HOC from './HOC';

class Blog extends React.Component {
  render() {
    return (
      <div className="style">
      <div className="blog-format"> 
         <div className="b1">
            {this.props.blog.name}            
         </div> 
         <div className="b1">
            {this.props.blog.views}            
         </div>           
      </div> 
      </div>
    );
  }
}

export default Blog;
