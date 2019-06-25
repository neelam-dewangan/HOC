import React from 'react'

const HOC = (Blog) => {

    return class extends React.Component{       
       render(){
            return(
                <div className="box-format">
                <Blog {...this.props}/>
                </div>
            )
        }
      
    } 

}

export default HOC;