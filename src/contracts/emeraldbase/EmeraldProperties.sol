// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract EmeraldProperties {

    string public cutType; // Emerald cut type
    string public shape; // Emerald shape
    string public size; // Length, width, and depth in mm
    string public color; // Emerald color [Hue, Tone, Saturation]
    string public clarityGrade; // Emerald clarity grade
    uint256 public weight; // Emerald weight in grams
 
    constructor() {}

    function setColor(string memory _color) public {
        color = _color;
    }

    function setSize(string memory _size) public {
        size = _size;
    }        
    
    function setCutType(string memory _cutType) public {
        cutType = _cutType;
    }

    function setShape(string memory _shape) public {
        shape = _shape;
    }

    function setClarityGrade(string memory _clarityGrade) public {
        clarityGrade = _clarityGrade;
    }

    function setWeight(uint256 _weight) public {
        weight = _weight;
    }
}
