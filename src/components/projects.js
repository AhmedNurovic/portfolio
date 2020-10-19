import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
    constructor(props) {
        super(props);
            this.state = {activeTab: 0};
        }
    
toggleCategories () {
    if(this.state.activeTab === 0) {
        return (

            <div className="projects-grid">
                {/* Project 1 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '174px', background: 'url(https://miro.medium.com/max/3840/1*yjH3SiDaVWtpBX0g_2q68g.png) center / cover'}}>React project</CardTitle>
                <CardText>Some text about the project </CardText>
                <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>CodePen</Button>
                    <Button colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>
            </Card>
            {/* Project 2 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '174px', background: 'url(https://miro.medium.com/max/3840/1*yjH3SiDaVWtpBX0g_2q68g.png) center / cover'}}>React project</CardTitle>
            <CardText>Some text about the project </CardText>
            <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>CodePen</Button>
                <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <IconButton name="share"/>
            </CardMenu>
            </Card>
            {/* Project 3 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '174px', background: 'url(https://miro.medium.com/max/3840/1*yjH3SiDaVWtpBX0g_2q68g.png) center / cover'}}>React project</CardTitle>
            <CardText>Some text about the project </CardText>
            <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>CodePen</Button>
                <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <IconButton name="share"/>
            </CardMenu>
            </Card>
            </div>
        )
    }
    else if(this.state.activeTab === 1) {
        return (
            <div className="projects-grid">
                {/* Project 1 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '174px', background: 'url(https://www.bug.hr/img/python-je-i-dalje-najpopularniji-programski-jezik_sISFWN.jpg) center / cover'}}>React project</CardTitle>
                <CardText>Some text about the project </CardText>
                <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>CodePen</Button>
                    <Button colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>
            </Card>
            {/* Project 2 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '174px', background: 'url(https://www.bug.hr/img/python-je-i-dalje-najpopularniji-programski-jezik_sISFWN.jpg) center / cover'}}>React project</CardTitle>
            <CardText>Some text about the project </CardText>
            <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>CodePen</Button>
                <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <IconButton name="share"/>
            </CardMenu>
            </Card>
            {/* Project 3 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '174px', background: 'url(https://www.bug.hr/img/python-je-i-dalje-najpopularniji-programski-jezik_sISFWN.jpg) center / cover'}}>React project</CardTitle>
            <CardText>Some text about the project </CardText>
            <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>CodePen</Button>
                <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <IconButton name="share"/>
            </CardMenu>
            </Card>
            </div>
        )
    }
    else if(this.state.activeTab === 2) {
        return (
                <div className="projects-grid">
                {/* Project 1 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '174px', background: 'url(https://images.idgesg.net/images/article/2020/01/sale_25561_primary_image_wide-100827989-large.jpg) center / cover'}}>React project</CardTitle>
                <CardText>Some text about the project </CardText>
                <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>CodePen</Button>
                    <Button colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>
            </Card>
            {/* Project 2 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '174px', background: 'url(https://images.idgesg.net/images/article/2020/01/sale_25561_primary_image_wide-100827989-large.jpg) center / cover'}}>React project</CardTitle>
            <CardText>Some text about the project </CardText>
            <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>CodePen</Button>
                <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <IconButton name="share"/>
            </CardMenu>
            </Card>
            {/* Project 3 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '174px', background: 'url(https://images.idgesg.net/images/article/2020/01/sale_25561_primary_image_wide-100827989-large.jpg) center / cover'}}>React project</CardTitle>
            <CardText>Some text about the project </CardText>
            <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>CodePen</Button>
                <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <IconButton name="share"/>
            </CardMenu>
            </Card>
            </div>
        )
    }
    else if(this.state.activeTab === 3) {
        return (
            <div className="projects-grid">
                {/* Project 1 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '174px', background: 'url(https://pypie.com/blog/assets/images/mongodb.jpeg) center / cover'}}>React project</CardTitle>
                <CardText>Some text about the project </CardText>
                <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>CodePen</Button>
                    <Button colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>
            </Card>
            {/* Project 2 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '174px', background: 'url(https://pypie.com/blog/assets/images/mongodb.jpeg) center / cover'}}>React project</CardTitle>
            <CardText>Some text about the project </CardText>
            <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>CodePen</Button>
                <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <IconButton name="share"/>
            </CardMenu>
            </Card>
            {/* Project 3 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '174px', background: 'url(https://pypie.com/blog/assets/images/mongodb.jpeg) center / cover'}}>React project</CardTitle>
            <CardText>Some text about the project </CardText>
            <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>CodePen</Button>
                <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <IconButton name="share"/>
            </CardMenu>
            </Card>
            </div>
        )
    }
}
    
    

    render () {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                <Tab>React</Tab>
                <Tab>Python</Tab>
                <Tab>C++</Tab>
                <Tab>MongoDB</Tab>
                </Tabs>

                <section>
                    <Grid className="projects-grid">
                        <Cell col={12}>
                            <div className="content">
                                {this.toggleCategories()}
                            </div>
                        </Cell>
                    </Grid>
                </section>
            </div>
        )
    }
}

export default Projects;