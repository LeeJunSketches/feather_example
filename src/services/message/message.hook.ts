import { HookContext } from '@feathersjs/feathers';

const createdAt = async (context: HookContext) => {
    context.data.createdAt = new Date();

    return context;
};

export default {
    before: {
        create: [createdAt],
    },
}

