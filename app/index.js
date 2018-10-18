var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');
var Home = require('./Components/Home')
var Header = require('./Components/Header')

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Home />
            </div>           
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)