class WelcomeBox extends React.Component {
    render() {
        const currentTime = new Date();
        const cityList = ['Vancouver', 'Calgary', 'London'];
        
        return (
            <div>
                <h2>Welcome</h2>
                <p className='intro'>
                    { cityList[0] } time is: 
                    { currentTime.toTimeString() }
                </p>
                <ul>
                    { cityList.map( cityName =>
                            <li>{ cityName }</li> )
                    }
                </ul>
            </div>
        );
        
    }   // end render()
}       // end WelcomeBox class

let target = document.getElementById('welcome-app');

ReactDOM.render( <WelcomeBox />, target );
