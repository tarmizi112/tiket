module.exports = {
    name: 'ready',
    once: true,

    async execute(client) {
        console.log(`BOT SUDAH AKTIF ${client.user.username}`)

        var compteurStatus = 1
        setInterval(async () => {
            status =  [`Ticket Bot🟢`]
            compteurStatus = (compteurStatus + 1) % (status.length);
            client.user.setPresence({
                activities: [{
                    name: `${status[compteurStatus]}`,
                    type: "STREAMING",
                    url: "https://www.twitch.tv/"
                  }],
                  status: "online"})
        }, 5000);
    }
}
