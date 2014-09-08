var Search = {
  initialize: function (config) {
    this.config = config || {};

    if (this.isSearchPresent()) {
      this.setup();
      this.bindEvents();
    }
  },

  setup: function () {
    this.config.input.tabIndex = '-1';
  },

  bindEvents: function () {
    this.config.label.addEventListener('click', this.events.click.bind(this));
    this.config.label.addEventListener('touchend', this.events.tap.bind(this));
  },

  events: {
    click: function () {
      this.toggle();
    },

    tap: function () {
      event.preventDefault();
      this.toggle();
    }
  },

  toggle: function () {
    this.config.form.classList.toggle('open');
  },

  isSearchPresent: function () {
    return document.body.contains(this.config.form);
  }
};

Search.initialize({
  form: document.querySelector('.search--underlay'),
  label: document.querySelector('.search--underlay label'),
  input: document.querySelector('.search--underlay input')
});
