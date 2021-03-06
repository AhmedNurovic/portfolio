import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
    render () {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className='Landing-grid'>
                    <Cell col={12}>
                        <img src={require('./portfoliopic.jpg')}
                        alt="Profile"
                        className ="avatar-img"/> 
                        <div className="banner-text">
                                <h1>Software Engineer</h1>

                                <hr/>

                                <p>HTML / CSS | BOOTSTRAP | REACT | MongoDB | C++ | Java | Kotlin | Python</p>

                                <div className="social-links">
                                    {/* LinkedIn */}
                                    <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                        <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                    </a>

                                    {/* Github */}
                                    <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                        <i className="fa fa-github-square" aria-hidden="true"/>
                                    </a>

                                    {/* FreeCodeCamp */}
                                    <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                        <i className="fa fa-free-code-camp" aria-hidden="true"/>
                                    </a>
                                </div>
                        </div>   
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;

