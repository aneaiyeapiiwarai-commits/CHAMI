const { cmd } = require('../lib/command')
const axios = require('axios')

cmd({
    pattern: "sirasa",
    desc: "Get latest Sirasa News",
    category: "news",
    react: "📰"
}, async (conn, mek, { quoted }) => {
    try {
        const api = "https://supun-md-api-rho.vercel.app/api/news/sirasa"
        let { data } = await axios.get(api)

        if (!data || !data.result || data.result.length === 0) {
            return await conn.sendMessage(mek.chat, { text: "❌ No news found." }, { quoted })
        }

        let newsList = data.result.slice(0, 10) // top 10 news
        let txt = "📰 *Latest Sirasa News*\n\n"
        for (let i = 0; i < newsList.length; i++) {
            txt += `🔹 *${i+1}. ${newsList[i].title}*\n`
            txt += `📎 ${newsList[i].link}\n\n`
        }

        await conn.sendMessage(mek.chat, { text: txt }, { quoted })
    } catch (e) {
        console.error(e)
        await conn.sendMessage(mek.chat, { text: "⚠️ Error fetching news." }, { quoted })
    }
})
