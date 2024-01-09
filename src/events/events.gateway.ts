import { SubscribeMessage, WebSocketGateway, WebSocketServer, MessageBody, ConnectedSocket } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { EventDto } from './dto/event.dto';

@WebSocketGateway()
export class EventsGateway {
  public static EVENT: string = 'last-event';
  public static MESSAGE: string = 'message';

  @WebSocketServer()
  private server: Server;

  handleConnection(socket: Socket, ...args: any[]) {
    const ip = socket.client.conn.remoteAddress;
    this.server.emit(EventsGateway.EVENT, `Welcome @${socket.id} on @${ip} !`)
  }

  @SubscribeMessage(EventsGateway.MESSAGE)
  handleMessage(@MessageBody() message: string): string {
    return 'OK';
  }

  @SubscribeMessage(EventsGateway.EVENT)
  handleEvent(
    @MessageBody() data: string,
    @ConnectedSocket() client: Socket
  ): string {
    return data;
  }

  handleDisconnect(socket: Socket) {
    const ip = socket.client.conn.remoteAddress;
    this.server.emit(EventsGateway.EVENT, `@${socket.id} --> gone`)
  }

  broadcast(event : EventDto){
    this.server.emit(EventsGateway.EVENT, event);
  }
}
