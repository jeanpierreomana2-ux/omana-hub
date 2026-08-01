const API_URL = "https://chilly-wombats-grin.loca.lt";

async function request(endpoint: string, options: RequestInit = {}) {
  const response = await fetch(`${API_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    ...options,
  });

  const text = await response.text();

  console.log("STATUS :", response.status);
  console.log("RESPONSE :", text);

  let data;

  try {
    data = JSON.parse(text);
  } catch {
    throw new Error(`Réponse invalide du serveur : ${text}`);
  }

  if (!response.ok) {
    throw new Error(data.error || "Erreur serveur");
  }

  return data;
}

export const api = {
  get(endpoint: string, token?: string) {
    return request(endpoint, {
      method: "GET",
      headers: token
        ? {
            Authorization: `Bearer ${token}`,
          }
        : {},
    });
  },

  post(endpoint: string, body: any, token?: string) {
    return request(endpoint, {
      method: "POST",
      body: JSON.stringify(body),
      headers: token
        ? {
            Authorization: `Bearer ${token}`,
          }
        : {},
    });
  },

  put(endpoint: string, body: any, token?: string) {
    return request(endpoint, {
      method: "PUT",
      body: JSON.stringify(body),
      headers: token
        ? {
            Authorization: `Bearer ${token}`,
          }
        : {},
    });
  },

  delete(endpoint: string, token?: string) {
    return request(endpoint, {
      method: "DELETE",
      headers: token
        ? {
            Authorization: `Bearer ${token}`,
          }
        : {},
    });
  },
};
