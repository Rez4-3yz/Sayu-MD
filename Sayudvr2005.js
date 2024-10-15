/*/
⚠️ Di LARANG MEMPERJUAL SC iNi

Resmi Dari © Rza 2005 (Sc ini Gratis Dari Rza 2005)
Botz iNi Di Kasih Nama Sayu Botz Versi 6.4.4

- https://whatsapp.com/channel/0029Vaip0EG72WTuTkQRms0e

> Join Wa channel Boleh

/*/
///=============(   Sayu Vi6    )============///

const { default: makeWASocket, fetchLatestBaileysVersion, downloadContentFromMessage, useMultiFileAuthState, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@whiskeysockets/baileys')
const os = require('os')
const fs = require('fs') 
const fsx = require('fs-extra')
const path = require('path')
const util = require('util')
const chalk = require('chalk')
const moment = require('moment-timezone')
const speed = require('performance-now')
const ms = toMs = require('ms')
const axios = require('axios')
const fetch = require('node-fetch')
const yts = require('yt-search')
const pino = require('pino')
const readline = require("readline");
const { exec, spawn, execSync } = require("child_process")
const { performance } = require('perf_hooks')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./lib/uploader')
const { toAudio, toPTT, toVideo, ffmpeg, addExifAvatar } = require('./lib/converter')
const { smsg, getGroupAdmins, formatp, jam, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNomor, enumGetKey, runtime, fetchJson, getBuffer, json, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize } = require('./lib/myfunc')
let afk = require("./lib/afk");
const { addPremiumUser, getPremiumKedaluwarsa, getPremiumPosition, expiredCheck, checkPremiumUser, getAllPremiumUser } = require('./lib/premiun')
const { fetchBuffer, buffergif } = require("./lib/myfunc2")
const NodeCache = require('node-cache');

//database
let premium = JSON.parse(fs.readFileSync('./database/premium.json'))
let _owner = JSON.parse(fs.readFileSync('./database/owner.json'))
let owner = JSON.parse(fs.readFileSync('./database/owner.json'))
let _afk = JSON.parse(fs.readFileSync('./database/afk-user.json'))
let hit = JSON.parse(fs.readFileSync('./database/total-hit-user.json'))

//time
const xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
        const xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
        const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')  
         if(time2 < "23:59:00"){
var sayunihiytimewisher = `Selamat malam 🌌`
 }
 if(time2 < "19:00:00"){
var sayunihiytimewisher = `Selamat malam 🌃`
 }
 if(time2 < "18:00:00"){
var sayunihiytimewisher = `Selamat malam 🌃`
 }
 if(time2 < "15:00:00"){
var sayunihiytimewisher = `Selamat siang 🌅`
 }
 if(time2 < "11:00:00"){
var sayunihiytimewisher = `Selamat pagi 🌄`
 }
 if(time2 < "05:00:00"){
var sayunihiytimewisher = `Selamat pagi 🌄`
 } 
module.exports = Sayurza2005 = async (Sayurza2005, m, msg, chatUpdate, store) => {
    try {
        const {
            type,
            quotedMsg,
            mentioned,
            now,
            fromMe
        } = m
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'interactiveResponseMessage') ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'templateButtonReplyMessage') ? m.msg.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
const metarzavi = {
  key: {
    remoteJid: 'status@broadcast',
    participant: '0@s.whatsapp.net'
  },
  message: {
    newsletterAdminInviteMessage: {
      newsletterJid: '120363294772037916@newsletter',
      newsletterName: 'Sayu-Md Vi6 Creator © Rza 2005',
      caption: `Sayu-Md Vi6 Creator © Rza 2005`
    }
  }
};
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const full_args = body.replace(command, '').slice(1).trim()
        const pushname = m.pushName || "No Name"
        const botNomor = await Sayurza2005.decodeJid(Sayurza2005.user.id)
        const itsMe = m.sender == botNomor ? true : false
        const sender = m.sender
        const text = q = args.join(" ")
        const from = m.key.remoteJid
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        const isAudio = (type == 'audioMessage')
        const isText = (type == 'textMessage')
        const isSticker = (type == 'stickerMessage')
        const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
        const sticker = []
        const isAfkOn = afk.checkAfkUser(m.sender, _afk)
        const isGroup = m.key.remoteJid.endsWith('@g.us')
        const groupMetadata = m.isGroup ? await Sayurza2005.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNomor) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
        const isCreator = [ownernumber, ..._owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isPremium = isCreator || isCreator || checkPremiumUser(m.sender, premium);
        const clientId = Sayurza2005.user.id.split(':')[0];
        const senderbot = m.key.fromMe ? Sayurza2005.user.id.split(':')[0] + "@s.whatsapp.net" || Sayurza2005.user.id : m.key.participant || m.key.remoteJid;
        const senderId = senderbot.split('@')[0];
        const isBot = clientId.includes(senderId);
        expiredCheck(Sayurza2005, m, premium);
//group chat msg by sayunihi
const replyrzasyu = (teks) => {
Sayurza2005.sendMessage(m.chat,
{ text: teks,
contextInfo:{
mentionedJid:[sender],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./Imagev/thumb.jpg`),
"sourceUrl": `${link}`}}},
{ quoted:metarzavi})
}

async function Telesticker(url) {
    return new Promise(async (resolve, reject) => {
        if (!url.match(/(https:\/\/t.me\/addstickers\/)/gi)) return replyrzasyu('Enther your url telegram sticker link')
        packName = url.replace("https://t.me/addstickers/", "")
        data = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, {method: "GET",headers: {"User-Agent": "GoogleBot"}})
        const sayunihiyresult = []
        for (let i = 0; i < data.data.result.stickers.length; i++) {
            fileId = data.data.result.stickers[i].thumb.file_id
            data2 = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)
            result = {
            status: 200,
            author: 'Sayuvi',
            url: "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + data2.data.result.file_path
            }
            sayunihiyresult.push(result)
        }
    resolve(sayunihiyresult)
    })
}
async function uploadwidipe(poto) {
  const axios = require('axios');
  const FormData = require('form-data');
  const fs = require('fs');
  const path = require('path');
  const mime = require('mime-types');
  const form = new FormData();
  const contentType = mime.lookup(poto);
  const fileName = path.basename(poto);
  form.append('file', fs.createReadStream(poto), {
    contentType: contentType || 'application/octet-stream',
    filename: fileName,
  });
  try {
    const response = await axios.post('https://widipe.com/api/upload.php', form, {
      headers: {
        ...form.getHeaders(),
        'accept': 'application/json',
      },
    });
    const uploadedUrl = response.data.result.url;
    console.log('Uploaded file URL:', uploadedUrl);
    return uploadedUrl;
  } catch (error) {
    console.error('Error uploading file:', error.response ? error.response.data : error.message);
    throw error;
  }
}
const Sayunimun = (texto) => {
Sayurza2005.sendMessage(from, { text: texto, mentions: [sender]}, {quoted:metarzavi }).catch(e => {
return reply("Erro..")
})
}

async function loading () {
var sayunihilod = [
"₴ ▒░░░░░░░░░░░ ₴ 10%",
"₴ ▒▒▒▒░░░░░░░░ ₴ 30%",
"₴ ▒▒▒▒▒▒▒░░░░░ ₴ 50%",
"₴ ▒▒▒▒▒▒▒▒▒▒░░ ₴ 80%",
"₴ ▒▒▒▒▒▒▒▒▒▒▒▒ ₴ 100%",
"*👒 ʟ ᴏ ᴀ ᴅ ɪ ɴ ɢ ...*"
]
let { key } = await Sayurza2005.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...'})

for (let i = 0; i < sayunihilod.length; i++) {
await Sayurza2005.sendMessage(from, {text: sayunihilod[i], edit: key });
}
}

        if (!Sayurza2005.public) {
            if (!isCreator && !m.key.fromMe) return
        }
        
        if (autoread) {
            Sayurza2005.readMessages([m.key])
        }
        
        if (global.autoTyping) {
        Sayurza2005.sendPresenceUpdate('composing', from)
        }

        if (global.autoRecording) {
        Sayurza2005.sendPresenceUpdate('recording', from)
        }

        
        //bot number online status, available=online, unavailable=offline
        Sayurza2005.sendPresenceUpdate('uavailable', from)
        
        if (global.autorecordtype) {
        let sayunihirecordin = ['recording','composing']
        let sayunihirecordinfinal = sayunihirecordin[Math.floor(Math.random() * sayunihirecordin.length)]
        Sayurza2005.sendPresenceUpdate(sayunihirecordinfinal, from)

        }
        
        if (autobio) {
            Sayurza2005.updateProfileStatus(`instagram: rezaa.205 💌ayu Follow ${ownername}`).catch(_ => _)
        }
        if (m.sender.startsWith('48') && global.anti48 === true) {
            return Sayurza2005.updateBlockStatus(m.sender, 'block')
        }
        let list = []
        for (let i of owner) {
list.push({
	    	displayName: await Sayurza2005.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:6.4\nN:${await Sayurza2005.getName(i)}\nFN:${await Sayurza2005.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytnama}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
	
	//chat counter (console log)
        if (m.message && m.isGroup) {
            console.log(chalk.cyan(`\n╞═════════════════════════════╡\n`))
			console.log(chalk.green(`Obrolan Grup:`))
            console.log(chalk.black(chalk.bgWhite('❬ PESAN ❭')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('➲ Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('➲ Di dalam'), chalk.green(groupName, m.chat))
        } else {
            console.log(chalk.cyan(`\n╞═════════════════════════════╡\n`))
			console.log(chalk.green(`Obrolan Pribadi:`))
            console.log(chalk.black(chalk.bgWhite('❬ PESAN ❭')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('➲ Dari'), chalk.green(pushname), chalk.yellow(m.sender))
        }

        if (command) {
            const cmdadd = () => {
                hit[0].hit_cmd += 1
                fs.writeFileSync('./database/total-hit-user.json', JSON.stringify(hit))
            }
            cmdadd()
            const totalhit = JSON.parse(fs.readFileSync('./database/total-hit-user.json'))[0].hit_cmd
        }
        if (m.isGroup && !m.key.fromMe) {
            let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
            for (let ment of mentionUser) {
                if (afk.checkAfkUser(ment, _afk)) {
                    let getId2 = afk.getAfkId(ment, _afk)
                    let getReason2 = afk.getAfkReason(getId2, _afk)
                    let getTimee = Date.now() - afk.getAfkTime(getId2, _afk)
                    let heheh2 = ms(getTimee)
                    replyrzasyu(`Don't tag him, he's afk\n\n*Reason :* ${getReason2}`)
                }
            }
            if (afk.checkAfkUser(m.sender, _afk)) {
                let getId = afk.getAfkId(m.sender, _afk)
                let getReason = afk.getAfkReason(getId, _afk)
                let getTime = Date.now() - afk.getAfkTime(getId, _afk)
                let heheh = ms(getTime)
                _afk.splice(afk.getAfkPosition(m.sender, _afk), 1)
                fs.writeFileSync('./database/afk-user.json', JSON.stringify(_afk))
                Sayurza2005.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} have returned from afk`, m)
            }
        }
        switch (command) {
            case 'addprem':
                if (!isCreator) return replyrzasyu(mess.owner)
                if (args.length < 2)
                    return replyrzasyu(`Use :\n*#addprem* @tag time\n*#addprem* number time\n\nContoh : #addprem @tag 30d`);
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        addPremiumUser(m.mentionedJid[0], args[1], premium);
                    }
                    replyrzasyu("Premium Success")
                } else {
                    addPremiumUser(args[0] + "@s.whatsapp.net", args[1], premium);
                    replyrzasyu("Success")
                }
                break
            case 'delprem':
                if (!isCreator) return replyrzasyu(mess.owner)
                if (args.length < 1) return replyrzasyu(`Use :\n*#delprem* @tag\n*#delprem* number`);
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        premium.splice(getPremiumPosition(m.mentionedJid[i], premium), 1);
                        fs.writeFileSync("./database/premium.json", JSON.stringify(premium));
                    }
                    replyrzasyu("Delete success")
                } else {
                    premium.splice(getPremiumPosition(args[0] + "@s.whatsapp.net", premium), 1);
                    fs.writeFileSync("./database/premium.json", JSON.stringify(premium));
                    replyrzasyu("Success")
                }
                break
            case 'listprem': {
                if (!isCreator) return replyrzasyu(mess.owner)
                let data = require("./database/premium.json")
                let txt = `*LiST PREMIUM*\n\n`
                for (let i of data) {
                    txt += `Nomor : ${i.id}\n`
                    txt += `Kedaluwarsa : ${i.expired} Kedua\n`         
                }                
                Sayurza2005.sendMessage(m.chat, {
                    text: txt,
                    mentions: i
                }, {
                    quoted:metarzavi
                })
            }
            break
            case 'deletesession':
            case 'delsession':
            case 'clearsession': {
                if (!isCreator) return replyrzasyu(mess.owner)
                fs.readdir("./session", async function(err, files) {
                    if (err) {
                        console.log('Tidak dapat memindai direktori: ' + err);
                        return replyrzasyu('Tidak dapat memindai direktori: ' + err);
                    }
                    let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
                        item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
                    )
                    console.log(filteredArray.length);
                    let teks = `Terdeteksi ${filteredArray.length} file sampah\n\n`
                    if (filteredArray.length == 0) return replyrzasyu(teks)
                    filteredArray.map(function(e, i) {
                        teks += (i + 1) + `. ${e}\n`
                    })
                    replyrzasyu(teks)
                    await sleep(2000)
                    replyrzasyu("Delete file sampah...")
                    await filteredArray.forEach(function(file) {
                        fs.unlinkSync(`./session/${file}`)
                    });
                    await sleep(2000)
                    replyrzasyu("sucess menghapus semua sampah di folder sesi")
                });
            }
            break
            case 'join':
                try {
                    if (!isCreator) return replyrzasyu(mess.owner)
                    if (!text) return replyrzasyu('Mana Group Link?')
                    if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return replyrzasyu('Link Invalid!')
                    replyrzasyu(mess.wait)
                    let result = args[0].split('https://chat.whatsapp.com/')[1]
                    await Sayurza2005.groupAcceptInvite(result).then((res) => replyrzasyu(json(res))).catch((err) => replyrzasyu(json(err)))
                } catch {
                    replyrzasyu('Gagal bergabung dengan Grup')
                }
                break      
            case 'getsession':
                if (!isCreator) return replyrzasyu(mess.owner)
                replyrzasyu('Tunggu sebentar, sedang mengambil file sesi Anda')
                let sesi = await fs.readFileSync('./session/creds.json')
                Sayurza2005.sendMessage(m.chat, {
                    document: sesi,
                    mimetype: 'application/json',
                    fileName: 'creds.json'
                }, {
                    quoted:metarzavi
                })
                break
            case 'shutdown':
                if (!isCreator) return replyrzasyu(mess.owner)
                replyrzasyu(`Goodbye`)
                await sleep(3000)
                process.exit()
                break
            case 'restart':
                if (!isCreator) return replyrzasyu(mess.owner)
                replyrzasyu('In Process....')
                exec('pm2 restart all')
                break
            case 'autoread':
                if (!isCreator) return replyrzasyu(mess.owner)
                if (args.length < 1) return replyrzasyu(`Contoh ${prefix + command} on/off`)
                if (q === 'on') {
                    autoread = true
                    replyrzasyu(`sucess changed autoread to ${q}`)
                } else if (q === 'off') {
                    autoread = false
                    replyrzasyu(`sucess changed autoread to ${q}`)
                }
                break
                case 'autotyping':
                if (!isCreator) return replyrzasyu(mess.owner)
                if (args.length < 1) return replyrzasyu(`Contoh ${prefix + command} on/off`)
                if (q === 'on') {
                    autoTyping = true
                    replyrzasyu(`sucess mengubah pengetikan otomatis menjadi ${q}`)
                } else if (q === 'off') {
                    autoTyping = false
                    replyrzasyu(`sucess mengubah pengetikan otomatis menjadi ${q}`)
                }
                break
                case 'autorecording':
                if (!isCreator) return replyrzasyu(mess.owner)
                if (args.length < 1) return replyrzasyu(`Contoh ${prefix + command} on/off`)
                if (q === 'on') {
                    autoRecording = true
                    replyrzasyu(`sucess changed auto-recording to ${q}`)
                } else if (q === 'off') {
                    autoRecording = false
                    replyrzasyu(`sucess changed auto-recording to ${q}`)
                }
                break
                case 'autorecordtyp':
                if (!isCreator) return replyrzasyu(mess.owner)
                if (args.length < 1) return replyrzasyu(`Contoh ${prefix + command} on/off`)
                if (q === 'on') {
                    autorecordtype = true
                    replyrzasyu(`sucess changed auto recording and typing to ${q}`)
                } else if (q === 'off') {
                    autorecordtype = false
                    replyrzasyu(`sucess changed auto recording and typing to ${q}`)
                }
                break
                case 'autoswview':
    case 'autostatusview':{
             if (!isCreator) return replyrzasyu(mess.owner)
               if (args.length < 1) return replyrzasyu('on/off?')
               if (args[0] === 'on') {
                  autoswview = true
                  replyrzasyu(`${command} diaktifkan`)
               } else if (args[0] === 'off') {
                  autoswview = false
                  replyrzasyu(`${command} dinonaktifkan`)
               }
            }
            break
            case 'autobio':
                if (!isCreator) return replyrzasyu(mess.owner)
                if (args.length < 1) return replyrzasyu(`Contoh ${prefix + command} on/off`)
                if (q == 'on') {
                    autobio = true
                    replyrzasyu(`sucess Berubah AutoBio To ${q}`)
                } else if (q == 'off') {
                    autobio = false
                    replyrzasyu(`sucess Berubah AutoBio To ${q}`)
                }
                break
            case 'mode':
                if (!isCreator) return replyrzasyu(mess.owner)
                if (args.length < 1) return replyrzasyu(`Contoh ${prefix + command} public/self`)
                if (q == 'public') {
                    Sayurza2005.public = true
                    replyrzasyu(mess.done)
                } else if (q == 'self') {
                    Sayurza2005.public = false
                    replyrzasyu(mess.done)
                }
                break
            case 'setexif':
                if (!isCreator) return replyrzasyu(mess.owner)
                if (!text) return replyrzasyu(`Contoh : ${prefix + command} packname|author`)
                global.packname = text.split("|")[0]
                global.author = text.split("|")[1]
                replyrzasyu(`Exif sucess changed to\n\n• Packname : ${global.packname}\n• Author : ${global.author}`)
                break
            case 'setpp':
            case 'setpp':
            case 'setppbot':
                if (!isCreator) return replyrzasyu(mess.owner)
                if (!quoted) return replyrzasyu(`Kirim/Balas Gambar Dengan Caption ${prefix + command}`)
                if (!/image/.test(mime)) return replyrzasyu(`Kirim/Balas Gambar Dengan Caption ${prefix + command}`)
                if (/webp/.test(mime)) return replyrzasyu(`Kirim/Balas Gambar Dengan Caption ${prefix + command}`)
                var medis = await Sayurza2005.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await Sayurza2005.query({
                        tag: 'iq',
                        attrs: {
                            to: botNomor,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    replyrzasyu(mess.done)
                } else {
                    var memeg = await Sayurza2005.updateProfilePicture(botNomor, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    replyrzasyu(mess.done)
                }
                break
            case 'block':
                if (!isCreator) return replyrzasyu(mess.owner)
                let blockw = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await Sayurza2005.updateBlockStatus(blockw, 'block').then((res) => replyrzasyu(json(res))).catch((err) => replyrzasyu(json(err)))
                break
            case 'unblock':
                if (!isCreator) return replyrzasyu(mess.owner)
                let blockww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await Sayurza2005.updateBlockStatus(blockww, 'unblock').then((res) => replyrzasyu(json(res))).catch((err) => replyrzasyu(json(err)))
                break
            case 'leave':
                if (!isCreator) return replyrzasyu(mess.owner)
                if (!m.isGroup) return replyrzasyu(mess.group)
                replyrzasyu('Hem')
                await Sayurza2005.groupLeave(m.chat)
                break
            case 'backup':
                if (!isCreator) return replyrzasyu(mess.owner)
                if (m.isGroup) return replyrzasyu(mess.private)
                replyrzasyu(mess.wait)
                exec('zip backup.zip *')
                let malas = await fs.readFileSync('./backup.zip')
                await Sayurza2005.sendMessage(m.chat, {
                    document: malas,
                    mimetype: 'application/zip',
                    fileName: 'backup.zip'
                }, {
                    quoted:metarzavi
                })
                break
            case 'bcgc':
            case 'bcgroup': {
                if (!isCreator) return replyrzasyu(mess.owner)
                if (!text) return replyrzasyu(`Teks yang mana?\n\nContoh : ${prefix + command} Sayu Vi6 ©Rza 2005 `)
                let getGroups = await Sayurza2005.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                replyrzasyu(`Kirim Siaran Ke ${anu.length} Obrolan Grup, Waktu Berakhir ${anu.length * 1.5} Kedua`)
                for (let i of anu) {
                    await sleep(1500)
                    let a = '```' + `\n\n${text}\n\n` + '```' + '\n\n\nSiaran Botz Sayu Vi6 © Rza 2005'
                    Sayurza2005.sendMessage(i, {
                        text: a,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: 'Siaran',
                                body: `Terkirim ${i.length} Group`,
                                thumbnailUrl: 'https://widipe.com/file/rmBhvxV2izFo.jpg',
                                sourceUrl: global.link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    })
                }
                replyrzasyu(`sukses Dikirim Siaran Ke ${anu.length} Grup Wea`)
            }
            break
            case 'closetime':
                if (!m.isGroup) return replyrzasyu(mess.group)
                if (!isAdmins && !isCreator) return replyrzasyu(mess.admin)
                if (!isBotAdmins) return replyrzasyu(mess.botAdmin)
                if (args[1] == 'detik') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'menit') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'jam') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'hari') {
                    var timer = args[0] * `86400000`
                } else {
                    return replyrzasyu('*Pilih:*\ndetik\nmenit\njam\nhari\n\n*Kelanjutan*\n10 detik')
                }
                replyrzasyu(`Close time ${q} mulai dari sekarang`)
                setTimeout(() => {
                    var nomor = m.participant
                    const close = `*Tertutup* grup ditutup oleh admin\nsekarang hanya admin yang dapat mengirim pesan`
                    Sayurza2005.groupSettingUpdate(m.chat, 'announcement')
                    replyrzasyu(close)
                }, timer)
                break
