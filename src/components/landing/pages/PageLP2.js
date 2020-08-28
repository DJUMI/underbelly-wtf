import React, {useRef} from 'react';
import ReactDOM from 'react-dom';
import { Link, useHistory} from 'react-router-dom';

const PageLP2 = () => {
    const bg = 'https://underbelly-wtf-assets.s3-us-west-2.amazonaws.com/images/landing/LP2A.png';
    const underscore = require('./wtf_underscore.png');

    const input2Ref = useRef(null);
    const input3Ref = useRef(null);
    const input4Ref = useRef(null);

    const ref_input2 = useRef();

    let code = '';
    let code1 = '';
    let code2 = '';
    let code3 = '';
    let code4 = '';

    let codeIsValid = false;

    const history = useHistory();


    function enter() {
        code = code1 + code2 + code3 + code4;
        console.log(code);
        if (code === 'FCVD') {
            codeIsValid = true;
            window.setTimeout(function(){ history.push('/LP3'); }, 500);
        }
    }

    function input1(e) {
        console.log(e.target.value);
        code1 = e.target.value;
        if(code1.length > 0) {
            input2Ref.current.focus();
        }
    }
    function input2(e) {
        console.log(e.target.value);
        code2 = e.target.value;
        if(code2.length > 0) {
            input3Ref.current.focus();
        }
    }
    function input3(e) {
        console.log(e.target.value);
        code3 = e.target.value;
        if(code3.length > 0) {
            input4Ref.current.focus();
        }
    }
    function input4(e) {
        console.log(e.target.value);
        code4 = e.target.value;
        if(code4.length > 0) {
            code4 = e.target.value;
        }
    }

    return (
        <div className='page'>
            <img className='page__image' src={bg} alt='Please enter access code' />
            <div style={{fontFamily:'courier', color: 'green', position: "absolute", display: "inline-block", top: '33%', left: '39%', fontSize:50}}>
                <div style={{display:'inline-block'}}>
                    <input maxLength="1" className='codeInput code2' onChange={input1} style={{height:'150px', width:'100px', paddingRight:'5px', textAlign: "center"}}/>&nbsp;<br/>
                    <span>
                        <img height='30px' src={underscore}/>
                    </span>
                </div>
                <div style={{display:'inline-block'}}>
                    <input maxLength="1" ref={input2Ref} className='codeInput code2' onChange={input2} style={{height:'150px', width:'100px', marginRight:'5px', textAlign: "center"}}/>&nbsp;<br/>
                    <span>
                        <img height='30px' src={underscore}/>
                    </span>
                </div>
                <div style={{display:'inline-block'}}>
                    <input maxLength="1" ref={input3Ref} className='codeInput code2' onChange={input3} style={{height:'150px', width:'100px', marginRight:'5px', textAlign: "center"}}/>&nbsp;<br/>
                    <span>
                        <img height='30px' src={underscore} alt='underscore'/>
                    </span>
                </div>
                <div style={{display:'inline-block'}}>
                    <input maxLength="1" ref={input4Ref} className='codeInput code2' onChange={input4} style={{height:'150px', width:'100px', marginRight:'5px', textAlign: "center"}}/><br/>
                    <span>
                        <img height='30px' src={underscore}/>
                    </span>
                </div>
                <div onClick={enter} style={{cursor: "pointer", textAlign: "center", marginTop:50}}>
                    ENTER
                </div>
            </div>
            {/*{codeIsValid}*/}
            {/*<Link to='/LP3'>*/}
            {/*    <div className='clickable LP1__button' />*/}
            {/*</Link>*/}
        </div>
    );
};

export { PageLP2 };