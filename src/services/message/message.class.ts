interface Message {
    id?: number;
    text: string;
    createdAt: Date;
}

export class Messages {
    messages: Message[] = [];

    async find() {
        return this.messages;
    }

    async create(data: Pick<Message, 'text' | 'createdAt'>) {
        const message: Message = {
            id: this.messages.length,
            text: data.text,
            createdAt: data.createdAt
        }

        this.messages.push(message);

        return message;
    }
}