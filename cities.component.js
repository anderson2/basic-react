class Cities extends React.Component {
    render() {
        /* var currentTime = new Date(); */
        
        const cityList = [ 'Vancouver', 'Calgary', 'London'
            /*
            { name: 'Vancouver', province: 'BC'}, 
            { name: 'Calgary', province: 'Alberta'}, 
            { name: 'Edinburgh', province: 'Scotland'}
            */
        ];
        
        return (
            <div>
                <br/>
                <ul>
                    <li>{ this.props.localTime.toDateString() }</li>
                    <li>{ this.props.localTime.toTimeString() }</li>

                </ul>

                <ul>
                    {/*
                        To Do: Learn how to set properties
                        <li>{ this.props.localTime.setHours(this.props.localTime.getHours() + 1).toTimeString() }</li>
                        <li>{ cityList[1] } time is { currentTime.setHours(currentTime.getHours() + 1).toTimeString() }</li>
                    */}
                </ul>
                
                <ul>
                    { cityList.map( cityName =>
                        <li>{ cityName } updates: none scheduled</li> )
                    }
                </ul>
                <br/>
            </div>
        );
        
    }   // end render()
}       // end Cities class

let target = document.getElementById('cities');

function updateTime() {
    ReactDOM.render( <Cities localTime={new Date()} />, target );
}

setInterval(updateTime, 500);
