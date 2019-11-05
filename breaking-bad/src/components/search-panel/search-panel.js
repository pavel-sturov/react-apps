import React from "react";
import chars from "../../json/characters";
import "./search-panel.css";

const SearchPanel = (props) => {
    const { info } = props;

    let key = 900;
    console.log('we are here');

    function searchFoo(el) {
        console.log(el);
        const result = [];
        const searchStr = info.toLowerCase();

        for(let char of chars) {
            if (char.name.toLowerCase().indexOf(searchStr) === 0) {
                const obj = {};
                obj.name = char.name;
                obj.id = char.char_id;
                obj.img = char.img;
                result.push(obj);
                console.log(result);
                if (result.length === 3) {
                    break;
                }
            }
        }
        return result.map(el => {
            return (
                <div key={key++} className="search-item">
                    <a href={`/character/id-${el.id}`}>
                        <div><h2 className="name" key={key++}>{el.name}</h2></div>
                        <div><img className="search-img" src={el.img} alt="actor"/></div>
                    </a>
                </div>
            )
        });
    }
    console.log('we are here2', props);
    return (
        info.length === 0 ? null : searchFoo(info)
    );

};

export default SearchPanel;