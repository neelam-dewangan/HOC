import React from 'react'

const HOC = (Blog, blog) => {

    return class extends React.Component{       
       render(){
            return(
                <div className="box-format">
                <Blog blog={this.props.blog}{...this.props}/>
                </div>
            )
        }
      
    } 

}

export default HOC;