function CheckOnlineStatus(){$.ajax({url:"https://api.twitch.tv/kraken/channels/"+nickname,dataType:"json",headers:{"Client-ID":"7buzh4k369ta1n0se34wbn8aj2b7jr"}}).done(function(n){console.log(n),null===n.stream?alert(nickname+" is not online"):alert(nickname+" is online!")}).fail(function(n){console.log("Error",n)})}var nickname="streamerhouse";CheckOnlineStatus();