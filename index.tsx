
// Saf JavaScript (Vanilla JS) Onboarding Mantığı

const ONBOARDING_STEPS = [
  {
    title: "Zikirlerinizi",
    highlight: "Kaydedin",
    description: "Her an, her yerde ibadetinize odaklanın. Hedeflerinizi belirleyin ve sayımı bize bırakın.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVg_f8D8vk7IR7N-RvYf8oAOLS1if1qiUTkheTD8H7lDoWNT0RscSp9fbjbRacK1vRpFHmBiQr453QtT5iQBaqkK1DfBSj3r92QYIuxfl-ncjNX4p1FEVcU9vzAk1vTqD6PhRDYueh-1roguAJ20hfUZvX-yKklkn5zaAA-a5-8AAS24ougbFzd7N14L0M3XurYd4jgv_mQ2IdlyhH-E7ecx_ToW0_TwzWIpsR1RD1JOTiwvn-qytFn4EUOFWOp3MCP679pwrKF34",
    glowColor: "rgba(19, 236, 91, 0.4)"
  },
  {
    title: "Alışkanlık",
    highlight: "Kazanın",
    description: "Günlük istatistiklerinizi takip edin, serinizi bozmayın ve manevi gelişiminizi görselleştirin.",
    imageUrl: "https://picsum.photos/seed/zikr2/800/800",
    glowColor: "rgba(19, 236, 91, 0.3)"
  },
  {
    title: "Huzura",
    highlight: "Ulaşın",
    description: "Özel bildirimlerle ibadetlerinizi hatırlayın, günün stresinden uzaklaşıp ruhunuzu dinlendirin.",
    imageUrl: "https://picsum.photos/seed/zikr3/800/800",
    glowColor: "rgba(19, 236, 91, 0.5)"
  }
];

let currentStep = 0;

// DOM Elemanları
const titleEl = document.getElementById('title');
const descriptionEl = document.getElementById('description');
const imageEl = document.getElementById('main-image');
const glowEl = document.getElementById('glow-effect');
const nextBtn = document.getElementById('next-btn');
const btnText = document.getElementById('btn-text');
const btnIcon = document.getElementById('btn-icon');
const indicatorsContainer = document.getElementById('indicators');
const skipBtn = document.getElementById('skip-btn');
const textContainer = document.getElementById('text-container');
const imageContainer = document.getElementById('step-image-container');

function initIndicators() {
    indicatorsContainer.innerHTML = '';
    ONBOARDING_STEPS.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = `h-2 rounded-full transition-all duration-500 ease-out ${index === currentStep ? 'w-8 bg-primary' : 'w-2 bg-[#326744]'}`;
        dot.id = `indicator-${index}`;
        indicatorsContainer.appendChild(dot);
    });
}

function updateUI() {
    const step = ONBOARDING_STEPS[currentStep];
    const isLast = currentStep === ONBOARDING_STEPS.length - 1;

    // Animasyonları tetiklemek için class'ları sıfırla
    textContainer.classList.remove('fade-in');
    imageContainer.classList.remove('fade-in');
    void textContainer.offsetWidth; // Reflow trigger
    textContainer.classList.add('fade-in');
    imageContainer.classList.add('fade-in');

    // İçerik Güncelleme
    titleEl.innerHTML = `${step.title} <span class="text-primary">${step.highlight}</span>`;
    descriptionEl.textContent = step.description;
    imageEl.style.backgroundImage = `url("${step.imageUrl}")`;
    glowEl.style.backgroundColor = step.glowColor;

    // Buton Güncelleme
    btnText.textContent = isLast ? 'Hadi Başlayalım' : 'İleri';
    btnIcon.textContent = isLast ? 'check_circle' : 'arrow_forward';

    // Atla Butonu Görünürlüğü
    skipBtn.style.opacity = isLast ? '0' : '1';
    skipBtn.style.pointerEvents = isLast ? 'none' : 'auto';

    // Göstergeleri Güncelle
    ONBOARDING_STEPS.forEach((_, index) => {
        const dot = document.getElementById(`indicator-${index}`);
        if (dot) {
            dot.className = `h-2 rounded-full transition-all duration-500 ease-out ${index === currentStep ? 'w-8 bg-primary' : 'w-2 bg-[#326744]'}`;
        }
    });
}

nextBtn.addEventListener('click', () => {
    if (currentStep < ONBOARDING_STEPS.length - 1) {
        currentStep++;
        updateUI();
    } else {
        alert("Zikir dünyasına hoş geldiniz!");
    }
});

skipBtn.addEventListener('click', () => {
    currentStep = ONBOARDING_STEPS.length - 1;
    updateUI();
});

// Başlat
initIndicators();
updateUI();
