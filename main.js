
    const RADIO_STATIONS = [
      // قرآن كريم
      {
        id: "quran_cairo",
        title: "إذاعة القرآن الكريم من القاهرة",
        category: "قرآن كريم",
        badge: "بث رسمي",
        description: "تلاوات وبرامج إذاعة القرآن الكريم المصرية.",
        src: "https://islamicbulletin.site:8104/stream",
        tags: "القرآن الكريم القاهرة مصر راديو quran cairo official",
        featured: true
      },
      {
        id: "quran_saudi",
        title: "إذاعة القرآن الكريم السعودية",
        category: "قرآن كريم",
        badge: "بث رسمي",
        description: "بث مباشر لإذاعة القرآن الكريم من المملكة العربية السعودية.",
        src: "https://islamicbulletin.site:8106/stream",
        tags: "السعودية إذاعة القرآن السعودية quran saudi makkah"
      },
      {
        id: "quran_nablus",
        title: "إذاعة القرآن الكريم من نابلس",
        category: "قرآن كريم",
        badge: "بث رسمي",
        description: "بث مباشر لإذاعة القرآن الكريم من نابلس - فلسطين.",
        src: "https://islamicbulletin.site:8108/stream",
        tags: "نابلس فلسطين القرآن quran nablus palestine"
      },
      {
        id: "algeria_quran",
        title: "إذاعة القرآن الكريم من الجزائر",
        category: "قرآن كريم",
        badge: "بث رسمي",
        description: "الإذاعة الجزائرية الرسمية للقرآن الكريم.",
        src: "https://webradio.tda.dz/Coran_64K.mp3",
        tags: "الجزائر القرآن الكريم الجزائرية quran algeria official"
      },
      {
        id: "tarateel",
        title: "قرآن مباشر - ترتيل",
        category: "قرآن كريم",
        badge: "قرآن",
        description: "تلاوات متواصلة لعدة قرّاء بصوت نقي.",
        src: "https://qurango.net/radio/tarateel",
        tags: "قرآن مباشر ترتيل quran live"
      },
      {
        id: "quran_soul",
        title: "Quran for the Soul - القرآن للروح",
        category: "قرآن كريم",
        badge: "قرآن",
        description: "تلاوات قرآنية مختارة تلامس القلوب والأرواح.",
        src: "https://islamicbulletin.site:8102/stream",
        tags: "القرآن للروح quran soul spiritual"
      },
      {
        id: "quran_heart",
        title: "القرآن للقلب - غذاء القلب والروح",
        category: "قرآن كريم",
        badge: "قرآن",
        description: "تلاوات قرآنية مباشرة لتغذية القلب والروح.",
        src: "https://edge.mixlr.com/channel/rwumx",
        tags: "القرآن للقلب غذاء الروح quran heart spiritual"
      },

      // قرّاء
      {
        id: "altablawy",
        title: "إذاعة الشيخ محمد الطبلاوي",
        category: "قرّاء",
        badge: "قارئ",
        description: "تلاوات نادرة ومؤثرة للشيخ محمد الطبلاوي.",
        src: "https://qurango.net/radio/mohammad_altablaway",
        tags: "الشيخ الطبلاوي تلاوات quran"
      },
      {
        id: "mustafa_ismail",
        title: "إذاعة الشيخ مصطفى إسماعيل",
        category: "قرّاء",
        badge: "قارئ",
        description: "تلاوات خاشعة للشيخ مصطفى إسماعيل.",
        src: "https://qurango.net/radio/mustafa_ismail",
        tags: "الشيخ مصطفى اسماعيل quran"
      },
      {
        id: "abdulbasit",
        title: "إذاعة الشيخ عبدالباسط عبدالصمد",
        category: "قرّاء",
        badge: "قارئ",
        description: "تلاوات مجودّة للشيخ عبدالباسط عبدالصمد.",
        src: "https://qurango.net/radio/abdulbasit_abdulsamad_mojawwad",
        tags: "الشيخ عبدالباسط عبد الصمد quran"
      },
      {
        id: "saud_alshuraim",
        title: "إذاعة الشيخ سعود الشريم",
        category: "قرّاء",
        badge: "قارئ",
        description: "تلاوات خاشعة للشيخ سعود الشريم من الحرم المكي.",
        src: "https://qurango.net/radio/saud_alshuraim",
        tags: "سعود الشريم الحرم المكي quran"
      },
      {
        id: "abu_bakr_shatri",
        title: "إذاعة الشيخ أبو بكر الشاطري",
        category: "قرّاء",
        badge: "قارئ",
        description: "تلاوات مميزة للشيخ أبو بكر الشاطري.",
        src: "https://qurango.net/radio/shaik_abu_bakr_al_shatri",
        tags: "أبو بكر الشاطري quran"
      },
      {
        id: "fares_abbad",
        title: "إذاعة الشيخ فارس عباد",
        category: "قرّاء",
        badge: "قارئ",
        description: "تلاوات مؤثرة للشيخ فارس عباد.",
        src: "https://qurango.net/radio/fares_abbad",
        tags: "فارس عباد quran"
      },
      {
        id: "mohammed_ayyub",
        title: "إذاعة الشيخ محمد أيوب",
        category: "قرّاء",
        badge: "قارئ",
        description: "تلاوات منوعة للشيخ محمد أيوب.",
        src: "https://qurango.net/radio/mohammed_ayyub",
        tags: "محمد أيوب quran"
      },
      {
        id: "jamal_shaker",
        title: "إذاعة الشيخ جمال شاكر عبدالله",
        category: "قرّاء",
        badge: "قارئ",
        description: "تلاوات عذبة للشيخ جمال شاكر عبدالله.",
        src: "https://qurango.net/radio/jamal_shaker_abdullah",
        tags: "جمال شاكر عبدالله quran"
      },

      // رقية شرعية
      {
        id: "roqiah",
        title: "إذاعة الرقية الشرعية",
        category: "رقية شرعية",
        badge: "رقية",
        description: "آيات الرقية الشرعية المختارة من القرآن الكريم.",
        src: "https://qurango.net/radio/roqiah",
        tags: "رقية شرعية علاج roqya"
      },
      {
        id: "ruqya_healing",
        title: "الرقية الشرعية - Ruqya Healing",
        category: "رقية شرعية",
        badge: "رقية",
        description: "بث مستمر للرقية الشرعية من القرآن والسنة.",
        src: "https://islamicbulletin.site:8052/stream",
        tags: "رقية شرعية علاج شفاء ruqya healing"
      },

      // أذكار
      {
        id: "athkar_masa",
        title: "إذاعة أذكار المساء",
        category: "أذكار",
        badge: "أذكار",
        description: "بث مستمر لأذكار المساء مع تلاوات مختارة.",
        src: "https://qurango.net/radio/athkar_masa",
        tags: "أذكار المساء ذكر دعاء adhkar evening"
      },
      {
        id: "sakeenah",
        title: "إذاعة آيات السكينة",
        category: "أذكار",
        badge: "سكينة",
        description: "بث متواصل لآيات السكينة والطمأنينة.",
        src: "https://qurango.net/radio/sakeenah",
        tags: "آيات السكينة راحة سكينة tranquility"
      },

      // أحاديث نبوية
      {
        id: "riyad_salihin",
        title: "رياض الصالحين",
        category: "أحاديث نبوية",
        badge: "حديث",
        description: "أحاديث نبوية شريفة من كتاب رياض الصالحين.",
        src: "https://islamicbulletin.site:8058/stream",
        tags: "رياض الصالحين أحاديث نبوية hadith"
      },

      // تفسير
      {
        id: "tafseer",
        title: "إذاعة تفسير القرآن الكريم",
        category: "تفسير",
        badge: "تفسير",
        description: "شرح وتفسير لآيات القرآن الكريم من علماء موثوقين.",
        src: "https://qurango.net/radio/tafseer",
        tags: "تفسير القرآن تفسير دروس علم tafseer"
      },

      // دروس ومحاضرات
      {
        id: "sharawy",
        title: "قناة محمد متولي الشعراوي",
        category: "دروس ومحاضرات",
        badge: "محاضرات",
        description: "دروس ومحاضرات الشيخ محمد متولي الشعراوي.",
        src: "https://islamicbulletin.site:8066/stream",
        tags: "الشعراوي محاضرات دروس تفسير"
      },
      {
        id: "omar_abdulkafi",
        title: "قناة عمر عبد الكافي",
        category: "دروس ومحاضرات",
        badge: "محاضرات",
        description: "محاضرات ودروس الداعية عمر عبد الكافي.",
        src: "https://islamicbulletin.site:8068/stream",
        tags: "عمر عبد الكافي محاضرات دروس"
      },
      {
        id: "rateb_nabulsi",
        title: "قناة محمد راتب النابلسي",
        category: "دروس ومحاضرات",
        badge: "محاضرات",
        description: "دروس ومحاضرات الدكتور محمد راتب النابلسي.",
        src: "https://islamicbulletin.site:8060/stream",
        tags: "محمد راتب النابلسي محاضرات دروس"
      },
      {
        id: "abdulhamid_kishk",
        title: "قناة عبد الحميد كشك",
        category: "دروس ومحاضرات",
        badge: "محاضرات",
        description: "خطب ومحاضرات الشيخ عبد الحميد كشك.",
        src: "https://islamicbulletin.site:8062/stream",
        tags: "عبد الحميد كشك خطب محاضرات"
      },
      {
        id: "deenagers",
        title: "Deenagers Youth Radio - محاضرات الشباب",
        category: "دروس ومحاضرات",
        badge: "محاضرات",
        description: "محاضرات ودروس موجهة للشباب المسلم.",
        src: "https://islamicbulletin.site:8072/stream",
        tags: "شباب محاضرات youth lectures"
      },
      {
        id: "women_wisdom",
        title: "Women's Wisdom - حكمة النساء",
        category: "دروس ومحاضرات",
        badge: "محاضرات",
        description: "محتوى إسلامي ملهم للنساء المسلمات.",
        src: "https://islamicbulletin.site:8074/stream",
        tags: "نساء women wisdom islamic"
      },

      // سيرة نبوية
      {
        id: "sira_hajj",
        title: "قناة الحج والسيرة والصحابة",
        category: "سيرة نبوية",
        badge: "سيرة",
        description: "محتوى عن الحج والسيرة النبوية وقصص الصحابة.",
        src: "https://islamicbulletin.site:8070/stream",
        tags: "الحج السيرة الصحابة hajj sira sahabah"
      },
      {
        id: "rahma_lil_alamin",
        title: "رحمة للعالمين - السيرة النبوية",
        category: "سيرة نبوية",
        badge: "سيرة",
        description: "السيرة النبوية الشريفة وقصص الأنبياء.",
        src: "https://islamicbulletin.site:8054/stream",
        tags: "رحمة للعالمين السيرة النبوية sira"
      },

      // تكبيرات العيد
      {
        id: "eid_takbeer",
        title: "إذاعة تكبيرات العيد",
        category: "تكبيرات العيد",
        badge: "تكبيرات",
        description: "تكبيرات العيد بصوت جميل تبعث أجواء العيد.",
        src: "https://qurango.net/radio/eid",
        tags: "تكبيرات العيد عيد الأضحى عيد الفطر takbeer"
      },

      // بث حي ومتنوع
      {
        id: "haram_makki",
        title: "إذاعة الحرم المكي",
        category: "بث حي",
        badge: "بث حي",
        description: "صوتيات مباشرة من المسجد الحرام بمكة المكرمة.",
        src: "http://r7.tarat.com:8004/",
        tags: "الحرم المكي مكة بث الحرم"
      },
      {
        id: "makkah_tv",
        title: "قناة مكة Makkah TV بث مباشر (صوت)",
        category: "بث حي",
        badge: "بث حي",
        description: "بث صوتي مباشر من قناة مكة بأجواء روحانية.",
        src: "http://r1.tarat.com:8202/",
        tags: "قناة مكة makkah tv بث مباشر"
      },
      {
        id: "nile_radio",
        title: "إذاعة نهر النيل - River Nile",
        category: "إذاعات عامة",
        badge: "عام",
        description: "إذاعة نهر النيل المصرية - محتوى إسلامي متنوع.",
        src: "https://islamicbulletin.site:8064/stream",
        tags: "نهر النيل river nile egypt"
      },
      {
        id: "nur_ala_nur",
        title: "إذاعة نور على نور مباشر",
        category: "إذاعات عامة",
        badge: "عام",
        description: "بث مباشر لإذاعة نور على نور.",
        src: "https://islamicbulletin.site:8056/stream",
        tags: "نور على نور nurun ala nur"
      },
      {
        id: "radio_islam_sa",
        title: "Radio Islam - بث من جنوب أفريقيا",
        category: "إذاعات عامة",
        badge: "عام",
        description: "راديو إسلامي مباشر من جنوب أفريقيا.",
        src: "https://islamicbulletin.site:8114/stream",
        tags: "radio islam south africa"
      }
    ];

    // ===== DOM Elements =====
    const radiosContainer = document.getElementById("radiosContainer");
    const searchInput = document.getElementById("searchInput");
    const stopAllBtn = document.getElementById("stopAllBtn");
    const noResultsMessage = document.getElementById("noResultsMessage");
    const categoryList = document.getElementById("categoryList");
    const sidebar = document.getElementById("sidebar");
    const sidebarToggle = document.getElementById("sidebarToggle");

    // State
    let currentCategory = "الكل";
    let currentSearchQuery = "";

    // ===== Initialize =====
    document.getElementById("currentYear").textContent = new Date().getFullYear();

    // ===== Helper Functions =====
    function getCategories() {
      const categories = ["الكل"];
      RADIO_STATIONS.forEach(station => {
        if (!categories.includes(station.category)) {
          categories.push(station.category);
        }
      });
      return categories;
    }

    function getCategoryCount(category) {
      if (category === "الكل") return RADIO_STATIONS.length;
      return RADIO_STATIONS.filter(s => s.category === category).length;
    }

    function createCategoryButton(category) {
      const li = document.createElement("li");
      li.className = "category-item";

      const btn = document.createElement("button");
      btn.className = `category-btn ${category === currentCategory ? 'active' : ''}`;
      btn.setAttribute("data-category", category);
      btn.setAttribute("aria-pressed", category === currentCategory);
      btn.innerHTML = `
                <span>${category}</span>
                <span class="category-count">${getCategoryCount(category)}</span>
            `;

      btn.addEventListener("click", () => {
        currentCategory = category;
        updateCategories();
        filterRadios();
      });

      li.appendChild(btn);
      return li;
    }

    function updateCategories() {
      const categories = getCategories();
      categoryList.innerHTML = "";
      categories.forEach(cat => {
        categoryList.appendChild(createCategoryButton(cat));
      });
    }

    function createRadioCard(station) {
      const article = document.createElement("article");
      article.className = "radio-card";
      if (station.featured) article.classList.add("active");
      article.dataset.tags = station.tags || "";
      article.dataset.category = station.category || "";

      article.setAttribute("tabindex", "0");
      article.setAttribute("role", "group");
      article.setAttribute("aria-label", station.title);

      const header = document.createElement("div");
      header.className = "radio-header";

      const titleEl = document.createElement("h3");
      titleEl.className = "radio-title";
      titleEl.textContent = station.title;

      const badge = document.createElement("span");
      badge.className = "radio-badge";
      badge.textContent = station.badge || "إسلامي";

      const meta = document.createElement("p");
      meta.className = "radio-meta";
      meta.textContent = station.description || "";

      const audio = document.createElement("audio");
      audio.controls = true;
      audio.preload = "metadata";
      audio.src = station.src;
      audio.setAttribute("aria-label", "استمع إلى " + station.title);

      header.appendChild(titleEl);
      header.appendChild(badge);
      article.appendChild(header);
      article.appendChild(meta);
      article.appendChild(audio);

      // article.addEventListener("keydown", (e) => {
      //     if (e.key === "Enter" || e.key === " ") {
      //         e.preventDefault();
      //         if (audio.paused) audio.play();
      //         else audio.pause();
      //     }
      // });

      // تفعيل Media Session عند التشغيل
      audio.addEventListener("play", () => {
        setupMediaSession(station); // إضافة هذا السطر
      });

      article.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          if (audio.paused) audio.play();
          else audio.pause();
        }
      });


      return article;
    }

    function renderRadios(list) {
      radiosContainer.innerHTML = "";
      list.forEach(station => {
        radiosContainer.appendChild(createRadioCard(station));
      });
      attachAudioHandlers();
    }

    function allAudios() {
      return Array.from(document.querySelectorAll("audio"));
    }

    function stopAll() {
      allAudios().forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
      });
      Array.from(document.querySelectorAll(".radio-card")).forEach(card =>
        card.classList.remove("active")
      );
    }

    function attachAudioHandlers() {
      const cards = Array.from(document.querySelectorAll(".radio-card"));
      allAudios().forEach(audio => {
        audio.addEventListener("play", () => {
          allAudios().forEach(other => {
            if (other !== audio) other.pause();
          });
          cards.forEach(card => card.classList.remove("active"));
          const parentCard = audio.closest(".radio-card");
          if (parentCard) parentCard.classList.add("active");
        });
      });
    }

    // Debounce function for search
    function debounce(fn, delay) {
      let timeout;
      return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => fn.apply(this, args), delay);
      };
    }

    function filterRadios() {
      const normalizedQuery = currentSearchQuery.trim().toLowerCase();
      let visibleCount = 0;

      Array.from(radiosContainer.children).forEach(card => {
        const title = card.querySelector(".radio-title")?.textContent || "";
        const tags = card.dataset.tags || "";
        const category = card.dataset.category || "";
        const haystack = (title + " " + tags).toLowerCase();

        const matchesSearch = normalizedQuery === "" || haystack.includes(normalizedQuery);
        const matchesCategory = currentCategory === "الكل" || category === currentCategory;

        const matches = matchesSearch && matchesCategory;
        card.style.display = matches ? "" : "none";
        if (matches) visibleCount++;
      });

      if (visibleCount === 0) {
        noResultsMessage.classList.remove("sr-only");
      } else {
        noResultsMessage.classList.add("sr-only");
      }
    }

    // ===== Event Listeners =====
    stopAllBtn.addEventListener("click", () => {
      stopAll();
      stopAllBtn.setAttribute("aria-pressed", "false");
    });

    searchInput.addEventListener("input", debounce((e) => {
      currentSearchQuery = e.target.value;
      filterRadios();
    }, 300));

    sidebarToggle.addEventListener("click", () => {
      sidebar.classList.toggle("open");
    });

    // Close sidebar when clicking outside on mobile
    document.addEventListener("click", (e) => {
      if (window.innerWidth <= 1024) {
        if (!sidebar.contains(e.target) && !sidebarToggle.contains(e.target)) {
          sidebar.classList.remove("open");
        }
      }
    });

    // ===== Date/Time Update =====
    function updateDateTime() {
      const now = new Date();
      const arabicDays = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
      const dayName = arabicDays[now.getDay()];

      const gregOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      const gregDate = now.toLocaleDateString('ar-EG', gregOptions);
      const gregTime = now.toLocaleTimeString('ar-EG', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      });

      const hijriOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        calendar: 'islamic-umalqura'
      };
      const hijriDate = now.toLocaleDateString('ar-SA-u-ca-islamic-umalqura-nu-arab', hijriOptions);

      const gregElement = document.getElementById('gregorianDateTime');
      const hijriElement = document.getElementById('hijriDate');

      if (gregElement) {
        gregElement.textContent = `${dayName} ${gregDate} - ${gregTime}`;
      }

      if (hijriElement) {
        hijriElement.textContent = `${hijriDate} هـ`;
      }
    }

    updateDateTime();
    setInterval(updateDateTime, 1000);

    // ===== Initial Render =====
    updateCategories();
    // ===== ميزة التشغيل في الخلفية (Media Session API) =====

    // دالة إعداد Media Session للتحكم من Lock Screen
    function setupMediaSession(station) {
      if ('mediaSession' in navigator) {
        // تعيين معلومات الإذاعة
        navigator.mediaSession.metadata = new MediaMetadata({
          title: station.title,
          artist: station.category,
          album: 'إذاعات القرآن والذكر المباشر',
          artwork: [
            // استخدم أيقونات حقيقية لو عندك، أو سيب الـ placeholder
            {
              src: 'https://via.placeholder.com/96/050814/f5d261?text=🕌',
              sizes: '96x96',
              type: 'image/png'
            },
            {
              src: 'https://via.placeholder.com/192/050814/f5d261?text=🕌',
              sizes: '192x192',
              type: 'image/png'
            },
            {
              src: 'https://via.placeholder.com/512/050814/f5d261?text=🕌',
              sizes: '512x512',
              type: 'image/png'
            }
          ]
        });
        navigator.mediaSession.setActionHandler('play', () => {
          const currentAudio = document.querySelector('.radio-card.active audio');
          if (currentAudio) {
            currentAudio.play();
          }
        });
        navigator.mediaSession.setActionHandler('pause', () => {
          const currentAudio = document.querySelector('.radio-card.active audio');
          if (currentAudio) {
            currentAudio.pause();
          }
        });
        navigator.mediaSession.setActionHandler('stop', () => {
          stopAll();
        });
        navigator.mediaSession.setActionHandler('previoustrack', () => {
          playPreviousStation();
        });
        navigator.mediaSession.setActionHandler('nexttrack', () => {
          playNextStation();
        });

        console.log('✅ Media Session activated for:', station.title);
      } else {
        console.warn('⚠️ Media Session API not supported');
      }
    }
    function playPreviousStation() {
      const cards = Array.from(document.querySelectorAll('.radio-card'));
      const activeCard = document.querySelector('.radio-card.active');

      if (!activeCard) return;

      const currentIndex = cards.indexOf(activeCard);
      const previousIndex = currentIndex > 0 ? currentIndex - 1 : cards.length - 1;
      const previousCard = cards[previousIndex];

      if (previousCard) {
        const audio = previousCard.querySelector('audio');
        if (audio) {
          stopAll();
          audio.play();
        }
      }
    }
    function playNextStation() {
      const cards = Array.from(document.querySelectorAll('.radio-card'));
      const activeCard = document.querySelector('.radio-card.active');

      if (!activeCard) return;

      const currentIndex = cards.indexOf(activeCard);
      const nextIndex = currentIndex < cards.length - 1 ? currentIndex + 1 : 0;
      const nextCard = cards[nextIndex];

      if (nextCard) {
        const audio = nextCard.querySelector('audio');
        if (audio) {
          stopAll();
          audio.play();
        }
      }
    }

function showBackgroundPlayNotice() {
    if ('mediaSession' in navigator && !localStorage.getItem('bgPlayNoticeShown')) {
        const notice = document.createElement('div');
        notice.className = 'background-play-notice';
        notice.textContent = '🎧 يمكنك الآن التحكم في الإذاعة من شاشة القفل!';
        document.body.appendChild(notice);
        
        setTimeout(() => {
            notice.remove();
        }, 3000);
        
        localStorage.setItem('bgPlayNoticeShown', 'true');
    }
}
document.addEventListener('play', showBackgroundPlayNotice, { once: true, capture: true });
    renderRadios(RADIO_STATIONS);
