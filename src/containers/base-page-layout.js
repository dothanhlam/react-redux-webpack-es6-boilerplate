import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Spinner from '../components/spinner/spinner';

const mapStateToProps = ({ spinner }) => ({ spinner });
const BasePageLayout = (props) =>
  (
    <div className="page-container">
      <div>
        Header
      </div>
      <div className="view-container">
        {props.children}
      </div>
      <div>Footer</div>
      <Spinner
        canShow={props.spinner.canShow}
        messageId={props.spinner.messageId}
      />
    </div>
  );

BasePageLayout.propTypes = {
  spinner: PropTypes.object,
  children: PropTypes.element,
};

export default connect(mapStateToProps)(BasePageLayout);
