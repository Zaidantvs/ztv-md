let handler = async m => m.reply(`
╭─「 Gopay•Dana•Pulsa 」
│ •  [08818459464]
│ •  [08818459464]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
