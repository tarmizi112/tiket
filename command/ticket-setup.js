const {MessageActionRow, MessageSelectMenu} = require('discord.js')
module.exports = {
    name: 'ticket',
    usage: 'template',
    category: "tiket",
    description: `perintah cetakan.`,
    async execute(client, message, args) {
		message.delete()
        const row = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('select')
					.setPlaceholder('Pilih jenis tiket yang akan dibuat.')
					.addOptions([
						{
							label: '💲 | Membeli',
							description: 'Open a partnership ticket.',
							value: 'Membeli',
						},
						{
							label: '❗ | Complain',
							description: 'Open a complaint ticket ',
							value: 'Complain',
						},
                        {
							label: '🌟 | Bertanya',
							description: 'Buka tiket untuk melamar perekrutan',
							value: 'Bertanya',
						},
					]),
			);

        message.channel.send({
            embeds: [{
                title: 'Open ticket',
                description: '**__ Cara Membuka Tiket :__**\
Silakan pilih jenis tiket yang ingin dibuka.',
                color: "BLURPLE",
                footer: {text: 'Scripter By Oxley'}
            }],
            components: [row]
        })
    }
}
