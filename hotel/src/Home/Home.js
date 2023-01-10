import React from 'react';
import "../Styles/main.css";

export class Body extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div class="wrapper">
                <div className='red-section section'> 
                    <img className='red-image' />
                    <div className='red-text-section text-section'>
                        <p className='red-text'>This is red-text</p>
                    </div>
                </div>
                <div className='blue-section section'> 
                    <img className='blue-image' />
                    <div className='blue-text-section text-section'>
                        <p className='blue-text'>This is red-text</p>
                    </div>
                </div>
                <div className='green-section section'> 
                    <img className='green-image' />
                    <div className='green-text-section text-section'>
                        <p className='green-text'>This is red-text</p>
                    </div>
                </div>
            </div>
            
        )
    }
}