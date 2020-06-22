const winston = require("winston");
const SlackHook = require("winston-slack-webhook-transport");
 

const logger = winston.createLogger({
    level: "error",
    transports: [
        new SlackHook({
            webhookUrl: "https://hooks.slack.com/services/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",
            formatter: error => {
                return {
                    text: `${info.level}: ${info.message}`,
                    attachments: [
                        {
                            text: "Or don't pass anything. That's fine too"
                        }
                    ],
                    blocks: [``
                        {
                            type: "section",
                            text: {
                                type: "plain_text",
                                text: "You can pass more info to the formatter by supplying additional parameters in the logger call"
                            }
                        }
                    ]
                }
            }

         
            
        })
    ]
});
 
logger.info("Definitely try playing around with this.")