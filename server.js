const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");

app.use(cors());


const artData = [
    { id: 1, name: "Живопись", description: "искусство рисования картин" },
    { id: 2, name: "Скульптура", description: "искусство создания скульптур" },
    { id: 3, name: "Музыка", description: "искусство создания музыки" },
    { id: 4, name: "Литература", description: "искусство письма и слова" },
    { id: 5, name: "Танец", description: "искусство движения и танцев" },
    { id: 6, name: "Кино", description: "искусство создания фильмов" },
    { id: 7, name: "Фотография", description: "искусство создания фотографий" },
    { id: 8, name: "Графика", description: "искусство создания графических произведений" },
    { id: 9, name: "Театр", description: "искусство актерского мастерства и представления" },
    { id: 10, name: "Соврем. искусство", description: "искусство современных экспериментов и идей" },
    { id: 11, name: "Фольклор", description: "искусство передачи народных традиций" },
    { id: 12, name: "Архитектура", description: "искусство создания зданий и сооружений" },
    { id: 13, name: "Искусство кулинарии", description: "искусство приготовления пищи" },
    { id: 14, name: "Искусство ремесел", description: "искусство создания рукоделия" },
    { id: 15, name: "Искусство дизайна", description: "искусство создания дизайнерских проектов" },
];

app.get("/api/art", (req, res) => {
  res.json({ data: artData });
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});