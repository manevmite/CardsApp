import React from "react";
import axios from "axios";

class Form extends React.Component {

    // userName = React.createRef();
    state = {
        userName: ''
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        // console.log(this.userName.current.value);
        const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);
        this.props.onSubmit(resp.data);
        this.setState({ userName: '' });
    }

    render() {
        return (
            <form action="" onSubmit={this.handleSubmit}>
                <input type="text"
                    placeholder="GitHub username" required
                    value={this.state.userName}
                    onChange={event => this.setState({ userName: event.target.value })}
                // ref={this.userName} 
                />
                <button >Add Card</button>
            </form>
        )
    }
}
export default Form;