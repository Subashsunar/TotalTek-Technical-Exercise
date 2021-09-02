import React from "react";
import "./form.scss";
import Translate from "./translate";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      getdata: [],
    };
  }
  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };
  componentDidMount() {}
  submit = (e) => {
    e.preventDefault();
    const { term } = this.state;

    fetch("https://weatherapi-com.p.rapidapi.com/current.json?q=" + term, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
        "x-rapidapi-key": "c8cb6b8cccmshc02b57f0b5a8c98p1516cdjsnb64d72a5ad33",
      },
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data)=>{
          this.setState({getdata:[data]})
      })
      .catch((err) => {
        console.error(err);
      });
    this.setState({ term: "" });
  };
  render() {
    console.log(this.state.getdata);
    const translate = this.state.getdata
      .map((item) => (
        <Translate location={item.location} current={item.current} />
      ));
    return (
      <div class="full">
        <div class="searchForm">
          <form>
            <input
              type="text"
              name="term"
              value={this.state.term}
              placeholder="Enter a zip-code here"
              onChange={this.handleChange}
            ></input>
            <button onClick={this.submit} class="bounce-in-right">
              Search
            </button>
          </form>
        </div>
        <div class="all">{translate}</div>
      </div>
    );
  }
}
export default Form;
