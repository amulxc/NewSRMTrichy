const organs = [
  { icon: "fa-heart", name: "Heart" },
  { icon: "fa-lungs", name: "Lungs" },
  { icon: "fa-bone", name: "Bone" },
  { icon: "material-symbols-outlined", name: "Kidneys",icon_name:"urology" },
  { icon: "fa-eye", name: "Cornea" },
  { icon: "fa-bone", name: "Bone & Tissues" }
];

const container = document.getElementById("organ_data");

organs.forEach(o => {
  container.innerHTML += `
    <div class="department-card">
      <div class="department-header">
        <div class="department-icon">
          ${o.icon.includes("fa-")?
            `<i class="fa ${o.icon}"></i>`
            :
            `<i class="${o.icon}">${o.icon_name}</i>`
          }
        </div>
        <h4>${o.name}</h4>
      </div>
    </div>
  `;
});