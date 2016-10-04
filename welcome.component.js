var ChildComponent = React.createClass({
    render: function() {
        return (
            <div>
                <button className='btn btn-success' onClick={this.props.parentGreeting}>Welcome</button>
            </div>
        );
    }
});

var ParentComponent = React.createClass({
    greeting: function() {
        alert('Welcome to the React Sandbox. Enjoy your visit');
    },
    
    render: function() {
        return (
            <div>
                <ChildComponent parentGreeting={this.greeting} />
                {   /* Notice how we're passing a function as a prop to ChildComponent. 
                    see also http://buildwithreact.com/tutorial/events */ }
            </div>
        );
    }
});

ReactDOM.render(
    <ParentComponent />, 
    document.getElementById('welcome')
);
