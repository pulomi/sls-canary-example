// count = 0
module.exports.hello = (event, context, callback) => {
  console.log('Received event:', JSON.stringify(event, null, 4));
  var message = event.Records[0].Sns.Message;
  console.log("message="+message)
  if(message=="error"){
    console.log("****ERROR****")
    callback(new Error('Oh no!'))
  }else{
    console.log("$$$ SUCCESS $$$$")
    callback(null, "Success")
  }
};
