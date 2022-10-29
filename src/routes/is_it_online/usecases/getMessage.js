const positiveMessage = "is online";
const negativeMessage = "is offline";

const messages = {
    true: positiveMessage,
    false: negativeMessage
};

export default function getMessage(state = false) {
    return messages[state];
}