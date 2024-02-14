import { SubscribeMessage, WebSocketGateway, WebSocketServer, MessageBody, ConnectedSocket } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { EventDto } from './events/dto/event.dto';

@WebSocketGateway()
export class AppGateway {
  public static EVENT: string = 'last-event';
  public static MESSAGE: string = 'message';

  @WebSocketServer()
  private server: Server;

  handleConnection(socket: Socket, ...args: any[]) {
    const ip = socket.client.conn.remoteAddress;
    this.server.emit(AppGateway.EVENT, `Welcome @${socket.id} on @${ip} !`)
  }

  @SubscribeMessage(AppGateway.MESSAGE)
  handleMessage(@MessageBody() message: string): string {
    return 'OK';
  }

  @SubscribeMessage(AppGateway.EVENT)
  handleEvent(
    @MessageBody() data: string,
    @ConnectedSocket() client: Socket
  ): string {
    return data;
  }

  handleDisconnect(socket: Socket) {
    const ip = socket.client.conn.remoteAddress;
    this.server.emit(AppGateway.EVENT, `@${socket.id} --> gone`)
  }

  broadcast(event : EventDto){
    this.server.emit(AppGateway.EVENT, event);
  }
}
