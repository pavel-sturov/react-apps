import React, {Fragment, Component} from "react";
import './character-page.css';
import chars from '../../json/characters.json';

export default class CharacterPage extends Component {

  state = {
    charID : Number(this.props.location.pathname.slice(14)) || 1,
  };

  getCharInfo = () => {
    const { charID } = this.state;
    for (let i = 0; i < chars.length; i ++) {
      if (chars[i].char_id === charID) {
        console.log(chars[i]);
        return this.showInfo(chars[i]);
      }
    }
  };

  showInfo = (char) =>  {
    const name = char.name;
    const nickname = char.nickname;
    const birthday = char.birthday;
    const showInBB = char.appearance;
    const showInBCS = char.better_call_saul_appearance;
    const status = char.status;

    return (
        <div className="all-info">
          <div className="char-info">
            <h2>Name: <span>{name}</span></h2>
            <ul>
              <h2 className="appearance">Appearance:</h2>
                <li>
                  <h2>Breaking Bad:
                    <span>{showInBB.length > 1 ? ` ${showInBB.join(', ')} Seasons`
                        : ` ${showInBB.join(', ')} Season`}</span>
                  </h2>
                </li>
                <li>
                  <h2>Better Call Saul:
                    <span>{showInBCS.length === 0 ? ' no' : ` ${showInBCS.join(', ')} Seasons`}</span>
                  </h2>
                </li>
            </ul>
            <h2>Nickname: <span>{nickname}</span></h2>
            <h2>Birthday: <span>{birthday}</span></h2>
            <h2>Status: <span>{status}</span></h2>
          </div>
          <div className="char-photo">
            <img src={char.img} alt="char-img"/>
          </div>
        </div>
    )
  };

  getRandom = () => {
    return Math.floor(Math.random() * 56) + 1;
  };

  nextChar = () => {
    let newID = this.getRandom();
    this.setState({
      charID: newID
    });
  };

  render() {
    console.log(this.state.charID);
    return (
        <div className="about-char">
          <h1>Page of the character!</h1>
          {this.getCharInfo()}
          <button className="next-char-info"
                  onClick={this.nextChar}>Next</button>
        </div>
    );
  }
}