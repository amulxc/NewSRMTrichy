const healthTestsData = [
            {
                id: 1,
                name: 'Pink October – Comprehensive Women Health Package',
                parameters: 26,
                price: 899,
                originalPrice: 12999,
                discount: '93% OFF',
                organs: ['heart', 'liver', 'kidney', 'breast', 'general'],
                schemes: ['women', 'comprehensive', 'discount'],
                features: [
                    'Random Blood Glucose',
                    'HbA1c',
                    'Complete Haemogram',
                    'Renal Function Test',
                    'Electrolytes',
                    'Liver Function Test',
                    'Lipid Profile',
                    'Thyroid Function Test',
                    'Blood Grouping & Rh Typing',
                    'Vitamin B12',
                    'Vitamin D',
                    'C-Reactive Protein',
                    'Serum Calcium',
                    'Serum Ferritin',
                    'Rheumatoid Factor',
                    'CA-125',
                    'CEA',
                    'Urine Routine Examination',
                    'PAP Smear',
                    'ECG',
                    'ECHO Screening',
                    'Chest X-Ray',
                    'USG Abdomen',
                    'Mammogram',
                    'USG Breast',
                    'Colposcopy'
                ],
                specialConsultation: []
            },
            {
                id: 2,
                name: 'Health Checkup',
                parameters: 16,
                price: 499,
                originalPrice: 6500,
                discount: '92% OFF',
                organs: ['heart', 'liver', 'kidney', 'general'],
                schemes: ['discount'],
                features: [
                    'Random Blood Glucose',
                    'HbA1c',
                    'Blood Grouping & Rh Typing',
                    'Complete Blood Count',
                    'Renal Function Test',
                    'Electrolytes',
                    'PAP Smear (Women only)',
                    'Liver Function Test',
                    'Lipid Profile',
                    'TSH',
                    'Serology (HIV, HCV, HBsAg)',
                    'BT, CT & PT/INR',
                    'Urine Routine Examination',
                    'ECG',
                    'Chest X-Ray',
                    'USG Abdomen'
                ],
                specialConsultation: []
            },
            {
                id: 3,
                name: 'Basic Health Checkup',
                parameters: 11,
                price: 950,
                originalPrice: 3350,
                discount: '72% OFF',
                organs: ['heart', 'kidney', 'general'],
                schemes: ['discount'],
                features: [
                    'Complete Haemogram',
                    'Fasting Blood Glucose',
                    'HbA1c',
                    'Blood Grouping & Rh Typing',
                    'Renal Function Test',
                    'Lipid Profile',
                    'Urine Routine',
                    'ECG',
                    'Chest X-Ray',
                    'Ultrasound Abdomen',
                    'PAP Smear (Female only)'
                ],
                specialConsultation: [
                    'Diet Counselling',
                    'Physiotherapy',
                    'Ophthalmology',
                    'Dental',
                    'General Medicine',
                    'General Surgery',
                    'Orthopaedics',
                    'Obstetrics & Gynaecology'
                ]
            },
            {
                id: 4,
                name: 'Executive Health Checkup',
                parameters: 13,
                price: 1500,
                originalPrice: 5500,
                discount: '73% OFF',
                organs: ['heart', 'liver', 'kidney', 'general'],
                schemes: ['executive', 'discount'],
                features: [
                    'Complete Haemogram',
                    'Fasting Blood Glucose',
                    'HbA1c',
                    'Blood Grouping & Rh Typing',
                    'Renal Function Test',
                    'Lipid Profile',
                    'Urine Routine',
                    'ECG',
                    'Chest X-Ray',
                    'Ultrasound Abdomen',
                    'PAP Smear (Female only)',
                    'Liver Function Test',
                    'Thyroid Function Test'
                ],
                specialConsultation: [
                    'Diet Counselling',
                    'Physiotherapy',
                    'Ophthalmology',
                    'Dental',
                    'General Medicine',
                    'General Surgery',
                    'Orthopaedics',
                    'Obstetrics & Gynaecology'
                ]
            },
            {
                id: 5,
                name: 'Comprehensive Health Checkup',
                parameters: 14,
                price: 2000,
                originalPrice: 6950,
                discount: '71% OFF',
                organs: ['heart', 'liver', 'kidney', 'general'],
                schemes: ['comprehensive', 'discount'],
                features: [
                    'Complete Haemogram',
                    'Fasting Blood Glucose',
                    'HbA1c',
                    'Blood Grouping & Rh Typing',
                    'Renal Function Test',
                    'Lipid Profile',
                    'Urine Routine',
                    'ECG',
                    'Chest X-Ray',
                    'Ultrasound Abdomen',
                    'PAP Smear (Female only)',
                    'Liver Function Test',
                    'Thyroid Function Test',
                    'ECHO'
                ],
                specialConsultation: [
                    'Diet Counselling',
                    'Physiotherapy',
                    'Ophthalmology',
                    'Dental',
                    'General Medicine',
                    'General Surgery',
                    'Orthopaedics',
                    'Obstetrics & Gynaecology'
                ]
            },
            {
                id: 6,
                name: 'Pink October – Breast Cancer Awareness Package',
                parameters: 8,
                price: 399,
                originalPrice: null,
                discount: null,
                organs: ['breast', 'general'],
                schemes: ['women', 'awareness'],
                features: [
                    'Fasting Blood Sugar',
                    'Complete Blood Count',
                    'Renal Function Test',
                    'Liver Function Test',
                    'Thyroid Function Test',
                    'Mammogram',
                    'USG Breast',
                    'General Surgery Consultation'
                ],
                specialConsultation: ['General Surgery']
            }
        ];

        let filteredTests = [...healthTestsData];

        function openDetailsModal(testId) {
            const test = healthTestsData.find(t => t.id === testId);
            if (!test) return;

            document.getElementById('modalTitle').textContent = test.name;
            document.getElementById('modalPrice').textContent = `₹${test.price}`;
            
            if (test.originalPrice) {
                document.getElementById('modalOriginalPrice').textContent = `₹${test.originalPrice}`;
                document.getElementById('modalOriginalPrice').style.display = 'inline';
            } else {
                document.getElementById('modalOriginalPrice').style.display = 'none';
            }

            if (test.discount) {
                document.getElementById('modalDiscount').textContent = test.discount;
                document.getElementById('modalDiscount').style.display = 'inline';
            } else {
                document.getElementById('modalDiscount').style.display = 'none';
            }

            document.getElementById('modalParameters').textContent = `${test.parameters} Parameters`;
            document.getElementById('featuresCount').textContent = test.features.length;

            const featuresList = document.getElementById('modalFeaturesList');
            featuresList.innerHTML = test.features.map(feature => `
                <div class="modal-feature-item">
                    <i class="fas fa-check-circle modal-feature-icon"></i>
                    <span class="modal-feature-text">${feature}</span>
                </div>
            `).join('');

            const consultationSection = document.getElementById('consultationSection');
            const consultationList = document.getElementById('modalConsultationList');
            
            if (test.specialConsultation && test.specialConsultation.length > 0) {
                consultationSection.style.display = 'block';
                consultationList.innerHTML = test.specialConsultation.map(consultation => `
                    <div class="modal-consultation-badge">
                        <i class="fas fa-user-md"></i>
                        ${consultation}
                    </div>
                `).join('');
            } else {
                consultationSection.style.display = 'none';
            }

            document.getElementById('detailsModal').classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeDetailsModal() {
            document.getElementById('detailsModal').classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        function renderHealthTests(tests) {
            const grid = document.getElementById('healthProductsGrid');
            
            if (tests.length === 0) {
                grid.innerHTML = `
                    <div class="health-no-results">
                        <div class="health-no-results-icon"><i class="fas fa-flask" style="font-size: 4rem; color: var(--color-text-light);"></i></div>
                        <div class="health-no-results-text">No tests found matching your criteria</div>
                    </div>
                `;
                document.getElementById('healthResultsCount').textContent = 'No results found';
                grid.style.gridTemplateColumns = "auto";
                return;
            }

            grid.innerHTML = tests.map(test => `
                <div class="health-card">
                    <h3 class="health-card-title">${test.name}</h3>
                    <div class="health-card-parameters">
                        <i class="fas fa-vial health-card-parameter-icon"></i>
                        <span>Includes ${test.parameters} parameters</span>
                    </div>
                    <div class="health-card-pricing">
                        <span class="health-card-price">₹${test.price}</span>
                        ${test.originalPrice ? `<span class="health-card-original-price">₹${test.originalPrice}</span>` : ''} 
                        ${test.discount ? `<span class="health-card-discount">${test.discount}</span>` : ''}
                    </div>
                    
                    <div class="health-card-actions">
                        <button class="health-btn health-btn-secondary" onclick="openDetailsModal(${test.id})">
                            <i class="fas fa-info-circle"></i> View Details
                        </button>
                    </div>
                </div>
            `).join('');
            grid.style.gridTemplateColumns = "repeat(auto-fill, minmax(320px, 1fr))";

            document.getElementById('healthResultsCount').textContent = 
                `Showing ${tests.length} result${tests.length !== 1 ? 's' : ''}`;
        }

        function applyFilters() {
            const searchQuery = document.getElementById('healthSearchInput').value.toLowerCase();
            const minPrice = parseInt(document.getElementById('healthMinPrice').value) || 0;
            const maxPrice = parseInt(document.getElementById('healthMaxPrice').value) || Infinity;
            
            const selectedOrgans = Array.from(document.querySelectorAll('input[data-filter="organ"]:checked'))
                .map(cb => cb.value);
            const selectedSchemes = Array.from(document.querySelectorAll('input[data-filter="scheme"]:checked'))
                .map(cb => cb.value);

            filteredTests = healthTestsData.filter(test => {
                const matchesSearch = test.name.toLowerCase().includes(searchQuery);
                const matchesPrice = test.price >= minPrice && test.price <= maxPrice;
                const matchesOrgan = selectedOrgans.length === 0 || 
                    selectedOrgans.some(organ => test.organs.includes(organ));
                const matchesScheme = selectedSchemes.length === 0 || 
                    selectedSchemes.some(scheme => test.schemes.includes(scheme));

                return matchesSearch && matchesPrice && matchesOrgan && matchesScheme;
            });

            applySorting();
        }

        function applySorting() {
            const sortValue = document.getElementById('healthSortSelect').value;

            switch (sortValue) {
                case 'price-low':
                    filteredTests.sort((a, b) => a.price - b.price);
                    break;
                case 'price-high':
                    filteredTests.sort((a, b) => b.price - a.price);
                    break;
                case 'parameters':
                    filteredTests.sort((a, b) => b.parameters - a.parameters);
                    break;
                case 'discount':
                    filteredTests.sort((a, b) => {
                        const discountA = a.discount ? parseInt(a.discount) : 0;
                        const discountB = b.discount ? parseInt(b.discount) : 0;
                        return discountB - discountA;
                    });
                    break;
                default:
                    filteredTests = [...healthTestsData].filter(test => 
                        filteredTests.some(ft => ft.id === test.id)
                    );
            }

            renderHealthTests(filteredTests);
        }

        document.getElementById('healthSearchInput').addEventListener('input', applyFilters);
        document.getElementById('healthMinPrice').addEventListener('input', applyFilters);
        document.getElementById('healthMaxPrice').addEventListener('input', applyFilters);
        document.getElementById('healthSortSelect').addEventListener('change', applySorting);

        document.querySelectorAll('.health-filter-checkbox').forEach(checkbox => {
            checkbox.addEventListener('change', applyFilters);
        });

        document.getElementById('clearPriceBtn').addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById('healthMinPrice').value = '';
            document.getElementById('healthMaxPrice').value = '';
            applyFilters();
        });

        document.getElementById('modalCloseBtn').addEventListener('click', closeDetailsModal);
        // document.getElementById('modalCloseFooterBtn').addEventListener('click', closeDetailsModal);

        document.getElementById('detailsModal').addEventListener('click', (e) => {
            if (e.target.id === 'detailsModal') {
                closeDetailsModal();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeDetailsModal();
            }
        });

        renderHealthTests(filteredTests);