import React, { Component } from "react";

class Count extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
      wordCount:0,
      vowelCount:0,
      consonantCount:0,
      semiVowelCount:0,
      sameWord:[]
    };
    this.handleChange = this.handleChange.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  clickHandler(){  
    const {text} = this.state
    const upperText=text.toUpperCase();
    let wordCount=0;
    let vowelCount=0;
    let consonantCount=0;
    let semiVowelCount=0;

        const original =  text.split(" ");
        let duplicate = [];
	    let copy = [...original];
 
        for (let outer = 0; outer < original.length; outer++) {
            let count = 0;	
            for (let inner = 0; inner < copy.length; inner++) {
                if (original[outer] === copy[inner]) {
                    count++;
                    delete copy[inner];
                }
            }  
            if (count > 1) {
                let word = Object();
                word.value = original[outer];
                word.count = count;
                duplicate.push(word);
            }
        }

    for(let iteration=0;iteration<text.length;iteration++){
        if(upperText[iteration]==='A'||upperText[iteration]==='E'|| upperText[iteration]==='I'|| upperText[iteration]==='O'||upperText[iteration]==='U')
        vowelCount++;
        else if(upperText[iteration]==='W'|| upperText[iteration]==='Y')
        {
            semiVowelCount++;
        }
        else if(upperText[iteration]===' '){
            wordCount++;
        }
        else
        consonantCount++
    }
    this.setState({  
        wordCount: ++wordCount,
        vowelCount: vowelCount,
        semiVowelCount: semiVowelCount,
        consonantCount: consonantCount,
        sameWord:[...duplicate]
    })   
  }  

  render() {
      const {wordCount, vowelCount, consonantCount, semiVowelCount, sameWord} = this.state
    return (
      <div>
        <label>Enter Words : </label>
        <textarea
          value={this.state.text}
          onChange={this.handleChange}
        />
        <button onClick={this.clickHandler}>Count</button>  
        <h4>No of Words: {wordCount}</h4>
        <h4>No of vowels: {vowelCount}</h4>
        <h4>No of semiVowels: {semiVowelCount}</h4>
        <h4>No of consonants: {consonantCount}</h4>
        <h4>Same Word and Count:</h4>
        {sameWord.map(val=>{return<h6>{val.value+'  '+val.count}</h6>})}
      </div>
    );
  }
}

export default Count;