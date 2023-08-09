const {Permissions, MessageEmbed, MessageActionRow, MessageSelectMenu }=require('discord.js')
module.exports = {
    name: 'interactionCreate',
    async execute(client, interaction) {
        if (!interaction.isSelectMenu()) return;
        
	const row = new MessageActionRow()
                .addComponents(
                    new MessageSelectMenu()
                    .setCustomId('del')
                    .setPlaceholder('Pilih untuk menghapus tiket!')
                					.addOptions([
						{
							label: '🗑️ Tiket dihapus',
							description: 'Tiket dihapus',
							value: 'delete',
						}
					])
                );
                
                
        let catégorie = "1117801278957961446"
        let roleStaff = interaction.guild.roles.cache.get('1117801281529053246')

        let DejaUnChannel = interaction.guild.channels.cache.find(c => c.topic == interaction.user.id)
        
        if(interaction.customId === "del") {
            if (interaction.values[0] == "delete") {
                const channel = interaction.channel
                channel.delete();
            }
        }

        if (interaction.customId == "select") {
            if (DejaUnChannel) return interaction.reply({content: `Anda sudah memiliki tiket terbuka di server.`, ephemeral: true})
            if (interaction.values[0] == "Membeli") {
                interaction.guild.channels.create(`Beli ${interaction.user.username}`, {
                    type: 'GUILD_TEXT',
                    topic: `${interaction.user.id}`,
                    parent: `${catégorie}`,
                    permissionOverwrites: [
                        {   
                            id: interaction.guild.id,
                            deny: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: interaction.user.id,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: roleStaff,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        }
                    ]
                }).then((c)=>{
                    const partenariat = new MessageEmbed()
                    .setTitle('Tiket Untuk Membuat Pesanan')
                    .setDescription('Silahkan Tag Sellernya Dan Tunggu Di balas Jika Tidak Bisa Dm SellerNya.')
                    .setFooter('Scripter By Oxley')
                    c.send({embeds: [partenariat], content: `${roleStaff} | ${interaction.user}`, components: [row]})
                    interaction.reply({content: `Tiket Anda telah berhasil dibuka. <#${c.id}>`, ephemeral: true})
                })
                
            } else if (interaction.values[0] == "Complain") {
                interaction.guild.channels.create(`Complaint ${interaction.user.username}`, {
                    type: 'GUILD_TEXT',
                    topic: `${interaction.user.id}`,
                    parent: `${catégorie}`,
                    permissionOverwrites: [
                        {   
                            id: interaction.guild.id,
                            deny: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: interaction.user.id,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: roleStaff,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        }
                    ]
                }).then((c)=>{
                    const plainte = new MessageEmbed()
                    .setTitle('Tiket Untuk Mengajukan Complain')
                    .setDescription('Silahkan Kirim Bukti Ss Transaksi Dan Tag Seller Tersebut .')
                    .setFooter('Scripter By Oxley')
                    c.send({embeds: [plainte], content: `${roleStaff} | ${interaction.user}`, components: [row]})
                    interaction.reply({content: `Tiket Anda telah berhasil dibuka. <#${c.id}>`, ephemeral: true})
                })
            } else if (interaction.values[0] == "Bertanya") {
                interaction.guild.channels.create(`Bertanya ${interaction.user.username}`, {
                    type: 'GUILD_TEXT',
                    topic: `${interaction.user.id}`,
                    parent: `${catégorie}`,
                    permissionOverwrites: [
                        {   
                            id: interaction.guild.id,
                            deny: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: interaction.user.id,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: roleStaff,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        }
                    ]
                }).then((c)=>{
                    const embed = new MessageEmbed()
                    .setTitle('Tiket Untuk Bertanya.')
                    .setDescription('Ada Yang Bisa Kami Bantu, Silahkan Bertanya Dan Tag Yang Bersangkutan.')
                    .setFooter('Scripter By Oxley')
                    c.send({embeds: [embed], content: `${roleStaff} | ${interaction.user}`, components: [row]})
                    interaction.reply({content: `Tiket Anda telah berhasil dibuka. <#${c.id}>`, ephemeral: true})
                })
                
            
                
            
            }
        }
    }
}