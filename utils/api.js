var appId='U17wv8vsAOGRbBWuD8iGp6IM-gzGzoHsz';
var appKey='a3j8gcIflJ6ApiGkyKjgBtem';
var apiUrl='https://leancloud.cn/1.1';

function requestAPI(url,data,callback){
    wx.request({
    url: apiUrl+'url', 
    method:'POST',
    data: {game_num: "1-2-3", game_ori_num: "1-2-3", num: 3, status: 1},
    header: {
        'Content-Type': 'application/json',
        'x-avoscloud-application-id':appId,
        'x-avoscloud-application-key':appKey
    },
    success: function(res) {
        console.log(res.data)
    }
    })
}

function getUserName(){
    var userName='dzhai';
    //wx.getUserInfo({
    //success: function(res) {
    //    var userInfo = res.userInfo
    //    userName = userInfo.nickName
    //}})
    return userName;
}

module.exports = {
  requestAPI: requestAPI,
  getUserName:getUserName
}
 