const config = require('../settings')
const { cmd, commands } = require('../lib/command')
const { getBuffer, fetchJson } = require('../lib/functions')
const { sizeFormatter } = require('human-readable')
const { GDriveDl } = require('../lib/gdrive.js')



// video

cmd({ 
    pattern: "video1", 
    alias: ["yt","mp4"], 
    react: "🎥", 
    desc: "Download Youtube song", 
    category: "main", 
    use: '.song < Yt url or Name >', 
    filename: __filename 
}, async (conn, mek, m, { from, prefix, quoted, q, reply }) => { 
    try { 
        if (!q) return await reply("Please provide a YouTube URL or song name.");
        
        const yt = await ytsearch(q);
        if (yt.results.length < 1) return reply("No results found!");
        
        let yts = yt.results[0];  
        let apiUrl = `https://api.bwmxmd.online/api/download/ytmp4?apikey=ibraah-help&url=${encodeURIComponent(yts.url)}`;
        
        let response = await fetch(apiUrl);
        let data = await response.json();
        
        if (data.status !== 200 || !data.success || !data.result.download_url) {
            return reply("Failed to fetch the video. Please try again later.");
        }
        
        let ytmsg = `╭━━━〔 *𝐂𝐇𝐀𝐌𝐈-𝐌𝐃* 〕━━━┈⊷
┇๏ *Title* -  ${yts.title}
┇๏ *Duration* - ${yts.timestamp}
┇๏ *Views* -  ${yts.views}
┇๏ *Author* -  ${yts.author.name}
┇๏ *Link* -  ${yts.url}
╰────────────────┈⊷

> 𝐏𝐎𝐖𝐄𝐑𝐃 𝐁𝐘 𝐂𝐇𝐀𝐌𝐈-𝐌𝐃 😈`;

        // Send video details
        await conn.sendMessage(from, { image: { url: data.result.thumbnail || '' }, caption: ytmsg }, { quoted: mek });
        
        // Send video file
        await conn.sendMessage(from, { video: { url: data.result.download_url }, mimetype: "video/mp4" }, { quoted: mek });
        
        // Send document file (optional)
        await conn.sendMessage(from, { 
            document: { url: data.result.download_url }, 
            mimetype: "video/mp4", 
            fileName: `${data.result.title}.mp4`, 
            caption: `> *${yts.title}*\n> 𝐏𝐎𝐖𝐄𝐑𝐃 𝐁𝐘 𝐂𝐇𝐀𝐌𝐈-𝐌𝐃 😈`
        }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply("An error occurred. Please try again later.");
    }
});  
    
// play

cmd({ 
    pattern: "mp3", 
    alias: ["ytdl1", "song3"], 
    react: "🎥", 
    desc: "Download Youtube song", 
    category: "main", 
    use: '.song < Yt url or Name >', 
    filename: __filename 
}, async (conn, mek, m, { from, prefix, quoted, q, reply }) => { 
    try { 
        if (!q) return await reply("Please provide a YouTube URL or song name.");
        
        const yt = await ytsearch(q);
        if (yt.results.length < 1) return reply("No results found!");
        
        let yts = yt.results[0];  
        let apiUrl = `https://apis.davidcyriltech.my.id/download/ytmp4?url=${encodeURIComponent(yts.url)}`;
        
        let response = await fetch(apiUrl);
        let data = await response.json();
        
        if (data.status !== 200 || !data.success || !data.result.download_url) {
            return reply("Failed to fetch the video. Please try again later.");
        }
        
        let ytmsg = `╭━━━〔 *𝐂𝐇𝐀𝐌𝐈-𝐌𝐃* 〕━━━┈⊷
┇๏ *Title* -  ${yts.title}
┇๏ *Duration* - ${yts.timestamp}
┇๏ *Views* -  ${yts.views}
┇๏ *Author* -  ${yts.author.name}
┇๏ *Link* -  ${yts.url}
╰────────────────┈⊷

> 𝐏𝐎𝐖𝐄𝐑𝐃 𝐁𝐘 𝐂𝐇𝐀𝐌𝐈-𝐌𝐃 😈`;

        
        await conn.sendMessage(from, { image: { url: data.result.thumbnail || '' }, caption: ytmsg }, { quoted: mek });
        
        
        await conn.sendMessage(from, { audio: { url: data.result.download_url }, mimetype: "audio/mpeg" }, { quoted: mek });
        
        
        await conn.sendMessage(from, { 
            document: { url: data.result.download_url }, 
            mimetype: "audio/mpeg", 
            fileName: `${yts.title}.mp3`, 
            caption: `> *${yts.title}*\n> 𝐏𝐎𝐖𝐄𝐑𝐃 𝐁𝐘 𝐂𝐇𝐀𝐌𝐈-𝐌𝐃 😈`
        }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply("An error occurred. Please try again later.");
    }
});


cmd({
    pattern: "settings",
    alias: ["setting"],
    desc: "settings the bot",
    category: "owner",
    react: "⚙",
    filename: __filename


},
async (conn, mek, m, { from, isOwner, quoted, reply }) => {
    if (!isOwner) return reply("❌ You are not the owner!");
    try {
        let desc = `*𝐂𝐇𝐀𝐌𝐈-𝐌ᴅ  𝐒ᴇᴛᴛɪɴɢꜱ......⚙️*


╭══════════════════════○
┣━ (01) *𝐖ᴏʀᴋ 𝐌ᴏᴅᴇ....🧠👁️*
> 1.1  Public Work__🫂
> 1.2  Private Work__❗
> 1.3  Group Only__👥
> 1.4  Inbox Only__👤
╭══════════════════════○
┣━ (02) *𝐀ɴᴛɪ 𝐁ᴏᴛ.....🧠👁️*
> 2.1 Anti Bot __true 🔛
> 2.2 Anti bot_ false 📴
╭══════════════════════○
┣━ (03) *𝐀ᴜᴛᴏ 𝐒ᴛᴀᴛᴜꜱ 𝐒ᴇᴇɴ.....🧠👁️*
> 3.1 Auto Read Status __true 🔛
> 3.2 Auto Read Status_ false 📴
╭══════════════════════○
┣━ (04) *𝐀ᴜᴛᴏ 𝐒ᴛɪᴄᴋᴇʀ....🧠👁️*
> 4.1 Auto sticker __true 🔛
> 4.2 Auto sticker_ false 📴
╭══════════════════════○
┣━ (05) *𝐀ᴜᴛᴏ 𝐑ᴇᴘʟʏ.....🧠👁️*
> 5.1 Auto reply __true 🔛
> 5.2 Auto reply_ false 📴
╭══════════════════════○
┣━ (06) *𝐁ᴏᴛ 𝐎ɴʟɪɴᴇ / 𝐎ꜰꜰʟɪɴᴇ....🧠👁️*
> 6.1 Online __true 🔛
> 6.2 Online_ false 📴
╭══════════════════════○
┣━ (07) *𝐌ꜱɢ 𝐑ᴇᴀᴅ....🧠👁️*
> 7.1 Read Msg __true 🔛
> 7.2 Read Msg_ false 📴
╭══════════════════════○
┣━  (08) *𝐌ꜱɢ 𝐑ᴇᴀᴄᴛ....🧠👁️*
> 8.1 Auto React __true 🔛
> 8.2 Auto React _ false 📴
╭══════════════════════○
┣━ (09) *𝐀ɴᴛɪ 𝐋ɪɴᴋ.....🧠👁️*
> 9.1 Anti Link__true 🔛
> 9.2 Anti Link _ false 📴
> 9.3 Anti Link + Remove ⛔
╭══════════════════════○
┣━ (10) *𝐀ᴜᴛᴏ 𝐒ᴛᴀᴛᴜꜱ 𝐑ᴇᴀᴄᴛ & 𝐑ᴇᴘʟʏ.....🧠👁️*
> 10. 1 Status React__true 🔛
> 10. 2 Status React _ false 📴
> 10. 3 Status Reply__true 🔛
> 10. 4 Status Reply _ false 📴
╭══════════════════════○
┣━ (11) *𝐅ᴀᴋᴇ 𝐑ᴇᴄᴏʀᴅɪɴɢ.....🧠👁️*
> 11.1 Fake Recording_true 🔛
> 11.2 Fake Recording _ false 📴
╭══════════════════════○

╰══════════════════════○


🔢 𝐑ᴇᴘʟʏ 𝐁ᴇʟᴏᴡ 𝐓ʜɪꜱ 𝐍ᴜᴍʙᴇʀ 𝐂ʜᴀɴɢᴇ 𝐓ᴏ 𝐂𝐇𝐀𝐌𝐈 -- 𝐌ᴅ 𝐁ᴏᴛ 𝐂ʜᴀɴɢᴇ 𝐒ᴇᴛᴛɪɴɢ.....❍

> 𝐏ᴏᴡᴇʀᴅ 𝐁ʏ 𝐂𝐇𝐀𝐌𝐈_𝐌ᴅ......👁️❗`;

        const vv = await conn.sendMessage(from, { image: { url: "https://raw.githubusercontent.com/Ubalasiya/Chamihelper/refs/heads/main/chami-md-main.jpg"}, caption: desc }, { quoted: mek });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1.1':
                        reply(".mode public" );
                        break;
                    case '1.2':               
                        reply(".mode private");
                        break;
                    case '1.3':               
                          reply(".mode group");
                      break;
                    case '1.4':     
                        reply(".mode inbox");
                      break;
                    case '2.1':     
                        reply(".antibot on");
                        break;
                    case '2.2':     
                        reply(".antibot off");
                    break;
                    case '3.1':    
                        reply(".autoreadstatus on");
                    break;
                    case '3.2':    
                        reply(".autoreadstatus off");
                    break;                    
                    case '4.1':    
                        reply(".autosticker on");
                    break;
                    case '4.2':    
                        reply(".autosticker off");
                    break;                                        
                    case '5.1':    
                        reply(".autoreply on");
                    break;
                    case '5.2':    
                        reply(".autoreply off");
                    break;                        
                    case '6.1':    
                        reply(".alwaysonline on");
                    break; 
                    case '6.2':    
                        reply(".alwaysonline off");
                    break;                       
                    case '7.1':    
                        reply(".autotyping on");
                    break;
                    case '7.2':    
                        reply(".autotyping off");
                    break;
                    case '8.1':    
                        reply(".autoreact on");
                    break;
                    case '8.2':    
                        reply(".autoreact on");
                    break;
                    case '9.1':    
                        reply(".antilink on");
                    break;
                    case '9.2':   
                        reply(".antilink off");
                    break;
                    case '9.3':    
                        reply(".Palyn hutto ynna");
                    break;
                    case '10.1':
                        reply(".statusreact on");
                    break;
                    case '10.2':
                        reply(".statusreact off");
                    break;
                    case '10.3':
                        reply(".statusreply on");
                    break;
                    case '10.4':
                        reply(".statusreply off");
                    break;
                    case '11.1':
                        reply(".fakerecording on");
                    break;
                     case '11.2':
                        reply(".fakerecording off");
                    break;

                    default:
                        reply("Invalid option. Please select a valid option🔴");
                }

            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply('An error occurred while processing your request.');
    }
});
