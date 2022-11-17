import { Component } from 'react';

// import './emploees-add-form.css';
import './emploees-add-form.scss';

class EmploeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: ''
        })
    }

    render() {
    const {name, salary} = this.state;
    const isValid = Boolean(this.state.name.length >= 3 && this.state.salary > 100 && this.state.salary !== 0);
    // const isValid1 = Boolean(this.state.salary > 100 && this.state.salary !== 0);
        return (
            <div className="app-add-form">
                <h3>Add new emploee</h3>
                <form 
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Whats he name?"
                        name="name"
                        value={name}
                        onChange={this.onValueChange}/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="Salary about?"
                        name="salary"
                        value={salary}
                        onChange={this.onValueChange}/>
    
                    <button type="submit"
                            className="btn btn-outline-light"
                            disabled={!isValid}>Add</button>
                </form>
            </div>
        )
    }
    
}

export default EmploeesAddForm;