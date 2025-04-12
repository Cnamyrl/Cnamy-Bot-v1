async function githubCommand(sock, chatId) {
    const repoInfo = `* Cnamy-Bot-V1*

*📂 GitHub Repository:*
https://github.com/Cnamyrl/Cnamy-Bot-v1

*📢 Official Channel:*
https://youtube.com/@ryu028-b5t?si=RSNIEHOuJpX93Ou9

_Star ⭐ the repository if you like the bot!_`;

    try {
        await sock.sendMessage(chatId, {
            text: repoInfo,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363161513685998@newsletter',
                    newsletterName: 'Cnamy-Bot-V1',
                    serverMessageId: -1
                }
            }
        });
    } catch (error) {
        console.error('Error in github command:', error);
        await sock.sendMessage(chatId, { 
            text: '❌ Error fetching repository information.' 
        });
    }
}

module.exports = githubCommand; 
