define(() => {
    "use strict";
    const characters = [
        {character: "a"},
        {character: "b"},
        {character: "c"},
        {character: "d"},
        {character: "e"},
        {character: "f"},
        {character: "g"},
        {character: "h"},
    ];
    return {
        characters: () => characters.slice(),
    };
});