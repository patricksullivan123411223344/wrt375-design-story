function runScenario(type) {
    const chatBox = document.getElementById("chatBox");
    const note = document.getElementById("designNote");

    let content = "";
    let designNote = "";

    if (type === "neutral") {
        content = `
            <p><strong>You:</strong> Hey, what's going on here?</p>
            <p><strong>NPC:</strong> Not much... depends who's asking. You seem alright though.</p>
        `;
        designNote = "The NPC responds with a softer tone, adapting to the user's neutral approach while maintaining a consistent personality.";
    }

    if (type === "hostile") {
        content = `
            <p><strong>You:</strong> You're useless. Why are you even here?</p>
            <p><strong>NPC:</strong> Funny. People usually say that right before they need something.</p>
        `;
        designNote = "The NPC shifts tone defensively, showing emotional response without breaking character consistency.";
    }

    if (type === "memory") {
        content = `
            <p><strong>You:</strong> Sorry about earlier.</p>
            <p><strong>NPC:</strong> Took you long enough... but yea, I remember. You're not as bad as you came off.</p>
        `;
        designNote = "This interaction demonstrates memory recall and emotional persistence across the conversation.";
    }

    chatBox.innerHTML = "<p><em>NPC is thinking...</em></p>";

    setTimeout(() => {
        chatBox.innerHTML = content;
    }, 600)

    note.innerHTML = "<strong>Design Note:</strong>" + " " + designNote;
}