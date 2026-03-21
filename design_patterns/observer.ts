interface Observer {
  update(message: string): void;
}

class Subscriber implements Observer {
  constructor(private name: string) {}

  update(message: string): void {
    console.log(this.name + " received notification: " + message);
  }
}
abstract class Subject {
  private subscribers: Observer[] = [];
  subscribe(observer: Observer) {
    this.subscribers.push(observer);
  }
  unsubscribe(observer: Observer) {
    this.subscribers = this.subscribers.filter((sub) => sub !== observer);
  }

  notify(message: string) {
    this.subscribers.forEach((sub) => sub.update(message));
  }
}
class YouTubeChannel extends Subject {
  uploadVideo(title: string) {
    this.notify(`New video: ${title}`);
  }
}

const channel = new YouTubeChannel();

const sub1 = new Subscriber("Alice");
const sub2 = new Subscriber("John");

channel.subscribe(sub1);
channel.subscribe(sub2);

channel.notify("New video uploaded!");