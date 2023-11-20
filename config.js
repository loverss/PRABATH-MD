const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://sufyanji1:<password>@cluster0.drqgrtn.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'sam@sec.live'
global.github = 'https://github.com/prabathLK/PRABATH-MD'
global.location = 'lahore pk'
global.gurl = 'https://instagram.com/Sufi_writer.s' // add your username
global.devs = 923036971399';
global.website = 'https://github.com/prabathLK/PRABATH' //wa.me/+923036971399
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://i.imgur.com/1N0OycJ.jpeg'
module.exports = {
  OPENAI_API_KEY:process.env.OPENAI_API_KEY || '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',
  botname: process.env.BOT_NAME || 'sufyan-jan',
  dl_limit: process.env.DL_SIZE || '300',
  art: process.env.AUTO_RESTART || 'true',
  sudo: process.env.SUDO || 923036971399',
  alivepic: process.env.ALIVE_IMG || 'https://i.imgur.com/1N0OycJ.jpeg',
  alivemsj: process.env.ALIVE_MSJ || '*POWERD BY sufyan-jan* 🎊',
  ownername:process.env.OWNER_NAME || 'sufyab-jaan',
  sessionName: process.env.SESSION_ID || 'BiFSCKTB#KhCKNfrwz90mXKrqQU-HZgU014PnP4vPp056Xwx94Hg',
  author: process.env.PACK_INFO.split(";")[0] || 'author', 
  auto_read_status : process.env.AUTO_READ_STATUS || 'true',
  packname: process.env.PACK_INFO.split(";")[1] || 'Name',
  autoreaction: process.env.AUTO_REACTION || 'off',
  antibadword : process.env.ANTI_BAD_WORD || 'fuck,huth,fucking,huththa,huththo,hukanna,fucked,pakaya,pako,ponnaya,ponnayo,kariya,kariyo,huththaa,hutta',
  alwaysonline: process.env.ALWAYS_ONLINE || 'true',
  antifake : process.env.FAKE_COUNTRY_CODE || '',
  readmessage: process.env.READ_MESSAGE || true,
  HANDLERS: process.env.PREFIX || ['.'],
  warncount : process.env.WARN_COUNT || 3,
  disablepm: process.env.DISABLE_PM || "flase",
  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'false',
  antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
  antilinkaction: process.env.ANTILINK_ACTION || 'remove',
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || 'cryptic-depths-59366',
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || '0cdc3920-5284-4fbc-9e6f-07b133ae1f18',
  BRANCH: 'main',
  ALIVE_MESSAGE: process.env.ALIVE_MESSAGE || '',
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || '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',
  VERSION: process.env.VERSION === undefined ? 'v.5.0.0' : process.env.VERSION,
  LANG: process.env.THEME|| 'sufyan-jan',
  WORKTYPE: process.env.WORK_TYPE === undefined ? 'public' : process.env.WORK_TYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
