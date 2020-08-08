import React from 'react';

class PageTitle extends React.Component{
  constructor(props){
    super(props);
    this.state={}
  }
  componentWillMount(){
    document.title = this.props.title + '-Eshop';
  }
  render(){
    return(
      <div className="col-md-12">
          <h1 className="page-header">
              {this.props.title}
          </h1>
          {this.props.children }
          <ol className="breadcrumb">
            <li><a href="#top">Home</a></li>
            <li><a href="#top">Library</a></li>
            <li className="active">Data</li>
          </ol>
      </div>
    );
  }
}
export default PageTitle;