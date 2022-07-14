let handler = async m => m.reply(`
╭─「 Gopay•Dana•Pulsa 」
│ •  [085754180729]
│ •  [085754180729]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
