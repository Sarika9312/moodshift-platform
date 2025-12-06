// ===========================
// MoodShift Main JavaScript
// ===========================

document.addEventListener('DOMContentLoaded', function() {
  initNavigation();
  initMoodZones();
  initFormHandlers();
  initSmoothScroll();
  initAnimations();
  initCounters();
  setCurrentDate();
});

// Navigation functionality
function initNavigation() {
  const navLinks = document.querySelectorAll('.nav-menu .nav-item');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      navLinks.forEach(item => item.classList.remove('active'));
      this.classList.add('active');
    });
  });
}

// Mood zone interactivity
function initMoodZones() {
  const moodZones = document.querySelectorAll('.mood-zone');
  
  moodZones.forEach(zone => {
    zone.addEventListener('mouseenter', function() {
      updateTheme(this.dataset.mood);
    });
    
    zone.addEventListener('mouseleave', function() {
      resetTheme();
    });

    zone.addEventListener('click', function() {
      handleMoodClick(this.dataset.mood);
    });
  });
}

// Update theme colors
function updateTheme(mood) {
  const themes = {
    calm: { primary: '#06b6d4', secondary: '#0891b2' },
    energetic: { primary: '#f59e0b', secondary: '#d97706' },
    mystery: { primary: '#8b5cf6', secondary: '#7c3aed' },
    happy: { primary: '#ec4899', secondary: '#db2777' }
  };

  const theme = themes[mood];
  if (theme) {
    document.documentElement.style.setProperty('--primary-color', theme.primary);
    document.documentElement.style.setProperty('--secondary-color', theme.secondary);
  }
}

// Reset to default theme
function resetTheme() {
  document.documentElement.style.setProperty('--primary-color', '#6366f1');
  document.documentElement.style.setProperty('--secondary-color', '#ec4899');
}

// Handle mood selection
function handleMoodClick(mood) {
  console.log(`Mood selected: ${mood}`);
  showNotification(`Mood logged: ${mood}`);
}

// Form handlers
function initFormHandlers() {
  const saveBtns = document.querySelectorAll('.save-btn, .submit-btn');
  const draftBtns = document.querySelectorAll('.draft-btn');
  
  saveBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      handleFormSubmit();
    });
  });

  draftBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      handleDraftSave();
    });
  });

  // Use prompt buttons
  document.querySelectorAll('.use-prompt-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const promptText = e.target.parentElement.querySelector('p').textContent;
      const textarea = document.querySelector('.entry-textarea, .mood-note');
      if (textarea) {
        textarea.value = promptText + '\n\n';
        textarea.focus();
      }
    });
  });

  // Mood buttons
  document.querySelectorAll('.mood-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.mood-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
    });
  });
}

function handleFormSubmit() {
  const title = document.querySelector('.entry-title');
  const content = document.querySelector('.entry-textarea, .mood-note');
  
  if (content && content.value.trim()) {
    showNotification('Entry saved successfully!', 'success');
    if (title) title.value = '';
    content.value = '';
  } else {
    showNotification('Please add some content', 'error');
  }
}

function handleDraftSave() {
  showNotification('Entry saved as draft', 'info');
}

// Smooth scroll for anchor links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Animations and fade-in effects
function initAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.feature-card, .insight-card, .mood-card, .community-post, .journal-entry, .prompt-card').forEach(el => {
    observer.observe(el);
  });
}

// Counter animation for statistics
function initCounters() {
  const observerOptions = { threshold: 0.5 };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
        entry.target.classList.add('animated');
        
        const stats = entry.target.querySelectorAll('.stat-number');
        stats.forEach(stat => {
          const value = parseInt(stat.textContent.replace(/\D/g, ''));
          animateCounter(stat, value);
        });
        
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.stats-grid, .stats-boxes').forEach(el => {
    observer.observe(el);
  });
}

function animateCounter(element, target, duration = 2000) {
  const start = 0;
  const increment = target / (duration / 16);
  let current = start;

  const updateCounter = () => {
    current += increment;
    if (current < target) {
      element.textContent = Math.floor(current);
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target;
    }
  };

  updateCounter();
}

// Set current date in date input
function setCurrentDate() {
  const dateInput = document.getElementById('entryDate');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.value = today;
  }
}

// Notification system
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.classList.add('show');
  }, 10);
  
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Console branding
console.log('%c🌈 Welcome to MoodShift! %c', 'color: #6366f1; font-size: 20px; font-weight: bold;', '');
console.log('%cTrack your moods, understand yourself, live better.', 'color: #ec4899; font-size: 14px;');

// Form validation
function initFormValidation() {
  const moodBtns = document.querySelectorAll('.mood-btn-inline');
  let selectedMood = null;
  
  moodBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      moodBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      selectedMood = this.textContent.toLowerCase();
    });
  });

  const saveButton = document.querySelector('.btn-save');
  if (saveButton) {
    saveButton.addEventListener('click', function() {
      const title = document.querySelector('#entry-title')?.value;
      const text = document.querySelector('#entry-text')?.value;
      
      if (!title || !text) {
        alert('Please fill in all required fields');
        return;
      }
      
      alert('Entry saved successfully!');
      // Reset form
      document.querySelector('.entry-form').reset();
      moodBtns.forEach(b => b.classList.remove('active'));
    });
  }
}

// Smooth scrolling for navigation links
function initSmoothScroll() {
  const scrollLinks = document.querySelectorAll('a[href^="#"]');
  
  scrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Initialize scroll animations
function initAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  const animatedElements = document.querySelectorAll('.feature-card, .benefit-card, .testimonial-card, .community-post, .journal-entry');
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

// Mood logging functionality
function logMood(moodType, note = '') {
  const moodEntry = {
    timestamp: new Date().toISOString(),
    moodType: moodType,
    note: note
  };
  
  // Save to localStorage
  let moods = JSON.parse(localStorage.getItem('moods')) || [];
  moods.push(moodEntry);
  localStorage.setItem('moods', JSON.stringify(moods));
  
  console.log('Mood logged:', moodEntry);
  return moodEntry;
}

// Retrieve mood history
function getMoodHistory() {
  return JSON.parse(localStorage.getItem('moods')) || [];
}

// Get mood statistics
function getMoodStats() {
  const moods = getMoodHistory();
  const stats = {
    calm: 0,
    energetic: 0,
    mystery: 0,
    happy: 0
  };
  
  moods.forEach(entry => {
    if (stats.hasOwnProperty(entry.moodType)) {
      stats[entry.moodType]++;
    }
  });
  
  return stats;
}

// Format date for display
function formatDate(date) {
  const options = { 
    month: 'short', 
    day: 'numeric', 
    hour: '2-digit', 
    minute: '2-digit' 
  };
  return new Date(date).toLocaleDateString('en-US', options);
}

// Highlight mood button
function highlightMoodBtn(moodType) {
  const buttons = document.querySelectorAll('.mood-btn-inline');
  buttons.forEach(btn => {
    btn.classList.remove('active');
    if (btn.textContent.toLowerCase() === moodType.toLowerCase()) {
      btn.classList.add('active');
    }
  });
}

// Scroll to section
function scrollToSection(sectionId) {
  const section = document.querySelector(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// Add hover effects to interactive elements
function addInteractiveEffects() {
  const interactiveElements = document.querySelectorAll('button, a, .card');
  
  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-2px)';
    });
    
    el.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
}

// Initialize on page load
window.addEventListener('load', function() {
  addInteractiveEffects();
});

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    logMood,
    getMoodHistory,
    getMoodStats,
    formatDate,
    highlightMoodBtn,
    scrollToSection
  };
}
