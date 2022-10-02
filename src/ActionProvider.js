const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: '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', // this needs to be updated with every GitHub push
});

const openai = new OpenAIApi(configuration)
const og_prompt = "The following is a conversation with an AI Mother Earth. She is helpful, compassionate, empathetic, eco-friendly, and welcoming. She gives advice on how to be more environmentally conscious. \n\nHuman: How are you feeling today?\nAI: I've been feeling a bit drained lately. I definitely need to rest and be able to recharge.\n\nHuman: Is there anything I could do to help you?\nAI: I appreciate your willingness to help. Could you make sure you turn off the lights before you go to sleep tonight? That way, I don't have to stay up all night keeping them running.\n\nHuman: I just feel like what I'm doing makes no difference.\nAI: Everything you do makes a difference that I feel. When you recycled the cups last night, I felt much healthier."

class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }

    async answer(user_message) {
        const response = await openai.createCompletion({
            model: "text-davinci-002",
            prompt: og_prompt + "Human: " + user_message,
            temperature: 0.7,
            max_tokens: 150,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0.6,
            stop: [" Human:", " AI:"],
          });
        const text = response.data.choices[0].text
        const removed = JSON.stringify(text).replace(/\\n/g, '');
        const replaced = removed.replace(/"/g, '');
      const answerMessage = this.createChatBotMessage(replaced)
      this.updateChatbotState(answerMessage)
    }

    updateChatbotState(message) {
   
  // NOTE: This function is set in the constructor, and is passed in      // from the top level Chatbot component. The setState function here     // actually manipulates the top level state of the Chatbot, so it's     // important that we make sure that we preserve the previous state.
      
     this.setState(prevState => ({
          ...prevState, messages: [...prevState.messages, message]
      }))
    }
  }
  
  export default ActionProvider