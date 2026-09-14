/**
 * APP.JS — Moteur interactif de l'application PWA Cialdini Guide
 */

// État global de l'application
const APP_STATE = {
  currentTab: 'hub',
  selectedScenarioId: 'sc-car-dealer',
  selectedNotifId: 'notif-1',
  clarityPoints: parseInt(localStorage.getItem('cialdini_clarity_points') || '470', 10),
  tasks: JSON.parse(localStorage.getItem('cialdini_tasks') || 'null') || [
    {
      id: "task-1",
      title: "Rédiger la proposition de partenariat stratégique",
      context: "Demain à 9h30 dans mon bureau calme, sans messagerie ouverte",
      micropas: "Ouvrir le modèle et poser les 3 objectifs mesurables",
      completed: false,
      clarityAward: 35,
      createdAt: "Aujourd'hui"
    },
    {
      id: "task-2",
      title: "Préparer l'audit trimestriel de performance",
      context: "Vendredi à 14h avec le tableur de bord",
      micropas: "Télécharger le relevé consolidé et extraire les KPI",
      completed: true,
      clarityAward: 40,
      createdAt: "Hier"
    },
    {
      id: "task-3",
      title: "Désamorcer le blocage client sur le contrat Alpha",
      context: "Cet après-midi à 16h au téléphone après avoir respiré",
      micropas: "Préparer 2 questions d'étiquetage émotionnel (Chris Voss)",
      completed: false,
      clarityAward: 30,
      createdAt: "Aujourd'hui"
    }
  ],
  favorites: JSON.parse(localStorage.getItem('cialdini_favorites') || '[]'),
  quiz: {
    currentIndex: 0,
    answers: {},
    isFinished: false
  },
  deferredInstallPrompt: null
};

// Initialisation au chargement du DOM
document.addEventListener('DOMContentLoaded', () => {
  initPWA();
  initNavigation();
  initHub();
  initEcosystem();
  initTodoList();
  initNotificationsSimulator();
  initPricingTiers();
  initPrinciples();
  initSimulator();
  initShield();
  initEthicalGuide();
  initStudies();
  initQuiz();
  initSearch();
  updateFavoritesBadge();

  // Écouteur de changement d'ancre URL
  window.addEventListener('hashchange', handleHashChange);
  if (window.location.hash) {
    handleHashChange();
  }
});


/* ==========================================================================
   1. PWA & SERVICE WORKER & OFFLINE DETECTION
   ========================================================================== */
function initPWA() {
  // Enregistrement du Service Worker
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js')
        .then((reg) => console.log('[PWA] Service Worker actif, scope:', reg.scope))
        .catch((err) => console.warn('[PWA] Échec Service Worker:', err));
    });
  }

  // Détection du statut réseau
  const offlineIndicator = document.getElementById('offline-indicator');
  const updateOnlineStatus = () => {
    if (navigator.onLine) {
      offlineIndicator.classList.add('hidden');
    } else {
      offlineIndicator.classList.remove('hidden');
    }
  };
  window.addEventListener('online', updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);
  updateOnlineStatus();

  // Bannière d'installation PWA
  const installBanner = document.getElementById('pwa-install-banner');
  const installBtn = document.getElementById('pwa-install-btn');
  const dismissBtn = document.getElementById('pwa-dismiss-btn');

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    APP_STATE.deferredInstallPrompt = e;
    // N'affiche que si l'utilisateur ne l'a pas déjà masquée récemment
    if (!localStorage.getItem('cialdini_pwa_dismissed')) {
      installBanner.classList.remove('hidden');
    }
  });

  if (installBtn) {
    installBtn.addEventListener('click', async () => {
      if (APP_STATE.deferredInstallPrompt) {
        APP_STATE.deferredInstallPrompt.prompt();
        const { outcome } = await APP_STATE.deferredInstallPrompt.userChoice;
        console.log('[PWA] Résultat installation:', outcome);
        APP_STATE.deferredInstallPrompt = null;
        installBanner.classList.add('hidden');
      }
    });
  }

  if (dismissBtn) {
    dismissBtn.addEventListener('click', () => {
      installBanner.classList.add('hidden');
      localStorage.setItem('cialdini_pwa_dismissed', 'true');
    });
  }
}

/* ==========================================================================
   2. SYSTÈME DE NAVIGATION PAR ONGLETS
   ========================================================================== */
function initNavigation() {
  // Gérer le clic sur le bouton favoris
  const btnFav = document.getElementById('btn-open-favorites');
  if (btnFav) {
    btnFav.addEventListener('click', openFavoritesModal);
  }
}

function handleHashChange() {
  const hash = window.location.hash.replace('#', '');
  const validTabs = ['hub', 'ecosystem', 'todolist', 'notifications', 'pricing', 'principles', 'simulator', 'shield', 'ethical', 'studies', 'quiz'];
  if (validTabs.includes(hash)) {
    navigateTab(hash);
  }
}


