// var Firebase = Meteor.npmRequire('firebase');
// //
// // function watSpark() {
// //     this.db = new Firebase('https://watspark.firebaseio.com/')
// //
// // }
// //
// // function processBatch(batch) {
// //   batch.forEach(rawEvent => {
// //     const [eventGrouping] = Object.keys(rawevent.msys);
// //     const event = rawEvent.myss[eventgrouping];
// //     if ( eventgrouping === 'relay_message') {
// //       this.processRelaymessage(event)
// //     }
// //     else {
// //       this.processEvent(event)
// //     }
// //   });
// // }
// //
// // function processEvent(event) {
// //   console.log('processing #{ event.type } not allowed');
// // }
// //
// //  function processRelayMessage(event) {
// //   const local = event.rcpt_to.split('@')[0]
// //   this.db.child(local).push({
// //     email: event.msg_from,
// //     friendly: event.friendly_from,
// //     subject: event.content.subject
// //   })
// // }
// //
// //
// //
// // function listen(child) {
// //   this.db.child(child).on('child_added', (snapshot) => {
// //     this.processBatch(snapshot.val());
// //     this.db.child('raw-events').child(snapshot.key()).remove()
// //   });
// // }
//
//
//
// var ref = new Firebase("https://watspark.firebaseio.com/raw-events/");
//
// var _url = ('https://watspark.firebaseio.com/raw-events/');
//
//
// // Retrieve new posts as they are added to our database
// ref.on("child_added", function(snapshot, prevChildKey) {
//   var newPost = snapshot.val();
//    console.log(snapshot.val());
//   // console.log("text: "  + newPost.text);
//   // console.log("Title: " + newPost.title);
//   // console.log("Previous Post ID: " + prevChildKey);
//   // var fireUrl = ("https://watspark.firebaseio.com/raw-events/" + snapshot.val() + "/0/msys/relay_message/content");
//   //  var bigBoy = new Firebase(fireUrl);
//   //   console.log("text: " + bigBoy.text);
//   var param = snapshot.key();
//   console.log(param);
// });
//
// ref.orderByKey().on("child_added", function(snapshot) {
//   var testThing = snapshot.val();
//   console.log(snapshot.exportVal());
//   watsonInput = snapshot.exportVal();
//   return watsonInput;
// });


// function addParameterToURL(param){
//   _url = 'https://watspark.firebaseio.com/raw-events/';
//   _url = (_url.val() + param);
//   return _url;
//   console.log(_url);
// }




// need to append our child 3 layers in.






// watSpark = new watSpark('https://watspark.firebaseio.com/');
// watSpark.listen('raw-events');
