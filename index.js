require("dotenv").config();
const express = require("express");
const { createClient } = require("@supabase/supabase-js");

const app = express();
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SECRET_KEY,
);

app.get("/profesionales", async (req, res) => {
  const { data, error } = await supabase.from("profesionales").select("*");
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});
app.get("/", (req, res) => res.send("Turnero funcionando"));

app.listen(3000, () => console.log("Servidor en http://localhost:3000"));