case 'opentime':
if (!m.isGroup) return m.replyrzasyu('*KHUSUS Di GRUP*')
if (!isAdmins && !isCreator) return replyrzasyu(mess.admin)
if (!isBotAdmins) return replyrzasyu(mess.botAdmin)
if (args[1]=="detik") {var timer = args[0]*`1000`
} else if (args[1]=="menit") {var timer = args[0]*`60000`
} else if (args[1]=="jam") {var timer = args[0]*`3600000`
} else if (args[1]=="hari") {var timer = args[0]*`86400000`
} else {return m.replyrzasyu("*⏲️Pilih:*\n⏲️detik\n⏲️menit\n⏲️jam\n\n*contoh*\n10 detik")}
m.replyrzasyu(`Open time ${q} dimulai dari sekarang`)
setTimeout( () => {
const open = `*Dibuka* Grup dibuka oleh admin\nSekarang anggota dapat mengirim pesan`
Sayurza2005.groupSettingUpdate(from, 'not_announcement')
m.replyrzasyu(open)
}, timer)
break
            case 'kick':
                if (!m.isGroup) return replyrzasyu(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replyrzasyu(mess.admin)
                if (!isBotAdmins) return replyrzasyu(mess.botAdmin)
                let blockwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await Sayurza2005.groupParticipantsUpdate(m.chat, [blockwww], 'remove').then((res) => replyrzasyu(json(res))).catch((err) => replyrzasyu(json(err)))
                break
            case 'add':
                if (!m.isGroup) return replyrzasyu(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replyrzasyu(mess.admin)
                if (!isBotAdmins) return replyrzasyu(mess.botAdmin)
                let blockwwww = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await Sayurza2005.groupParticipantsUpdate(m.chat, [blockwwww], 'add').then((res) => replyrzasyu(json(res))).catch((err) => replyrzasyu(json(err)))
                break
            case 'promote':
                if (!m.isGroup) return replyrzasyu(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replyrzasyu(mess.admin)
                if (!isBotAdmins) return replyrzasyu(mess.botAdmin)
                let blockwwwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await Sayurza2005.groupParticipantsUpdate(m.chat, [blockwwwww], 'promote').then((res) => replyrzasyu(json(res))).catch((err) => replyrzasyu(json(err)))
                break
            case 'demote':
                if (!m.isGroup) return replyrzasyu(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replyrzasyu(mess.admin)
                if (!isBotAdmins) return replyrzasyu(mess.botAdmin)
                let blockwwwwwa = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await Sayurza2005.groupParticipantsUpdate(m.chat, [blockwwwwwa], 'demote').then((res) => replyrzasyu(json(res))).catch((err) => replyrzasyu(json(err)))
                break
            case 'setname':
            case 'setsubject':
                if (!m.isGroup) return replyrzasyu(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replyrzasyu(mess.admin)
                if (!isBotAdmins) return replyrzasyu(mess.botAdmin)
                if (!text) return 'Text ?'
                await Sayurza2005.groupUpdateSubject(m.chat, text).then((res) => replyrzasyu(mess.success)).catch((err) => replyrzasyu(json(err)))
                break
            case 'setdesc':
            case 'setdesk':
                if (!m.isGroup) return replyrzasyu(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replyrzasyu(mess.admin)
                if (!isBotAdmins) return replyrzasyu(mess.botAdmin)
                if (!text) return 'Text ?'
                await Sayurza2005.groupUpdateDescription(m.chat, text).then((res) => replyrzasyu(mess.success)).catch((err) => replyrzasyu(json(err)))
                break
            case 'setppgroup':
            case 'setppgrup':
            case 'setppgc':
                if (!m.isGroup) return replyrzasyu(mess.group)
                if (!isAdmins) return replyrzasyu(mess.admin)
                if (!isBotAdmins) return replyrzasyu(mess.botAdmin)
                if (!quoted) return replyrzasyu(`Kirim/Balas Gambar Dengan Caption ${prefix + command}`)
                if (!/image/.test(mime)) return replyrzasyu(`Kirim/Balas Gambar Dengan Caption ${prefix + command}`)
                if (/webp/.test(mime)) return replyrzasyu(`Kirim/Balas Gambar Dengan Caption ${prefix + command}`)
                var medis = await Sayurza2005.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await Sayurza2005.query({
                        tag: 'iq',
                        attrs: {
                            to: m.chat,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    replyrzasyu(mess.done)
                } else {
                    var memeg = await Sayurza2005.updateProfilePicture(m.chat, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    replyrzasyu(mess.done)
                }
                break
            case 'tagall':
                if (!m.isGroup) return replyrzasyu(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator && !isPremium) return replyrzasyu(mess.admin)
                if (!isBotAdmins && !isCreator && !isPremium) return replyrzasyu(mess.botAdmin)
                let teks = `*👥 Tag All Grup*
 
                 🗞️ *Suaran Tag : ${q ? q : 'blank'}*\n\n`
                for (let mem of participants) {
                    teks += `• @${mem.id.split('@')[0]}\n`
                }
                Sayurza2005.sendMessage(m.chat, {
                    text: teks,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted:metarzavi
                })
                break
            case 'hidetag':
                if (!m.isGroup) return replyrzasyu(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator && !isPremium) return replyrzasyu(mess.admin)
                if (!isBotAdmins && !isCreator && !isPremium) return replyrzasyu(mess.botAdmin)
                Sayurza2005.sendMessage(m.chat, {
                    text: q ? q : '',
                    mentions: participants.map(a => a.id)
                }, {
                    quoted:metarzavi
                })
                break
            case 'totag':
                if (!m.isGroup) return replyrzasyu(mess.group)
                if (!isBotAdmins && !isCreator && !isPremium) return replyrzasyu(mess.botAdmin)
                if (!isAdmins && !isCreator && !isPremium) return replyrzasyu(mess.admin)
                if (!m.quoted) return replyrzasyu(`Reply messages with captions ${prefix + command}`)
                Sayurza2005.sendMessage(m.chat, {
                    forward: m.quoted.fakeObj,
                    mentions: participants.map(a => a.id)
                })
                break
            case 'group':
            case 'grup':
                if (!m.isGroup) return replyrzasyu(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replyrzasyu(mess.admin)
                if (!isBotAdmins) return replyrzasyu(mess.botAdmin)
                if (args[0] === 'close') {
                    await Sayurza2005.groupSettingUpdate(m.chat, 'announcement').then((res) => replyrzasyu(`Success In Closing The Group 🕊️`)).catch((err) => replyrzasyu(json(err)))
                } else if (args[0] === 'open') {
                    await Sayurza2005.groupSettingUpdate(m.chat, 'not_announcement').then((res) => replyrzasyu(`Success In Opening The Group 🕊️`)).catch((err) => replyrzasyu(json(err)))
                } else {
                    replyrzasyu(`Mode ${command}\n\n\nType ${prefix + command}open/close`)
                }
                break
            case 'editinfo':
                if (!m.isGroup) return replyrzasyu(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replyrzasyu(mess.admin)
                if (!isBotAdmins) return replyrzasyu(mess.botAdmin)
                if (args[0] === 'open') {
                    await Sayurza2005.groupSettingUpdate(m.chat, 'unlocked').then((res) => replyrzasyu(`sukses Membuka Info Edit Grup 🕊️`)).catch((err) => replyrzasyu(json(err)))
                } else if (args[0] === 'close') {
                    await Sayurza2005.groupSettingUpdate(m.chat, 'locked').then((res) => replyrzasyu(`sukses Info Edit Grup Tertutup🕊️`)).catch((err) => replyrzasyu(json(err)))
                } else {
                    replyrzasyu(`Mode ${command}\n\n\nType ${prefix + command}on/off`)
                }
                break
            case 'linkgroup':
            case 'grouplink':
            case 'linkgrup':
            case 'linkgc':
                if (!m.isGroup) return replyrzasyu(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replyrzasyu(mess.admin)
                if (!isBotAdmins) return replyrzasyu(mess.botAdmin)
                let response = await Sayurza2005.groupInviteCode(m.chat)
                Sayurza2005.sendText(m.chat, `👥 *GROUP LINK INFO*\n📛 *Name :* ${groupMetadata.subject}\n👤 *Group Owner :* ${groupMetadata.owner !== undefined ? '@' + groupMetadata.owner.split`@`[0] : 'Not known'}\n🌱 *ID :* ${groupMetadata.id}\n🔗 *Chat Link :* https://chat.whatsapp.com/${response}\n👥 *Member :* ${groupMetadata.participants.length}\n`, m, {
                    detectLink: true
                })
                break
            case 'revoke':
            case 'resetlink':
                if (!m.isGroup) return replyrzasyu(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replyrzasyu(mess.admin)
                if (!isBotAdmins) return replyrzasyu(mess.botAdmin)
                await Sayurza2005.groupRevokeInvite(m.chat)
                    .then(res => {
                        replyrzasyu(`Sucess Reset, Group Invite Link ${groupMetadata.subject}`)
                    }).catch((err) => replyrzasyu(json(err)))
                break
            case 'ping':{
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
                    return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, {
                    length
                }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
                        user: 0,
                        nice: 0,
                        sys: 0,
                        idle: 0,
                        irq: 0
                    }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Kedua_ \n ${oldd - neww} _milidetik_\n\nWaktu berjalan : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

🔋 _NodeJS Penggunaan CPU_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `🎚 _Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
                await Sayurza2005.sendMessage(m.chat, {
                    text: respon,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `${botname}`,
                            body: `${latensi.toFixed(4)} Kedua`,
                            thumbnailUrl: 'https://widipe.com/file/rmBhvxV2izFo.jpg',
                            sourceUrl: global.link,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted:metarzavi
                })
            }
            break
            case 'buypremium':
            case 'buyprem':
            case 'premium': {
                let teks = `Hi ${pushname}⏏️\nBuy Premium? Chat ig rezaa.205`
                await Sayurza2005.sendMessage(m.chat, {
                    text: teks,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `${botname}`,
                            body: `${ownername}`,
                            thumbnailUrl: 'https://widipe.com/file/rmBhvxV2izFo.jpg',
                            sourceUrl: global.link,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted:metarzavi
                })
            }
            break
            case 'runtime':
                let runtimetext = `Bot Telah Berjalan ${runtime(process.uptime())}`
                Sayurza2005.sendMessage(m.chat, {
                    text: runtimetext,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `${botname}`,
                            body: `Sayu-Md Vi6 Creator © Rza 2005`,
                            thumbnailUrl: 'https://widipe.com/file/rmBhvxV2izFo.jpg',
                            sourceUrl: global.link,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted:metarzavi
                })
                break
            case "sc" :
case "script": {
const uavaua646 = `*Sayu-MD Vi6.4.4*\n *© Rza 2005*`
replyrzasyu(uavaua646)
}
break
            case 'sticker':
            case 'stiker':
            case 's': {
                if (!quoted) return replyrzasyu(`Reply to Video/Image With Caption ${prefix + command}`)
                if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await Sayurza2005.sendImageAsSticker(m.chat, media, m, {
                        packname: packname,
                        author: author
                    })
                    await fs.unlinkSync(encmedia)
                } else if (isVideo || /video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return replyrzasyu('Maksimal 10 detik!')
                    let media = await quoted.download()
                    let encmedia = await Sayurza2005.sendVideoAsSticker(m.chat, media, m, {
                        packname: packname,
                        author: author
                    })
                    await fs.unlinkSync(encmedia)
                } else {
                    return replyrzasyu(`Kirim Gambar/Video Dengan Teks ${prefix + command}\nDurasi Video 1-9 detik`)
                }
            }
            break
            case 'smeme': case 'stickermeme': case 'stickmeme': {
if (!/webp/.test(mime) && /image/.test(mime)) {
if (!text) return replyrzasyu(`Usage: ${prefix + command} text1|text2`)
atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
mee = await Sayurza2005.downloadAndSaveMediaMessage(quoted)
mem = await UploadFileUgu(mee)
meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem.url}`
memek = await Sayurza2005.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
} else {
replyrzasyu(`Kirim/Balas Gambar Dengan Caption ${prefix + command} text1|text2`)
}
}
break
case 'swm': case 'wm': case 'stickerwm': case 'take':{
if (!args.join(" ")) return replyrzasyu(`Where is the text?`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0]
const atnm = swn.split("|")[1]
if (m.quoted.isAnimated === true) {
Sayurza2005.downloadAndSaveMediaMessage(quoted, "gifee")
Sayurza2005.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await Sayurza2005.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replyrzasyu('Maksimal 10 Detik!')
let media = await quoted.download()
let encmedia = await Sayurza2005.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else {
replyrzasyu(`Photo/Video?`)
}
}
break
            case 'toimage':
            case 'toimg': {
                if (!/webp/.test(mime)) return replyrzasyu(`Balas Stiker dengan keterangan *${prefix + command}*`)
                replyrzasyu(mess.wait)
                let media = await Sayurza2005.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return err
                    let buffer = fs.readFileSync(ran)
                    Sayurza2005.sendMessage(m.chat, {
                        image: buffer
                    }, {
                        quoted:metarzavi
                    })
                    fs.unlinkSync(ran)
                })

            }
            break
            case 'tomp4':
            case 'tovideo1': {
                if (!/webp/.test(mime)) return replyrzasyu(`Balas Stiker dengan keterangan *${prefix + command}*`)
                replyrzasyu(mess.wait)
                let media = await Sayurza2005.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await Sayurza2005.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    }
                }, {
                    quoted:metarzavi
                })
                await fs.unlinkSync(media)

            }
            break
            case 'toaud':
            case 'toaudio': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return replyrzasyu(`Kirim/Balas Video/Audio yang ingin dijadikan audio disertai caption ${prefix + command}`)
                replyrzasyu(mess.wait)
                let media = await Sayurza2005.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                Sayurza2005.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg'
                }, {
                    quoted:metarzavi
                })

            }
            break
            case 'tomp3': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return replyrzasyu(`Send/Reply Video/Audio that you want to make into MP3 with caption ${prefix + command}`)
                replyrzasyu(mess.wait)
                let media = await Sayurza2005.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                Sayurza2005.sendMessage(m.chat, {
                    document: audio,
                    mimetype: 'audio/mp3',
                    fileName: `Sayu-Md-Vi6-🔊.mp3`
                }, {
                    quoted:metarzavi
                })

            }
            break
            case 'tovn':
            case 'toptt': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return replyrzasyu(`Reply Video/Audio that you want to make into a VN with caption ${prefix + command}`)
                replyrzasyu(mess.wait)
                let media = await Sayurza2005.downloadMediaMessage(qmsg)
                let {
                    toPTT
                } = require('./lib/converter')
                let audio = await toPTT(media, 'mp4')
                Sayurza2005.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg',
                    ptt: true
                }, {
                    quoted:metarzavi
                })

            }
            break
            case 'togif': {
                if (!/webp/.test(mime)) return replyrzasyu(`Balas Stiker dengan keterangan *${prefix + command}*`)
                replyrzasyu(mess.wait)
                let media = await Sayurza2005.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await Sayurza2005.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Konversi Webp Ke Video'
                    },
                    gifPlayback: true
                }, {
                    quoted:metarzavi
                })
                await fs.unlinkSync(media)

            }
            break
            case 'tourll': {
                replyrzasyu(mess.wait)
                let media = await Sayurza2005.downloadAndSaveMediaMessage(qmsg)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    replyrzasyu(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    replyrzasyu(util.format(anu))
                }
                await fs.unlinkSync(media)

            }
            break
            case 'emojimix': {
                let [emoji1, emoji2] = text.split`+`
                if (!emoji1) return replyrzasyu(`Contoh : ${prefix + command} 😅+🤔`)
                if (!emoji2) return replyrzasyu(`Contoh : ${prefix + command} 😅+🤔`)
                replyrzasyu(mess.wait)
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
                for (let res of anu.results) {
                    let encmedia = await Sayurza2005.sendImageAsSticker(m.chat, res.url, m, {
                        packname: global.packname,
                        author: global.author,
                        categories: res.tags
                    })
                    await fs.unlinkSync(encmedia)
                }
            }
            break
            case 'toonce':
            case 'toviewonce': {
                if (!quoted) return replyrzasyu(`Balasan Gambar/Video`)
                if (/image/.test(mime)) {
                    anuan = await Sayurza2005.downloadAndSaveMediaMessage(quoted)
                    Sayurza2005.sendMessage(m.chat, {
                        image: {
                            url: anuan
                        },
                        caption: `ini dia!`,
                        fileLength: "999",
                        viewOnce: true
                    }, {
                        quoted:metarzavi
                    })
                } else if (/video/.test(mime)) {
                    anuanuan = await Sayurza2005.downloadAndSaveMediaMessage(quoted)
                    Sayurza2005.sendMessage(m.chat, {
                        video: {
                            url: anuanuan
                        },
                        caption: `ini dia!`,
                        fileLength: "99999999",
                        viewOnce: true
                    }, {
                        quoted:metarzavi
                    })
                }
            }
            break
            case 'toqr': {
                if (!q) return replyrzasyu(' Harap sertakan tautan atau teks!')
                const QrCode = require('qrcode-reader')
                const qrcode = require('qrcode')
                let qyuer = await qrcode.toDataURL(q, {
                    scale: 35
                })
                let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
                let buff = getRandom('.jpg')
                await fs.writeFileSync('./' + buff, data)
                let medi = fs.readFileSync('./' + buff)
                await Sayurza2005.sendMessage(from, {
                    image: medi,
                    caption: "ini dia!"
                }, {
                    quoted:metarzavi
                })
                setTimeout(() => {
                    fs.unlinkSync(buff)
                }, 10000)
            }
            break
            case 'fliptext': {
                if (args.length < 1) return replyrzasyu(`Contoh:\n${prefix}fliptext Hai`)
                quere = args.join(" ")
                flipe = quere.split('').reverse().join('')
                replyrzasyu(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
            }
            break
            case 'afk':
                if (!m.isGroup) return replyrzasyu(mess.group)
                if (isAfkOn) return replyrzasyu("Sudah afk")
                let reason = text ? text : 'Tidak ada.'
                afk.addAfkUser(m.sender, Date.now(), reason, _afk)
                replyrzasyu(`@${m.sender.split('@')[0]} Saat ini AFK\nDengan alasan : ${reason}`)
                break
case 'song1': case 'play1': {
Sayurza2005.sendMessage(from, { react: { text: "📢", key: m.key }})
if (!text) return replyrzasyu(`*Contoh:* ${prefix + command} Anime girl 30 detik`);
replyrzasyu('⬜ ◽◻️▫️ \n _*[ ⏲️ ] L o d i n g...*_')
try {
let yts = require("youtube-yts")
const { youtube } = require("btch-downloader")
        let search = await yts(text)
        let anup3k = search.videos[0]
const { title, thumbnail, url, timestamp, views } = anup3k
let { mp3 } = await youtube(url)
        let doc = { 
            audio: {
                url: mp3
            },
            mimetype: 'audio/mp4',
            fileName: `${title}.mp3`,
            contextInfo: {
                externalAdreplyrzasyu: {
                    showAdAttribution: true,
                    mediaType: 2,
                    mediaUrl: url,
                    title: title,
                    sourceUrl: url, 
                    thumbnail: await fetchBuffer(thumbnail)
                }
            }
        };
        await Sayurza2005.sendMessage(m.chat, doc, { quoted:metarzavi });
} catch (e) {
   console.log(e)
   replyrzasyu('Selver Don api Sedang Eror')
}
}
break
case 'tiktok':
case 'tt': {
Sayurza2005.sendMessage(from, { react: { text: "🎦", key: m.key }})
if (args.length == 0) return replyrzasyu(`*Contoh:* ${prefix + command} https://vt.tiktok.com/ZS2VECdFd/`)
const api = require('btch-downloader')
if (!args[0]) return replyrzasyu(`Masukan URL!\n\ncontoh:\n${prefix + command} https://vm.tiktok.com/ZGJAmhSrp/`);
if (!args[0].match(/tiktok/gi)) return replyrzasyu(`URL Yang Tuan Berikan *Salah!!!*`);
try {
let maximus = await api.ttdl(args[0]);
let caption = `*♣ DOWNLOAD ViDEO TiKTOK ♣* 

♦️ *Nama Video:* 
${maximus.title}
♦️ *Nama Audio:* 
${maximus.title_audio}

*🔔 join Saluran info © Rza 2005*\nhttps://whatsapp.com/channel/0029Vaip0EG72WTuTkQRms0e\n\n*💌Ayu follow ig Botz ini jika Mau*\nhttps://instagram.com/rezaa.205\n`;
await Sayurza2005.sendMessage(m.chat, { video: { url: maximus.video[0] }, caption: caption })
await Sayurza2005.sendMessage(m.chat, { audio: { url: maximus.audio[0] }, mimetype: "audio/mpeg", ptt: false }, { quoted:metarzavi })
      } catch (e) {
		console.log(e)
		replyrzasyu(e)
	}
}
break

case 'igimage':        
case 'igimg': {
Sayurza2005.sendMessage(from, { react: { text: "⏲️", key: m.key }})
   if (!text) return m.replyrzasyu(`Anda perlu memberikan link ig foto, gambar Instagram`);

    let res;
    try {
        res = await fetch(`https://widipe.com/download/igdl?url=${encodeURIComponent(text)}`);
    } catch (error) {
        return m.replyrzasyu(`An error occurred: ${error.message}`);
    }

    let api_response;
    try {
        api_response = await res.json();
    } catch (error) {
        return m.replyrzasyu(`Failed to parse API response: ${error.message}`);
    }

    if (!api_response || !api_response.result || api_response.result.length === 0) {
        return m.replyrzasyu(`No video or image found or Invalid response from API.`);
    }

try {
    const mediaData = api_response.result[0]; // Ambil elemen pertama dari array result
    //const mediaType = mediaData.thumbnail ? 'image' : 'video'; // Periksa apakah thumbnail ada
    const mediaURL = mediaData.url;
    const cap = `*👥Ayu Follow Bot ini jika mau link:* \n💌 https://instagram.com/rezaa.205\n\n*🖼️ iNSTAGRAM DOWNLOAD GAMBAR*`;

           // await Sayurza2005.sendMessage(m.chat, { video: { url: mediaURL }, caption: cap }, { quoted:metarzavi });
           await Sayurza2005.sendMessage(m.chat, { image: { url: mediaURL }, caption: cap }, { quoted:metarzavi });
        
    } catch (error) {
        return m.replyrzasyu(`Failed to send media: ${error}`);
    }
}
break

case 'instagram':
case 'ig':
case 'igvideo':
case 'igvid': {
Sayurza2005.sendMessage(from, { react: { text: "⏲️", key: m.key }})
    if (!text) return m.replyrzasyu(`Anda perlu memberikan Link Video, ig`);

    let res;
    try {
        res = await fetch(`https://widipe.com/download/igdl?url=${encodeURIComponent(text)}`);
    } catch (error) {
        return m.replyrzasyu(`An error occurred: ${error.message}`);
    }

    let api_response;
    try {
        api_response = await res.json();
    } catch (error) {
        return m.replyrzasyu(`Failed to parse API response: ${error.message}`);
    }

    if (!api_response || !api_response.result || api_response.result.length === 0) {
        return m.replyrzasyu(`No video or image found or Invalid response from API.`);
    }

try {
    const mediaData = api_response.result[0]; // Ambil elemen pertama dari array result
    //const mediaType = mediaData.thumbnail ? 'image' : 'video'; // Periksa apakah thumbnail ada
    const mediaURL = mediaData.url;
    const cap = `*🔔 join Saluran info © Rza 2005*\nhttps://whatsapp.com/channel/0029Vaip0EG72WTuTkQRms0e\n\n*👥Ayu Follow Bot ini jika mau link:* \n💌 https://instagram.com/rezaa.205\n\n*🎦 iNSTAGRAM DOWNLOAD ViDEO*`;

            await Sayurza2005.sendMessage(m.chat, { video: { url: mediaURL }, caption: cap }, { quoted:metarzavi });
            //Sayurza2005.sendMessage(m.chat, { image: { url: mediaURL }, caption: cap }, { quoted:metarzavi });
        
    } catch (error) {
        return m.replyrzasyu(`Failed to send media: ${error}`);
    }
}
break

case 'hd': case 'hdr': case 'remini': {
Sayurza2005.sendMessage(from, { react: { text: "🎞️", key: m.key }})
if (!quoted) return replyrzasyu(`Dimana gambarnya?`)
if (!/image/.test(mime)) return replyrzasyu(`Kirim/Balas Foto Dengan Keterangan ${prefix + command}`)
			replyrzasyu(mess.wait)
			const { remini } = require('./lib/remini')
			let media = await quoted.download()
			let proses = await remini(media, "enhance")
			Sayurza2005.sendMessage(m.chat, { image: proses, caption: mess.done}, { quoted:metarzavi})
			}
			break
case 'qc': {
                const {
                    quote
                } = require('./lib/quote.js')
                if (!q) return replyrzasyu('Mana Tulisan Text? qc halo')
                let ppnyauser = await await Sayurza2005.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/6880771a42bad09dd6087.jpg')
                const rest = await quote(q, pushname, ppnyauser)
                replyrzasyu(mess.wait)
                Sayurza2005.sendImageAsSticker(m.chat, rest.result, m, {
                    packname: `${global.stickername}`

                })
            }
            break;
case "couple": case"ppcp":{
let anu = await fetchJson("https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json")
replyrzasyu(mess.wait)
let random = anu[Math.floor(Math.random() * anu.length)]
Sayurza2005.sendMessage(m.chat,{image: {url: random.male,},caption: `*🌿 Pasangan Laki-Laki*\n*👥Ayu Follow Bot ini jika mau link:* \nhttps://instagram.com/rezaa.205\n*informasi Botz ini Terbaru*\n*Bisa Chat instagram*`,},{quoted:metarzavi,})
Sayurza2005.sendMessage(m.chat,{image: {url: random.female,},caption: `*🌿 Pasangan Wanita*\n*👥Ayu Follow Bot ini jika mau link:* \nhttps://instagram.com/rezaa.205\n*informasi Botz ini Terbaru*\n*Bisa Chat instagram*`,},{quoted:metarzavi,})
}
break
case 'sswebhp': case 'ssweb':{
if (!text) return replyrzasyu(`Mana linknya kak?`)
try {
Sayurza2005.sendMessage(m.chat, { image: { url: `https://skizo.tech/api/ssweb?type=mobile&url=${encodeURIComponent(text)}&apikey=nanogembul` }}, { quoted:metarzavi})
			} catch {
	  replyrzasyu('yah Error kak laporankan ke owner agar di perbaiki')
	}
}
break
case 'ghstalk': case 'githubnama':
if (!text) return replyrzasyu('Harap Masukan Username')
replyrzasyu('⏲️ Mencari Nama Github...')
    let nya = await fetch(`https://api.github.com/users/${text}`).then(a => a.json())
    let thumb = await getBuffer(nya.avatar_url)
    let hasil = `*── 「 GITHUB TANGKAi 」 ──*
⑆ *Bio*: ${nya.bio}
⑆ *Perusahaan*: ${nya.company}
⑆ *Repo Publik:* ${nya.public_repos}
⑆ *Gists Publik:* ${nya.public_gists}
⑆ *Follower:* ${nya.followers}
⑆ *Following:* ${nya.following}
⑆ *Lokasi:* ${nya.location}
⑆ *Link:* ${nya.html_url}
`
Sayurza2005.sendMessage(m.chat, { image: thumb, caption: hasil, quoted:metarzavi })
break
case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':{
if (!qmsg) return m.replyrzasyu("replyrzasyu audio nya")
try {
let set
if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
if (/earrape/.test(command)) set = '-af volume=12'
if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
if (/reverse/.test(command)) set = '-filter_complex "areverse"'
if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
if (/audio/.test(mime)) {
let media = await Sayurza2005.downloadAndSaveMediaMessage(qmsg)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m.replyrzasyu(err)
let buff = fs.readFileSync(ran)
Sayurza2005.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
fs.unlinkSync(ran)
})
} else m.replyrzasyu(`Reply to the audio you want to change with a caption *${prefix + command}*`)
} catch (e) {
console.log(e)
m.replyrzasyu('error')
}}
break
case 'lahelu': {
Sayurza2005.sendMessage(from, { react: { text: "⏲️", key: m.key }})
	let tags = ['lucu', 'relate', 'gaming', 'nostalgia', 'teknologi', 'random', 'komik', 'editan', 'wtf', 'olahraga', 'opini', 'dark', 'absurd', 'cringe', 'sus', 'binatang']
	if(text && !tags.includes(text)) return m.replyrzasyu(`Meme "${text}" tidak di temukan! \n\n${tags.map(v => `- ${v}`).join('\n')}`) 
	let url;
	let page = Math.round(Math.random() * 25)
	if(!text) url = `https://lahelu.com/api/post/get-posts?feed=1&page=${page}`
	if(text) url = `https://lahelu.com/api/post/get-posts?feed=1&hashtags[]=${text}&page=${page}`
	let anu = (await axios.get(url)).data
	let data = anu.postInfos[Math.floor(Math.random() * anu.postInfos.length)]
	if(/^video/i.test(data.media)) return await Sayurza2005.sendMessage(m.chat, { video: { url: 'https://cache.lahelu.com/'+data.media }, caption: data.title, viewOnce: true }, { quoted:metarzavi }) 
	if(/^image/i.test(data.media)) return await Sayurza2005.sendMessage(m.chat, { image: { url: 'https://cache.lahelu.com/'+data.media }, caption: data.title, viewOnce: true }, { quoted:metarzavi }) 
	}
