 // Gym Image Change on Card Click
        const gymFeatureBoxes = document.querySelectorAll('.infra-gym-feature-box');
        const gymMainImage = document.getElementById('gymMainImage');

        gymFeatureBoxes.forEach((box, index) => {
            box.addEventListener('click', function() {
                // Remove active class from all boxes
                gymFeatureBoxes.forEach(b => b.classList.remove('active'));
                
                // Add active class to clicked box
                this.classList.add('active');
                
                // Change the main image
                const newImageSrc = this.getAttribute('data-image');
                gymMainImage.src = newImageSrc;
            });
        });