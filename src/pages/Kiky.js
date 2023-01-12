import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// cara navigate: link, window.open, useNavigate(tpi gw blm bisa yg ini)
import '../App.css';
import ianKiky from '../assets/kikyian.JPG'

class Kiky extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            lope: "lope"
            // count: 0
        }
        // ini wajib ada klo mau pake function tambahLope
        this.tambahLope = this.tambahLope.bind(this) 
    }

    handleClick(){
        console.log("Hello World");
        // window.open('/about');
        // this.props.useHistory.push('/about');
    }

    tambahLope(){
        this.setState({
            lope: this.state.lope + " lope"
        });
    }

    render() {
        return (
            // untuk belajar navigation
            // <ul>
            //     {/* <li><button type="button" onClick={this.handleClick}>go to about</button></li> */}
            //     <li><Link to="/about"><button className="navButton" type="button" onClick={this.handleClick}>go to home</button></Link></li>
            // </ul>

            // untuk belajar image dan css
            <div className="kikyScreen">
                <img src={ianKiky} alt="kiky-sd" width="300" height="400"/>
                <h2>Hai Ayaaang</h2>
                <button onClick={this.tambahLope}>tambah lope</button>
                {/* <iframe width="110" height="200" src="https://www.myinstants.com/instant/fart-meme-sound-46799/embed/" frameborder="0" scrolling="no"></iframe> */}
                {/* <button onClick={() => this.setState({lope: this.state.lope + " lope"})}>tambah lope</button> */}
                <p>{this.state.lope}</p>
            </div>
        );
    }
}

export default Kiky;

