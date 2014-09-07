var Form = {
  initialize: function (config) {
    this.config = config || {};

    if (this.isFormPresent()) {
      this.setup();
      this.bindEvents();
    }
  },

  setup: function () {
    this.config.form.noValidate = true;
    this.config.submitButton.disabled = true;
  },

  bindEvents: function () {
    Array.prototype.map.call(this.config.fields, function (element) {
      element.addEventListener('blur', this.events.blur.bind(this));
      element.addEventListener('input', this.events.input.bind(this));
    }.bind(this));
  },

  events: {
    blur: function (event) {
      this.updateField(event.target);
    },

    input: function () {
      this.updateForm();
    }
  },

  updateForm: function () {
    this.config.submitButton.disabled = !this.config.form.checkValidity();
  },

  updateField: function (element) {
    element.setCustomValidity('');
    this.validate(element);
  },

  validate: function (element) {
    if (element.checkValidity()) {
      this.hideError(element);
    } else {
      this.setValidationMessage(element);
      this.showError(element);
    }
  },

  showError: function (element) {
    element.parentElement.classList.add('invalid');
    element.parentElement.dataset.errorMessage = element.validationMessage;
  },

  hideError: function (element) {
    element.parentElement.classList.remove('invalid');
  },

  setValidationMessage: function (element) {
    if (element.validity.typeMismatch || element.validity.badInput) {
      element.setCustomValidity('Invalid');
    } else if (element.validity.valueMissing) {
      element.setCustomValidity('Missing');
    }
  },

  isFormPresent: function () {
    return document.body.contains(this.config.form);
  }
};

Form.initialize({
  form: document.querySelector('form.validate'),
  fields: document.querySelectorAll('form.validate input'),
  submitButton: document.querySelector('form.validate .button')
});
