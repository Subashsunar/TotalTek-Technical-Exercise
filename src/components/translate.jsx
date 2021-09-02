import React from "react";
import "./translate.scss";

class Translate extends React.Component {
    render() {
        return (
                <div class="single bounce-in-top">
                    <div class="word">
                        {this.props.location.name}
                    </div>
                    <div class="def">
                        {this.props.current.condition.text}
                        <br />
                        <img src={this.props.current.condition.icon} />
                    </div>
                    <div class="def">
                        {"Temperature in C : "+this.props.current.temp_c}
                    </div>
                    <div class="def">
                        {"Temperature in F : "+this.props.current.temp_f}
                    </div>
                    <div class="def">
                        {"Humidity : "+this.props.current.humidity}
                    </div>
                    <div class="def">
                        {"Cloud : "+this.props.current.cloud}
                    </div>
                    <div class="def">
                        {"Wind Direction : "+this.props.current.wind_dir}
                    </div>
                </div>
        );
    }
}
export default Translate;