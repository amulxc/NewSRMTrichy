 const scenes = {
      srmist: {
        title: "SRMIST",
        description: "Main Campus View",
        thumbnail: "https://images.unsplash.com/photo-1562774053-701939374585?w=200&h=200&fit=crop",
        panorama: "https://pannellum.org/images/alma.jpg",
        yaw: 0,
        hotSpots: [
          {
            pitch: -20,
            yaw: 0,
            type: "scene",
            text: "Towards HI-TECH",
            sceneId: "hitech",
            cssClass: "custom-hotspot",
            createTooltipFunc: createArrowNavigator,
            createTooltipArgs: "Towards HI-TECH"
          },
          {
            pitch: -20,
            yaw: 90,
            type: "scene",
            text: "Towards Automobile",
            sceneId: "automobile",
            cssClass: "custom-hotspot",
            createTooltipFunc: createArrowNavigator,
            createTooltipArgs: "Automobile Engineering"
          },
          {
            pitch: -20,
            yaw: 180,
            type: "scene",
            text: "Arch Gate",
            sceneId: "archgate",
            cssClass: "custom-hotspot",
            createTooltipFunc: createArrowNavigator,
            createTooltipArgs: "Arch Gate"
          },
          {
            pitch: -20,
            yaw: -90,
            type: "scene",
            text: "Clock Tower",
            sceneId: "clocktower",
            cssClass: "custom-hotspot",
            createTooltipFunc: createArrowNavigator,
            createTooltipArgs: "Clock Tower"
          }
        ]
      },
      hitech: {
        title: "HI-TECH",
        description: "Technology Block",
        thumbnail: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=200&h=200&fit=crop",
        panorama: "https://pannellum.org/images/bma-1.jpg",
        yaw: 180,
        hotSpots: [
          {
            pitch: -12,
            yaw: 180,
            type: "scene",
            text: "Back to SRMIST",
            sceneId: "srmist",
            cssClass: "custom-hotspot",
            createTooltipFunc: createArrowNavigator,
            createTooltipArgs: "Back to Main Campus"
          }
        ]
      },
      automobile: {
        title: "Automobile Block",
        description: "Engineering Department",
        thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=200&fit=crop",
        panorama: "https://pannellum.org/images/cerro-toco-0.jpg",
        yaw: 180,
        hotSpots: [
          {
            pitch: -12,
            yaw: 180,
            type: "scene",
            text: "Back to SRMIST",
            sceneId: "srmist",
            cssClass: "custom-hotspot",
            createTooltipFunc: createArrowNavigator,
            createTooltipArgs: "Back to Main Campus"
          }
        ]
      },
      archgate: {
        title: "Arch Gate",
        description: "Main Entrance",
        thumbnail: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=200&h=200&fit=crop",
        panorama: "https://pannellum.org/images/jfk.jpg",
        yaw: 180,
        hotSpots: [
          {
            pitch: -12,
            yaw: 180,
            type: "scene",
            text: "Back to SRMIST",
            sceneId: "srmist",
            cssClass: "custom-hotspot",
            createTooltipFunc: createArrowNavigator,
            createTooltipArgs: "Back to Main Campus"
          }
        ]
      },
      clocktower: {
        title: "Clock Tower",
        description: "Historic Landmark",
        thumbnail: "https://images.unsplash.com/photo-1572883454114-1cf0031ede2a?w=200&h=200&fit=crop",
        panorama: "https://pannellum.org/images/bma-0.jpg",
        yaw: 180,
        hotSpots: [
          {
            pitch: -12,
            yaw: 180,
            type: "scene",
            text: "Back to SRMIST",
            sceneId: "srmist",
            cssClass: "custom-hotspot",
            createTooltipFunc: createArrowNavigator,
            createTooltipArgs: "Back to Main Campus"
          }
        ]
      },
      cholasstatue: {
        title: "Chola's Statue",
        description: "Cultural Monument",
        thumbnail: "https://images.unsplash.com/photo-1555992336-fb0d29498b13?w=200&h=200&fit=crop",
        panorama: "https://pannellum.org/images/alma.jpg",
        yaw: 90,
        hotSpots: []
      },
      techpark: {
        title: "Tech Park Entrance",
        description: "Innovation Hub",
        thumbnail: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=200&h=200&fit=crop",
        panorama: "https://pannellum.org/images/bma-1.jpg",
        yaw: 45,
        hotSpots: []
      }
    };

    // Create arrow navigator with GIF
    function createArrowNavigator(hotSpotDiv, args) {
      const container = document.createElement('div');
      container.className = 'arrow-container';
      
      // Label above arrow
      const label = document.createElement('div');
      label.className = 'arrow-label';
      label.textContent = args;
      
      // Arrow GIF - Using a placeholder animated arrow
      // Replace this URL with your actual arrow GIF
      const arrowImg = document.createElement('img');
      arrowImg.className = 'arrow-gif';
      arrowImg.src = './assets/virtual_tour/gif/arrow.png';
      arrowImg.alt = 'Navigation Arrow';
      
      container.appendChild(label);
      container.appendChild(arrowImg);
      hotSpotDiv.appendChild(container);
    }

    let viewer;
    let autoRotateEnabled = true;

    function initViewer() {
      viewer = pannellum.viewer('panorama', {
        default: {
          firstScene: "srmist",
          sceneFadeDuration: 1000,
          autoLoad: true,
          autoRotate: -2, // Negative value rotates left, positive rotates right
          autoRotateInactivityDelay: 2000, // Start rotating after 2 seconds of inactivity
          autoRotateStopDelay: 5000 // Stop rotating after 5 seconds of activity
        },
        scenes: scenes
      });

      viewer.on('scenechange', function(sceneId) {
        updateActiveLocation(sceneId);
      });
    }

    function updateActiveLocation(sceneId) {
      const items = document.querySelectorAll('.location-item');
      items.forEach(item => {
        if (item.dataset.scene === sceneId) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });
    }

    function populateSidebar() {
      const list = document.getElementById('locationList');
      
      Object.keys(scenes).forEach((sceneId, index) => {
        const scene = scenes[sceneId];
        const li = document.createElement('li');
        li.className = 'location-item';
        if (index === 0) li.classList.add('active');
        li.dataset.scene = sceneId;
        
        li.innerHTML = `
          <img src="${scene.thumbnail}" alt="${scene.title}" class="location-thumb">
          <div class="location-name">${scene.title}</div>
        `;
        
        li.addEventListener('click', () => {
          viewer.loadScene(sceneId);
        });
        
        list.appendChild(li);
      });
    }

    // Auto-rotate toggle
    document.getElementById('autoRotateBtn').addEventListener('click', function() {
      autoRotateEnabled = !autoRotateEnabled;
      
      if (autoRotateEnabled) {
        viewer.startAutoRotate(-2);
        this.classList.add('active');
      } else {
        viewer.stopAutoRotate();
        this.classList.remove('active');
      }
    });

    window.addEventListener('load', () => {
      populateSidebar();
      initViewer();
      // Set initial button state
      document.getElementById('autoRotateBtn').classList.add('active');
    });