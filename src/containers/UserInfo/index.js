import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './UserInfo.scss';

export default class UserInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: 'Shirahama Kenichi',
        username: '@ShirahamaKenichi',
        avatar: 'https://ui-avatars.com/api/?size=100&name=Kenichi+Shirahama&background=ffaa00&color=444444',
      },
    };
  }

  render() {
    const { name, username, avatar } = this.state.user;

    return (
      <section className="user-info">
        <img className="user-info__avatar" src={avatar} alt={username} />
        <h2 className="user-info__name">{name}</h2>
        <h3 className="user-info__username">{username}</h3>
      </section>
    );
  }
}

UserInfo.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  username: PropTypes.string,
};
