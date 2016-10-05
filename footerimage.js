var ImageComponent = React.createClass({
  getInitialState: function() {
    return {
      loaded: false,
    };
  },

  onImageLoad: function() {
    if (this.isMounted()) {
      this.setState({ loaded: true });
    }
  },

  componentDidMount: function() {
    var imgTag = ReactDOM.findDOMNode(this.refs.img);
    var imgSrc = imgTag.getAttribute('src');
    var img = new window.Image();
    img.onload = this.onImageLoad;
    img.src = imgSrc;
  },

  render: function() {
    var { className, ...props } = this.props;
    var rootClassName = className ? className + ' image2' : 'image2';
    if (this.state.loaded) {
      rootClassName += ' image-loaded';
    }
    return <img ref="img" {...props} className={rootClassName} />;
  }
});

ReactDOM.render(
  <ImageComponent 
    src="https://upload.wikimedia.org/wikipedia/commons/8/8b/Vincent_van_Gogh_-_La_charrette_bleue_%28Fogg_Art_Museum%29.jpg"/>,
    document.getElementById('footer-image')
);

/* Adapted from: http://buildwithreact.com/article/fade-in-image-recipe */