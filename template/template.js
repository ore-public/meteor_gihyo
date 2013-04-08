if (Meteor.isClient) {
  Template.mainContent.yourName = function () {
    return "小西";
  };

  Template.mainContent.now = function () {
    return new Date();
  };

  Template.simpleVar.personName = 'こうたろう';

  Template.nestedVar.person = {
    name: 'ちほ'
  };

  Template.parentVar.family = {
    father: {name: 'しゅんぺい'},
    mother: {name: 'たえこ'}
  };

  Template.arrayVar.fruits = [
    'りんご', 'ばなな', 'キウイ', 'メロン'
  ];

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
