import React from "react";

const AboutCharacter = ({ info }) => {
    const { name, id } = info;
    console.log(name, id);
    return (
        <div>
            <span>Name</span>
            <span>NickName</span>
            <span>Status</span>
        </div>
    );
};

export default AboutCharacter;