var Hero = {
  initialize: function (config) {
    this.config = config || {};

    if (this.isImagePresent()) {
      this.setup();
      this.bindEvents();
    }
  },

  setup: function () {
    this.setImage();
    this.adjustContainer();
  },

  bindEvents: function () {
    window.addEventListener('resize', this.events.resize.bind(this));
    window.addEventListener('orientationchange', this.events.orientationchange.bind(this));
  },

  events: {
    resize: function () {
      this.adjustContainer();
    },

    orientationchange: function () {
      this.adjustContainer();
    }
  },

  setImage: function () {
    this.config.container.style.backgroundImage = this.imageURL();
    this.config.container.style.backgroundPosition = this.imagePosition();
    this.config.image.style.visibility = 'hidden';
  },

  imageURL: function () {
    return "url('" + this.config.container.getAttribute('data-image-src') + "')";
  },

  imagePosition: function () {
    if (this.config.container.dataset.position) {
      return 'center ' + this.config.container.dataset.position;
    }
  },

  adjustContainer: function () {
    this.config.container.style.marginLeft = -this.offsetLeft() + 'px';
    this.config.container.style.width = this.viewportWidth() + 'px';
  },

  viewportWidth: function () {
    return document.documentElement.clientWidth;
  },

  offsetParentWidth: function () {
    var padding = 72;
    return this.config.container.offsetParent.clientWidth - padding;
  },

  offsetLeft: function () {
    return Math.floor((this.viewportWidth() - this.offsetParentWidth()) / 2);
  },

  isImagePresent: function () {
    return document.body.contains(this.config.container);
  }
};

Hero.initialize({
  container: document.querySelector('.hero'),
  image: document.querySelector('.hero img')
});
