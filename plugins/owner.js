
const settings = require('../settings')
const {cmd , commands} = require('../lib/command')
const os = require("os")
const fs                = require('fs')
const path              = require('path')
const saveSettings = () => {
  try {
    fs.writeFileSync(
      path.join(__dirname, '..', 'settings.json'),
      JSON.stringify(settingsStorage, null, 2)
    )
  } catch (e) {
    console.error('⚠️  Settings save error:', e)
  }
}
const {runtime} = require('../lib/functions')

cmd({
    pattern: "system",
    alias: ["about","bot"],
    desc: "Check bot online or no.",
    category: "main",
    react: "📟",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

    let status = `
───────────────────
_*⚙️ ☣️ＣＨＡＭＩ-ＭＤ Ｓｙｓｔｅｍ  Ｉｎｆｏ ⚙️*_
───────────────────

┌────────────────
│❖ *ᴜᴘᴛɪᴍᴇ :* _${runtime(process.uptime())}_
│❖ *ʀᴀᴍ ᴜꜱᴀɢᴇ :*  _${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB_
│❖ *ʜᴏꜱᴛ ɴᴀᴍᴇ :* _${os.hostname()}_
│❖ *ᴏᴡɴᴇʀ :* _Cʜᴀᴍɪ EᴅɪᴛZ_
└────────────────

> *ᴄʀᴇᴀᴛᴇᴅ ʙʏ Cʜᴀᴍɪ EᴅɪᴛZ*    
`
await conn.sendMessage(from,{image: {url: `https://raw.githubusercontent.com/Ubalasiya/Chamihelper/refs/heads/main/chami-md-main.jpg`},caption: status,
contextInfo: {
                mentionedJid: ['94766315540@s.whatsapp.net'], // specify mentioned JID(s) if any
                groupMentions: [],
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    
                    newsletterName: "ＣＨＡＭＩ-ＭＤ ✻",
                    serverMessageId: 999
                }            
            }
     }, {quoted: mek});
    
}catch(e){
    console.log(e)
    reply(`${e}`)
    }
    })


//__________ping______

cmd({
    pattern: "ping2",
    desc: "Check bot online or no.",
    category: "main",
    react: "🚀",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    const startTime = Date.now()
        const message = await conn.sendMessage(from, { text: '*pong...*' })
        const endTime = Date.now()
        const ping = endTime - startTime
        await conn.sendMessage(from, { text: `*⚬ＣＨＡＭＩ-ＭＤ ＳＰＥＥＤ : ${ping}ms*`,
                                      contextInfo: {
                mentionedJid: ['94766315540@s.whatsapp.net'], // specify mentioned JID(s) if any
                groupMentions: [],
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    
                    newsletterName: "ＣＨＡＭＩ-ＭＤ ✻",
                    serverMessageId: 999
                },
                externalAdReply: {
                    title: 'CHAMI MD',
                    body: 'Cʜᴀᴍɪ EᴅɪᴛZ',
                    mediaType: 1,
                    
                    thumbnailUrl: 'https://raw.githubusercontent.com/Ubalasiya/Chamihelper/refs/heads/main/chami-md-main.jpg', // This should match the image URL provided above
                    renderLargerThumbnail: false,
                    showAdAttribution: true
                }
            }
     }, {quoted: mek});
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})

//Owner
cmd({
    pattern: "owner",
    desc: "cmd",
    category: "system",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let cap = `
┏━┫ *⚬Cʜᴀᴍɪ-ᴍᴅ⚬* ┣━✾
┃
┣━━━━━━━━━━━━━━━
- *ᴄʜᴀᴍɪʏᴀʜʜ...* 💀⃤
        94766315540
╰━━━━━━━━━━━━━━━
> ᴄʜᴀᴍɪ-ᴍᴅ
`
return await conn.sendMessage(from,{image: {url: `https://raw.githubusercontent.com/Ubalasiya/Chamihelper/refs/heads/main/chami-md-main.jpg`},caption: cap,
                                    contextInfo: {
                mentionedJid: ['94766315540@s.whatsapp.net'], // specify mentioned JID(s) if any
                groupMentions: [],
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    
                    newsletterName: "ᴄʜᴀᴍɪ-ᴍᴅ ✻",
                    serverMessageId: 999
                },
                externalAdReply: {
                    title: 'CHAMI MD',
                    body: 'Cʜᴀᴍɪ EᴅɪᴛZ',
                    mediaType: 1,
                    
                    thumbnailUrl: 'https://raw.githubusercontent.com/Ubalasiya/Chamihelper/refs/heads/main/chami-md-main.jpg', // This should match the image URL provided above
                    renderLargerThumbnail: true,
                    showAdAttribution: true
                }
            }
     }, {quoted: mek});
}catch(e){
console.log(e)
reply(`${e}`)
}
})
//______________restart_____________

cmd({
    pattern: "restart",
    alias: ["update","up"],
    react: "☣️",
    desc: "restart the bot",
    category: "owner",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    if (!isOwner) return reply("*📛 ᴏɴʟʏ ᴛʜᴇ ᴏᴡɴᴇʀ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ!*");
const {exec} = require("child_process")
reply("*restarting...*")
exec("pm2 restart all")
}catch(e){
console.log(e)
reply(`${e}`)
}
})

//________Settings_________

