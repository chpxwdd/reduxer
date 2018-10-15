import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Grid, Row, Nav, NavItem, Navbar, Glyphicon } from 'react-bootstrap';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import User from '../components/User'
// import Page from '../components/Page'
import Home from '../components/Home';
import Gallery from '../components/Gallery';
// import * as pageActions from '../actions/PageActions'
import * as galleryActions from '../actions/GalleryActions'

class App extends Component {

  render() {
    const { user, gallery } = this.props
    // const { getPhotos } = this.props.pageActions
    const { getItems } = this.props.galleryActions


    return <div>

      <BrowserRouter>
        <div>
          <Navbar inverse collapseOnSelect fluid staticTop fixedTop>
            <Navbar.Header>
              <Navbar.Brand><a href="#home">Application</a></Navbar.Brand>
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                <NavItem componentClass={Link} href="/" to="/" active={window.location.pathname === '/'}>
                  <Glyphicon glyph="home" /> Home</NavItem>
                <NavItem componentClass={Link} href="/gallery" to="/gallery" active={window.location.pathname === '/gallery'}>
                  <Glyphicon glyph="picture" /> Gallery</NavItem>
                {/* <NavItem componentClass={Link} href="/page" to="/page" active={window.location.pathname === '/page'}><Glyphicon glyph="file" /> Page</NavItem> */}
              </Nav>
              <Navbar.Text pullRight>
                Signed in as: <User name={user.name} />
              </Navbar.Text>
            </Navbar.Collapse>
          </Navbar>
          <Grid >
            <Row>
              <Route path="/" Component={Home} exact />
              <Route path="/gallery" component={() =>
                <Gallery
                  title={gallery.title}
                  path={gallery.path}
                  items={gallery.items}
                  getItems={getItems}
                  index={gallery.index} />
              } />
            </Row>
          </Grid>
        </div>
      </BrowserRouter>
    </div >
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    gallery: state.gallery
    // page: state.page,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // pageActions: bindActionCreators(pageActions, dispatch),
    galleryActions: bindActionCreators(galleryActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)