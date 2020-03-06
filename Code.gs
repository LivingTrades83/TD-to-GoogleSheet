//SERVER SIDE

var apikey = "aaaaaaaaaaaaaaaaaaaaaaaaaaa"

function onOpen() {
  //Create Menu Items
  var currentssheet = SpreadsheetApp.getActive();
  var menuItems = [
    {name: 'Authenticate', functionName: 'amtd_ShowPane'}
  ];
  currentssheet.addMenu("Ameritrade APIs", menuItems);
}

function amtd_ShowPane() {
//Open a SidePane asynchronously. The html will by calling the function amtd_backfromPane

  linkURL = "https://auth.tdameritrade.com/auth?response_type=code&redirect_uri=https%3A%2F%2F127.0.0.1&client_id="+ apikey +"%40AMER.OAUTHAP";
  var html = HtmlService.createTemplateFromFile('amtd_SidePane')
    .evaluate();
  SpreadsheetApp.getUi().showSidebar(html);  
}

function amtd_backfromPane(d) {
  //Called after user clicks Step 2 button on SidePane, return here with dictionary d
  
    amtd_GetRefreshToken(d.returnURI);
}

function amtd_GetRefreshToken(s) {
  Logger.log(s);
}