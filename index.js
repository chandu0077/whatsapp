$(document).ready(function () {
  $("#pageMain").click(function () {
    //functionality for content
    $("#mainPageContent").show();
    $("#chatsPageContent").hide();
    $("#profilePageContent").hide();
    $("#unreadChatsContent").hide();
  });

  $("#pageChat").click(function () {
    //fucntionality for content
    $("#mainPageContent").hide();
    $("#chatsPageContent").show();
    $("#profilePageContent").hide();
    $("#unreadChatsContent").hide();
  });
  $("#pageProfile").click(function () {
    //functionality for content
    $("#mainPageContent").hide();
    $("#chatsPageContent").hide();
    $("#profilePageContent").show();
    $("#unreadChatsContent").hide();
  });
  $("#pageUnreadChats").click(function () {
    //functionality for content
    $("#mainPageContent").hide();
    $("#chatsPageContent").hide();
    $("#profilePageContent").hide();
    $("#unreadChatsContent").show();
  });
});
