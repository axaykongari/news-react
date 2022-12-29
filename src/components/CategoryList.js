import React, { Component } from "react";

export default class CategoryList extends Component {
  listCategory = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
  constructor(){
    super();
    this.state = {
      category: '',
    }
  }

  componentDidMount(){
    console.log(this.props.category);
    // this.setState({
    //   category: this.props.category,
    // });
  }

  selectCategory = (item = '')=>{
    console.log(item, 'item');
    if(item === this.state.category) {
      this.props.selectedCategory('');
      this.setState({
        category: ''
      })
    } else {
      this.props.selectedCategory(item);
      this.setState({
        category: item
      })
    }
  }
  render() {
    return (
      <div className="card sticky-top">
        <div class="card-header bg-dark text-white">
          News App
        </div>
        <div class="card-header">
          Category List
        </div>
        <div className="card-body">
          {this.listCategory.map((element)=>{
            return  <button className={`btn badge-pill btn-outline-secondary mx-2 my-2 ${this.state.category === element ? 'active' : ''}`} onClick={()=>{this.selectCategory(element)}}>{element}</button>
          })}
        </div>
      </div>
    );
  }
}
