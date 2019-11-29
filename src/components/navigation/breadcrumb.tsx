import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from '@reach/router';

type BreadcrumbProps = {
  pageTitle: string;
  activeItemTitle: string;
}

export default class Breadcrumb extends React.PureComponent<BreadcrumbProps> {
  private pageTitle: string;
  private activeItemTitle: string;

  constructor(props: BreadcrumbProps) {
    super(props);

    // doing this vs this.state?
    this.pageTitle = props.pageTitle;
    this.activeItemTitle = props.activeItemTitle;
  }

  render(): JSX.Element {
    return (
      <Row className="mb-0">
        <Col>
          <div className="page-title-box">
            <div className="page-title-right">
              <ol className="breadcrumb m-0">
                <li className="breadcrumb-item"><Link to="/" className="text-primary">Home</Link></li>
                <li className="breadcrumb-item">{this.activeItemTitle}</li>
              </ol>
            </div>
            <h4 className="page-title">{this.pageTitle}</h4>
          </div>
        </Col>
      </Row >
    );
  }
}