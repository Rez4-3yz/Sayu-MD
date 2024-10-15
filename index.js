/*/
⚠️ Di LARANG MEMPERJUAL SC iNi

Resmi Dari © Rza 2005 (Sc ini Gratis Dari Rza 2005)
Botz iNi Di Kasih Nama Sayu Botz Versi 6.4.4

- https://whatsapp.com/channel/0029Vaip0EG72WTuTkQRms0e

> Join Wa channel Boleh

/*/
///=============(   Sayu Vi6    )============///

const {
   spawn
} = require('child_process')
const path = require('path')

function start() {
   let args = [path.join(__dirname, 'main.js'), ...process.argv.slice(2)]
   console.log([process.argv[0], ...args].join('\n'))
   let p = spawn(process.argv[0], args, {
         stdio: ['inherit', 'inherit', 'inherit', 'ipc']
      })
      .on('message', data => {
         if (data == 'reset') {
            console.log('Restarting Bot...')
            p.kill()
            start()
            delete p
         }
      })
      .on('exit', code => {
         console.error('Exited with code:', code)
         if (code == '.' || code == 1 || code == 0) start()
      })
}
start()
