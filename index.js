require("dotenv").config();
const express = require("express");
const { createClient } = require("@supabase/supabase-js");

const app = express();
app.use(express.json());
app.use(express.static("public"));

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SECRET_KEY,
);

app.get("/profesionales", async (req, res) => {
  const { data, error } = await supabase.from("profesionales").select("*");
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

app.get("/servicios", async (req, res) => {
  const { data, error } = await supabase.from("servicios").select("*");
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

app.post("/servicios", async (req, res) => {
  const { nombre, duracion_min, negocio_id } = req.body;
  if (
    !nombre ||
    !Number.isInteger(duracion_min) ||
    duracion_min <= 0 ||
    !negocio_id
  ) {
    return res.status(400).json({ error: "Datos inválidos" });
  }
  const { data, error } = await supabase
    .from("servicios")
    .insert([{ nombre, duracion_min, negocio_id }])
    .select()
    .single();
  if (error) return res.status(500).json({ error: error.message });
  res.status(201).json(data);
});

app.get("/horarios", async (req, res) => {
  let consulta = supabase.from("horarios").select("*");
  if (req.query.profesional_id) {
    consulta = consulta.eq("profesional_id", req.query.profesional_id);
  }
  const { data, error } = await consulta;
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});
app.get("/negocios", async (req, res) => {
  const { data, error } = await supabase.from("negocios").select("*");
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

app.listen(3000, () => console.log("Servidor en http://localhost:3000"));
