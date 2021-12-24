import PropTypes from 'prop-types';

export default function Header({ bgColor, textColor, title }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    <header style={headerStyles}>
      <div className="container">
        <h1>{title}</h1>
      </div>
    </header>
  );
}

Header.defaultProps = {
  title: 'Feedback UI',
  bgColor: 'rgba(0,0,0,0.4)',
  color: '#ff6a95',
};

Header.propTypes = {
  title: PropTypes.string,
  bgColor: PropTypes.string,
  color: PropTypes.string,
};
