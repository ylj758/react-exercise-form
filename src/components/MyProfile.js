import React, {Component} from 'react';
import './myProfile.less';

class MyProfile extends Component {
  state = {
    name: "",
    gender: "Male",
    description: "",
    checked: "",
  };
  handleFileChange = (field, event) => {
    this.setState({
      [field]: event.target.value,
    })
  };
  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(this.state));
    alert(JSON.stringify(this.state));
  }

  render() {
    return (
      <div className="container main" >
        <h1 className="h1">MyProfile</h1>
        <form className="my-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              value={this.state.name}
              onChange={(e) => this.handleFileChange("name", e)}
              className="form-control input-name"
              id="name"
              placeholder={"Your name"}
            >
            </input>
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <select onChange={(e) => this.handleFileChange("gender", e)}
                    id="gender"
                    className="form-control select-gender">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea placeholder="Description about yourself"
                      onChange={(e) => this.handleFileChange("description", e)}
                      id="description"
                      className="form-control"
                      rows="6"
            />
          </div>
          <div className="form-group">
            <div className="checkbox">
              <label className="label-checkbox">
                <input type="checkbox"
                       onChange={(e) => this.handleFileChange("checked", e)}
                       className="input-checkbox"
                />
                <span  className="span-checkbox">I have read the term of conduct</span></label>
            </div>
          </div>
        </form>
        <input type="submit"
               value="submit"
               className="btn btn-primary input-btn"
               disabled={!this.state.name || !this.state.gender || !this.state.description}
               onClick={this.handleFormSubmit}
        />
      </div>
    );
  }
}

export default MyProfile;


