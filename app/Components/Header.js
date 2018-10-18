var React = require('react');

class Header extends React.Component {
    render() {
        return(
            <div className = "nav-bar">
                <h1>
                    Clever Title
                </h1>
                <div className="input-and-button top-input-and-button">
                    <input 
                        className = "text-box"
                        type="text" 
                        placeholder="St.George, Utah" 
                    />
                    <button 
                    className="button button-success top-button">Get Weather</button>
                </div>
                
            </div>
            
        )
    }
}

module.exports = Header;