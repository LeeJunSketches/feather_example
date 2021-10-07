import { Application } from '../../declarations';
import { Messages } from './message.class';
import hooks from './message.hook';
// Don't remove this comment. It's needed to format import lines nicely.


export default function (app: Application): void {
  app.use('/messages', new Messages());
  const service = app.service('messages');
  service.hooks(hooks);
}
