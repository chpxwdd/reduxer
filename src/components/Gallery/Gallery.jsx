import React, { Component } from 'react';
import { PropTypes } from 'prop-types'
import { Grid, Row, Col, Image, Thumbnail, Button, Nav, NavItem, PageHeader } from 'react-bootstrap'

class Gallery extends Component {

    constructor(props) {
        super(props);
        this.handleGallerySelect = this.handleGallerySelect.bind(this);
    }

    /**
     * 
     * @param {number} index NavMenu Item Index 
     * @param {*} element 
     */
    handleGallerySelect(index, element) {
        this.props.getItems(element.currentTarget.dataset['path'], element.currentTarget.innerText, index)
    }

    render() {
        return (
            <div>
                <Grid>
                    <Row>
                        <Nav bsStyle="tabs" activeKey={this.props.index} pullRight
                            onSelect={(tabIndex, element) => this.handleGallerySelect(tabIndex, element)}>
                            <NavItem eventKey={1} data-path="/winter">winter</NavItem>
                            <NavItem eventKey={2} data-path="/offices">offices</NavItem>
                            <NavItem eventKey={3} data-path="/countries">coutries</NavItem>
                        </Nav>
                    </Row>
                    <Row>
                        {(this.props.title) ?
                            (
                                <div>
                                    <PageHeader>{this.props.title} <small>gallery</small></PageHeader>
                                </div>
                            ) : (
                                <span>loading....</span>
                            )}
                    </Row>
                </Grid>
            </div>

        )
    }
}


Gallery.propTypes = {
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
    index: PropTypes.number.isRequired,
    // setYear: PropTypes.func.isRequired
}

export default Gallery;