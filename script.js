// BMI ranges and their interpretations
const BMI_RANGES = [
  {
    range: [0, 18.5],
    category: "Underweight",
    description:
      "You may need to gain some weight. Consult a healthcare provider.",
    color: "#2563eb",
  },
  {
    range: [18.5, 24.9],
    category: "Normal Weight",
    description: "You are in a healthy weight range. Keep it up!",
    color: "#16a34a",
  },
  {
    range: [25, 29.9],
    category: "Overweight",
    description:
      "You may need to lose some weight. Consider diet and exercise.",
    color: "#ca8a04",
  },
  {
    range: [30, 34.9],
    category: "Obese Class I",
    description: "Health risks are increased. Consult a healthcare provider.",
    color: "#ea580c",
  },
  {
    range: [35, 39.9],
    category: "Obese Class II",
    description: "Health risks are high. Please seek medical advice.",
    color: "#dc2626",
  },
  {
    range: [40, Infinity],
    category: "Obese Class III",
    description:
      "Health risks are very high. Immediate medical consultation recommended.",
    color: "#991b1b",
  },
];

// Populate BMI ranges list
const rangesList = document.getElementById("ranges-list");
BMI_RANGES.forEach((item) => {
  const li = document.createElement("li");
  li.innerHTML = `<span>${item.category}:</span> <span>${item.range[0]} - ${
    item.range[1] === Infinity ? "40+" : item.range[1]
  }</span>`;
  rangesList.appendChild(li);
});

// Form submission handler
document.getElementById("bmi-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);

  if (height > 0 && weight > 0) {
    const heightInM = height / 100;
    const bmi = weight / (heightInM * heightInM);
    const bmiRounded = parseFloat(bmi.toFixed(1));

    const category = BMI_RANGES.find(
      (range) => bmiRounded >= range.range[0] && bmiRounded <= range.range[1]
    );

    // Update the result section
    document.getElementById("bmi-number").textContent = bmiRounded;
    document.getElementById("bmi-category").textContent = category.category;
    document.getElementById("bmi-category").style.color = category.color;
    document.getElementById("bmi-description").textContent =
      category.description;

    // Show the result section
    document.getElementById("result").classList.remove("hidden");
  }
});
