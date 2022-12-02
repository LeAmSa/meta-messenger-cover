import Pusher from "pusher";
import ClientPusher from "pusher-js";

export const serverPusher = new Pusher({
  appId: process.env.PUSHER_APP_ID!,
  key: process.env.PUSHER_KEY!,
  secret: process.env.PUSHER_SECRET!,
  cluster: process.env.PUSHER_CLUSTER!,
  useTLS: true,
});

export const clientPusher = new ClientPusher("132bd5ddb3e949a27fe0", {
  cluster: process.env.PUSHER_CLUSTER!,
  forceTLS: true,
});
