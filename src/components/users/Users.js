import React from 'react';
import PropTypes from 'prop-types';
import UserItem from './UserItem';
import Spinner from './../layout/Spinner';

const Users = props => {
  if (props.loading) return <Spinner />;
  else {
    return (
      <div style={userStyle}>
        {props.users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap: '1rem'
};
export default Users;
