        const healthTestsData = [
            {
                id: 1,
                name: 'CBC (Complete Blood Count)',
                parameters: 31,
                price: 350,
                originalPrice: 375,
                discount: '7% OFF',
                organs: ['heart', 'general'],
                schemes: ['discount']
            },
            {
                id: 2,
                name: 'TSH (Thyroid Stimulating Hormone) 3G Ultra',
                parameters: 1,
                price: 350,
                originalPrice: 380,
                discount: '8% OFF',
                organs: ['brain', 'general'],
                schemes: ['discount']
            },
            {
                id: 3,
                name: 'CBC With ESR (CBC+PS+ESR)',
                parameters: 36,
                price: 420,
                originalPrice: null,
                discount: null,
                organs: ['heart', 'general'],
                schemes: []
            },
            {
                id: 4,
                name: 'Thyroid Panel Free (FT3, FT4, TSH)',
                parameters: 3,
                price: 900,
                originalPrice: 1050,
                discount: '14% OFF',
                organs: ['brain', 'general'],
                schemes: ['discount']
            },
            {
                id: 5,
                name: 'Fever Panel – Comprehensive',
                parameters: 75,
                price: 1999,
                originalPrice: null,
                discount: null,
                organs: ['general'],
                schemes: ['comprehensive']
            },
            {
                id: 6,
                name: 'Liver Function Profile (LFT)',
                parameters: 12,
                price: 800,
                originalPrice: 825,
                discount: '3% OFF',
                organs: ['liver', 'stomach'],
                schemes: ['discount']
            },
            {
                id: 7,
                name: 'Lipid Profile',
                parameters: 8,
                price: 1000,
                originalPrice: null,
                discount: null,
                organs: ['heart', 'general'],
                schemes: []
            },
            {
                id: 8,
                name: 'Total IgE',
                parameters: 1,
                price: 900,
                originalPrice: 1150,
                discount: '22% OFF',
                organs: ['general'],
                schemes: ['discount']
            },
            {
                id: 9,
                name: 'Anti-CCP Antibodies',
                parameters: 1,
                price: 1900,
                originalPrice: 2150,
                discount: '12% OFF',
                organs: ['bones', 'general'],
                schemes: ['discount']
            },
            {
                id: 10,
                name: 'ANA (Anti Nuclear Antibody)',
                parameters: 4,
                price: 900,
                originalPrice: null,
                discount: null,
                organs: ['general'],
                schemes: []
            },
            {
                id: 11,
                name: 'Double Marker (Dual Marker) FMF',
                parameters: 8,
                price: 2750,
                originalPrice: null,
                discount: null,
                organs: ['general'],
                schemes: ['prenatal']
            },
            {
                id: 12,
                name: 'AMH (Anti-Müllerian Hormone)',
                parameters: 1,
                price: 2150,
                originalPrice: 2200,
                discount: '2% OFF',
                organs: ['general'],
                schemes: ['discount']
            },
            {
                id: 13,
                name: 'Hb Variant (Hemoglobin Variant) Analysis',
                parameters: 11,
                price: 1040,
                originalPrice: 1100,
                discount: '5% OFF',
                organs: ['heart', 'general'],
                schemes: ['discount']
            },
            {
                id: 14,
                name: 'Second Trimester Quadruple Marker',
                parameters: 12,
                price: 3600,
                originalPrice: null,
                discount: null,
                organs: ['general'],
                schemes: ['prenatal']
            },
            {
                id: 15,
                name: 'NIPT (Non-Invasive Prenatal Screening Test)',
                parameters: 1,
                price: 16500,
                originalPrice: null,
                discount: null,
                organs: ['general'],
                schemes: ['prenatal', 'comprehensive']
            }
        ];

        let filteredTests = [...healthTestsData];

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
                grid.style.gridTemplateColumns="auto"
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
                        <button class="health-btn health-btn-secondary"><i class="fas fa-info-circle"></i> View Details</button>
                        <!--<button class="health-btn health-btn-primary"><i class="fas fa-shopping-cart"></i> Add to Cart</button>-->
                    </div>
                </div>
            `).join('');
            grid.style.gridTemplateColumns="repeat(auto-fill, minmax(320px, 1fr))"

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

        document.getElementById('healthClearFilters').addEventListener('click', () => {
            document.getElementById('healthSearchInput').value = '';
            document.getElementById('healthMinPrice').value = '';
            document.getElementById('healthMaxPrice').value = '';
            document.querySelectorAll('.health-filter-checkbox').forEach(cb => cb.checked = false);
            document.getElementById('healthSortSelect').value = 'default';
            
            filteredTests = [...healthTestsData];
            renderHealthTests(filteredTests);
        });

        renderHealthTests(filteredTests);