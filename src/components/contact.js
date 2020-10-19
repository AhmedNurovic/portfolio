import React, { Component } from 'react';
import { Cell, Grid, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render () {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>
                            Ahmed Nurovic
                        </h2>
                        <img src={require('./portfoliopic.jpg')}
                        alt="avatar"
                        style={{height: '250px', borderRadius: '25px'}}/>
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </Cell>
                    <Cell col={6}>
                       <h2>Contact me</h2>
                       <hr/>
                       <div className="contact-list">
                        <List>
                            <ListItem>
                            <ListItemContent style={{fontSize: '20px', fontFamily: 'Source Code Pro, monospace'}}>
                                <i className="fa fa-phone-square" aria-hidden="true"/>
                                (+387) 62-174-510
                            </ListItemContent>
                            </ListItem>

                            <ListItem>
                            <ListItemContent style={{fontSize: '20px', fontFamily: 'Source Code Pro, monospace'}}>
                                <i className="fa fa-envelope" aria-hidden="true"/>
                                ahmed.nurovic@hotmail.com
                            </ListItemContent>
                            </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;