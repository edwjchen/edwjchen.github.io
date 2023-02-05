let ideas = [];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

$(document).ready(function () {
    // Call applet and get JSON object
    var url =
        "https://docs.google.com/spreadsheets/d/1q23_G_KuO8c4BbcoKXTLi2gOujwhvYN_ihzwljF4vpw/gviz/tq?tqx=out:json";
    fetch(url)
        .then(response => response.text())
        .then(data => {
            data = data.slice(47, data.length);
            data = data.slice(0, data.length - 2);
            json = JSON.parse(data);
            rows = json.table.rows; 
            for (let r = 1; r < rows.length; r++) {
                console.log("row", rows[r]["c"][1]["v"]);
                ideas.push(rows[r]["c"][1]["v"]);
            }
        });
});

let i = 0;
let content = "";
let speed = 50;

function typeWriter() {
    if (i <= content.length) {
        $("#idea").text(content.slice(0, i));
        i++;
        setTimeout(typeWriter, speed);
    }
}

function selectIdea() {
    content = "";
    i = 0;
    if (ideas.length > 0) {
        content = ideas.pop();
        console.log(content);
        setTimeout(typeWriter, speed);
    } else {
        content = "Out of ideas...";
        setTimeout(typeWriter, speed);
    }
}
