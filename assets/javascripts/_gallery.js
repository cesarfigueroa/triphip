var Gallery = {
  initialize: function (config) {
    this.config = config || {};
    this.bindEvents();
  },

  bindEvents: function () {
    Array.prototype.map.call(this.config.galleries, function (gallery) {
      gallery.addEventListener('click', this.events.click.bind(this));
      gallery.addEventListener('touchend', this.events.tap.bind(this));
    }.bind(this));
  },

  events: {
    click: function (event) {
      this.setImage(event);
    },

    tap: function (event) {
      event.preventDefault();
      this.setImage(event);
    }
  },

  setImage: function (event) {
    this.setCurrentImage(event);
    this.setNextImage();
  },

  setCurrentImage: function (event) {
    this.currentImage = event.currentTarget.querySelector('.selected');
    this.currentImage.className = '';
  },

  getNextImage: function () {
    return this.currentImage.nextElementSibling
        || this.currentImage.parentElement.firstElementChild;
  },

  setNextImage: function () {
    this.getNextImage().className = 'selected';
  }
};

Gallery.initialize({
  galleries: document.querySelectorAll('.gallery')
});
