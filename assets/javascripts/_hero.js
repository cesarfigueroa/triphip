var Hero = {
  initialize: function (config) {
    this.config = config || {};

    if (this.isImagePresent()) {
      this.setup();
    }
  },

  setup: function () {
    this.setImage();
    this.positionImage();
  },

  setImage: function () {
    this.config.container.style.backgroundImage = this.imageURL();
  },

  imageURL: function () {
    return "url('" + this.config.container.getAttribute('data-image-src') + "')";
  },

  positionImage: function () {
    this.config.container.style.backgroundPosition = this.imagePosition();
  },

  imagePosition: function () {
    if (this.config.container.dataset.position) {
      return 'center ' + this.config.container.dataset.position;
    }
  },

  isImagePresent: function () {
    return document.body.contains(this.config.container);
  }
};

Hero.initialize({
  container: document.querySelector('.hero')
});
