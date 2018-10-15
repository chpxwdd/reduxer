import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import {
    PageHeader,
    Nav, NavItem,
    Grid, Row, Col
} from 'react-bootstrap'

export default class Page extends Component {

    constructor(props) {
        super(props);
        this.onYearBtnClick = this.onYearBtnClick.bind(this);
    }

    onYearBtnClick(e) {
        this.props.getPhotos(e.target.innerText)
        // this.props.getPhotos(e.target.dataset["title"]);
    }

    render() {
        const { year, photos } = this.props
        return <nav>
            <Grid>
                <Row>
                    <PageHeader>
                        {year} год   <small>У тебя {photos.length} фото.</small>
                    </PageHeader>
                </Row>
                <Row>
                    <Col md={3} lg={4}>
                        <Nav bsStyle="pills" stacked>
                            <NavItem onClick={this.onYearBtnClick} data-title="2018">2018</NavItem>
                            <NavItem onClick={this.onYearBtnClick} data-title="2017">2017</NavItem>
                            <NavItem onClick={this.onYearBtnClick} data-title="2016">2016</NavItem>
                        </Nav>
                    </Col>
                    <Col md={9} lg={8}>
                    </Col>
                </Row>
            </Grid>
        </nav>

    }
}

Page.propTypes = {
    year: PropTypes.number.isRequired,
    photos: PropTypes.array.isRequired,
    setYear: PropTypes.func.isRequired
}