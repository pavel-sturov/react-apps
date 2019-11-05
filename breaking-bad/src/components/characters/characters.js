import React, { Component } from "react";

import AboutCharacter from "../about-character";
import './characters.css';
import CharacterPage from '../character-page';

import chars from '../../json/characters.json';

export default class Characters extends Component {

    // baseUrl = 'https://www.breakingbadapi.com/api/characters/';

    state = {
        people: [],
        loaded: false,
    };

    id = 100;

    componentDidMount() {
        this.getCharactersArrayInfo();
        console.log('did mount!');
    }

    // sendRequest = () => {
    //     fetch(`${this.baseUrl}${Math.floor(Math.random() * 56) + 1}`)
    //         .then(response => response.json())
    //         .then(data => {
    //             const temp = this.state.people;
    //             let obj = {};
    //
    //             obj.id = data[0].char_id;
    //             obj.name = data[0].name || 'Unknown';
    //             obj.status = data[0].status;
    //             obj.img = data[0].img;
    //             obj.nickname = data[0].nickname;
    //             temp.push(obj);
    //         this.setState({people: temp});
    //         })
    //         .then(() => {
    //             if (this.state.people.length === 6) {
    //                 setTimeout(() => {
    //                     this.setState({
    //                         loaded: true
    //                     });
    //                 }, 1000);
    //
    //             }
    //         })
    //         .catch(e => console.log(e));
    // };

    sendRequest = () => {
        const randomCharacter = chars[Math.floor(Math.random() * 56) + 1];

        const temp = this.state.people;
        let obj = {};

        obj.id = randomCharacter.char_id;
        obj.name = randomCharacter.name || 'Unknown';
        obj.status = randomCharacter.status;
        obj.img = randomCharacter.img;
        obj.nickname = randomCharacter.nickname;
        temp.push(obj);

        this.setState({
                people: temp
            });

        if (this.state.people.length === 6) {
            setTimeout(() => {
                this.setState({
                    loaded: true
                })
            }, 1000)
        }
    };

    getInfo = () => {
        const { people } = this.state;
            return people.map((item) => {
                return (
                    <div key={this.id++} className="random-item">
                        <a href={`/character/id-${item.id}`}>
                            <button className="btn-info">Info</button>
                        </a>
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
        this.setState({
                people: [],
                loaded: false
            }, () => {
            for (let i = 0; i < 6; i ++) {
                this.sendRequest();
            }
        });

    };

    showSpinner = () => {
       if (this.state.people.length === 6) {
           return (
               <div className="done">Just one second, sur...</div>
           );
       }
      return (
          <div className="loading">Fucking loading...</div>
      );
    };

    render() {
        console.log('render');
        return (
            <React.Fragment>
                <h1>Characters Pages</h1>
                <h2>Here you can see random 6 characters </h2>
                <button type="button"
                        className="search-btn"
                        onClick={this.getCharactersArrayInfo}>
                    Get Random!</button>
                <div className="random-six">
                    {this.state.loaded ? this.getInfo() : this.showSpinner()}
                </div>
            </React.Fragment>
        );
    }
};