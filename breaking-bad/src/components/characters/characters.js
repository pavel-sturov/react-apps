import React, { Component } from "react";
import './characters.css';

export default class Characters extends Component {

    baseUrl = 'https://www.breakingbadapi.com/api/characters/';

    state = {
        people: [],
    };

    id = 100;

    componentDidMount() {
        this.getCharactersArrayInfo();
    }

    sendRequest = () => {
        fetch(`${this.baseUrl}${Math.floor(Math.random() * 56) + 1}`)
            .then(response => response.json())
            .then(data => {
                const temp = this.state.people;
                let obj = {};

                obj.id = data[0].char_id;
                obj.name = data[0].name || 'Unknown';
                obj.status = data[0].status;
                obj.img = data[0].img;
                obj.nickname = data[0].nickname;
                temp.push(obj);
            this.setState({people: temp});
            })
            .catch(e => console.log(e));
    };

    getInfo = () => {
        const { people } = this.state;

        return people.map((item) => {
            return (
                <div key={this.id++} className="random-item">
                    <div key={this.id++}
                         className="props"> {item.name}
                    </div>
                    <div key={this.id++}
                         className="props"> {item.status} </div>
                    <img src={item.img} key={this.id++}
                             className="character-img" alt={`${this.id++}-actor`}/>
                    <div key={this.id++}
                         className="props"> {item.nickname} </div>
                </div>)
        });
    };

    getCharactersArrayInfo = () => {
        this.setState({ people: [] });
        for (let i = 0; i < 6; i ++) {
            this.sendRequest();
        }
    };

    render() {
        return (
            <React.Fragment>
                <h1>Characters Pages</h1>
                <h2>Here you can see random 6 characters </h2>
                <button type="button"
                        className="search-btn"
                        onClick={this.getCharactersArrayInfo}>
                    Get Random!</button>
                <div id={22} className="random-six">
                    {this.getInfo()}
                </div>
            </React.Fragment>
        );
    }
};