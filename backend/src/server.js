const express = require("express");
const cors = require("cors");
require("dotenv").config();
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Mental Health Assistant API is running...");
});

// Mood Analysis Route
app.post("/analyze-mood", async (req, res) => {
    const { userInput } = req.body;

    try {
        const response = await axios.post(
            "https://api.openai.com/v1/completions",
            {
                model: "gpt-4",
                prompt: `Analyze the mood from this text and suggest mental wellness tips: ${userInput}`,
                max_tokens: 50
            },
            {
                headers: { "Authorization": `Bearer ${process.env.OPENAI_API_KEY}` }
            }
        );

        res.json({ moodAnalysis: response.data.choices[0].text.trim() });
    } catch (error) {
        res.status(500).json({ error: "Error analyzing mood" });
    }
});

// Start server
app.listen(5000, () => {
    console.log("Server running on port 5000");
});
