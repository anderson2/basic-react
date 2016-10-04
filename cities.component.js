class Cities extends React.Component {
    render() {
        const currentTime = new Date();
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
                <p className='intro'>
                    { cityList[0] } time is: 
                    { currentTime.toTimeString() }
                </p>
                <ul>
                    { cityList.map( cityName =>
                            <li>{ cityName }</li> )
                    }
                </ul>
                <br/>
            </div>
        );
        
    }   // end render()
}       // end Cities class

let target = document.getElementById('cities');

ReactDOM.render( <Cities />, target );
