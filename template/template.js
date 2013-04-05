if (Meteor.isClient) {
  Template.mainContent.yourName = function () {
    return "小西";
  };

  Template.mainContent.now = function () {
    return new Date();
  };
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