break
case 'soundkane':
Sayurza2005.sendMessage(from, { react: { text: "🎧", key: m.key }})
if (!text) return replyrzasyu(`*Contoh*: ${prefix + command} 6\n🎧───────────────•
│› ${prefix}SoundKane 1
│› ${prefix}SoundKane 2
│› ${prefix}SoundKane 3
│› ${prefix}SoundKane 4
│› ${prefix}SoundKane 5
│› ${prefix}SoundKane 6
│› ${prefix}SoundKane 7
│› ${prefix}SoundKane 9
│› ${prefix}SoundKane 10
│› ${prefix}SoundKane 11
│› ${prefix}SoundKane 12
│› ${prefix}SoundKane 13
│› ${prefix}SoundKane 14
│› ${prefix}SoundKane 15
│› ${prefix}SoundKane 16
│› ${prefix}SoundKane 17
│› ${prefix}SoundKane 18
│› ${prefix}SoundKane 19
│› ${prefix}SoundKane 20
│› ${prefix}SoundKane 21
│› ${prefix}SoundKane 22
│› ${prefix}SoundKane 23
│› ${prefix}SoundKane 24
│› ${prefix}SoundKane 25
│› ${prefix}SoundKane 26
│› ${prefix}SoundKane 27
│› ${prefix}SoundKane 28
│› ${prefix}SoundKane 29
│› ${prefix}SoundKane 30
│› ${prefix}SoundKane 31
│› ${prefix}SoundKane 32
│› ${prefix}SoundKane 33
│› ${prefix}SoundKane 34
│› ${prefix}SoundKane 35
│› ${prefix}SoundKane 36
│› ${prefix}SoundKane 37
│› ${prefix}SoundKane 38
│› ${prefix}SoundKane 39
│› ${prefix}SoundKane 40
│› ${prefix}SoundKane 41
│› ${prefix}SoundKane 42
│› ${prefix}SoundKane 43
│› ${prefix}SoundKane 44
│› ${prefix}SoundKane 45
│› ${prefix}SoundKane 46
│› ${prefix}SoundKane 47
│› ${prefix}SoundKane 48
│› ${prefix}SoundKane 49
│› ${prefix}SoundKane 50
📛───────────────•`)
            let Maximus;

    if (text.toLowerCase() === '1') {
        Maximus = 'SoundKane1';
    } else if (text.toLowerCase() === '2') {
        Maximus = 'SoundKane2';
    } else if (text.toLowerCase() === '3') {
        Maximus = 'SoundKane3';
    } else if (text.toLowerCase() === '4') {
        Maximus = 'SoundKane4';
    } else if (text.toLowerCase() === '5') {
        Maximus = 'SoundKane5';
    } else if (text.toLowerCase() === '6') {
        Maximus = 'SoundKane6';
    } else if (text.toLowerCase() === '7') {
        Maximus = 'SoundKane7';
    } else if (text.toLowerCase() === '8') {
        Maximus = 'SoundKane8';
    } else if (text.toLowerCase() === '9') {
        Maximus = 'SoundKane9';
    } else if (text.toLowerCase() === '10') {
        Maximus = 'SoundKane10';
    } else if (text.toLowerCase() === '11') {
        Maximus = 'SoundKane11';
    } else if (text.toLowerCase() === '12') {
        Maximus = 'SoundKane12';
    } else if (text.toLowerCase() === '13') {
        Maximus = 'SoundKane13';
    } else if (text.toLowerCase() === '14') {
        Maximus = 'SoundKane14';
    } else if (text.toLowerCase() === '15') {
        Maximus = 'SoundKane15';
    } else if (text.toLowerCase() === '16') {
        Maximus = 'SoundKane16';
    } else if (text.toLowerCase() === '17') {
        Maximus = 'SoundKane17';
    } else if (text.toLowerCase() === '18') {
        Maximus = 'SoundKane18';
    } else if (text.toLowerCase() === '19') {
        Maximus = 'SoundKane19';
    } else if (text.toLowerCase() === '20') {
        Maximus = 'SoundKane20';
    } else if (text.toLowerCase() === '21') {
        Maximus = 'SoundKane21';
    } else if (text.toLowerCase() === '22') {
        Maximus = 'SoundKane22';
    } else if (text.toLowerCase() === '23') {
        Maximus = 'SoundKane23';
    } else if (text.toLowerCase() === '24') {
        Maximus = 'SoundKane24';
    } else if (text.toLowerCase() === '25') {
        Maximus = 'SoundKane25';
    } else if (text.toLowerCase() === '26') {
        Maximus = 'SoundKane26';
    } else if (text.toLowerCase() === '27') {
        Maximus = 'SoundKane27';
    } else if (text.toLowerCase() === '28') {
        Maximus = 'SoundKane28';
    } else if (text.toLowerCase() === '29') {
        Maximus = 'SoundKane29';
    } else if (text.toLowerCase() === '30') {
        Maximus = 'SoundKane30';
    } else if (text.toLowerCase() === '31') {
        Maximus = 'SoundKane31';
    } else if (text.toLowerCase() === '32') {
        Maximus = 'SoundKane32';
    } else if (text.toLowerCase() === '33') {
        Maximus = 'SoundKane33';
    } else if (text.toLowerCase() === '34') {
        Maximus = 'SoundKane34';
    } else if (text.toLowerCase() === '35') {
        Maximus = 'SoundKane35';
    } else if (text.toLowerCase() === '36') {
        Maximus = 'SoundKane36';
    } else if (text.toLowerCase() === '37') {
        Maximus = 'SoundKane37';
    } else if (text.toLowerCase() === '38') {
        Maximus = 'SoundKane38';
    } else if (text.toLowerCase() === '39') {
        Maximus = 'SoundKane39';
    } else if (text.toLowerCase() === '40') {
        Maximus = 'SoundKane40';
    } else if (text.toLowerCase() === '41') {
        Maximus = 'SoundKane41';
    } else if (text.toLowerCase() === '42') {
        Maximus = 'SoundKane42';
    } else if (text.toLowerCase() === '43') {
        Maximus = 'SoundKane43';
    } else if (text.toLowerCase() === '44') {
        Maximus = 'SoundKane44';
    } else if (text.toLowerCase() === '45') {
        Maximus = 'SoundKane45';
    } else if (text.toLowerCase() === '46') {
        Maximus = 'SoundKane46';
    } else if (text.toLowerCase() === '47') {
        Maximus = 'SoundKane47';
    } else if (text.toLowerCase() === '48') {
        Maximus = 'SoundKane48';
    } else if (text.toLowerCase() === '49') {
        Maximus = 'SoundKane49';
    } else if (text.toLowerCase() === '50') {
        Maximus = 'SoundKane50';
    } else {
        return m.replyrzasyu(`Angka yang kamu masukan Tidak ada Atau Angka Berlebihan Sampai ${prefix}SoundKane50`)
    }
    try {
        var hannaudio = await getBuffer(`https://github.com/Hann109/SoundKanee/raw/main/${Maximus}.mp3`)
 Sayurza2005.sendMessage(m.chat, { audio: hannaudio, mimetype: 'audio/mp4', ptt: true, 
})
    } catch (error) {
        replyrzasyu('An error occurred while retrieving audio data. Please try again later.');
    }
    break

