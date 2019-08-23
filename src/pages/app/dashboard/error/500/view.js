/**
 * @component index.js
 * @description 错误页
 * @time 2018/5/7
 * @author JUSTIN
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Button } from 'antd';
import { connect } from 'react-redux';

// components
import SvgIcon from 'components/svgIcon';

// utils
import history from 'utils/history';

// styles
import styles from './styles.scss';

const NotFound = ({ language: { i18n = {} } }) => (
  <div className={styles.notFoundPage}>
    <SvgIcon iconClass='not-found' size={250} />
    <Helmet>
      <title>{i18n.helmet_title('500')}</title>
    </Helmet>
    <div className={styles.sectionView}>
      <div className={styles.titleView}>500</div>
      <div className={styles.messageView}>{i18n.server_error_message}</div>
      <div className={styles.buttonView}>
        <Button
          style={{ marginRight: '7px' }}
          onClick={() => {
            history.go(-1);
          }}
        >
          {i18n.server_error_back_button}
        </Button>
        <Button type='primary'>
          <a href={`${window.location.origin}`}>{i18n.server_error_home_button}</a>
        </Button>
      </div>
    </div>
  </div>
);

const mapStateToProps = state => ({
  language: state.language,
});

NotFound.propTypes = {
  language: PropTypes.shape({
    code: PropTypes.string,
    i18n: PropTypes.object,
  }).isRequired,
};

export default connect(
  mapStateToProps,
  null,
)(NotFound);