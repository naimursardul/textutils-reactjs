import React, { useState } from 'react';

const TextForm = (prop) => {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        prop.alertInput("Converted to Uppercase", "success");
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        prop.alertInput("Converted to Lowercase", "success");
    }
    const handleClearClick = () => {
        let newText = "";
        setText(newText);
        prop.alertInput("Text cleared", "success");
    }


    const websiteExtractor = () => {
        let newText = "";
        const displayWebsites = (website) => {
            const b = "www.";
            const d = ".com";
            if (website.toLowerCase().includes(b.toLowerCase()) && website.toLowerCase().includes(d.toLowerCase())) {
                newText = newText + website + "\n";
                setText(newText);
                prop.alertInput("Website extracted", "success");
            }
            if (newText === "") {
                setText('No website found');
                prop.alertInput("But, no website found", "success");
            }

        }
        text.split(" ").map(websites => websites.split("\n").map(website => displayWebsites(website)));
    }

    const removeExtraSpace = () => {
        let newText = "";
        const displayText = (element) => {
            if (element !== "") {
                newText = newText + element + " ";
                setText(newText);
                prop.alertInput("Removed extra spaces", "success");
            }
        }
        text.split(" ").map(element => displayText(element));

    }

    const removeExtraLineGap = () => {
        let newText = "";
        const displayText = (element) => {
            if (text.split("\n").length > 1) {
                newText = newText + element + " ";
                setText(newText);
                prop.alertInput("Removed extra line break", "success");
            }
        }
        text.split("\n").map(element => displayText(element));
    }
    
    const handlePaste= () => {
        navigator.clipboard.readText()
            .then(
                clipboardText=> setText(clipboardText),
                prop.alertInput('Text pasted',"success")
            );
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        prop.alertInput("Text copied", "success");
    }

    const handleOnChange = (eventt) => {
        setText(eventt.target.value);
    }

    const [text, setText] = useState("");
    // text = 'New text'; // Wrong way to update state
    //setText("New text"); //write way to update state
    // console.log(text);


    // const lengthFunction = (word) => {
    //     if (word !== "") {
    //         wordLength = wordLength + 1;
    //     }
    // }
    // let textSplit = text.split(/[\s\n]+/);
    // let wordLength = 0;
    // textSplit.map(word => lengthFunction(word));
    let wordLength = text.split(/[" "\n]+/).filter(word => word !== '').length;



    return (
        <>
            <div className='container my-4' style={{ color: prop.mode === 'dark' ? 'white' : 'black' }}>
                <h1 className='mb-4'>{prop.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{ color: prop.mode === 'dark' ? 'white' : 'black', backgroundColor: prop.mode === 'dark' ? '#55485a' : 'white' }}></textarea>
                </div>
                <button className="btn btn-primary mx-2 my-1" onClick={handlePaste}>Paste text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={websiteExtractor}>Extarct websites url</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={removeExtraSpace}>Remove Extra Space</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={removeExtraLineGap}>Remove Extra Line break</button>
                <button disabled={text.length === 0} className="btn btn-danger mx-2 my-1" onClick={handleClearClick}>Clear text</button>
            </div>
            <div className="container my-4 " style={{ color: prop.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your Text Summary</h2>
                <p>{wordLength} words and {text.length} characters</p>
                <p>Approximately {0.008 * wordLength} minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in the textarea above to preview it here"}</p>
            </div>
        </>
    );
};

export default TextForm;