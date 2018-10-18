var React = require('react');

class Home extends React.Component {
    render () {
        return (
            <div className='home-container'>
                <h1 className='middle-text'>
                Enter a City and State
                </h1>
                <div className="input-and-button middle-input-and-button">
                        <input   
                            className='text-box'
                            type="text" 
                            placeholder="St.George, Utah"
                        />
                        <button
                            type="submit" 
                            value="Get Weather" 
                            className='button button-success middle-button'>
                                Get Weather
                        </button>
                </div>   
            </div>          
        )
    }
}

module.exports = Home;