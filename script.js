// DOM elementleri
const filterButtons = document.querySelectorAll('.filter-btn');
const showMoreButtons = document.querySelectorAll('.show-more-btn');
const siteGrids = {
    'must-see': document.getElementById('must-see-grid'),
    'github': document.getElementById('github-grid'),
    'fun': document.getElementById('fun-grid'),
    'relax': document.getElementById('relax-grid')
};

// Aktif filtre ve gösterim durumu
let activeFilter = 'all';
let expandedSections = {
    'must-see': false,
    'github': false,
    'fun': false,
    'relax': false
};

// Sayfa yüklendiğinde çalışacak fonksiyon
document.addEventListener('DOMContentLoaded', function() {
    initializePage();
    addEventListeners();
});

// Sayfayı başlat
function initializePage() {
    renderAllSections();
}

// Event listener'ları ekle
function addEventListeners() {
    // Filtre butonları
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            setActiveFilter(category);
            filterSites(category);
        });
    });

    // Devamını göster butonları
    showMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const section = this.getAttribute('data-section');
            toggleSection(section);
        });
    });
}

// Aktif filtreyi ayarla
function setActiveFilter(category) {
    activeFilter = category;
    
    // Buton stillerini güncelle
    filterButtons.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-category="${category}"]`).classList.add('active');
}

// Tüm bölümleri render et
function renderAllSections() {
    Object.keys(sitesData).forEach(section => {
        renderSection(section);
    });
}

// Belirli bir bölümü render et
function renderSection(sectionKey) {
    const sites = sitesData[sectionKey];
    const grid = siteGrids[sectionKey];
    
    if (!grid || !sites) return;

    // Grid'i temizle
    grid.innerHTML = '';

    // Eğer section boşsa "yakında eklenecek" mesajı göster
    if (sites.length === 0) {
        const comingSoonCard = createComingSoonCard();
        grid.appendChild(comingSoonCard);
        updateShowMoreButton(sectionKey, 0);
        return;
    }

    // İlk 10 siteyi göster (veya tümünü, eğer expanded ise)
    const sitesToShow = expandedSections[sectionKey] ? sites : sites.slice(0, 10);
    
    sitesToShow.forEach((site, index) => {
        const siteCard = createSiteCard(site);
        grid.appendChild(siteCard);
    });

    // "Devamını göster" butonunu güncelle
    updateShowMoreButton(sectionKey, sites.length);
}

// Site kartı oluştur
function createSiteCard(site) {
    const card = document.createElement('div');
    card.className = 'site-card';
    card.setAttribute('data-tags', site.tags.join(','));

    const tagsHTML = site.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

    card.innerHTML = `
        <h3>${site.title}</h3>
        <p>${site.description}</p>
        <a href="${site.url}" target="_blank" rel="noopener noreferrer" class="site-link">
            Siteyi Ziyaret Et →
        </a>
        <div class="site-tags">
            ${tagsHTML}
        </div>
    `;

    return card;
}

// "Yakında eklenecek" kartı oluştur
function createComingSoonCard() {
    const card = document.createElement('div');
    card.className = 'site-card coming-soon-card';

    card.innerHTML = `
        <div class="coming-soon-content">
            <div class="coming-soon-icon">🚧</div>
            <h3>Yakında Eklenecek</h3>
            <p>Bu bölüm için harika içerikler hazırlıyoruz. Çok yakında burada olacaklar!</p>
            <div class="coming-soon-progress">
                <div class="progress-bar">
                    <div class="progress-fill"></div>
                </div>
                <span class="progress-text">%0 tamamlandı</span>
            </div>
        </div>
    `;

    return card;
}

// "Devamını göster" butonunu güncelle
function updateShowMoreButton(sectionKey, totalSites) {
    const button = document.querySelector(`[data-section="${sectionKey}"]`);
    if (!button) return;

    const isExpanded = expandedSections[sectionKey];
    
    if (totalSites <= 10) {
        button.classList.add('hidden');
    } else {
        button.classList.remove('hidden');
        button.textContent = isExpanded ? 'Daha Az Göster' : 'Devamını Göster';
    }
}

// Bölümü genişlet/daralt
function toggleSection(sectionKey) {
    expandedSections[sectionKey] = !expandedSections[sectionKey];
    
    // Eğer filtre aktifse, filtreyi tekrar uygula
    if (activeFilter === 'all') {
        renderSection(sectionKey);
    } else {
        renderSection(sectionKey);
        filterSites(activeFilter);
    }
}

// Siteleri filtrele
function filterSites(category) {
    const allCards = document.querySelectorAll('.site-card');
    
    allCards.forEach(card => {
        if (category === 'all') {
            card.style.display = 'block';
        } else {
            const tags = card.getAttribute('data-tags');
            if (tags && tags.includes(category)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        }
    });

    // Filtre uygulandıktan sonra "devamını göster" butonlarını güncelle
    updateShowMoreButtonsAfterFilter(category);
}

// Filtre sonrası "devamını göster" butonlarını güncelle
function updateShowMoreButtonsAfterFilter(category) {
    Object.keys(siteGrids).forEach(sectionKey => {
        const grid = siteGrids[sectionKey];
        const button = document.querySelector(`[data-section="${sectionKey}"]`);
        
        if (!grid || !button) return;

        const visibleCards = grid.querySelectorAll('.site-card[style*="block"], .site-card:not([style])');
        const hiddenCards = grid.querySelectorAll('.site-card[style*="none"]');
        
        // Eğer tüm kartlar gizliyse butonu gizle
        if (visibleCards.length === 0) {
            button.classList.add('hidden');
        } else if (category === 'all') {
            // Filtre yoksa normal mantığı uygula
            const totalSites = sitesData[sectionKey].length;
            updateShowMoreButton(sectionKey, totalSites);
        } else {
            // Filtre varsa ve görünür kart varsa butonu gizle
            button.classList.add('hidden');
        }
    });
}

// Animasyonlu scroll fonksiyonu
function smoothScrollTo(element) {
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Arama fonksiyonu (opsiyonel, gelecekte eklenebilir)
function searchSites(query) {
    const allCards = document.querySelectorAll('.site-card');
    const searchTerm = query.toLowerCase();
    
    allCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const description = card.querySelector('p').textContent.toLowerCase();
        const tags = card.getAttribute('data-tags').toLowerCase();
        
        if (title.includes(searchTerm) || 
            description.includes(searchTerm) || 
            tags.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Utility: Rastgele site önerisi (opsiyonel)
function getRandomSite() {
    const allSites = [];
    Object.values(sitesData).forEach(sectionSites => {
        allSites.push(...sectionSites);
    });
    
    const randomIndex = Math.floor(Math.random() * allSites.length);
    return allSites[randomIndex];
}

// Local Storage'da tercihleri sakla (opsiyonel)
function saveUserPreferences() {
    const preferences = {
        activeFilter,
        expandedSections
    };
    localStorage.setItem('devResourcesPrefs', JSON.stringify(preferences));
}

// Local Storage'dan tercihleri yükle (opsiyonel)
function loadUserPreferences() {
    const saved = localStorage.getItem('devResourcesPrefs');
    if (saved) {
        const preferences = JSON.parse(saved);
        activeFilter = preferences.activeFilter || 'all';
        expandedSections = preferences.expandedSections || expandedSections;
    }
}
