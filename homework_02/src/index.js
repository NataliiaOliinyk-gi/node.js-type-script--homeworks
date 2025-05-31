import sendMessage from "./chat_app.js";

sendMessage({
    username: "Nata",
    message: "Hey Anna! Wie geht's dir heute?"
});
sendMessage({
    username: "Anna",
    message: "Hey Nata! Mir geht's super, danke. Und dir?"
});
sendMessage({
    username: "Nata",
    message: "Auch gut, danke! Hast du Lust, heute ins Cafe zu gehen?"
});
sendMessage({
    username: "Anna",
    message: "Klar, sehr gern! Sagen wir um 16 Uhr?"
});