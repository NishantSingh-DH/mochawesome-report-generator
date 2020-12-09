/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEqual from 'lodash/isEqual';
import { Icon } from 'components';
import classNames from 'classnames/bind';
import styles from './nav-menu.css';

const cx = classNames.bind(styles);

class NavMenuItem extends Component {
  static propTypes = {
    squad: PropTypes.string,
    setSquadFilter: PropTypes.func,
    currentSquadFilter: PropTypes.string
  };

  shouldComponentUpdate(nextProps) {
    return !isEqual(this.props, nextProps);
  }

  render() {
    const {
      squad,
      setSquadFilter,
      currentSquadFilter
    } = this.props;

    const isActive = () => {
      return squad === currentSquadFilter;
    };

    const anchorCxName = cx('link', {
      disabled: !isActive(),
    });

    const suiteIcon = () => {
      let iconName = 'visibility_off';
      const iconClassName = 'pending';
      if(isActive()){
        iconName = 'visibility'
      }
      return (
        <Icon
          name={iconName}
          className={cx('link-icon', iconClassName)}
          size={18}
        />
      );
    };

    return (
      <li className={cx('item', { 'has-tests': true })}>
        <a
          className={anchorCxName}
          onClick={() => setSquadFilter(squad)}>
          {suiteIcon()}
          <span>{squad}</span>
        </a>
      </li>
    );
  }
}

export default NavMenuItem;
