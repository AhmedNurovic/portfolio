import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className='header-color' title={<Link style={{textDecoration: 'none', color: 'white'}} to='/'>Ahmed Nurovic</Link>} scroll>
            <Navigation>
                <Link onClick={()=> window.open("https://1drv.ms/b/s!Au387mKpzceIu3AzZyu9GCvc5L_M?e=fe5e8V", "_blank")}>Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact / About</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to='/'>Ahmed Nurovic</Link>}>
            <Navigation>
                <Link onClick={()=> window.open("https://1drv.ms/b/s!Au387mKpzceIu3AzZyu9GCvc5L_M?e=fe5e8V", "_blank")}>Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact / About</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;
