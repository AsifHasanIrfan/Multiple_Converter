import { convert } from '/data.js';

window.onload = function () {
  main();
};

let previousLeftSelectedValue = '';
let previousRightSelectedValue = '';


function main() {
  const categorySelect = document.getElementById("category_select");
  const leftSelect = document.getElementById("left_select");
  const rightSelect = document.getElementById("right_select");
   const leftInput = document.getElementById("left_input");
   const rightInput = document.getElementById("right_input");

  // Handle Category Select.
  const converterKeys = Object.keys(convert).sort();
  removeAllChild(categorySelect);
  converterKeys.forEach(item => {
    addSelectOption(categorySelect, {value: item, text: convert[item].name})
  });

  updateCategorySelect(categorySelect, leftSelect, rightSelect);

  calculateValue(categorySelect, leftSelect, rightSelect);

  categorySelect.addEventListener('change', function () {
    updateCategorySelect(categorySelect, leftSelect, rightSelect)
  });

  // Handle left unit select
  leftSelect.addEventListener('change', function (e) {
     if (e.target.value === rightSelect.value) {
       const options = rightSelect.getElementsByTagName("option");
       for (let i = 0; i < options.length; i++) {
         if (previousLeftSelectedValue === options[i].value) {
          options[i].selected = "selected";
          previousRightSelectedValue = options[i].value;
          break;
         }
       }
     }
    previousLeftSelectedValue = e.target.value;
    calculateValue(categorySelect, leftSelect, rightSelect);
  });

  leftInput.addEventListener('keyup', function(e) {
    if (e.target.value && !isNaN(e.target.value)) {
      const categoryName = categorySelect.value;
      const variants = convert[categoryName].variants;
      const variantKey = `${leftSelect.value}:${rightSelect.value}`;
      const variant = variants[variantKey];
      leftInput.value = Number(e.target.value);
      rightInput.value = variant.calculation(Number(e.target.value));
    } else {
      rightInput.value = '';
    }
  });

  // Handle right unit select
  rightSelect.addEventListener('change', function (e) {
    if (e.target.value === leftSelect.value) {
      const options = leftSelect.getElementsByTagName("option");
      for (let i = 0; i < options.length; i++) {
        if (previousRightSelectedValue === options[i].value) {
          options[i].selected = "selected";
          previousLeftSelectedValue = options[i].value;
          break;
        }
      }
    }
    previousRightSelectedValue = e.target.value;
    calculateValue(categorySelect, leftSelect, rightSelect);
  });

  rightInput.addEventListener("keyup", function (e) {
    if (e.target.value && !isNaN(e.target.value)) {
      const categoryName = categorySelect.value;
      const variants = convert[categoryName].variants;
      const variantKey = `${rightSelect.value}:${leftSelect.value}`;
      const variant = variants[variantKey];
      rightInput.value = Number(e.target.value);
      leftInput.value = variant.calculation(Number(e.target.value));
    } else {
      leftInput.value = "";
    }
  });
};

// Add Select Option To The Parent.
function addSelectOption (parent, option) {
  const opt = document.createElement("option");
  opt.setAttribute("value", option.value);
  opt.innerText = option.text;

  parent.appendChild(opt);
};

function updateCategorySelect (categorySelect, leftSelect, rightSelect) {
  const categoryName = categorySelect.value;
  const units = convert[categoryName].units;
  const options = Object.keys(units);

  // Handle Left Select.
  removeAllChild(leftSelect);
  options.forEach((item) => {
    addSelectOption(leftSelect, { value: item, text: units[item] });
  });
  previousLeftSelectedValue = leftSelect.value;

  // Handle right Select.
  removeAllChild(rightSelect);
  options.forEach((item) => {
    addSelectOption(rightSelect, { value: item, text: units[item] });
  });

  rightSelect.getElementsByTagName("option")[1].selected = "selected";
  previousRightSelectedValue = rightSelect.value;

  calculateValue(
    categorySelect,
    leftSelect,
    rightSelect
  );
};

function calculateValue (categorySelect, leftSelect, rightSelect) {
  const leftInput = document.getElementById("left_input");
  const rightInput = document.getElementById("right_input");
  const formulaText = document.getElementById("formula");

  const categoryName = categorySelect.value;
  const variants = convert[categoryName].variants;
  const variantKey = `${leftSelect.value}:${rightSelect.value}`;
  const variant = variants[variantKey];
  leftInput.value = 1;
  rightInput.value = variant.calculation(1);
  formulaText.innerText = variant.formula;
};

// function updateUnitsSelect (e, selected) {
//   if ((e.target.value = selected.value)) {
//     const options = selected.getElementsByTagName("option");
//     for (let i = 0; i < options.length; i++) {
//       options[i].selected = "selected";
//       previousRightSelectedValue = options[i].value;
//       break;
//     }
//   }
// };

function removeAllChild (parent) {
  while (parent.firstChild) {
    parent.firstChild.remove();
  }
};