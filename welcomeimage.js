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
    var rootClassName = className ? className + ' image' : 'image';
    if (this.state.loaded) {
      rootClassName += ' image-loaded';
    }
    return <img ref="img" {...props} className={rootClassName} />;
  }
});

ReactDOM.render(
  <ImageComponent 
    src="https://upload.wikimedia.org/wikipedia/commons/c/ca/Vincent_Willem_van_Gogh_-_Pont_de_Langlois_-_Kr%C3%B6ller-M%C3%BCller.jpg"/>,
    document.getElementById('welcome-image')
);

/* Source: http://buildwithreact.com/article/fade-in-image-recipe */