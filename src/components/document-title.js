/* @flow */
import React, { PropTypes, Component } from 'react';
import { injectIntl } from 'react-intl';


class DocumentTitle extends Component {
  static propTypes = {
    title: PropTypes.object.isRequired,
    children: PropTypes.element.isRequired,
  };

  componentWillMount() {
    this.updateDocumentTitle(this.props);
  }

  componentWillUpdate(newProps) {
    this.updateDocumentTitle(newProps);
  }


  updateDocumentTitle(props) {
    document.title = props.intl.formatMessage(props.title);
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default injectIntl(DocumentTitle);
