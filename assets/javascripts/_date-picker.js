var DatePicker = {
  initialize: function (config) {
    this.config = config || {};

    if (this.isSupported() && this.isPickerPresent()) {
      this.prefill();
    } else if (!this.isSupported() && this.isPickerPresent()) {
      this.setup();
    }
  },

  setup: function () {
    Array.prototype.map.call(this.config.inputs, function (element) {
      element.setAttribute('type', 'text');
    });
  },

  prefill: function () {
    this.config.toInput.value = this.getDate(7);
    this.config.fromInput.value = this.getDate(10);
  },

  getDate: function (daysAhead) {
    var currentDate = new Date();
    var futureDate = currentDate.setDate(currentDate.getDate() + daysAhead);

    return new Date(futureDate).toISOString().substr(0, 10);
  },

  isSupported: function () {
    return Modernizr.touch && Modernizr.inputtypes.date;
  },

  isPickerPresent: function () {
    return document.body.contains(this.config.toInput);
  }
};

DatePicker.initialize({
  inputs: document.querySelectorAll('input[type="date"]'),
  toInput: document.querySelector('#to-date'),
  fromInput: document.querySelector('#from-date')
});
