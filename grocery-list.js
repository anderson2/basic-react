var TextBoxList = React.createClass({
  getInitialState: function() {
    return {count: 1};
  },
  add: function() {
    this.setState({count: this.state.count + 1});
  },
  render: function() {
    var items = [];
    for (var i = 0; i < this.state.count; i++) {
      items.push(
        <li key={i}>
          <input type="text" placeholder="Grocery List Item" /> 
        </li>
      );
    }
    return (
      <ul>
        {items}
        <button className='btn btn-success btn-sm' onClick={this.add}>
            <span className="glyphicon glyphicon-check" aria-hidden="true"></span>
        </button>    

      </ul>
    );
  }
});
 
ReactDOM.render(
  <div>
    <p>Grocery List</p>
    <TextBoxList />
  </div>,
  document.getElementById('grocery-list') 
);

/* 
Source:
https://facebook.github.io/react/blog/2013/06/05/why-react.html
http://jsfiddle.net/2h6th4ju/ 
*/
