/*/
⚠️ Di LARANG MEMPERJUAL SC iNi

Resmi Dari © Rza 2005 (Sc ini Gratis Dari Rza 2005)
Botz iNi Di Kasih Nama Sayu Botz Versi 6.4.4

- https://whatsapp.com/channel/0029Vaip0EG72WTuTkQRms0e

> Join Wa channel Boleh

/*/
///=============(   Sayu Vi6    )============///

const fs = require('fs')
const chalk = require('chalk')
///detail///
global.ownernomer = ['628383952148356']
global.ownername = "Sayu-Md © Rza 2005"
global.ytnama = "@rezdv4"
global.socialm = "GitHub: Rez4-4"
global.location = "indonesia"
global.ownernumber = '628383952148356'
global.ownername = 'Sayu-Md Vi 6.4.4 © Rza 2005'
global.botname = 'Sayu-Md Vi 6.4.4'
global.packname = 'Sticker By'
global.author = 'Sayu-Md-V6\n\n\nFollow: instagram: rezaa.205 💌'
global.wm = "Sayu-Md Vi 6.4.4 © Rza 2005"
global.link = 'https://whatsapp.com/channel/0029Vaip0EG72WTuTkQRms0e'
///==================================///
global.prefa = ['.']
global.autoRecording = false
global.autoTyping = false
global.autorecordtype = false
global.autoread = false
global.autobio = false
global.anti48 = false
global.autoswview = false
///=== Pesan Chat ===///
global.mess = {
    done: 'Nih Kak Hasil nya',
    prem: 'Fitur ini hanya dapat digunakan oleh pengguna premium',
    admin: 'Fitur ini hanya dapat digunakan oleh admin saja',
    botAdmin: 'Fitur ini hanya dapat digunakan apabila botz merupakan admin grup ',
    owner: 'Fitur ini hanya dapat digunakan oleh pemiliknya',
    group: 'Fitur ini hanya untuk grup',
    private: 'Fitur ini hanya untuk obrolan pribadi',
    wait: '*[ ⏱️ ] ʟ ᴏ ᴀ ᴅ ɪ ɴ ɢ...*',    
    error: 'Error!',
}
global.thumb = fs.readFileSync('./Imagev/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})