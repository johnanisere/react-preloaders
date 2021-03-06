import React, {Component} from 'react';
import '../Styles/css/Dots.css';
class Dots extends Component {
    componentDidMount() {
        document.onreadystatechange = () => {
            if (document.readyState === 'complete') {
                setTimeout(() => {
                    document.getElementById('preloader').classList.add('close')
                }, this.props.time)
            }
        }
    }

    render() {
        return (
            <div style={{backgroundColor: this.props.bgColor}} ref={'preload'} id={'preloader'}>
                <div className="preloaderD">
                    <div  style={{backgroundColor: this.props.color}} className="circ1"></div>
                    <div  style={{backgroundColor: this.props.color}} className="circ2"></div>
                    <div  style={{backgroundColor: this.props.color}} className="circ3"></div>
                    <div  style={{backgroundColor: this.props.color}} className="circ4"></div>
                </div>
            </div>
        )
    }
}

Dots.defaultProps = {time: 1300, bgColor: '#f7f7f7', color: '#2D2D2D'};

export default Dots;