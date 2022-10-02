class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
    const output_message = message + "\n AI: ";
    this.actionProvider.answer(output_message)
      }
    }
  
  export default MessageParser