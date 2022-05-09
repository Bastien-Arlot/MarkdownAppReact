import './App.css';
import React, {Component, Fragment} from "react";
import {sampleText} from './sampleText'
import {marked} from "marked";

class App extends Component {
    state = {
        text: sampleText
    }

    handleChange = (event) => {
        const text = event.target.value
        this.setState({text})
    }

    renderText = (text) => {
       return  marked(text, {sanitize: true})
    }


    render() {
        return (
            <Fragment>
                <div className="container">
                    <h1 className="text-center">Mardown Preview</h1>
                    <h3 className="text-center">Not so sure about your Markdown?</h3>
                    <p className="text-center">Just Check it!</p>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                <textarea onChange={this.handleChange} value={this.state.text} className="form-control"
                                          rows="35"/>
                            </div>
                            <div className="col-sm-6">
                                <div dangerouslySetInnerHTML={{ __html: this.renderText(this.state.text)}}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>


        );
    }

}

export default App;
