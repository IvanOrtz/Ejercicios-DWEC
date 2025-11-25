window.onload = () => {
const contenedor = document.getElementById("colores");

let colores = {
  "colors": [
    {
      "color": "Black",
      "category": "Hue",
      "type": "Primary",
      "code": {
        "rgba": [0,0,0,1],
        "hex": "#000"
      }
    },
    {
      "color": "White",
      "category": "Value",
      "code": {
        "rgba": [255,255,255,1],
        "hex": "#FFF"
      }
    },
    {
      "color": "Red",
      "category": "Hue",
      "type": "Primary",
      "code": {
        "rgba": [255,0,0,1],
        "hex": "#F00"
      }
    },
    {
      "color": "Blue",
      "category": "Hue",
      "type": "Primary",
      "code": {
        "rgba": [0,0,255,1],
        "hex": "#00F"
      }
    },
    {
      "color": "Yellow",
      "category": "Hue",
      "type": "Primary",
      "code": {
        "rgba": [255,255,0,1],
        "hex": "#FF0"
      }
    },
    {
      "color": "Green",
      "category": "Hue",
      "type": "Secondary",
      "code": {
        "rgba": [0,255,0,1],
        "hex": "#0F0"
      }
    }
  ]
};

colores.colors.forEach(c => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.style.backgroundColor = c.code.hex;

  // Texto negro si el fondo es blanco o amarillo
  if (c.color === "White" || c.color === "Yellow"|| c.color === "Green") {
    card.classList.add("text-dark");
  }

  card.innerHTML = `
    <h2>${c.color}</h2>
    <p>${c.category}</p>
    ${c.type ? `<p>${c.type}</p>` : ""}
    <p style="float:right;">rgba(${c.code.rgba})</p>
  `;

  contenedor.appendChild(card);
});
}
