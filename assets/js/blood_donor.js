const bloodGroups = [
  "A+ (Positive)",
  "A− (Negative)",
  "B+ (Positive)",
  "B− (Negative)",
  "AB+ (Positive)",
  "AB− (Negative)",
  "O+ (Positive)",
  "O− (Negative)"
];
const headings = document.querySelector("#blood_data");

bloodGroups.map((e)=>{
    console.log(headings.innerHTML);
    
})

bloodGroups.map((h4, index) => {
    headings.innerHTML+=`<div class="department-card">
                        <div class="department-header">
                            <div class="department-icon">
                                <i class="fas fa-list"></i>
                            </div>
                            <h4>${h4}</h4>
                        </div>
                    </div>
`
});