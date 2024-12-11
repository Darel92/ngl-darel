async function sendToTelegram(message) {
  const config = {
    token: "8104812161:AAGQDKB2awFFUAk7isKRSaITInUltrb0TLE",
    chatId: "7013450923",
  };

  const url = `https://api.telegram.org/bot${config.token}/sendMessage`;

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: config.chatId,
      text: message,
    }),
  });

  return response.ok;
}