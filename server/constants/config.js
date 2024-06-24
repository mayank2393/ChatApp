const corsOptions = {
  origin: [
    "http://localhost:5173",
    "http://localhost:4173",
    "https://chat-app-cyan-seven-12.vercel.app/",
    process.env.CLIENT_URL,
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

const APP_TOKEN = "app-token";

export { corsOptions, APP_TOKEN };