function navigateTab(tabId) {
  APP_STATE.currentTab = tabId;
  window.location.hash = tabId;

  // Masquer tous les contenus
  document.querySelectorAll('.tab-content').forEach((el) => el.classList.add('hidden'));

  // Afficher le contenu cible
  const targetContent = document.getElementById(`tab-${tabId}`);
  if (targetContent) {
    targetContent.classList.remove('hidden');
    targetContent.classList.add('animate-fade-in');
  }

  // Mettre à jour les boutons de nav Desktop
  document.querySelectorAll('.nav-tab-btn').forEach((btn) => {
    if (btn.dataset.tab === tabId) {
      btn.classList.add('bg-indigo-600', 'text-white');
      btn.classList.remove('text-slate-300', 'hover:bg-slate-800/60');
    } else {
      btn.classList.remove('bg-indigo-600', 'text-white');
      btn.classList.add('text-slate-300', 'hover:bg-slate-800/60');
    }
  });

  // Mettre à jour les boutons de la barre basse Mobile
  document.querySelectorAll('.mobile-nav-btn').forEach((btn) => {
    if (btn.dataset.tab === tabId) {
      btn.classList.add('text-indigo-400', 'font-bold');
      btn.classList.remove('text-slate-400');
    } else {
      btn.classList.remove('text-indigo-400', 'font-bold');
      btn.classList.add('text-slate-400');
    }
  });

  // Mettre à jour les pilules de la barre horizontale Mobile
  document.querySelectorAll('.mobile-subnav-btn').forEach((btn) => {
    if (btn.dataset.subtab === tabId) {
      btn.className = "mobile-subnav-btn whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-bold bg-indigo-600 text-white transition shrink-0 shadow";
      btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    } else {
      btn.className = "mobile-subnav-btn whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-300 bg-slate-900 border border-slate-800 transition shrink-0";
    }
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openMobileMenu() {
  const drawer = document.getElementById('mobile-drawer');
  if (drawer) drawer.classList.remove('hidden');
}


/* ==========================================================================
   3. RENDU DU HUB CENTRAL
   ========================================================================== */
function initHub() {
  // Rendu de la Triade
  const triadContainer = document.getElementById('triad-container');
  if (triadContainer) {
    triadContainer.innerHTML = CIALDINI_DATA.weaponsOfInfluence.triadOfInfluence.types.map((t) => {
      const borderColors = {
        rose: 'border-rose-800/60 bg-rose-950/20 text-rose-200',
        amber: 'border-amber-800/60 bg-amber-950/20 text-amber-200',
        emerald: 'border-emerald-700/70 bg-emerald-950/30 text-emerald-200'
      };
      const badgeColors = {
        rose: 'bg-rose-500/20 text-rose-300',
        amber: 'bg-amber-500/20 text-amber-300',
        emerald: 'bg-emerald-500/20 text-emerald-300'
      };
      return `
        <div class="p-4 rounded-xl border ${borderColors[t.color]} space-y-2">
          <div class="flex items-center justify-between">
            <h4 class="font-bold text-xs sm:text-sm text-white">${t.name}</h4>
            <span class="text-[10px] font-extrabold px-2 py-0.5 rounded-full ${badgeColors[t.color]}">
              ${t.color === 'emerald' ? '★ IDÉAL' : 'ATTENTION'}
            </span>
          </div>
          <p class="text-[11px] sm:text-xs leading-relaxed opacity-90">${t.desc}</p>
        </div>
      `;
    }).join('');
  }

  // Rendu des cartes principes rapides sur le Hub
  const hubGrid = document.getElementById('hub-principles-grid');
  if (hubGrid) {
    hubGrid.innerHTML = CIALDINI_DATA.principles.map((p) => {
      return `
        <div onclick="openPrincipleModal('${p.id}')" class="card-interactive glass-card-dark rounded-xl p-4 border border-slate-800 cursor-pointer flex flex-col justify-between space-y-3 group hover:border-indigo-500/50">
          <div>
            <div class="flex items-center justify-between mb-2">
              <span class="w-7 h-7 rounded-lg bg-indigo-500/20 text-indigo-300 font-extrabold text-xs flex items-center justify-center">
                #${p.number}
              </span>
              <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-slate-300">
                ${p.nameEn}
              </span>
            </div>
            <h4 class="text-sm font-bold text-white group-hover:text-indigo-300 transition">${p.title}</h4>
            <p class="text-[11px] text-slate-400 mt-1 line-clamp-2">${p.summary}</p>
          </div>
          <div class="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-indigo-400 font-semibold">
            <span>Dossier & Parades</span>
            <span>→</span>
          </div>
        </div>
      `;
    }).join('');
  }
}

/* ==========================================================================
   3.B. ÉCOSYSTÈME DES 5 AUTEURS BEHAVIORAL
   ========================================================================== */
function initEcosystem() {
  const container = document.getElementById('ecosystem-authors-grid');
  if (!container || !CIALDINI_DATA.behavioralEcosystem) return;

  container.innerHTML = CIALDINI_DATA.behavioralEcosystem.authors.map((a) => {
    return `
      <div class="glass-card-dark rounded-2xl p-5 border border-slate-800 space-y-3 flex flex-col justify-between hover:border-indigo-500/40 transition">
        <div class="space-y-2">
          <div class="flex items-center justify-between">
            <span class="text-2xl">${a.icon}</span>
            <span class="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              ${a.badge}
            </span>
          </div>
          <div>
            <h4 class="font-bold text-base text-white">${a.name}</h4>
            <p class="text-[11px] text-amber-300/90 font-serif italic">${a.work}</p>
          </div>
          <div class="p-3 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
            <span class="text-[10px] uppercase font-bold text-slate-400 block">Concept Maître :</span>
            <p class="text-xs text-slate-300 leading-relaxed">${a.coreConcept}</p>
          </div>
        </div>
        <div class="pt-2 border-t border-slate-800/80">
          <span class="text-[10px] uppercase font-bold text-emerald-400 block mb-0.5">Application dans l'App :</span>
          <p class="text-[11px] text-slate-300">${a.application}</p>
        </div>
      </div>
    `;
  }).join('');
}

/* ==========================================================================
   3.C. MODULE B : TO-DO SYSTÈME 2 & SPRINT FOCUS COLLECTIF
   ========================================================================== */
let focusCountdownInterval = null;

function initTodoList() {
  renderTodoList();
  initFocusSprintTimer();
}

function renderTodoList() {
  const container = document.getElementById('todo-tasks-container');
  if (!container) return;

  // Calcul du capital de clarté
  const completedCount = APP_STATE.tasks.filter((t) => t.completed).length;
  const totalCount = APP_STATE.tasks.length;
  const calibrationRate = totalCount > 0 ? Math.round(75 + (completedCount / totalCount) * 23) : 80;

  const scoreEl = document.getElementById('clarity-score');
  const barEl = document.getElementById('clarity-progress-bar');
  const ptsEl = document.getElementById('clarity-points');

  if (scoreEl) scoreEl.textContent = `${calibrationRate}%`;
  if (barEl) barEl.style.width = `${calibrationRate}%`;
  if (ptsEl) ptsEl.textContent = `Points d'investissement : ${APP_STATE.clarityPoints} pts`;

  if (APP_STATE.tasks.length === 0) {
    container.innerHTML = `
      <div class="text-center py-10 glass-card-dark rounded-2xl border border-slate-800 space-y-3">
        <span class="text-3xl">🎯</span>
        <p class="text-sm font-bold text-white">Aucun objectif planifié pour le moment.</p>
        <p class="text-xs text-slate-400">Cliquez sur « + Planifier un objectif Système 2 » pour engager votre délibération.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = APP_STATE.tasks.map((task) => {
    return `
      <div class="glass-card-dark rounded-2xl p-4 sm:p-5 border ${task.completed ? 'border-emerald-800/40 bg-emerald-950/10' : 'border-slate-800'} space-y-3 transition">
        <div class="flex items-start justify-between gap-3">
          <div class="flex items-start gap-3">
            <input type="checkbox" onchange="toggleTaskCompletion('${task.id}')" ${task.completed ? 'checked' : ''} 
                   class="mt-1 w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 bg-slate-800 border-slate-700 cursor-pointer">
            <div>
              <h4 class="text-sm sm:text-base font-bold text-white ${task.completed ? 'line-through text-slate-400' : ''}">${task.title}</h4>
              <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 inline-block mt-1">
                🧠 Planifié Système 2
              </span>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-[11px] font-extrabold text-amber-400">+${task.clarityAward} pts</span>
            <button onclick="deleteTask('${task.id}')" class="text-slate-500 hover:text-rose-400 p-1 text-xs" title="Supprimer">✕</button>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
          <div class="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800 space-y-0.5">
            <span class="text-[10px] uppercase font-bold text-slate-400 block">📍 Où & Quand ?</span>
            <p class="text-slate-200">${task.context}</p>
          </div>
          <div class="p-2.5 rounded-xl bg-indigo-950/20 border border-indigo-800/30 space-y-0.5">
            <span class="text-[10px] uppercase font-bold text-indigo-300 block">⚡ 1er Micro-pas concret (2 min) :</span>
            <p class="text-slate-200 font-medium">${task.micropas}</p>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function openSystem2Modal() {
  const modal = document.getElementById('system2-modal');
  if (modal) modal.classList.remove('hidden');
}

function handleCreateSystem2Task(event) {
  event.preventDefault();
  const title = document.getElementById('task-title-input').value.trim();
  const context = document.getElementById('task-context-input').value.trim();
  const micropas = document.getElementById('task-micropas-input').value.trim();

  if (!title || !context || !micropas) return;

  const newTask = {
    id: `task-${Date.now()}`,
    title,
    context,
    micropas,
    completed: false,
    clarityAward: 35,
    createdAt: "À l'instant"
  };

  APP_STATE.tasks.unshift(newTask);
  APP_STATE.clarityPoints += 35;
  localStorage.setItem('cialdini_tasks', JSON.stringify(APP_STATE.tasks));
  localStorage.setItem('cialdini_clarity_points', APP_STATE.clarityPoints.toString());

  document.getElementById('task-title-input').value = '';
  document.getElementById('task-context-input').value = '';
  document.getElementById('task-micropas-input').value = '';

  closeModal('system2-modal');
  renderTodoList();
  showToast("Objectif Système 2 validé ! (+35 pts de clarté) 🧠");
}

function toggleTaskCompletion(taskId) {
  const task = APP_STATE.tasks.find((t) => t.id === taskId);
  if (task) {
    task.completed = !task.completed;
    if (task.completed) {
      APP_STATE.clarityPoints += task.clarityAward;
      showToast(`🎯 Objectif accompli ! +${task.clarityAward} pts de clarté`);
    } else {
      APP_STATE.clarityPoints = Math.max(0, APP_STATE.clarityPoints - task.clarityAward);
      showToast("Objectif réouvert");
    }
    localStorage.setItem('cialdini_tasks', JSON.stringify(APP_STATE.tasks));
    localStorage.setItem('cialdini_clarity_points', APP_STATE.clarityPoints.toString());
    renderTodoList();
  }
}

function deleteTask(taskId) {
  APP_STATE.tasks = APP_STATE.tasks.filter((t) => t.id !== taskId);
  localStorage.setItem('cialdini_tasks', JSON.stringify(APP_STATE.tasks));
  renderTodoList();
  showToast("Objectif supprimé");
}

function initFocusSprintTimer() {
  let remainingSeconds = 11 * 60 + 45;
  const timerEl = document.getElementById('focus-timer');

  if (focusCountdownInterval) clearInterval(focusCountdownInterval);

  focusCountdownInterval = setInterval(() => {
    remainingSeconds--;
    if (remainingSeconds <= 0) {
      remainingSeconds = 90 * 60; // Reset nouveau cycle
    }
    const mins = Math.floor(remainingSeconds / 60);
    const secs = remainingSeconds % 60;
    if (timerEl) {
      timerEl.textContent = `${mins}m ${secs < 10 ? '0' : ''}${secs}s`;
    }
  }, 1000);
}

function joinFocusSprint() {
  const btn = document.getElementById('btn-join-sprint');
  const countEl = document.getElementById('focus-users-count');
  if (btn.dataset.joined === 'true') {
    btn.dataset.joined = 'false';
    btn.textContent = "Rejoindre la session";
    btn.className = "bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs py-2 px-4 rounded-xl transition";
    if (countEl) countEl.textContent = "342 décideurs";
    showToast("Session de sprint quittée");
  } else {
    btn.dataset.joined = 'true';
    btn.textContent = "✓ Inscrit (En focus)";
    btn.className = "bg-emerald-500 text-slate-950 font-black text-xs py-2 px-4 rounded-xl transition";
    if (countEl) countEl.textContent = "343 décideurs (vous inclus)";
    showToast("Sprint de 90 min rejoint ! Mode concentration activé 🧘");
  }
}

/* ==========================================================================
   3.D. MODULE C : MOTEUR DE NOTIFICATIONS INTELLIGENTES & RÉTENTION
   ========================================================================== */
function initNotificationsSimulator() {
  const buttonsContainer = document.getElementById('notif-selector-buttons');
  if (!buttonsContainer || !CIALDINI_DATA.behavioralEcosystem) return;

  buttonsContainer.innerHTML = CIALDINI_DATA.behavioralEcosystem.moduleC.sampleNotifications.map((n, idx) => {
    return `
      <button onclick="selectNotification('${n.id}')" id="btn-notif-${n.id}" class="notif-select-btn p-3 rounded-xl text-left border ${idx === 0 ? 'border-purple-500 bg-purple-950/30' : 'border-slate-800 bg-slate-950/40'} hover:bg-slate-800 transition">
        <span class="text-[10px] font-bold text-purple-400 block">${n.category}</span>
        <span class="text-xs font-bold text-white block mt-0.5">${n.title}</span>
      </button>
    `;
  }).join('');

  renderNotifPreview(APP_STATE.selectedNotifId);
}

function selectNotification(notifId) {
  APP_STATE.selectedNotifId = notifId;
  document.querySelectorAll('.notif-select-btn').forEach((btn) => {
    btn.classList.remove('border-purple-500', 'bg-purple-950/30');
    btn.classList.add('border-slate-800', 'bg-slate-950/40');
  });
  const activeBtn = document.getElementById(`btn-notif-${notifId}`);
  if (activeBtn) {
    activeBtn.classList.remove('border-slate-800', 'bg-slate-950/40');
    activeBtn.classList.add('border-purple-500', 'bg-purple-950/30');
  }
  renderNotifPreview(notifId);
}

function renderNotifPreview(notifId) {
  const preview = document.getElementById('mobile-push-preview');
  const explanation = document.getElementById('notif-mechanism-explanation');
  if (!preview) return;

  const notif = CIALDINI_DATA.behavioralEcosystem.moduleC.sampleNotifications.find((n) => n.id === notifId) || CIALDINI_DATA.behavioralEcosystem.moduleC.sampleNotifications[0];

  preview.innerHTML = `
    <div class="flex items-center justify-between text-[11px] text-slate-400 border-b border-slate-800/80 pb-2">
      <div class="flex items-center gap-1.5 font-bold text-white">
        <span class="w-4 h-4 rounded bg-indigo-500 text-[10px] text-slate-950 font-black flex items-center justify-center">Ψ</span>
        <span>CIALDINI GUIDE</span>
      </div>
      <span>Il y a 2 min</span>
    </div>
    <div class="space-y-1">
      <h5 class="text-xs sm:text-sm font-bold text-white">${notif.title}</h5>
      <p class="text-xs text-slate-300 leading-relaxed font-sans">${notif.body}</p>
    </div>
    <div class="pt-2 flex flex-wrap gap-1.5">
      ${notif.actions.map((act) => `
        <button onclick="handleNotifAction('${escapeQuotes(act)}')" class="bg-slate-800 hover:bg-slate-700 text-slate-200 text-[11px] font-semibold py-1.5 px-3 rounded-lg border border-slate-700 transition">
          ${act}
        </button>
      `).join('')}
    </div>
  `;

  if (explanation) {
    let explText = "";
    if (notif.type === 'labeling') {
      explText = `<strong>Étiquetage Émotionnel de Chris Voss :</strong> Au lieu d'accuser l'utilisateur (<em>« Vous avez du retard »</em>), l'application verbalise avec bienveillance le ressenti (<em>« Il semble que ce soit devenu lourd... »</em>). Cela dissout la résistance psychologique et offre une sortie honorable sans culpabilité.`;
    } else if (notif.type === 'variable-reward') {
      explText = `<strong>Récompense Variable de Nir Eyal (Curiosity Gap) :</strong> L'annonce d'un schéma surprenant dans les données crée un vide d'information irrésistible. L'utilisateur ouvre l'application poussé par la curiosité intellectuelle et la quête de maîtrise personnelle.`;
    } else {
      explText = `<strong>Empathie d'Échec :</strong> Valide immédiatement la friction et le chaos du monde réel. Offre un bouton de réinitialisation sans honte qui relance la dynamique de motivation.`;
    }
    explanation.innerHTML = explText;
  }
}

function handleNotifAction(actText) {
  showToast(`Action exécutée : « ${actText} » ✓`);
}

function triggerSimulatedPush() {
  const notif = CIALDINI_DATA.behavioralEcosystem.moduleC.sampleNotifications.find((n) => n.id === APP_STATE.selectedNotifId);
  if (notif) {
    showToast(`🔔 ${notif.title} : ${notif.body.substring(0, 45)}...`);
  }
}

/* ==========================================================================
   3.E. MODULE D : TUNNEL D'ACHAT & EFFET DE LEURRE (DAN ARIELY & CHRIS VOSS)
   ========================================================================== */
function initPricingTiers() {
  const container = document.getElementById('pricing-tiers-grid');
  if (!container || !CIALDINI_DATA.behavioralEcosystem) return;

  container.innerHTML = CIALDINI_DATA.behavioralEcosystem.moduleD.tiers.map((t) => {
    let cardClasses = "glass-card-dark rounded-2xl p-6 border transition flex flex-col justify-between space-y-6 ";
    if (t.isBestValue) {
      cardClasses += "border-amber-500 shadow-2xl bg-gradient-to-b from-indigo-950/40 to-slate-900 relative ring-2 ring-amber-500/50";
    } else if (t.isDecoy) {
      cardClasses += "border-slate-800 bg-slate-950/40 opacity-75 hover:opacity-100";
    } else {
      cardClasses += "border-slate-800 bg-slate-950/40";
    }

    return `
      <div class="${cardClasses}">
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <h4 class="font-bold text-base text-white">${t.name}</h4>
            <span class="text-[10px] font-extrabold px-2.5 py-1 rounded-full ${t.isBestValue ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-300'}">
              ${t.badge}
            </span>
          </div>

          <div>
            <div class="flex items-baseline gap-1">
              <span class="text-3xl sm:text-4xl font-black text-white">${t.pricePerMonth}</span>
              <span class="text-xs text-slate-400">/ mois</span>
            </div>
            <p class="text-[11px] text-slate-400 mt-0.5">${t.billed}</p>
          </div>

          <ul class="space-y-2 text-xs text-slate-300 border-t border-slate-800/80 pt-4">
            ${t.features.map((f) => `
              <li class="flex items-center gap-2">
                <span class="${f.includes('SANS') ? 'text-rose-400' : 'text-emerald-400'}">${f.includes('SANS') ? '✕' : '✓'}</span>
                <span class="${f.includes('SANS') ? 'text-slate-500 line-through' : ''}">${f}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <div class="pt-4 border-t border-slate-800/80">
          <button onclick="selectPricingTier('${t.id}', '${t.name}')" class="w-full py-2.5 px-4 rounded-xl text-xs font-bold transition shadow ${t.isBestValue ? 'bg-amber-500 hover:bg-amber-400 text-slate-950' : 'bg-slate-800 hover:bg-slate-700 text-white'}">
            ${t.isBestValue ? 'Choisir l\'Offre Évidente (78%)' : 'Choisir cette option'}
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function selectPricingTier(tierId, tierName) {
  if (tierId === 'tier-decoy') {
    showToast("⚠️ Cet abonnement ne comprend pas les modules Système 2. L'offre Pro à 9,99€ est nettement plus avantageuse !");
  } else {
    showToast(`Offre « ${tierName} » sélectionnée avec succès (Période d'essai 14j sans débit) ✓`);
  }
}

/* ==========================================================================
   3.F. MODULE A : ONBOARDING MODAL LOGIC
   ========================================================================== */
function openOnboardingModal() {
  const modal = document.getElementById('onboarding-modal');
  if (modal) modal.classList.remove('hidden');
}

function confirmOnboarding() {
  const checkedRadio = document.querySelector('input[name="onboarding-cadence"]:checked');
  const cadence = checkedRadio ? checkedRadio.value : 'coach';
  localStorage.setItem('cialdini_onboarding_completed', 'true');
  localStorage.setItem('cialdini_cadence', cadence);
  closeModal('onboarding-modal');
  showToast("Compte activé gratuitement pour 30 jours ! 🚀 Bienvenue dans votre sanctuaire de clarté.");

  // Simulation de l'arrivée du premier déclencheur externe après 2 secondes
  setTimeout(() => {
    showToast("⚡ Notification Reçue : « Votre espace est prêt. Quelle est la seule chose importante avant midi ? »");
  }, 2200);
}

function initPrinciples() {
  const container = document.getElementById('principles-full-list');
  if (!container) return;

  container.innerHTML = CIALDINI_DATA.principles.map((p) => {
    return `
      <article id="principle-card-${p.id}" class="glass-card-dark rounded-2xl p-5 sm:p-7 border border-slate-800 space-y-5">
        <!-- En-tête du principe -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
          <div class="flex items-center gap-3">
            <span class="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-800 text-white font-black text-sm flex items-center justify-center shadow">
              #${p.number}
            </span>
            <div>
              <div class="flex items-center gap-2">
                <h3 class="text-lg sm:text-xl font-black text-white">${p.title}</h3>
                <span class="text-xs text-slate-400 italic">(${p.nameEn})</span>
              </div>
              <span class="text-xs text-indigo-400 font-semibold">${p.badge}</span>
            </div>
          </div>
          <div class="flex items-center gap-2 self-end sm:self-auto">
            <button onclick="toggleFavorite('principle', '${p.id}', '${p.title}')" class="btn-fav-${p.id} p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs transition" title="Ajouter aux favoris">
              ${isFavorite('principle', p.id) ? '★ Favori' : '☆ Sauvegarder'}
            </button>
            <button onclick="openPrincipleModal('${p.id}')" class="px-3 py-2 rounded-lg bg-indigo-600/30 border border-indigo-500/40 text-indigo-300 hover:bg-indigo-600/50 text-xs font-bold transition">
              Vue synthétique
            </button>
          </div>
        </div>

        <!-- Citation clé -->
        <blockquote class="p-3.5 rounded-xl bg-slate-950/60 border-l-4 border-amber-500 text-xs sm:text-sm text-slate-300 italic">
          ${p.quote}
        </blockquote>

        <!-- Mécanisme psychologique & évolutionniste -->
        <div class="space-y-1.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <h4 class="font-bold text-white uppercase text-[11px] tracking-wider text-indigo-300">⚙️ Le Mécanisme Cérébral & Évolutionniste :</h4>
          <p>${p.psychologicalMechanism}</p>
        </div>

        <!-- Techniques maîtresses -->
        <div class="space-y-2.5">
          <h4 class="font-bold text-white uppercase text-[11px] tracking-wider text-amber-300">🎯 Techniques Phares & Variantes :</h4>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
            ${p.keyTechniques.map((k) => `
              <div class="p-3 rounded-xl bg-slate-950/40 border border-slate-800 space-y-1">
                <h5 class="font-bold text-xs text-white">${k.title}</h5>
                <p class="text-[11px] text-slate-400 leading-relaxed">${k.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Pièges manipulateurs vs Parades -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <!-- Pièges du Contrebandier -->
          <div class="p-4 rounded-xl bg-rose-950/20 border border-rose-900/40 space-y-2">
            <h5 class="font-bold text-rose-300 flex items-center gap-1.5 uppercase text-[11px] tracking-wider">
              <span>⚠️</span> Pièges des Manipulateurs :
            </h5>
            <ul class="space-y-1 text-slate-300 list-disc list-inside">
              ${p.manipulatorTricks.map((trick) => `<li>${trick}</li>`).join('')}
            </ul>
          </div>

          <!-- Bouclier & Parade de Défense -->
          <div class="p-4 rounded-xl bg-emerald-950/25 border border-emerald-800/50 space-y-2">
            <h5 class="font-bold text-emerald-300 flex items-center gap-1.5 uppercase text-[11px] tracking-wider">
              <span>🛡️</span> Riposte & Bouclier de Défense :
            </h5>
            <ul class="space-y-1 text-slate-300 list-disc list-inside">
              ${p.defenseStrategies.map((def) => `<li>${def}</li>`).join('')}
            </ul>
          </div>
        </div>

        <!-- Utilisation éthique (Le Détective) -->
        <div class="p-3 rounded-xl bg-indigo-950/30 border border-indigo-800/40 text-xs text-indigo-200 flex items-start gap-2">
          <span class="text-base">⚖️</span>
          <div>
            <strong class="font-bold text-white">L'usage éthique du Détective :</strong> ${p.ethicalUse}
          </div>
        </div>
      </article>
    `;
  }).join('');

  // Gestion des filtres
  document.querySelectorAll('.filter-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active', 'bg-indigo-600', 'text-white'));
      btn.classList.add('active', 'bg-indigo-600', 'text-white');
      const filter = btn.dataset.filter;
      // Pour une navigation simplifiée, scroll ou affichage
      if (filter === 'all') {
        document.querySelectorAll('#principles-full-list article').forEach((a) => a.classList.remove('hidden'));
      } else if (filter === 'relational') {
        // Réciprocité, Sympathie, Unité
        filterPrincipleCards(['reciprocity', 'liking', 'unity']);
      } else if (filter === 'cognitive') {
        // Engagement, Rareté, Contraste
        filterPrincipleCards(['commitment', 'scarcity']);
      } else if (filter === 'social') {
        // Preuve Sociale, Autorité
        filterPrincipleCards(['social-proof', 'authority']);
      }
    });
  });
}

function filterPrincipleCards(allowedIds) {
  CIALDINI_DATA.principles.forEach((p) => {
    const el = document.getElementById(`principle-card-${p.id}`);
    if (el) {
      if (allowedIds.includes(p.id)) {
        el.classList.remove('hidden');
      } else {
        el.classList.add('hidden');
      }
    }
  });
}

/* ==========================================================================
   5. SIMULATEUR INTERACTIF DE SITUATIONS
   ========================================================================== */
function initSimulator() {
  const buttonsContainer = document.getElementById('scenario-buttons-container');
  if (!buttonsContainer) return;

  buttonsContainer.innerHTML = CIALDINI_DATA.scenarios.map((sc, index) => {
    return `
      <button onclick="selectScenario('${sc.id}')" id="btn-sc-${sc.id}" class="scenario-select-btn p-3 rounded-xl text-left border border-slate-800 bg-slate-950/40 hover:bg-slate-800 transition ${index === 0 ? 'border-indigo-500/70 bg-indigo-950/20' : ''}">
        <span class="text-[10px] font-bold text-indigo-400 block">${sc.category}</span>
        <span class="text-xs font-bold text-white block mt-0.5 line-clamp-1">${sc.title}</span>
      </button>
    `;
  }).join('');

  // Rendu du premier scénario par défaut
  renderScenarioDetails(CIALDINI_DATA.scenarios[0]);
}

function selectScenario(scId) {
  APP_STATE.selectedScenarioId = scId;
  document.querySelectorAll('.scenario-select-btn').forEach((btn) => {
    btn.classList.remove('border-indigo-500/70', 'bg-indigo-950/20');
  });
  const activeBtn = document.getElementById(`btn-sc-${scId}`);
  if (activeBtn) {
    activeBtn.classList.add('border-indigo-500/70', 'bg-indigo-950/20');
  }

  const scenario = CIALDINI_DATA.scenarios.find((s) => s.id === scId);
  if (scenario) {
    renderScenarioDetails(scenario);
  }
}

function renderScenarioDetails(sc) {
  const container = document.getElementById('scenario-result-card');
  if (!container) return;

  container.innerHTML = `
    <!-- Titre et catégorie -->
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
      <div>
        <span class="text-[10px] font-bold uppercase tracking-wider text-indigo-400">${sc.category}</span>
        <h3 class="text-base sm:text-lg font-black text-white">${sc.title}</h3>
      </div>
      <div class="flex flex-wrap gap-1.5">
        ${sc.principlesDetected.map((p) => `
          <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
            ⚡ ${p}
          </span>
        `).join('')}
      </div>
    </div>

    <!-- Le Contexte / L'histoire -->
    <div class="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1.5">
      <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400">📖 Situation vécue :</span>
      <p class="text-xs sm:text-sm text-slate-200 leading-relaxed font-serif italic">${sc.context}</p>
    </div>

    <!-- Décryptage du piège mental -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
      <div class="p-3.5 rounded-xl bg-indigo-950/30 border border-indigo-800/40 space-y-1">
        <strong class="font-bold text-indigo-300 block uppercase text-[10px] tracking-wider">⚙️ Technique active détectée :</strong>
        <p class="text-slate-300">${sc.techniquesActive}</p>
      </div>
      <div class="p-3.5 rounded-xl bg-rose-950/25 border border-rose-800/40 space-y-1">
        <strong class="font-bold text-rose-300 block uppercase text-[10px] tracking-wider">🕳️ Le Piège Psychologique :</strong>
        <p class="text-slate-300">${sc.psychologicalTrap}</p>
      </div>
    </div>

    <!-- Bouclier de Riposte Immédiate -->
    <div class="p-4 sm:p-5 rounded-xl bg-gradient-to-br from-emerald-950/40 to-slate-950 border border-emerald-500/50 space-y-2">
      <div class="flex items-center justify-between">
        <strong class="text-xs font-bold text-emerald-300 uppercase tracking-wider flex items-center gap-1.5">
          <span>🛡️</span> Riposte & Parade Verbale Recommandée :
        </strong>
        <button onclick="copyToClipboard('${escapeQuotes(sc.immediateDefense)}', 'Parade copiée dans le presse-papier !')" class="text-[11px] bg-emerald-600/30 hover:bg-emerald-600/50 text-emerald-200 px-2.5 py-1 rounded-lg border border-emerald-500/30 font-semibold transition">
          📋 Copier
        </button>
      </div>
      <p class="text-xs sm:text-sm text-slate-100 font-medium leading-relaxed bg-slate-900/60 p-3 rounded-lg border border-emerald-500/20">
        ${sc.immediateDefense}
      </p>
    </div>

    <!-- L'Alternative Éthique -->
    <div class="p-3.5 rounded-xl bg-slate-950/50 border border-slate-800 text-xs text-slate-400 flex items-start gap-2">
      <span class="text-base">⚖️</span>
      <div>
        <strong class="text-slate-300 font-semibold">Comment faire avec éthique (Le Détective) :</strong> ${sc.ethicalWay}
      </div>
    </div>
  `;
}

/* ==========================================================================
   6. RENDU DU BOUCLIER ANTI-MANIPULATION
   ========================================================================== */
function initShield() {
  // Les 3 signaux viscéraux
  const signalsGrid = document.getElementById('visceral-signals-grid');
  if (signalsGrid) {
    signalsGrid.innerHTML = CIALDINI_DATA.shieldGuide.visceralSignals.map((s) => {
      return `
        <div class="glass-card-dark rounded-2xl p-5 border border-slate-800 space-y-3">
          <div class="flex items-center justify-between">
            <span class="text-xs font-extrabold px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
              ${s.organ}
            </span>
          </div>
          <div class="space-y-1">
            <h4 class="font-bold text-sm text-white">${s.sensation}</h4>
            <p class="text-[11px] text-indigo-300 font-medium">Déclencheur : ${s.trigger}</p>
          </div>
          <p class="text-xs text-slate-300 leading-relaxed">${s.meaning}</p>
          <div class="pt-2 border-t border-slate-800 text-[11px] font-bold text-emerald-400">
            👉 Action : ${s.action}
          </div>
        </div>
      `;
    }).join('');
  }

  // 6 formules verbales
  const verbalGrid = document.getElementById('verbal-shields-grid');
  if (verbalGrid) {
    verbalGrid.innerHTML = CIALDINI_DATA.shieldGuide.verbalCounterShields.map((v) => {
      return `
        <div onclick="copyToClipboard('${escapeQuotes(v.phrase)}', 'Formule copiée !')" class="card-interactive glass-card-dark rounded-xl p-4 border border-slate-800 cursor-pointer space-y-2 group hover:border-indigo-500/50">
          <span class="text-[10px] font-bold uppercase tracking-wider text-indigo-400 block">${v.situation}</span>
          <p class="text-xs sm:text-sm text-slate-200 font-medium font-serif italic">${v.phrase}</p>
          <div class="text-[10px] text-slate-400 group-hover:text-indigo-300 flex items-center justify-end gap-1">
            <span>Cliquer pour copier</span> 📋
          </div>
        </div>
      `;
    }).join('');
  }

  // Audit 5 secondes
  const auditList = document.getElementById('five-second-audit-list');
  if (auditList) {
    auditList.innerHTML = CIALDINI_DATA.shieldGuide.fiveSecondAudit.map((item, idx) => {
      return `
        <label class="flex items-start gap-3 p-2.5 rounded-xl bg-slate-950/40 border border-slate-800/80 cursor-pointer hover:bg-slate-900 transition">
          <input type="checkbox" id="audit-check-${idx}" class="mt-0.5 rounded text-indigo-600 focus:ring-indigo-500 bg-slate-800 border-slate-700">
          <span class="text-xs sm:text-sm text-slate-200 select-none">${item}</span>
        </label>
      `;
    }).join('');
  }
}

/* ==========================================================================
   7. RENDU DU GUIDE DU DÉTECTIVE ÉTHIQUE
   ========================================================================== */
function initEthicalGuide() {
  const container = document.getElementById('ethical-principles-container');
  if (!container) return;

  container.innerHTML = CIALDINI_DATA.ethicalPersuasionGuide.principlesRules.map((ep) => {
    return `
      <div class="glass-card-dark rounded-xl p-4 sm:p-5 border border-slate-800 space-y-3">
        <div class="flex items-center justify-between">
          <h4 class="font-bold text-sm sm:text-base text-white flex items-center gap-2">
            <span class="text-emerald-400">⚖️</span> ${ep.principle}
          </h4>
          <span class="text-[10px] uppercase font-bold text-slate-400">Règle Détective</span>
        </div>
        <p class="text-xs sm:text-sm text-slate-300 font-medium">${ep.rule}</p>
        <div class="p-3 rounded-lg bg-slate-950/60 border border-emerald-500/20 text-xs text-emerald-200 font-serif italic">
          <strong>Script type :</strong> ${ep.script}
        </div>
      </div>
    `;
  }).join('');
}

/* ==========================================================================
   8. BIBLIOTHÈQUE DES EXPÉRIENCES CÉLÈBRES & ANECDOTES DU LIVRE
   ========================================================================== */
function initStudies() {
  const container = document.getElementById('studies-grid');
  const anecdotesContainer = document.getElementById('anecdotes-grid');

  if (container) {
    container.innerHTML = CIALDINI_DATA.studiesLibrary.map((st) => {
      return `
        <div class="glass-card-dark rounded-2xl p-5 border border-slate-800 space-y-3 flex flex-col justify-between hover:border-indigo-500/40 transition">
          <div class="space-y-2">
            <div class="flex items-center justify-between">
              <span class="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                ${st.principle}
              </span>
              <span class="text-[10px] text-slate-400">${st.score}</span>
            </div>
            <h4 class="font-bold text-sm text-white">${st.title}</h4>
            <p class="text-[11px] text-amber-400/90 font-medium">${st.lead}</p>
            <p class="text-xs text-slate-300 leading-relaxed">${st.synopsis}</p>
          </div>
          <div class="pt-3 border-t border-slate-800">
            <p class="text-[11px] text-emerald-300 font-semibold">
              💡 Enseignement : <span class="font-normal text-slate-300">${st.takeaway}</span>
            </p>
          </div>
        </div>
      `;
    }).join('');
  }

  if (anecdotesContainer && CIALDINI_DATA.bookAnecdotes) {
    anecdotesContainer.innerHTML = CIALDINI_DATA.bookAnecdotes.map((an) => {
      return `
        <div class="glass-card-dark rounded-2xl p-5 border border-slate-800 space-y-3 flex flex-col justify-between hover:border-amber-500/40 transition">
          <div class="space-y-2">
            <div class="flex items-center justify-between">
              <span class="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                ${an.chapter}
              </span>
              <span class="text-[10px] text-slate-400">${an.characters}</span>
            </div>
            <h4 class="font-bold text-sm sm:text-base text-white flex items-center gap-1.5">
              <span>📖</span> ${an.title}
            </h4>
            <div class="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800 text-[11px] text-indigo-300 font-semibold">
              Mécanisme : ${an.concept}
            </div>
            <p class="text-xs text-slate-300 leading-relaxed font-serif italic">${an.summary}</p>
          </div>
          <div class="pt-3 border-t border-slate-800 text-[11px] text-emerald-300 font-medium">
            🎯 <strong>Leçon du maître :</strong> ${an.takeaway}
          </div>
        </div>
      `;
    }).join('');
  }
}

function toggleStudiesView(view) {
  const studiesGrid = document.getElementById('studies-grid');
  const anecdotesGrid = document.getElementById('anecdotes-grid');
  const btnStudies = document.getElementById('btn-subtab-studies');
  const btnAnecdotes = document.getElementById('btn-subtab-anecdotes');

  if (view === 'studies') {
    if (studiesGrid) studiesGrid.classList.remove('hidden');
    if (anecdotesGrid) anecdotesGrid.classList.add('hidden');
    if (btnStudies) {
      btnStudies.className = "px-3 py-1.5 rounded-lg bg-indigo-600 text-white font-bold transition";
    }
    if (btnAnecdotes) {
      btnAnecdotes.className = "px-3 py-1.5 rounded-lg text-slate-400 hover:text-white font-semibold transition";
    }
  } else {
    if (studiesGrid) studiesGrid.classList.add('hidden');
    if (anecdotesGrid) anecdotesGrid.classList.remove('hidden');
    if (btnAnecdotes) {
      btnAnecdotes.className = "px-3 py-1.5 rounded-lg bg-amber-500 text-slate-950 font-black transition";
    }
    if (btnStudies) {
      btnStudies.className = "px-3 py-1.5 rounded-lg text-slate-400 hover:text-white font-semibold transition";
    }
  }
}


/* ==========================================================================
   9. TEST DE VULNÉRABILITÉ PSYCHO (QUIZ)
   ========================================================================== */
function initQuiz() {
  renderCurrentQuestion();
}

function renderCurrentQuestion() {
  const q = CIALDINI_DATA.quizQuestions[APP_STATE.quiz.currentIndex];
  if (!q) {
    showQuizResults();
    return;
  }

  const total = CIALDINI_DATA.quizQuestions.length;
  const currentNum = APP_STATE.quiz.currentIndex + 1;

  document.getElementById('quiz-current-num').textContent = currentNum;
  document.getElementById('quiz-total-num').textContent = total;
  document.getElementById('quiz-progress-bar').style.width = `${(currentNum / total) * 100}%`;

  const principleNames = {
    reciprocity: "Réciprocité",
    commitment: "Engagement & Cohérence",
    "social-proof": "Preuve Sociale",
    liking: "Sympathie",
    authority: "Autorité",
    scarcity: "Rareté",
    unity: "Unité"
  };
  document.getElementById('quiz-principle-badge').textContent = principleNames[q.principleId] || q.principleId;

  document.getElementById('quiz-question-text').textContent = q.question;

  const optionsContainer = document.getElementById('quiz-options-container');
  optionsContainer.innerHTML = q.options.map((opt, i) => {
    return `
      <button onclick="recordQuizAnswer(${q.id}, '${q.principleId}', ${opt.vulnerabilityScore})" class="w-full text-left p-4 rounded-xl border border-slate-800 bg-slate-950/50 hover:bg-indigo-950/30 hover:border-indigo-500/50 text-xs sm:text-sm text-slate-200 transition group flex items-start gap-3">
        <span class="w-6 h-6 rounded-full bg-slate-800 group-hover:bg-indigo-600 text-white text-xs font-bold flex items-center justify-center shrink-0">
          ${String.fromCharCode(65 + i)}
        </span>
        <span class="pt-0.5 leading-relaxed">${opt.text}</span>
      </button>
    `;
  }).join('');
}

function recordQuizAnswer(questionId, principleId, score) {
  APP_STATE.quiz.answers[questionId] = { principleId, score };
  APP_STATE.quiz.currentIndex++;

  if (APP_STATE.quiz.currentIndex < CIALDINI_DATA.quizQuestions.length) {
    renderCurrentQuestion();
  } else {
    showQuizResults();
  }
}

function showQuizResults() {
  document.getElementById('quiz-runner-card').classList.add('hidden');
  const resultsCard = document.getElementById('quiz-results-card');
  resultsCard.classList.remove('hidden');

  // Calcul du score global (Max vulnérabilité = 3 * 14 = 42 points)
  let totalScore = 0;
  const principleScores = {
    reciprocity: { score: 0, max: 0, name: "Réciprocité" },
    commitment: { score: 0, max: 0, name: "Engagement & Cohérence" },
    "social-proof": { score: 0, max: 0, name: "Preuve Sociale" },
    liking: { score: 0, max: 0, name: "Sympathie" },
    authority: { score: 0, max: 0, name: "Autorité" },
    scarcity: { score: 0, max: 0, name: "Rareté" },
    unity: { score: 0, max: 0, name: "Unité" }
  };

  Object.values(APP_STATE.quiz.answers).forEach((ans) => {
    totalScore += ans.score;
    if (principleScores[ans.principleId]) {
      principleScores[ans.principleId].score += ans.score;
      principleScores[ans.principleId].max += 3;
    }
  });

  const maxTotalScore = CIALDINI_DATA.quizQuestions.length * 3;
  // Résistance en pourcentage : 100% si totalScore = 0, 0% si totalScore = maxTotalScore
  const resistanceRate = Math.round(((maxTotalScore - totalScore) / maxTotalScore) * 100);

  document.getElementById('quiz-global-score').textContent = `${resistanceRate}%`;

  let verdict = "";
  if (resistanceRate >= 80) {
    verdict = "🛡️ Excellente immunité cognitive ! Vous repérez les raccourcis mentaux et savez désamorcer les tentatives d'extorsion de consentement sans culpabilité.";
  } else if (resistanceRate >= 50) {
    verdict = "⚖️ Résistance moyenne. Vous maîtrisez certains réflexes mais restez influençable face à certaines armes précises (souvent l'autorité ou la rareté).";
  } else {
    verdict = "⚠️ Vulnérabilité élevée aux armes d'influence. Votre bienveillance naturelle ou la peur du conflit sont fréquemment détournées par les professionnels de la soumission.";
  }
  document.getElementById('quiz-global-verdict').textContent = verdict;

  // Breakdown par principe
  let worstPrinciple = null;
  let worstScoreRate = 100;

  const breakdownContainer = document.getElementById('quiz-breakdown-bars');
  breakdownContainer.innerHTML = Object.entries(principleScores).map(([key, data]) => {
    const rate = data.max > 0 ? Math.round(((data.max - data.score) / data.max) * 100) : 100;
    if (rate < worstScoreRate) {
      worstScoreRate = rate;
      worstPrinciple = data.name;
    }

    let barColor = 'bg-emerald-500';
    if (rate < 45) barColor = 'bg-rose-500';
    else if (rate < 75) barColor = 'bg-amber-500';

    return `
      <div class="space-y-1">
        <div class="flex justify-between text-xs font-semibold">
          <span class="text-white">${data.name}</span>
          <span class="text-slate-300">${rate}% résistant</span>
        </div>
        <div class="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
          <div class="h-full ${barColor} progress-bar-fill" style="width: ${rate}%;"></div>
        </div>
      </div>
    `;
  }).join('');

  // Conseil personnalisé
  const adviceEl = document.getElementById('quiz-personalized-advice');
  adviceEl.innerHTML = `
    <strong>Plan d'action prioritaire :</strong> Votre point de vulnérabilité le plus marqué concerne le principe de <strong>${worstPrinciple}</strong> (${worstScoreRate}% de résistance). Rendez-vous dans l'onglet <strong>Bouclier Anti-Manipulation</strong> et l'onglet <strong>7 Principes</strong> pour mémoriser les formules de détection et désamorcer ce levier spécifique lors de vos prochaines interactions !
  `;
}

function restartQuiz() {
  APP_STATE.quiz.currentIndex = 0;
  APP_STATE.quiz.answers = {};
  document.getElementById('quiz-results-card').classList.add('hidden');
  document.getElementById('quiz-runner-card').classList.remove('hidden');
  renderCurrentQuestion();
}

/* ==========================================================================
   10. SYSTÈME DE FAVORIS (LOCALSTORAGE)
   ========================================================================== */
function isFavorite(type, id) {
  return APP_STATE.favorites.some((f) => f.type === type && f.id === id);
}

function toggleFavorite(type, id, title) {
  const index = APP_STATE.favorites.findIndex((f) => f.type === type && f.id === id);
  if (index >= 0) {
    APP_STATE.favorites.splice(index, 1);
    showToast("Retiré des favoris");
  } else {
    APP_STATE.favorites.push({ type, id, title, date: new Date().toLocaleDateString('fr-FR') });
    showToast("Ajouté aux favoris ⭐");
  }
  localStorage.setItem('cialdini_favorites', JSON.stringify(APP_STATE.favorites));
  updateFavoritesBadge();

  // Mise à jour du bouton si visible
  const btn = document.querySelector(`.btn-fav-${id}`);
  if (btn) {
    btn.innerHTML = isFavorite(type, id) ? '★ Favori' : '☆ Sauvegarder';
  }
}

function updateFavoritesBadge() {
  const badge = document.getElementById('favorites-badge');
  if (badge) {
    const count = APP_STATE.favorites.length;
    if (count > 0) {
      badge.textContent = count;
      badge.classList.remove('hidden');
    } else {
      badge.classList.add('hidden');
    }
  }
}

function openFavoritesModal() {
  const modal = document.getElementById('favorites-modal');
  const list = document.getElementById('favorites-modal-list');
  if (!modal || !list) return;

  if (APP_STATE.favorites.length === 0) {
    list.innerHTML = `<p class="text-slate-400 text-center py-6">Aucun élément favori pour l'instant.<br>Cliquez sur "Sauvegarder" dans les fiches ou scénarios pour les retrouver ici.</p>`;
  } else {
    list.innerHTML = APP_STATE.favorites.map((f) => {
      return `
        <div class="flex items-center justify-between p-3 rounded-xl bg-slate-950/60 border border-slate-800">
          <div>
            <span class="text-[10px] uppercase font-bold text-indigo-400">${f.type}</span>
            <h5 class="font-bold text-white text-xs">${f.title}</h5>
            <span class="text-[10px] text-slate-500">Ajouté le ${f.date}</span>
          </div>
          <button onclick="toggleFavorite('${f.type}', '${f.id}', '${escapeQuotes(f.title)}'); openFavoritesModal();" class="text-xs text-rose-400 hover:text-rose-300 p-1">
            Supprimer
          </button>
        </div>
      `;
    }).join('');
  }

  modal.classList.remove('hidden');
}

function clearAllFavorites() {
  APP_STATE.favorites = [];
  localStorage.removeItem('cialdini_favorites');
  updateFavoritesBadge();
  openFavoritesModal();
  showToast("Tous les favoris ont été effacés");
}

/* ==========================================================================
   11. RECHERCHE GLOBALE & MODALES
   ========================================================================== */
function initSearch() {
  const input = document.getElementById('global-search-input');
  if (!input) return;

  input.addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase().trim();
    if (q.length < 2) return;

    // Cherche dans les principes
    const matchedPrinciple = CIALDINI_DATA.principles.find((p) => {
      return p.title.toLowerCase().includes(q) || 
             p.nameEn.toLowerCase().includes(q) || 
             p.summary.toLowerCase().includes(q) ||
             p.keyTechniques.some((t) => t.title.toLowerCase().includes(q) || t.desc.toLowerCase().includes(q));
    });

    if (matchedPrinciple) {
      navigateTab('principles');
      const el = document.getElementById(`principle-card-${matchedPrinciple.id}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el.classList.add('pulse-glow');
        setTimeout(() => el.classList.remove('pulse-glow'), 2500);
      }
    }
  });
}

function openPrincipleModal(principleId) {
  const p = CIALDINI_DATA.principles.find((x) => x.id === principleId);
  if (!p) return;

  document.getElementById('modal-principle-title').textContent = `${p.number}. ${p.title} (${p.nameEn})`;
  document.getElementById('modal-principle-badge').textContent = p.badge;

  const body = document.getElementById('modal-principle-body');
  body.innerHTML = `
    <blockquote class="p-3 rounded-xl bg-slate-950 border-l-4 border-amber-500 italic text-xs text-slate-300">
      ${p.quote}
    </blockquote>
    <div class="space-y-1">
      <h4 class="font-bold text-indigo-300 uppercase text-[11px]">Résumé exécutif :</h4>
      <p class="text-xs text-slate-300 leading-relaxed">${p.summary}</p>
    </div>
    <div class="space-y-1">
      <h4 class="font-bold text-amber-300 uppercase text-[11px]">Étude scientifique clé :</h4>
      <p class="text-xs text-slate-300 leading-relaxed"><strong>${p.famousStudies[0].title} :</strong> ${p.famousStudies[0].summary}</p>
    </div>
    <div class="space-y-1 p-3 rounded-xl bg-emerald-950/30 border border-emerald-800/40">
      <h4 class="font-bold text-emerald-300 uppercase text-[11px]">Bouclier de riposte :</h4>
      <p class="text-xs text-slate-200 leading-relaxed">${p.defenseStrategies[0]}</p>
    </div>
  `;

  document.getElementById('principle-modal').classList.remove('hidden');
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('hidden');
  }
}

/* ==========================================================================
   12. UTILITAIRES (CLIPBOARD & TOAST)
   ========================================================================== */
function copyToClipboard(text, successMessage) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(successMessage || "Copié dans le presse-papier !");
    }).catch(() => fallbackCopy(text, successMessage));
  } else {
    fallbackCopy(text, successMessage);
  }
}

function fallbackCopy(text, successMessage) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.opacity = "0";
  document.body.appendChild(textArea);
  textArea.select();
  try {
    document.execCommand('copy');
    showToast(successMessage || "Copié !");
  } catch (err) {
    showToast("Erreur lors de la copie");
  }
  document.body.removeChild(textArea);
}

function showToast(message) {
  const toast = document.getElementById('toast');
  const msgEl = document.getElementById('toast-message');
  if (!toast || !msgEl) return;

  msgEl.textContent = message;
  toast.classList.remove('hidden');
  toast.classList.add('animate-fade-in');

  setTimeout(() => {
    toast.classList.add('hidden');
  }, 2400);
}

function escapeQuotes(str) {
  if (!str) return '';
  return str.replace(/'/g, "\\'").replace(/"/g, '&quot;');
}