case 'akira': case 'akiyama': case 'ana': case 'art': case 'asuna': case 'ayuzawa': case 'boruto': case 'bts': case 'chiho': case 'chitoge': case 'cosplay': case 'cosplayloli': case 'cosplaysagiri': case 'cyber': case 'deidara': case 'doraemon': case 'elaina': case 'emilia': case 'erza': case 'exo':  case 'gamewallpaper': case 'gremory': case 'hacker': case 'hestia': case 'hinata': case 'husbu': case 'inori': case 'islamic': case 'isuzu': case 'itachi': case 'itori': case 'jennie': case 'jiso': case 'justina': case 'kaga': case 'kagura': case 'kakasih': case 'kaori': case 'cartoon': case 'shortquote': case 'keneki': case 'kotori': case 'kurumi': case 'lisa': case 'madara': case 'megumin': case 'mikasa': case 'mikey': case 'miku': case 'minato': case 'mountain': case 'naruto': case 'neko2': case 'nekonime': case 'nezuko': case 'onepiece': case 'pentol': case 'pokemon': case 'programming':  case 'randomnime': case 'randomnime2': case 'rize': case 'rose': case 'sagiri': case 'sakura': case 'sasuke': case 'satanic': case 'shina': case 'shinka': case 'shinomiya': case 'shizuka': case 'shota': case 'space': case 'technology': case 'tejina': case 'toukachan': case 'tsunade': case 'yotsuba': case 'yuki': case 'yulibocil': case 'yumeko':{
replyrzasyu(mess.wait)
let heyy
if (/akira/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akira.json')
if (/akiyama/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akiyama.json')
if (/ana/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ana.json')
if (/art/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/art.json')
if (/asuna/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/asuna.json')
if (/ayuzawa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ayuzawa.json')
if (/boneka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boneka.json')
if (/boruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boruto.json')
if (/bts/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/bts.json')
if (/cecan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cecan.json')
if (/chiho/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chiho.json')
if (/chitoge/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chitoge.json')
if (/cogan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cogan.json')
if (/cosplay/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplay.json')
if (/cosplayloli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplayloli.json')
if (/cosplaysagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplaysagiri.json')
if (/cyber/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cyber.json')
if (/deidara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/deidara.json')
if (/doraemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/doraemon.json')
if (/eba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/eba.json')
if (/elaina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/elaina.json')
if (/emilia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/emilia.json')
if (/erza/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/erza.json')
if (/exo/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/exo.json')
if (/femdom/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/femdom.json')
if (/freefire/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/freefire.json')
if (/gamewallpaper/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gamewallpaper.json')
if (/glasses/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/glasses.json')
if (/gremory/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gremory.json')
if (/hacker/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hekel.json')
if (/hestia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hestia.json')
if (/husbu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/husbu.json')
if (/inori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/inori.json')
if (/islamic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/islamic.json')
if (/isuzu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/isuzu.json')
if (/itachi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itachi.json')
if (/itori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itori.json')
if (/jennie/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jeni.json')
if (/jiso/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jiso.json')
if (/justina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/justina.json')
if (/kaga/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaga.json')
if (/kagura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kagura.json')
if (/kakasih/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kakasih.json')
if (/kaori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaori.json')
if (/cartoon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kartun.json')
if (/shortquote/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/katakata.json')
if (/keneki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/keneki.json')
if (/kotori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kotori.json')
if (/kpop/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kpop.json')
if (/kucing/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kucing.json')
if (/kurumi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kurumi.json')
if (/lisa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/lisa.json')
if (/loli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/loli.json')
if (/madara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/madara.json')
if (/megumin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/megumin.json')
if (/mikasa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikasa.json')
if (/mikey/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikey.json')
if (/miku/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/miku.json')
if (/minato/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/minato.json')
if (/mobile/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mobil.json')
if (/motor/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/motor.json')
if (/mountain/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mountain.json')
if (/naruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/naruto.json')
if (/neko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/neko.json')
if (/neko2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/neko2.json')
if (/nekonime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nekonime.json')
if (/nezuko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nezuko.json')
if (/onepiece/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/onepiece.json')
if (/pentol/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pentol.json')
if (/pokemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pokemon.json')
if (/profil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/profil.json')
if (/progamming/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/programming.json')
if (/pubg/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pubg.json')
if (/randblackpink/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randblackpink.json')
if (/randomnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime.json')
if (/randomnime2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime2.json')
if (/rize/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rize.json')
if (/rose/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rose.json')
if (/ryujin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ryujin.json')
if (/sagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sagiri.json')
if (/sakura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sakura.json')
if (/sasuke/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sasuke.json')
if (/satanic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/satanic.json')
if (/shina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shina.json')
if (/shinka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinka.json')
if (/shinomiya/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinomiya.json')
if (/shizuka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shizuka.json')
if (/shota/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shota.json')
if (/space/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tatasurya.json')
if (/technology/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/technology.json')
if (/tejina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tejina.json')
if (/toukachan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/toukachan.json')
if (/tsunade/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tsunade.json')
if (/waifu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/waifu.json')
if (/wallhp/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallhp.json')
if (/wallml/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallml.json')
if (/wallmlnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallnime.json')
if (/yotsuba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yotsuba.json')
if (/yuki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yuki.json')
if (/yulibocil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yulibocil.json')
if (/yumeko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yumeko.json')
let yeha = heyy[Math.floor(Math.random() * heyy.length)]
Sayurza2005.sendMessage(m.chat, { image: { url: yeha }, caption : mess.success }, { quoted:metarzavi })
}
break
case "sad1":
        case "sad2":
        case "sad3":
        case "sad4":
        case "sad5":
        case "sad6":
        case "sad7":
        case "sad8":
        case "sad9":
        case "sad10":
        case "sad11":
        case "sad12":
        case "sad13":
        case "sad14":
        case "sad15":
        case "sad16":
        case "sad17":
        case "sad18":
        case "sad19":
        case "sad20":
        case "sad21":
        case "sad22":
        case "sad23":
        case "sad24":
        case "sad25":
        case "sad26":
        case "sad27":
        case "sad28":
        case "sad29":
        case "sad30":
        case "sad31":
        case "sad32":
        case "sad33":
              bayuamore_dev = await getBuffer(
          `https://github.com/ZassTdr/Sound-Sad/raw/main/Sad-Music/${command}.mp3`
         );
         await Sayurza2005.sendMessage(
          m.chat,
          {
           audio: bayuamore_dev,
           mimetype: "audio/mp4",
           ptt: true,
          },
          { quoted:metarzavi }
         );
         break;
         case 'clearchat':
Sayunimun('🔛')
break
case 'neko':{
 waifudd = await axios.get(`https://waifu.pics/api/sfw/neko`)       
            await Sayurza2005.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'waifu':{
 waifudd = await axios.get(`https://waifu.pics/api/sfw/wink`)       
            await Sayurza2005.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'loli':{
 waifudd = await axios.get(`https://nekos.life/api/v2/img/waifu`)       
            await Sayurza2005.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'fb': case 'fbdl': case 'facebook': case 'facebookvideo': {
Sayurza2005.sendMessage(from, { react: { text: "🎦", key: m.key }})
           if (!text)  return replyrzasyu(`*Contoh :*\n*${prefix + command}* https://www.facebook.com/reel/325991790572112/?mibextid=4MzKDw5ooBP2efJs`) 
     replyrzasyu('⬜ ◽◻️▫️ \n _*[ ⏲️ ] L o d i n g...*_')
  try {
    const data = await fetchJson(`https://widipe.com/download/fbdl?url=${encodeURIComponent(text)}`)
    const tex = `*🎦 DOWNLOAD ViDEO FACEBOOK ✅*\n\n*🔔 join Saluran info ©Rza2005*\nhttps://whatsapp.com/channel/0029Vaip0EG72WTuTkQRms0e\n\n*👥Ayu Follow Bot ini jika mau link:* \n💌 https://instagram.com/rezaa.205\n\n*🎦 DOWNLOAD ViDEO FACEBOOK*`;
    const videoBuffer = data.result.HD;
    Sayurza2005.sendMessage(m.chat, { caption: tex, video: { url: videoBuffer} }, { quoted:metarzavi });
  } catch (error) {
    replyrzasyu('Yah Selver error kak')
  }
  }
  break
case "gpt4": 
if (!text) return replyrzasyu('Mau Nanya apa Kak?')
try {
let cct = await fetchJson(`https://widipe.com/gpt4?text=${text}`)
let resq = cct.result
replyrzasyu(`${resq}`)
} catch (err) {
m.replyrzasyu('Website Nya error')
}
break
case 'ai':
case 'openai':
case 'open-ai': {
	if (!text) return replyrzasyu(`*• Contoh:* ${prefix + command} Merek hp terkenal di indonesia`);  
await Sayurza2005.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}}) 
        try {
let gpt = await (await fetch(`https://widipe.com/openai?text=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: '> Open AI\n\n' + gpt.result
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./Imagev/openai.jpg')}, { upload: Sayurza2005.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"✨ Makasih Kak Open Ai ✨▶","id":"${prefix}Creator"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363294772037916@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted:metarzavi })
await Sayurza2005.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replyrzasyu("`*Error Kak :(*`")
}
}
break
case 'bingimg-2d': case 'bingimg2': case 'bingimg': {
if (!text) return replyrzasyu(`*Contoh: ${prefix + command} kucing imut*\n\n∝ *© Sayurza2005*`)
	replyrzasyu("```( Al Bingimg ) Wait kak Loding...```")
  let ini = await fetchJson(`https://widipe.com/bingimg?text=${text}`);
for (let bing of ini.result) {
await sleep(500)
await Sayurza2005.sendMessage(m.chat, { image: { url: bing }, caption: `*© Sayu Rza2005 Hasil Dari*: ${text}`}, {quoted: m})
}
}
break
case 'tts':{
if (!text) return replyrzasyu(`( ! Suara google ! ) ${prefix}${command} Kucing imut`)
 const a = await (await axios.post("https://gesserit.co/api/tiktok-tts", { text: text, voice: "id_001" }, { headers: { Referer: "https://gesserit.co/tiktok", "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36" ,responseType: "arraybuffer"}})).data
const b = Buffer.from(a.audioUrl)
Sayurza2005.sendMessage(m?.chat, { audio: Buffer.from(a.audioUrl.split("base64,")[1],"base64"), mimetype: "audio/mpeg" })
}
break
case 'attp': case 'ttp': {
  if (!q) return m.replyrzasyu(`*Contoh:* Mana Tulisan teks`)
// wm avz
  const { createCanvas, loadImage } = require('canvas');
  const { Buffer } = require('buffer');
  const canvasWidth = 800;
  const canvasHeight = 600;
  const backgroundColor = '#f0f0f0';
// wm avz
  const canvas = createCanvas(canvasWidth, canvasHeight);
  const ctx = canvas.getContext('2d');
// wm avz
  const backgroundImage = 'https://example.com/background-image.jpg';
  try {
    const img = await loadImage(backgroundImage);
    ctx.drawImage(img, 0, 0, canvasWidth, canvasHeight);
  } catch (error) {
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
  }
// wm avz
  ctx.strokeStyle = '#000';
  ctx.lineWidth = 4;
  ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
  ctx.shadowBlur = 10;
  ctx.strokeRect(20, 20, canvasWidth - 40, canvasHeight - 40);
// wm avz
  let fontSize = 80;
  ctx.font = `${fontSize}px 'Arial'`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = '#333';
// wm avz  
  const textGradient = ctx.createLinearGradient(0, 0, canvasWidth, canvasHeight);
  textGradient.addColorStop(0, '#ff0000');
  textGradient.addColorStop(1, '#0000ff');
  ctx.fillStyle = textGradient;
// wm avz
  let textWidth = ctx.measureText(text).width;
  while (textWidth > canvasWidth - 40) {
    fontSize--;
    ctx.font = `${fontSize}px 'Arial'`;
    textWidth = ctx.measureText(text).width;
  }
// wm avz
  ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
  ctx.shadowBlur = 10;
  ctx.fillText(text, canvasWidth / 2, canvasHeight / 2);
// wm avz
  const buffer = canvas.toBuffer('image/png');
// wm avz
  Sayurza2005.sendImageAsSticker(m.chat, buffer, m, { packname: global.pack, author: global.author });
}
break
///=========== Tambah Fitur ===========////:
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
Sayurza2005_dev = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await Sayurza2005.sendMessage(m.chat, { audio: Sayurza2005_dev, mimetype: 'audio/mp4', ptt: true }, { quoted:metarzavi })     
break
//==============👒👒👒=====================//
case 'menu': case 'help': case 'allmenu':{
Sayurza2005.sendMessage(from, { react: { text: "👒", key: m.key }})
await loading()
 let Rzamdtxt = `
╭━━ *「 SAYU MD WHATSAPP 」*
║⌸ ${sayunihiytimewisher} ⍓
┃⌸ Hay ${pushname}
┃ *Lihat List Menu Di Bawah ini*
┞────────────────────•
╽ *•Developer Wabot di instagram•*
║https://instagram.com/rezaa.205
╿  *instagram .owner Bot ini*`
//=======================================//

let sections = [{
title: ' 𖣂 Klik Disini  𖣂',
highlight_label: 'Rekomendasi',
rows: [{
title: 'PERATURAN',
description: `- Rules Jangan Spam⛔ Dan Kami tidak simpan hasil download anda ♻️`, 
id: `${prefix}donasiia`
}]
}]

let listMessage = {
    title: ' 𖣂 Klik Disini 𖣂', 
    sections
};

//=======================================//

let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 	mentionedJid: [m?.sender], 
 	isForwarded: true, 
	 forwardedNewsletterMessageInfo: {
			newsletterJid: '120363294772037916@newsletter',
			newsletterName: `🔲 ≑ SAYU FOLLOW CHANNEL ≑ 🔲`, 
			serverMessageId: -1
		},
	businessMessageForwardInfo: { businessOwnerJid: Sayurza2005.decodeJid(Sayurza2005.user.id) },
 externalAdReply: { 
 title: '⪨ S A Y U▭M D▭M U L T i▭D E V I C E ⪩', 
  body: "◁◁◁◁◁◁◜❬ Sayu-Md Vi 6.4.4 ❭◝▷▷▷▷▷▷",   
 thumbnailUrl: `https://widipe.com/file/WjYYszPNz1Xb.jpg`,
 sourceUrl: '',
 mediaType: 1,
 renderLargerThumbnail: true 
 }
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: Rzamdtxt
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: `╰© 2024 Sayu-Md Rza 2005`   
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `*✾✾✾ SAYU MD WHATSAPP ✾✾✾*`,
thumbnailUrl: "", 
 gifPlayback: true,   
 subtitle: "By Reza 2005",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ video: { url: 'https://qu.ax/GjbY.mp4' }, gifPlayback: true }, { upload: Sayurza2005.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
  {
               "name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage)
              },
                {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"☊ instagram owner ☊\",\"url\":\"https://instagram.com/rezaa.205\",\"merchant_url\":\"https://www.google.com\"}"
              },
                {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"⌸ Github Botz ⌸\",\"url\":\"https://github.com/Rez4-4\",\"merchant_url\":\"https://www.google.com\"}"
              },
                {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"☰ All Menu ☰","id":"${prefix}allmenusayuv1"}`
   }]
                })
            })
        }
    }
}, {
    quoted:metarzavi
});

await Sayurza2005.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})
}
break
case "halosayuvi6": case "rza2005vi6": case "allmenusayuv1": {
Sayurza2005.sendMessage(from, { react: { text: "🎴", key: m.key }})
await loading()
const uavaua6466 = `
⌸ Hay ${pushname}
> ⌚ ${sayunihiytimewisher} ⍓

> *M e n u Downlod*
◧ ⁃ ${prefix}igvideo
◧ ⁃ ${prefix}istagram
◧ ⁃ ${prefix}tiktok
◧ ⁃ ${prefix}facebook
◧ ⁃ ${prefix}ssweb
◧ ⁃ ${prefix}tourl
◧ ⁃ ${prefix}mediafire

> *M e n u Sticker*
◧ ⁃ ${prefix}stiker
◧ ⁃ ${prefix}remini
◧ ⁃ ${prefix}hd
◧ ⁃ ${prefix}toimg
◧ ⁃ ${prefix}toimage
◧ ⁃ ${prefix}smeme
◧ ⁃ ${prefix}take
◧ ⁃ ${prefix}toaudio
◧ ⁃ ${prefix}tomp3
◧ ⁃ ${prefix}tovn
◧ ⁃ ${prefix}toqr
◧ ⁃ ${prefix}ttp
◧ ⁃ ${prefix}attp
◧ ⁃ ${prefix}toviewonce
◧ ⁃ ${prefix}githubnama
◧ ⁃ ${prefix}fliptext
◧ ⁃ ${prefix}lahelu
◧ ⁃ ${prefix}emojimix
◧ ⁃ ${prefix}Donasibot

> *M e n u AI*
◧ ⁃ ${prefix}ai
◧ ⁃ ${prefix}gpt4
◧ ⁃ ${prefix}openai
◧ ⁃ ${prefix}chatgpt

> *M e n u internet*
◧ ⁃ ${prefix}infogempa
◧ ⁃ ${prefix}bingimg
◧ ⁃ ${prefix}bingimg-2d
◧ ⁃ ${prefix}tts Halo

> *M e n u Anime*
◧ ⁃ ${prefix}ppcp
◧ ⁃ ${prefix}loli
◧ ⁃ ${prefix}waifu
◧ ⁃ ${prefix}neko

> *M e n u Runtime*
◧ ⁃ ${prefix}ping
◧ ⁃ ${prefix}neko
◧ ⁃ ${prefix}runtime

> *Ubah Suran Vn*
◧ ⁃ ${prefix}bass
◧ ⁃ ${prefix}robot
◧ ⁃ ${prefix}blown
◧ ⁃ ${prefix}deep
◧ ⁃ ${prefix}earrape
◧ ⁃ ${prefix}fast
◧ ⁃ ${prefix}fat
◧ ⁃ ${prefix}nightcore
◧ ⁃ ${prefix}reverse
◧ ⁃ ${prefix}slow
◧ ⁃ ${prefix}smooth
◧ ⁃ ${prefix}tupai

> *Menu Gambar Anime*
◧ ⁃ ${prefix}akira
◧ ⁃ ${prefix}akiyama
◧ ⁃ ${prefix}ana
◧ ⁃ ${prefix}asuna
◧ ⁃ ${prefix}ayuzawa
◧ ⁃ ${prefix}boruto
◧ ⁃ ${prefix}chiho
◧ ⁃ ${prefix}chitoge
◧ ⁃ ${prefix}cosplayloli
◧ ⁃ ${prefix}cosplaysagiri
◧ ⁃ ${prefix}deidara
◧ ⁃ ${prefix}doraemon
◧ ⁃ ${prefix}elaina
◧ ⁃ ${prefix}emilia
◧ ⁃ ${prefix}erza
◧ ⁃ ${prefix}gremory
◧ ⁃ ${prefix}hestia
◧ ⁃ ${prefix}hinata
◧ ⁃ ${prefix}husbu
◧ ⁃ ${prefix}inori
◧ ⁃ ${prefix}isuzu
◧ ⁃ ${prefix}itachi
◧ ⁃ ${prefix}itori
◧ ⁃ ${prefix}kaga
◧ ⁃ ${prefix}kagura
◧ ⁃ ${prefix}kakasih
◧ ⁃ ${prefix}kaori
◧ ⁃ ${prefix}keneki
◧ ⁃ ${prefix}kotori
◧ ⁃ ${prefix}kurumi
◧ ⁃ ${prefix}loli
◧ ⁃ ${prefix}madara
◧ ⁃ ${prefix}megumin
◧ ⁃ ${prefix}mikasa
◧ ⁃ ${prefix}mikey
◧ ⁃ ${prefix}miku
◧ ⁃ ${prefix}minato
◧ ⁃ ${prefix}naruto
◧ ⁃ ${prefix}neko
◧ ⁃ ${prefix}neko2
◧ ⁃ ${prefix}nekonime
◧ ⁃ ${prefix}nezuko
◧ ⁃ ${prefix}onepiece
◧ ⁃ ${prefix}pokemon
◧ ⁃ ${prefix}randomnime
◧ ⁃ ${prefix}randomnime2
◧ ⁃ ${prefix}rize
◧ ⁃ ${prefix}sagiri
◧ ⁃ ${prefix}sakura
◧ ⁃ ${prefix}sasuke
◧ ⁃ ${prefix}shina
◧ ⁃ ${prefix}shinka
◧ ⁃ ${prefix}shinomiya
◧ ⁃ ${prefix}shizuka
◧ ⁃ ${prefix}shota
◧ ⁃ ${prefix}tejina
◧ ⁃ ${prefix}toukachan
◧ ⁃ ${prefix}tsunade
◧ ⁃ ${prefix}waifu
◧ ⁃ ${prefix}animewall
◧ ⁃ ${prefix}yotsuba
◧ ⁃ ${prefix}yuki
◧ ⁃ ${prefix}yulibocil
◧ ⁃ ${prefix}yumeko

> *M e n u Group*
◧ ⁃ ${prefix}closetime
◧ ⁃ ${prefix}opentime
◧ ⁃ ${prefix}kick
◧ ⁃ ${prefix}add
◧ ⁃ ${prefix}promote
◧ ⁃ ${prefix}demote
◧ ⁃ ${prefix}setdesc
◧ ⁃ ${prefix}setppgc
◧ ⁃ ${prefix}tagall
◧ ⁃ ${prefix}hidetag
◧ ⁃ ${prefix}totag
◧ ⁃ ${prefix}group *[option]*
◧ ⁃ ${prefix}editinfo
◧ ⁃ ${prefix}linkgc
◧ ⁃ ${prefix}revoke

> *Sound Sampai 161*
◧ ⁃ ${prefix}Sound1
> *Sad Sound Sampai 33*
◧ ⁃ ${prefix}Sad6
> *Sound Kane Sampai 50*
◧ ⁃ ${prefix}soundkane 1

> *M e n u Owner*
◧ ⁃ ${prefix}getsession
◧ ⁃ ${prefix}deletesession
◧ ⁃ ${prefix}premium
◧ ⁃ ${prefix}join
◧ ⁃ ${prefix}bcgc
◧ ⁃ ${prefix}shutdown  
◧ ⁃ ${prefix}restart
◧ ⁃ ${prefix}autoread *[option]*
◧ ⁃ ${prefix}autotyping *[option]*
◧ ⁃ ${prefix}autorecording *[option]*
◧ ⁃ ${prefix}autorecordtyp *[option]*
◧ ⁃ ${prefix}autobio *[option]*
◧ ⁃ ${prefix}autoswview *[option]*
◧ ⁃ ${prefix}mode *[option]*
◧ ⁃ ${prefix}block
◧ ⁃ ${prefix}unblock 
◧ ⁃ ${prefix}backup
◧ ⁃ ${prefix}addowner
◧ ⁃ ${prefix}delowner

> *Pushkontak Dan jpm*
◧ ⁃ ${prefix}pushkontakv
◧ ⁃ ${prefix}pushkontak
◧ ⁃ ${prefix}savekontak
◧ ⁃ ${prefix}svkontak
◧ ⁃ ${prefix}sendkontak
◧ ⁃ ${prefix}getcontact
◧ ⁃ ${prefix}jpm
◧ ⁃ ${prefix}jpm2

🗒 Sayu-MD Vi 6.4.4 ©Rza 2005`
replyrzasyu(uavaua6466)
}
break
case "infogempa": case "gempanews": {
const link = 'https://data.bmkg.go.id/DataMKG/TEWS/'
try {
let res = await fetch(link+'autogempa.json')
let anu = await res.json()
anu = anu.Infogempa.gempa
let txt = `*⛰iNFO GEMPA NEWS 🗺🗾📍*\n\n${anu.Wilayah}\n\n`
txt += `❞ Potensi : ${anu.Potensi}\n`
txt += `❞ Tanggal : ${anu.Tanggal}\n`
txt += `❞ Waktu : ${anu.Jam}\n\n`
txt += `❞ Magnitude : ${anu.Magnitude}\n`
txt += `❞ Kedalaman : ${anu.Kedalaman}\n`
txt += `❞ Koordinat : ${anu.Coordinates}${anu.Dirasakan.length > 3 ? `\nDirasakan : ${anu.Dirasakan}` : ''}`
await Sayurza2005.sendMessage(m.chat, { image: { url: link+anu.Shakemap }, caption: txt }, { quoted: m })
} catch (e) {
m.replyrzasyu(e)
}
}
break
case 'pushkontakv':
if (!isCreator) return replyrzasyu('Untuk Owner kak Rza 2005')
if (!m.isGroup) return replyrzasyu(mess.only.private)
if (!text) return replyrzasyu(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} jeda|teks`)
await replyrzasyu("Otw Boskuuu")
const halsss = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkonv4 = text.split("|")[1]
for (let men of halsss) {
if (/image/.test(mime)) {
media = await Sayurza2005.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await Sayurza2005.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv4 })
await sleep(text.split("|")[0])
} else {
await Sayurza2005.sendMessage(men, { text: global.tekspushkonv4 })
await sleep(text.split("|")[0])
}
}
replyrzasyu("Succes Boss!")
break

case 'getcontact': case 'savekontak': case 'svkontak':
if (!isCreator) return replyrzasyu('Untuk Owner kak Rza 2005')
if (!m.isGroup) return replyrzasyu(`Fitur Ini Khusus Group`)
let cmiggc = await Sayurza2005.groupMetadata(m.chat)
let orgiggc = participants.map(a => a.id)
vcard = ''
noPort = 0
for (let a of cmiggc.participants) {
    vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${a.id.split("@")[0]}\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${a.id.split("@")[0]}\nEND:VCARD\n`
} // (?); mengimpor kontak seluruh member - save
let nmfilect = './contacts.vcf'
replyrzasyu('*Mengimpor '+cmiggc.participants.length+' kontak..*')
fs.writeFileSync(nmfilect, vcard.trim())
await sleep(2000)
Sayurza2005.sendMessage(m.chat, {
    document: fs.readFileSync(nmfilect), mimetype: 'text/vcard', fileName: 'Contact.vcf', caption: 'GROUP: *'+cmiggc.subject+'*\nMEMBER: *'+cmiggc.participants.length+'*'
}, {ephemeralExpiration: 86400, quoted:metarzavi})
fs.unlinkSync(nmfilect)
break

case 'jpm':{
if (!isCreator) return replyrzasyu('Untuk Owner kak Rza 2005')
if (!text) return replyrzasyu(`*Penggunaan Salah Silahkan Gunakan Seperti Ini*\n${prefix+command} teks|jeda\n\nReply Gambar Untuk Mengirim Gambar Ke Semua Group\nUntuk Jeda Itu Delay Jadi Nominal Jeda Itu 1000 = 1 detik`)
await replyrzasyu("_Wait Tuan Ku✅_")
let getGroups = await Sayurza2005.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
for (let xnxx of anu) {
let metadat72 = await Sayurza2005.groupMetadata(xnxx)
let participanh = await metadat72.participants
if (/image/.test(mime)) {
media = await Sayurza2005.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await Sayurza2005.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
} else {
await Sayurza2005.sendMessage(xnxx, { text: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
}}
replyrzasyu("*Selesai Kak Rza 2005 √*")
}
break

case 'jpm2':{
if (!isCreator) return replyrzasyu('Untuk Owner kak Rza 2005')
if (!text) return replyrzasyu(`*Penggunaan Salah Silahkan Gunakan Seperti Ini*\n${prefix+command} teks|jeda\n\nReply Gambar Untuk Mengirim Gambar Ke Semua Group\nUntuk Jeda Itu Delay Jadi Nominal Jeda Itu 1000 = 1 detik`)
await replyrzasyu("_Wait Tuan Ku✅_")
let getGroups = await Sayurza2005.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
for (let xnxx of anu) {
let metadat72 = await Sayurza2005.groupMetadata(xnxx)
let participanh = await metadat72.participants
if (/image/.test(mime)) {
media = await Sayurza2005.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await Sayurza2005.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
} else {
await Sayurza2005.sendMessage(xnxx, { text: text.split('|')[0]})
await sleep(text.split('|')[1])
}}
replyrzasyu("*Selesai Kak Rza 2005 √*")
}
break

case 'sendkontak':
if (!isCreator) return replyrzasyu('Untuk Owner kak Rza 2005')
if (!m.isGroup) return replyrzasyu(`Khusus Group`)
if (!m.mentionedJid[0]) return replyrzasyu('Ex; .kontak @tag|nama')
let snContact = {
	displayName: "Contact", contacts: [{displayName: ownername, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+ownername+";;;\nFN:"+ownername+"\nitem1.TEL;waid="+m.mentionedJid[0].split('@')[0]+":"+m.mentionedJid[0].split('@')[0]+"\nitem1.X-ABLabel:Ponsel\nEND:VCARD"}]
} // (?); send kontak
Sayurza2005.sendMessage(m.chat, {contacts: snContact}, {ephemeralExpiration: 86400})
break
case 'savekontakv2': {
if (!isCreator) return replyrzasyu('Untuk Owner kak Rza 2005')
if (!m.isGroup) return replyrzasyu(mess.only.private)
if (!text) return replyrzasyu(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} idgroup\nUntuk Liat Id Group Silahkan Ketik .cekidgc`)
await replyrzasyu("_Wᴀɪᴛɪɴɢ ɪɴ ᴘʀᴏɢʀᴇss !!_")
const groupMetadataa = !m.isGroup? await Sayurza2005.groupMetadata(`${text}`).catch(e => {}) : ""
const participants = !m.isGroup? await groupMetadataa.participants : ""
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (isContacts) return
contacts.push(mem)
fs.writeFileSync('./database/contacts.json', JSON.stringify(contacts))
}
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
replyrzasyu(util.format(err))
} finally {
await Sayurza2005.sendMessage(from, { document: fs.readFileSync("./database/contacts.vcf"), fileName: "contacts.vcf", caption: "Sukses Tinggal Save Ya Kakak", mimetype: "text/vcard", }, { quoted:metarzavi })
contacts.splice(0, contacts.length)
fs.writeFileSync("./database/contacts.json", JSON.stringify(contacts))
}
}
break
case 'pushkontak':{
Sayurza2005.sendMessage(from, { react: { text: "⏲️", key: m.key }})
if (!isCreator) return m.replyrzasyu('*Fitur ini Untuk Developer Sayurza2005*')
if (!m.isGroup) return m.replyrzasyu(`di group coy`)
if (!text) return m.replyrzasyu(`Teks Nya Kak?`)
let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
let teksnye = `${q}`
m.replyrzasyu(`*Mengirim pesan ke ${mem.length} orang, waktu selesai ${mem.length * 3} detik*`)
for (let geek of mem) {
await sleep(3000)
Sayurza2005.sendMessage(geek, {text: `${teksnye}`}, {quoted:m})
}
m.replyrzasyu(`*Sukses mengirim pesan Ke ${mem.length} orang*`)
}
break
case 'ytv1':
case 'ytmp41': {
Sayurza2005.sendMessage(from, { react: { text: "🎦", key: m.key }})
  if (!text) return replyrzasyu('*Contoh:* .ytmp4 https://youtube.com/shorts/8lzumczP-ig?si=Xx-r7cFsGvVt2Xg8')
  replyrzasyu('⬜ ◽◻️▫️ \n _*[ ⏲️ ] L o d i n g...*_')
try {
const { youtube } = require("btch-downloader")
let { mp4 } = await youtube(text)
const ytc = `*🎦 DOWNLOAD ViDEO YOUTUBE ✅*\n\n*🔔 join Saluran info ©Rza2005*\nhttps://whatsapp.com/channel/0029Vaip0EG72WTuTkQRms0e\n\n*👥Ayu Follow Bot ini jika mau link:* \n💌 https://instagram.com/rezaa.205\n\n*🎦 DOWNLOAD ViDEO YOUTUBE*`;

Sayurza2005.sendMessage(m.chat, { video: { url:mp4}, caption: ytc }, { quoted:metarzavi })
} catch (e) {
    replyrzasyu('*terjadi error :*' + e);
}
}
break
case 'yta1': case 'ytmp31': {
Sayurza2005.sendMessage(from, { react: { text: "🔊", key: m.key }})
    if (!text) return replyrzasyu(`*Contoh :* .${command} .ytmp3 https://youtube.com/shorts/8lzumczP-ig?si=Xx-r7cFsGvVt2Xg8`);
    replyrzasyu('Audio Youtube*\n*🔔 join Saluran info ©Rza2005*\nhttps://whatsapp.com/channel/0029Vaip0EG72WTuTkQRms0e\n\n*👥Ayu Follow Bot ini jika mau link:* \n💌 https://instagram.com/rezaa.205');
 try {
const { youtube } = require("btch-downloader")
let { mp3 } = await youtube(text)
        let doc = { 
            audio: {
                url: mp3
            },
            mimetype: 'audio/mp4',
            fileName: `terserah.mp3`,
            contextInfo: {
                externalAdreplyrzasyu: {
                    showAdAttribution: true,
                    mediaType: 2,
                    mediaUrl: 'https://youtube.com',
                    title: botname,
                    sourceUrl: 'https://youtube.com', 
                    thumbnail: fs.readFileSync('./Imagev/thumb.jpg')
                }
            }
        };
        await Sayurza2005.sendMessage(m.chat, doc, { quoted:metarzavi });
    } catch (error) {
        console.log(error);
        replyrzasyu('Selver Don api Sedang Eror');
    }
}
break;
case 'Creator': case 'Developer': case 'owner': {
	await Sayurza2005.sendMessage(m.chat, {
		react: {
			text: "",
			key: m.key,
		}
	})
	let img = "https://widipe.com/file/WjYYszPNz1Xb.jpg"
	async function image(url) {
		const {
			imageMessage
		} = await generateWAMessageContent({
			image: {
				url
			}
		}, {
			upload: Sayurza2005.waUploadToServer
		})
		return imageMessage
	}
	let msg = generateWAMessageFromContent(
		m.chat, {
			viewOnceMessage: {
				message: {
					interactiveMessage: {
						body: {
							text: (`Helo ${pushname}\ini info Pemilink Botz ini`)
						},
						carouselMessage: {
							cards: [{
								header: {
									imageMessage: await image(img),
									hasMediaAttachment: true,
								},
								body: {
									text: `*Sayu-Md Vi6.4.4*`
								},
								nativeFlowMessage: {
									buttons: [{
										name: "cta_url",
										buttonParamsJson: '{"display_text":"◁ info Channel ▷","url":"https://whatsapp.com/channel/0029Vaip0EG72WTuTkQRms0e","webview_presentation":null}',
									}, ],
								},
							}, {
								header: {
									imageMessage: await image(img),
									hasMediaAttachment: true,
								},
								body: {
									text: `*info Botz ini .owner*`
								},
								nativeFlowMessage: {
									buttons: [{
										name: "cta_url",
										buttonParamsJson: '{"display_text":"◁ Follow instagram ▷","url":"https://instagram.com/rezaa.205","merchant_url":"https://www.google.com"}',
									}, ],
								},
							}, ],
							messageVersion: 1,
						},
					},
				},
			},
		}, {});
	await Sayurza2005.relayMessage(msg.key.remoteJid, msg.message, {
		messageId: msg.key.id,
	});
}
break
case  'image': case  'pinterest': case  'pin': {
  if (!text) return replyrzasyu(`Contoh: .pin Kucing`);
  await replyrzasyu("*[ ⏱️ ] L o d i n g...*");

  async function createImage(url) {
    const { imageMessage } = await generateWAMessageContent({
      image: {
        url
      }
    }, {
      upload: Sayurza2005.waUploadToServer
    });
    return imageMessage;
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  let push = [];
  let { data } = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
  let res = data.resource_response.data.results.map(v => v.images.orig.url);

  shuffleArray(res);
  let ult = res.splice(0, 5); 
  let i = 1;

  for (let lucuy of ult) {
    push.push({
      body: proto.Message.InteractiveMessage.Body.fromObject({
        text: `🖼️Gambar ke - ${i++}`
      }),
      footer: proto.Message.InteractiveMessage.Footer.fromObject({
        text: global.botname
      }),
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: 'ini Hasil Gambar nya Kak.',
        hasMediaAttachment: true,
        imageMessage: await createImage(lucuy)
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
          {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"⎗ Link Gambar ⎘ ","url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}","merchant_url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}"}`
          }
        ]
      })
    });
  }

  let bot = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
          body: proto.Message.InteractiveMessage.Body.create({
            text: "ini Hasil Gambar nya Kak"
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: `Mencari: ${text} | Nama: ${pushname}`
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: false
          }),
          carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
            cards: [
              ...push
            ]
          })
        })
      }
    }
  }, {});

  await Sayurza2005.relayMessage(m.chat, bot.message, {
    messageId: bot.key.id
  });
  
}
break
case 'tourl': {
  try {
    const media = await Sayurza2005.downloadAndSaveMediaMessage(quoted);
    const anuu = await uploadwidipe(media);
    replyrzasyu(`📮 *L i N K :*
${anuu}
📊 *UKURAN :* ${media.length} Bytes
📛 *E x p i r e d :*\n🔗 Link Tourl iNi Tidak Ada Tanggal Kadaluwarsa\n*Sayu Vi6*`);
    await fs.unlinkSync(media);
  } catch (error) {
    console.error('Error:', error);
    replyrzasyu('Error uploading file.');
  }
}
  break;
case 'donasibotz': case 'donasibot': case 'donate': case 'donasi':{
Sayurza2005.sendMessage(from, { react: { text: "🗳", key: m.key }})
const allmenuutxt = `┏( *WABOTZ SAYU-MD* )
┃Hay ${pushname}
┃•── *Donasi Bot ini* ──•
┃• ingin Donasi Bot ini Boleh
┃• Dan Seiklas Nya Donasi
┃•
┃• Donasi Bisa Chat instagram
┃• Dana 🗳️
┃• Bebas Donasi Botz ini 🗳️
┃https://instagram.com/rezaa.205
┗───────────────────•`
let sections = [{
title: '𖣂 Klik tombol 𖣂',
highlight_label: 'rekomendasi',
rows: [{
title: 'Oke',
description: `- Sayu-Md`, 
id: `${prefix}Creator`
}]
}]

let listMessage = {
    title: '𖣂 Klik Tombol 𖣂', 
    sections
};


let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363294772037916@newsletter',
 newsletterName: 'Sayu-Md Developer © Rza 2005', 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: Sayurza2005.decodeJid(Sayurza2005.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: allmenuutxt
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: ('Sayu-Md © Rza 2005')
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `Halo ${pushname}`,
 subtitle: "S A Y U- M D - B O T Z",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "https://qu.ax/Sqlt.jpg" } }, { upload: Sayurza2005.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"☊ instagram owner ☊\",\"url\":\"https://instagram.com/rezaa.205\",\"merchant_url\":\"https://www.google.com\"}"
   }]
                })
            })
        }
    }
}, {
    quoted:metarzavi
});

await Sayurza2005.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})
}
break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return replyrzasyu(mess.owner)

                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return replyrzasyu(bang)
                    }
                    try {
                        replyrzasyu(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        replyrzasyu(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return replyrzasyu(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await replyrzasyu(evaled)
                    } catch (err) {
                        await replyrzasyu(String(err))
                    }
                }
                if (budy.startsWith('$')) {
                    if (!isCreator) return replyrzasyu(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return replyrzasyu(err)
                        if (stdout) return replyrzasyu(stdout)
                    })
                }
        }
    } catch (err) {
        console.log(util.format(err))
    }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})

process.on('uncaughtException', function (err) {
let e = String(err)
if (e.includes("conflict")) return
if (e.includes("Socket connection timeout")) return
if (e.includes("not-authorized")) return
if (e.includes("already-exists")) return
if (e.includes("rate-overlimit")) return
if (e.includes("Connection Closed")) return
if (e.includes("Timed Out")) return
if (e.includes("Value not found")) return
console.log('Caught exception: ', err)
})