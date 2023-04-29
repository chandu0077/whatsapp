$(document).ready(function () {
  $("#pageMain").click(function () {
    //functionality for content
    $("#mainPageContent").show();
    $("#chatsPageContent").hide();
    $("#profilePageContent").hide();
    $("#unreadChatsContent").hide();

    $("#subheadMain").addClass("subheadIcons");
    $("#chatIcon").removeClass("subheadIcons");
    $("#profileIcon").removeClass("subheadIcons");
    $("#unreadchatIcon").removeClass("subheadIcons");
  });

  $("#pageChat").click(function () {
    //fucntionality for content
    $("#mainPageContent").hide();
    $("#chatsPageContent").show();
    $("#profilePageContent").hide();
    $("#unreadChatsContent").hide();

    $("#subheadMain").removeClass("subheadIcons");
    $("#chatIcon").addClass("subheadIcons");
    $("#profileIcon").removeClass("subheadIcons");
    $("#unreadchatIcon").removeClass("subheadIcons");
  });
  $("#pageProfile").click(function () {
    //functionality for content
    $("#mainPageContent").hide();
    $("#chatsPageContent").hide();
    $("#profilePageContent").show();
    $("#unreadChatsContent").hide();

    $("#subheadMain").removeClass("subheadIcons");
    $("#chatIcon").removeClass("subheadIcons");
    $("#profileIcon").addClass("subheadIcons");
    $("#unreadchatIcon").removeClass("subheadIcons");
  });
  $("#pageUnreadChats").click(function () {
    //functionality for content
    $("#mainPageContent").hide();
    $("#chatsPageContent").hide();
    $("#profilePageContent").hide();
    $("#unreadChatsContent").show();

    $("#subheadMain").removeClass("subheadIcons");
    $("#chatIcon").removeClass("subheadIcons");
    $("#profileIcon").removeClass("subheadIcons");
    $("#unreadchatIcon").addClass("subheadIcons");
  });
});
