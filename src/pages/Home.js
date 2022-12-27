import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// cara navigate: link, window.open, useNavigate(tpi gw blm bisa yg ini)

class Home extends React.Component{

    handleClick(){
        console.log("Hello World");
        // window.open('/about');
        // this.props.useHistory.push('/about');
    }

    render() {
        return (
            <ul>
                {/* <li><button type="button" onClick={this.handleClick}>go to about</button></li> */}
                <li><Link to="/about"><button type="button" onClick={this.handleClick}>go to about</button></Link></li>
            </ul>
        );
    }
}

export default Home;

