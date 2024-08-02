//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "hi";
global.video = "hi";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "923346690239";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0VISG5Ic0VGblhDVEpBd0c3WXFQU1pYcnNtZVVaQ1hFazhTMEp6WW5HST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQURwakdCTVdNbXhxVFRSazVkTDVpM1BTRDQrRndrTUtpYzllTUtrQVNWZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwTmlnaEhjSnpMOWdvQllXOEo3eFl1dWEzQWZzdjd1elRsK1Ftc09YT0dFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3aGJvQkRZUG54cHJmcmRrT3Fzb0QrRlh5a1BxVk5Fc25veCs0UEMwWlRrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1GMmFHejVJTklVS3pNSjlMSlhFOXNjU216cmhhRGc4cExtKytGVVVhazA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikdvb0VJMGl5a1BYNXN1YS94QStwMHp3WTRDY0hoamJhaXp5VXo0TkFoUUk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ04vaTVpUVBWNVd2MlZrTytYbHFpcHM3K2ZvQkRMT3VOeEFmemNRalVHST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSHlVYjI2RWczakxROEN2NDNuOFZ6aFg3TjcvZyszTWl3UklhUDl2dUZrYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjB6bjJiTWZvYTNrVGkvOWZWcCtrNXh3YTJMQkdkMk5ya05LcjNIVjd6SlgzK1pUajZLMHRUcENVd3pLSmd3ZGtoZjBZYlJDT0FWcGRuUHdVMEdzdkJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODksImFkdlNlY3JldEtleSI6IkhaaHdnWU5zY3Rmamp5UUdCdy9CeTRJaUhMVEhsdGc5aFBKZkh2emsxUWM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkFNZUUtb0J3U2lpUmt1VUNnenctc1EiLCJwaG9uZUlkIjoiOGIxMjQ4YTEtZWM2YS00MThiLTlhZTMtNGY5OTdiZjRmMzlmIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZDK1Q5NkVseDFGTlJMbVh3d1hkTUVXQXlobz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5S1htK255NzcrYkV2MUQ0UjVYOWxIRlRNc1U9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTkNCTEdORUoiLCJtZSI6eyJpZCI6IjkyMzM0NjY5MDIzOTo5N0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJNdXNrYW4ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01LL3FaSUNFUC9Nc2JVR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ilh5ZUNmTXpDNi9IWU1WQ05ocFZyT0FiZ2JRVnBRVW1URGJydmZhRnE2VUE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkUyUGJRTnFIbThjZ055aWRpRjAwamx5bitxcldQYnlWdTlrSDZlSWJXM3NRVXVZTE9lUis1UzNqSStMUjVUdVRBajN0WlVQRTZFc3BRQWtwNUJ4VEFBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJmaHUyMXNQYitDVUQrcFdWUFZhNFFPVEpKeHYzd1lBMm5zUTIxKzRsbXpXa1oyc1kwYjdBdDVzbzZZaXJ1L21EZ0g0WnYxcnVrTHQ2VDFXKy9KQm9EUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzM0NjY5MDIzOTo5N0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWOG5nbnpNd3V2eDJERlFqWWFWYXpnRzRHMEZhVUZKa3cyNjczMmhhdWxBIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyNTc0NDg5LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUtMRSJ9
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0VISG5Ic0VGblhDVEpBd0c3WXFQU1pYcnNtZVVaQ1hFazhTMEp6WW5HST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQURwakdCTVdNbXhxVFRSazVkTDVpM1BTRDQrRndrTUtpYzllTUtrQVNWZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwTmlnaEhjSnpMOWdvQllXOEo3eFl1dWEzQWZzdjd1elRsK1Ftc09YT0dFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3aGJvQkRZUG54cHJmcmRrT3Fzb0QrRlh5a1BxVk5Fc25veCs0UEMwWlRrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1GMmFHejVJTklVS3pNSjlMSlhFOXNjU216cmhhRGc4cExtKytGVVVhazA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikdvb0VJMGl5a1BYNXN1YS94QStwMHp3WTRDY0hoamJhaXp5VXo0TkFoUUk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ04vaTVpUVBWNVd2MlZrTytYbHFpcHM3K2ZvQkRMT3VOeEFmemNRalVHST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSHlVYjI2RWczakxROEN2NDNuOFZ6aFg3TjcvZyszTWl3UklhUDl2dUZrYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjB6bjJiTWZvYTNrVGkvOWZWcCtrNXh3YTJMQkdkMk5ya05LcjNIVjd6SlgzK1pUajZLMHRUcENVd3pLSmd3ZGtoZjBZYlJDT0FWcGRuUHdVMEdzdkJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODksImFkdlNlY3JldEtleSI6IkhaaHdnWU5zY3Rmamp5UUdCdy9CeTRJaUhMVEhsdGc5aFBKZkh2emsxUWM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkFNZUUtb0J3U2lpUmt1VUNnenctc1EiLCJwaG9uZUlkIjoiOGIxMjQ4YTEtZWM2YS00MThiLTlhZTMtNGY5OTdiZjRmMzlmIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZDK1Q5NkVseDFGTlJMbVh3d1hkTUVXQXlobz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5S1htK255NzcrYkV2MUQ0UjVYOWxIRlRNc1U9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTkNCTEdORUoiLCJtZSI6eyJpZCI6IjkyMzM0NjY5MDIzOTo5N0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJNdXNrYW4ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01LL3FaSUNFUC9Nc2JVR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ilh5ZUNmTXpDNi9IWU1WQ05ocFZyT0FiZ2JRVnBRVW1URGJydmZhRnE2VUE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkUyUGJRTnFIbThjZ055aWRpRjAwamx5bitxcldQYnlWdTlrSDZlSWJXM3NRVXVZTE9lUis1UzNqSStMUjVUdVRBajN0WlVQRTZFc3BRQWtwNUJ4VEFBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJmaHUyMXNQYitDVUQrcFdWUFZhNFFPVEpKeHYzd1lBMm5zUTIxKzRsbXpXa1oyc1kwYjdBdDVzbzZZaXJ1L21EZ0g0WnYxcnVrTHQ2VDFXKy9KQm9EUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzM0NjY5MDIzOTo5N0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWOG5nbnpNd3V2eDJERlFqWWFWYXpnRzRHMEZhVUZKa3cyNjczMmhhdWxBIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyNTc0NDg5LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUtMRSJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "malik",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
