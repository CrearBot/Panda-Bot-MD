import { facebookDl } from './scraper.js'
import { savefrom } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `*[โ๐๐๐๐โ] ๐ธ๐ฝ๐ถ๐๐ด๐๐ด ๐๐ฝ ๐ด๐ฝ๐ป๐ฐ๐ฒ๐ด ๐ณ๐ด ๐ต๐ฐ๐ฒ๐ด๐ฑ๐พ๐พ๐บ, ๐ด๐น๐ด๐ผ๐ฟ๐ป๐พ: ${usedPrefix + command}* https://www.facebook.com/HolaSoySkull/videos/982580549178886/?app=fbl`
try {
m.reply(`*[โ] แดแดsแดแดสษขแดษดแดแด sแด แด ษชแดแดแด, แดษขแดแดสแดแด แดษด แดแดแดแดษดแดแด แดแดส าแดแด แดส, แดsแดแด แดสแดแดแดsแด แดแดแดแดแด แดแดสแดส แดษดแดสแด 2 ส 10 แดษชษดแดแดแดs แดแดแดแดษดแดษชแดษดแดแด แดแด สแด แดแดสแดแดษชแดษด แดแดส แด ษชแดแดแด...*`)
let res = await facebookDl(args[0]).catch(async _ => await savefrom(args[0])).catch(_ => null)
let url = res?.url?.[0]?.url || res?.url?.[1]?.url || res?.['720p'] || res?.['360p']
conn.sendMessage(m.chat, { video: { url }, caption: res?.meta?.title || '*๐ฐ๐๐๐ธ ๐ด๐๐๐ฐ ๐๐ ๐๐ธ๐ณ๐ด๐พ*' }, { quoted: m })
} catch (e) {
m.reply('*[โ๐๐๐๐โ] ๐ด๐๐๐พ๐, ๐ฟ๐พ๐ ๐ต๐ฐ๐๐พ๐ ๐๐๐ด๐ป๐๐ฐ ๐ฐ ๐ธ๐ฝ๐๐ด๐ฝ๐๐ฐ๐๐ป๐พ*\n\n*- ๐ฒ๐พ๐๐๐พ๐ฑ๐พ๐๐ด ๐๐๐ด ๐ด๐ป ๐ด๐ฝ๐ป๐ฐ๐ฒ๐ด ๐๐ด๐ฐ ๐๐ธ๐ผ๐ธ๐ป๐ฐ๐ ๐ฐ:*\n*โ* https://www.facebook.com/HolaSoySkull/videos/982580549178886/?app=fbl')
}}
handler.command = /^((facebook|fb)(downloder|dl)?)$/i
export default handler
