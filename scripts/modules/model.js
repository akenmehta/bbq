var request = require('superagent');

var model = module.exports = {
  init: function() {
    model.getData();
  },

  currentDate: new Date(),
  eventDate: new Date(2052, 12, 31),

  menuItem: {
    title: null,
    count: null,
    id: null
  },

  menu: {},

  getData: function() {
    request.get('menu.json', function(err, res) {
      model.menu = JSON.parse(res.text).menuItems;
    });
  }

};
