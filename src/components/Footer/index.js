import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Footer = ({ favoritesCount }) => (
  <div>
    <p>
      Você tem {favoritesCount} {favoritesCount <= 1 ? 'repositório' : 'repostirórios'} favoritos
    </p>
  </div>
);

Footer.propTypes = {
  favoritesCount: PropTypes.number.isRequired,
};
const mapStateToProps = state => ({
  favoritesCount: state.favorites.data.length,
});
export default connect(mapStateToProps)(Footer);
