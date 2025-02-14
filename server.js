// Erstellen einer neuen express Anwendung
const express = require('express');
const app = express();

app.set("view engine", "ejs");
// Middleware zum Parsen von URL-kodierten Daten
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));


// Middleware zum Parsen von JSON-Daten
app.use(express.json());


const PORT = process.env.PORT || 8000;

// Server auf angegebenen Port starten
app.listen(PORT, () => {
    console.log(`Server listening on Port ${PORT}`);
});
