import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Star extends Component {
  render() {
    const { id, style, onMouseOver, onMouseOut, onClick } = this.props;
    return (
      <span>
        <button
          type="button"
          id={ id }
          className="star star-1"
          data-testid={ `${id}-rating` }
          onMouseOver={ onMouseOver }
          onMouseOut={ onMouseOut }
          onClick={ onClick }
          onBlur={ () => {} }
          onFocus={ () => {} }
          style={ style }
        >
          ★
        </button>
      </span>
    );
  }
}

Star.propTypes = {
  id: PropTypes.string,
  style: PropTypes.shape(),
  onMouseOver: PropTypes.func,
  onMouseOut: PropTypes.func,
  onClick: PropTypes.func,
}.isRequired;

export default Star;
