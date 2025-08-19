const config = require('../settings')
const { cmd, commands } = require('../lib/command')
const imageUrl = config.PICTURE;


const os = require("os");
const { runtime } = require('../lib/functions');


cmd({
    pattern: "menu",
    react: "📜",
    alias: ["panel", "commands"],
    desc: "Get Bot Menu",
    category: "main",
    use: '.menu',
    filename: __filename
},
async (conn, mek, m, { from, quoted, pushname, reply }) => {
    try {
        const selectionMessage = `
*╭───────────────────────────●⫸*
   ☘ 𝑯𝑰 𝑾𝑬𝑳𝑪𝑶𝑴𝑬..🗿👋 *${pushname}*
✪     *${config.NAME} 𝑪𝑶𝑴𝑴𝑨𝑵𝑫 𝑳𝑰𝑺𝑻*
╰━━━━━━━━━━━━━━━━━━━━━━━━━━━━━⫸




*╭────────────●●►*
*│𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔......💀*
*│⟻⟻⟻⟻⟻⟻⟻*
*│1. 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐌𝐄𝐍𝐔  📥*
*│2. 𝐒𝐄𝐀𝐑𝐂𝐇 𝐌𝐄𝐍𝐔 🔍* 
*│3. 𝐀𝐈 𝐌𝐄𝐍𝐔 🧠*
*│4. 𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔 👨‍💻*
*│5. 𝐆𝐑𝐎𝐔𝐏 𝐌𝐄𝐍𝐔 👥*
*│6. 𝐈𝐍𝐅𝐎 𝐌𝐄𝐍𝐔 🧧*
*│7. 𝐅𝐔𝐍 𝐌𝐄𝐍𝐔 😹*
*│8. 𝐂𝐎𝐍𝐕𝐄𝐑𝐓 𝐌𝐄𝐍𝐔 ❇️*
*│9. 𝐖𝐀𝐋𝐋𝐏𝐀𝐏𝐄𝐑 𝐌𝐄𝐍𝐔 🏞️*
*│10. 𝐍𝐄𝐖𝐒 𝐌𝐄𝐍𝐔 📰*
*╰────────────●●►*
𝐑ᴇᴘʟʏ 𝐓ʜᴇ 𝐍ᴜᴍʙᴇʀ 𝐘ᴏᴜ 𝐖ᴀɴᴛ 𝐓ᴏ 𝐒ᴇʟᴇᴄᴛ.......👁️🦁
`;

await conn.sendMessage(from, {
        video: {
            url: 'https://files.catbox.moe/zjtsso.mp4'
        },
        mimetype: 'video/mp4',
        ptv: true
    }, { quoted: mek });

        const sentMsg = await conn.sendMessage(from, {
            image: { url: imageUrl },
            caption: selectionMessage,
            contextInfo: { forwardingScore: 999, isForwarded: true },
        }, { quoted: mek });

        // පරිශීලක ප්‍රතිචාර ලබා ගැනීම
        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const userResponse = msg.message.extendedTextMessage.text.trim();
            if (msg.message.extendedTextMessage.contextInfo &&
                msg.message.extendedTextMessage.contextInfo.stanzaId === sentMsg.key.id) {

                let responseText;

                switch (userResponse) {
                    case '1': // DOWNLOAD MENU
                        responseText = `
*╭──❒⁠⁠⁠⁠* *📥 𝐃ᴏᴡɴʟ 𝐎ᴀᴅᴇʀ-𝐌ᴇɴᴜ 📥* *❒⁠⁠⁠⁠* 
 ╭────────✵✵
*┋*  *𝐬𝚘𝚗𝚐*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *song2*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *𝚢𝚝𝚟*
 ╰───────────────✵✵
  ╭────────✵✵
*┋*  *ytsearch/youtube*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *𝚍𝚘𝚠𝚗𝚕𝚘𝚍*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *𝚏𝚋*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *𝚊𝚙𝚔*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *apk2*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *𝚐𝚍𝚛𝚒𝚟𝚎*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *𝚖𝚘𝚟𝚒𝚎*
 ╰───────────────✵✵
  ╭────────✵✵
*┋*  *cine*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *𝚜𝚕𝚊𝚗𝚒𝚖𝚎𝚌𝚕𝚞𝚋*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *sinhaladub*
 ╰───────────────✵✵
 
  ╭────────✵✵
*┋*  *pastpp*
 ╰───────────────✵✵
  ╭────────✵✵
*┋*  *tt/tiktok*
 ╰───────────────✵✵
  ╭────────✵✵
*┋*  *tiktoks/tiktoksearch*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *twitter*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *mediafire*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *ig/instragam*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *pornhub*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *xnxxdl*
 ╰───────────────✵✵
╭────────✵✵
*┋*  *xvdl*
 ╰───────────────✵✵
 
 ╭────────✵✵
*┋*  *gdrive2*
 ╰───────────────✵✵ 
 ╭────────✵✵
*┋*  *pinterest*
 ╰───────────────✵✵ 
*┋*  *mega*
 ╰───────────────✵✵
  ╭────────✵✵
*┋*  *img*
 ╰───────────────✵✵
  ╭────────✵✵
*┋*  *img3*
 ╰───────────────✵✵

> 𝐏𝐎𝐖𝐄𝐑𝐃 𝐁𝐘 ${config.NAME}......👁️💀
`;
                        break;
                    case '2': // SEARCH MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *🔎 𝐒ᴇᴀʀᴄʜ-𝐌ᴇɴᴜ 🔍* *❒⁠⁠⁠⁠* 
 ╭────────✵✵
*┋*  *weather*
 ╰───────────────✵✵ ╭────────✵✵
*┋*  *countryinfo/country*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *templist*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *tempnumber*
 ╰───────────────✵✵ ╭────────✵✵
*┋*  *otpbox*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *hentai*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *npm*
 ╰───────────────✵✵


> 𝐏𝐎𝐖𝐄𝐑𝐃 𝐁𝐘 ${config.NAME}......👁️💀
`;
                        break;
                    case '3': // AI MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *🧠 𝐀ɪ-𝐌ᴇɴᴜ  🧠* *❒⁠⁠⁠⁠* 
 ╭────────✵✵
*┋*  *𝐚𝚒*
 ╰───────────────✵✵
 
 ╭────────✵✵
*┋*  *𝐠𝚎𝚖𝚒𝚗𝚒*
 ╰───────────────✵✵

> 𝐏𝐎𝐖𝐄𝐑𝐃 𝐁𝐘 ${config.NAME}......👁️💀
`;
                        break;
                    case '4': // OWNER MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *👨‍💻 𝐎ᴡɴᴇʀ-𝐌ᴇɴᴜ 👨‍💻* *❒⁠⁠⁠⁠* 
 ╭────────✵✵
*┋*  *getpp*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *vv*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *spam*
       * 🚫🚫☠️*
 ╰───────────────✵✵

 ╭────────✵✵
*┋*  *𝐛𝚕𝚘𝚌𝚔*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *𝐮𝚗𝚋𝚕𝚘𝚌𝚔*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *𝐣𝚒𝚍*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *𝚏𝚘𝚛𝚠𝚊𝚛𝚍*
 ╰───────────────✵✵
  ╭────────✵✵
*┋*  *ginfo*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *gitclone*
 ╰───────────────✵✵
  ╭────────✵✵
*┋*  *githubinfo*
 ╰───────────────✵✵
 
> 𝐏𝐎𝐖𝐄𝐑𝐃 𝐁𝐘 ${config.NAME}......👁️💀
`;
                        break;
                    case '5': // GROUP MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *👥 𝐆ʀᴏᴜᴘ-𝐌ᴇɴᴜ 👥* *❒⁠⁠⁠⁠* 
 ╭────────✵✵
*┋*  *𝐦𝚞𝚝𝚎*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *𝐮𝚗𝚖𝚞𝚝𝚎*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *𝐩𝚛𝚘𝚖𝚘𝚝𝚎*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *𝐝𝚎𝚖𝚘𝚝𝚎*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *𝐝𝚎𝚕*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *𝐣𝚘𝚒𝚗*
 ╰───────────────✵✵
  ╭────────✵✵
*┋*  *requests*
 ╰───────────────✵✵
  ╭────────✵✵
*┋*  *tagall*
 ╰───────────────✵✵
  ╭────────✵✵
*┋*  *accept*
 ╰───────────────✵✵
  ╭────────✵✵
*┋*  *kick*
 ╰───────────────✵✵
  ╭────────✵✵
*┋*  *reject*
 ╰───────────────✵✵
 
 ╭────────✵✵
*┋*  *setdesc*
 ╰───────────────✵✵

 ╭────────✵✵
*┋*  *leave*
 ╰───────────────✵✵
  ╭────────✵✵
*┋*  *invite*
 ╰───────────────✵✵
  ╭────────✵✵
*┋*  *add*
 ╰───────────────✵✵
  ╭────────✵✵
*┋*  *end*
 ╰───────────────✵✵

 ╭────────✵✵
*┋*  *tagadmin*
 ╰───────────────✵✵ 
  ╭────────✵✵
*┋*  *setname*
 ╰───────────────✵✵
  ╭────────✵✵
*┋*  *opentime*
 ╰───────────────✵✵
  ╭────────✵✵
*┋*  *closetime*
 ╰───────────────✵✵
  ╭────────✵✵
*┋*  *hidetag*
 ╰───────────────✵✵
 
 
 

> 𝐏𝐎𝐖𝐄𝐑𝐃 𝐁𝐘 ${config.NAME}......👁️💀
`;
                        break;
                    case '6': // INFO MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *💾 𝐈ɴꜰᴏ-𝐌ᴇɴᴜ 💾* *❒⁠⁠⁠⁠* 
 ╭────────✵✵
*┋*  *𝐚𝚕𝚒𝚟𝚎*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *𝐦𝚎𝚗𝚞*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *𝐨𝚠𝚗𝚎𝚛*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *𝐩𝚒𝚗𝚐*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *ping2*
 ╰───────────────✵✵
 
  ╭────────✵✵
*┋*  *Setting*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *system*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *restart*
 ╰───────────────✵✵
*╰─────────────────❒*

> 𝐏𝐎𝐖𝐄𝐑𝐃 𝐁𝐘 ${config.NAME}......👁️💀
`;                   break;
                    case '7': // FUN MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *🔄 𝐅un-𝐌ᴇɴᴜ 🔄* *❒⁠⁠⁠⁠* 
 ╭────────✵✵
*┋*  *hack*
 ╰───────────────✵✵
 

> 𝐏𝐎𝐖𝐄𝐑𝐃 𝐁𝐘 ${config.NAME}......👁️💀
`;
                        break;
                    case '8': // CONVERT MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *✳️ Convert-𝐌ᴇɴᴜ ✳️* *❒⁠⁠⁠⁠* 
 ╭────────✵✵
*┋*  *photo*
       *Convert sticker to image*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *translate*
       *Translate text between languages*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *sticker*
       *Convert image to sticker*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *tempmail*
      *Generate a temporary email address*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *audioto*
       *convert video to audio*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *attp*
       *Text to convert sticker*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *logo*
       *Generate logos based on user input*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *url*
      *Convert media to Catbox URL*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *font*
      *Convert text into various fonts*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *tts2*
          *Convert text to speech with different                                                voices*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *tts3*
       *Convert text to speech with different                   voices*
 ╰───────────────✵✵


> 𝐏𝐎𝐖𝐄𝐑𝐃 𝐁𝐘 ${config.NAME}......👁️💀
`;
                        break;
                    case '9': //  WALLPAPER MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *🏜️ 𝐖ᴀʟʟᴘᴀᴘᴇʀꜱ-𝐌ᴇɴᴜ 🏜️* *❒⁠⁠⁠⁠* 
 ╭────────✵✵
*┋*  *loli*
       *Download anime loli images*
 ╰───────────────✵✵
  ╭────────✵✵
*┋*  *waifu*
       *Download anime waifu images*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *neko*
       *Download anime neko images*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *megumin*
      *Download anime megumin images*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *maid*
       *Download anime maid images*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *awoo*
       *Download anime awoo images*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *pinterest*
        *downlod images*
 ╰───────────────✵✵
 

> 𝐏𝐎𝐖𝐄𝐑𝐃 𝐁𝐘 ${config.NAME}......👁️💀
`;
                        break;
                    case '10': // NEWS MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *🌐 𝐍ews-𝐌ᴇɴᴜ 🌐* *❒⁠⁠⁠⁠* 
 ╭────────✵✵
*┋*  *news*
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  *derana*
 ╰───────────────✵✵

*╰─────────────────❒*

> 𝐏𝐎𝐖𝐄𝐑𝐃 𝐁𝐘 ${config.NAME}......👁️💀
`;
                        break;
                    case '11': // OTHER MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *📌 𝐀𝚞𝚝𝚘 𝐌ᴇɴᴜ 📌* *❒⁠⁠⁠⁠* 
 ╭────────✵✵
*┋*  **
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  **
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  **
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  **
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  **
 ╰───────────────✵✵
 ╭────────✵✵
*┋*  **
 ╰───────────────✵✵
*╰─────────────────❒*

> 𝐏𝐎𝐖𝐄𝐑𝐃 𝐁𝐘 ${config.NAME}......👁️💀
`;
                        break;
                    default:
                        responseText = "*❌ Invalid option. Please enter a valid number (1-10)*";
                }

                // තෝරාගත් මෙනුව WhatsApp chat එකට යවයි.
                await conn.sendMessage(from, { text: responseText }, { quoted: mek });
            }
        });

    } catch (e) {
        console.error(e);
        reply(`*⚠ An error occurred: ${e.message}*`);
    }
});
