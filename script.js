(function(){
  const C=window.LIANZON_CONTACT||{};
  
  // 各语言预设咨询文案
  const prefilledMessages = {
    ru: "Здравствуйте! Я посетил сайт Lianzon Auto. Меня интересуют новые и подержанные автомобили из Китая. Пожалуйста, отправьте каталог и актуальные цены.",
    zh: "您好！我访问了 Lianzon Auto 网站，对中国的新车和二手车很感兴趣。请发送产品目录和最新价格。",
    ar: "مرحباً! لقد زرت موقع Lianzon Auto وأنا مهتم بالسيارات الجديدة والمستعملة من الصين. يرجى إرسال الكتالوج والأسعار الحالية.",
    es: "¡Hola! Visité el sitio web de Lianzon Auto y estoy interesado en autos nuevos y usados de China. Por favor envíen el catálogo y los precios actuales.",
    en: "Hello! I visited the Lianzon Auto website and I am interested in new and used cars from China. Please send the catalog and current prices."
  };

  const dict={
    zh:{navVehicles:'车型',navService:'服务',navProcess:'流程',navContact:'联系我们',heroKicker:'中国 → 全球',heroTitle:'中国二手车。<br><em>面向全球出口。</em>',heroText:'我们专注于中国二手车出口业务，提供车辆采购、车况检测、出口手续与国际运输服务，为全球车商和买家提供稳定的中国车辆供应。',heroCta:'获取报价',heroBrowse:'查看车型',meta1:'找车',meta2:'验车',meta3:'出口',meta4:'运输',heroCaptionSmall:'直接采购',heroCaption:'中国车辆供应链',vehiclesKicker:'车型',vehiclesTitle:'热门出口类别',vehiclesText:'我们经营多种中国二手车及新能源车型，可根据你的市场、预算和目的地提供车辆方案。',v1Tag:'SUV',v1Title:'家用及商务 SUV',v1Text:'起售价 8500 美元起。面向出口的批发二手 SUV。',v2Tag:'轿车',v2Title:'出口轿车',v2Text:'起售价 1600 美元起。适合海外经销商的可靠轿车。',v3Tag:'新能源',v3Title:'新能源车辆',v3Text:'起售价 2500 美元起。中国 EV 与 PHEV 批发供应。',vInquire:'获取报价',v4Tag:'皮卡',v4Title:'皮卡车型',v4Text:'起售价 14,000 美元起。适合非洲和中东市场的耐用皮卡。',v5Tag:'MPV',v5Title:'MPV 商务车',v5Text:'起售价 10,500 美元起。适合批量出口的多用途车型。',v6Tag:'高端车型',v6Title:'高端车辆',v6Text:'起售价 10,500 美元起。面向全球买家的高端二手车。',vDisclaimer:'图片仅供示意。价格因品牌、年份、里程和车况而异。请发送询价获取准确报价。',serviceKicker:'我们做什么',serviceTitle:'一个联系人，四个步骤。',s1:'车辆采购',s2:'验车与图片视频',s3:'出口文件',s4:'物流协调',processKicker:'出口流程',processTitle:'从选车到装船，清晰高效。',p1Title:'提交需求',p1Text:'车型、年份、数量、预算和目的地。',p2Title:'收到车辆方案',p2Text:'匹配车型、图片资料及报价。',p3Title:'确认并验车',p3Text:'发运前核对车辆状况与文件。',p4Title:'出口并运输',p4Text:'协调港口交车及目的地运输。',contactKicker:'联系我们',contactTitle:'告诉我们你要什么。',contactText:'告诉我们你需要的车型、数量和目的地，我们会直接提供车辆方案与报价。WhatsApp 是联系销售团队最快的方式。',formTitle:'快速询价',formName:'姓名',formContact:'WhatsApp / 邮箱',formModel:'车型',formQty:'数量',formDestination:'目的地',formMessage:'具体要求',formSubmit:'发送询价',footerText:'中国二手车采购与出口服务。',salesOnline:'在线',whatsapp24:'24h 在线回复',railQuote:'获取报价'},
    en:{navVehicles:'Vehicles',navService:'Service',navProcess:'Process',navContact:'Contact',heroKicker:'CHINA → WORLD',heroTitle:'Used Cars from China.<br><em>Ready for Export.</em>',heroText:'We are a China-based used car exporter, supplying vehicles to dealers and buyers worldwide with vehicle selection, inspection, export and shipping services.',heroCta:'Get a Quote',heroBrowse:'View Vehicles',meta1:'Source',meta2:'Inspect',meta3:'Export',meta4:'Ship',heroCaptionSmall:'DIRECT SOURCING',heroCaption:'China Vehicle Supply',vehiclesKicker:'VEHICLES',vehiclesTitle:'Popular Export Categories',vehiclesText:'We offer a range of used and new-energy vehicles from China, with options matched to your market, budget and destination.',v1Tag:'SUV',v1Title:'Family & Business SUVs',v1Text:'Starting from USD 8500+. Wholesale used SUVs for export.',v2Tag:'SEDAN',v2Title:'Sedan Cars for Export',v2Text:'Starting from USD 1600+. Reliable sedans for overseas dealers.',v3Tag:'EV / PHEV',v3Title:'New Energy Vehicles',v3Text:'Starting from USD 2500+. China EV & PHEV wholesale supply.',vInquire:'Get Quote',v4Tag:'PICKUP',v4Title:'Pickup Trucks',v4Text:'Starting from USD 14,000+. Tough pickups for Africa & Middle East.',v5Tag:'MPV',v5Title:'MPV Vans',v5Text:'Starting from USD 10,500+. Multi-purpose vehicles for bulk export.',v6Tag:'PREMIUM',v6Title:'Premium Vehicles',v6Text:'Starting from USD 10500+. High-end used cars for global buyers.',vDisclaimer:'Image for illustration only. Prices vary by brand, year, mileage & condition. Send inquiry for exact quotation',serviceKicker:'WHAT WE DO',serviceTitle:'One contact. Four steps.',s1:'Vehicle sourcing',s2:'Inspection & media',s3:'Export documents',s4:'Shipping coordination',processKicker:'PROCESS',processTitle:'From vehicle selection to shipment, clear and efficient.',p1Title:'Send requirements',p1Text:'Model, year, quantity, budget and destination.',p2Title:'Receive options',p2Text:'Matching vehicles, photos and quotation.',p3Title:'Confirm & inspect',p3Text:'Vehicle condition and documents checked before shipping.',p4Title:'Export & ship',p4Text:'Port delivery and shipping coordination to destination.',contactKicker:'CONTACT',contactTitle:'Tell us what you need.',contactText:'Tell us the model, quantity and destination you need. We will provide vehicle options and a quotation. WhatsApp is the fastest way to reach our sales team.',formTitle:'Quick Quote',formName:'Name',formContact:'WhatsApp / Email',formModel:'Model',formQty:'Qty',formDestination:'Destination',formMessage:'Requirements',formSubmit:'Send Inquiry',footerText:'China used car sourcing & export.',salesOnline:'ONLINE',whatsapp24:'24h replies',railQuote:'Get Quote'},
    ru:{navVehicles:'Автомобили',navService:'Услуги',navProcess:'Процесс',navContact:'Контакты',heroKicker:'КИТАЙ → МИР',heroTitle:'Автомобили из Китая.<br><em>Готовы к экспорту.</em>',heroText:'Мы занимаемся экспортом автомобилей из Китая и поставляем автомобили дилерам и покупателям по всему миру, включая подбор, проверку, экспорт и доставку.',heroCta:'Получить цену',heroBrowse:'Смотреть авто',meta1:'Подбор',meta2:'Проверка',meta3:'Экспорт',meta4:'Доставка',heroCaptionSmall:'ПРЯМЫЕ ПОСТАВКИ',heroCaption:'Автомобили из Китая',vehiclesKicker:'АВТОМОБИЛИ',vehiclesTitle:'Популярные категории',vehiclesText:'Мы предлагаем широкий выбор автомобилей из Китая и подбираем варианты с учётом вашего рынка, бюджета и страны назначения.',v1Tag:'SUV',v1Title:'SUV для семьи и бизнеса',v1Text:'От 8 500 USD. Оптовые подержанные SUV для экспорта.',v2Tag:'СЕДАН',v2Title:'Седаны для экспорта',v2Text:'От 1 600 USD. Надёжные седаны для зарубежных дилеров.',v3Tag:'EV / PHEV',v3Title:'Автомобили на новой энергии',v3Text:'От 2500 USD. Оптовые поставки китайских EV и PHEV.',vInquire:'Получить цену',v4Tag:'ПИКАП',v4Title:'Пикапы',v4Text:'От 14 000 USD. Надёжные пикапы для Африки и Ближнего Востока.',v5Tag:'MPV',v5Title:'MPV и микроавтобусы',v5Text:'От 10 500 USD. Универсальные автомобили для оптового экспорта.',v6Tag:'ПРЕМИУМ',v6Title:'Премиальные автомобили',v6Text:'От 10 500 USD. Премиальные подержанные автомобили для покупателей по всему миру.',vDisclaimer:'Изображение только для иллюстрации. Цена зависит от бренда, года, пробега и состояния. Отправьте запрос для точной цены.',serviceKicker:'ЧТО МЫ ДЕЛАЕМ',serviceTitle:'Один контакт. Четыре шага.',s1:'Подбор автомобиля',s2:'Проверка и фото/видео',s3:'Экспортные документы',s4:'Логистика и доставка',processKicker:'ПРОЦЕСС',processTitle:'От выбора автомобиля до отправки — чётко и эффективно.',p1Title:'Отправьте требования',p1Text:'Модель, год, количество, бюджет и страна.',p2Title:'Получите варианты',p2Text:'Подходящие авто, фото и коммерческое предложение.',p3Title:'Подтвердите и проверьте',p3Text:'Перед отправкой проверяем состояние и документы.',p4Title:'Экспорт и доставка',p4Text:'Организуем передачу в порт и транспортировку.',contactKicker:'КОНТАКТЫ',contactTitle:'Расскажите, какой автомобиль нужен.',contactText:'Укажите модель, количество и страну назначения. Мы предложим варианты автомобилей и коммерческое предложение. WhatsApp — самый быстрый способ связаться с нашей командой.',formTitle:'Быстрый запрос',formName:'Имя',formContact:'WhatsApp / Email',formModel:'Модель',formQty:'Количество',formDestination:'Страна назначения',formMessage:'Требования',formSubmit:'Отправить запрос',footerText:'Подбор и экспорт автомобилей из Китая.',salesOnline:'ОНЛАЙН',whatsapp24:'Ответ 24 ч.',railQuote:'Получить цену'},
    ar:{navVehicles:'السيارات',navService:'الخدمات',navProcess:'الخطوات',navContact:'تواصل معنا',heroKicker:'الصين ←→ العالم',heroTitle:'سيارات مستعملة من الصين.<br><em>جاهزة للتصدير.</em>',heroText:'نحن متخصصون في تصدير السيارات المستعملة من الصين، ونوفر السيارات للوكلاء والمشترين حول العالم مع خدمات الاختيار والفحص والتصدير والشحن.',heroCta:'اطلب عرض سعر',heroBrowse:'شاهد السيارات',meta1:'توفير',meta2:'فحص',meta3:'تصدير',meta4:'شحن',heroCaptionSmall:'توريد مباشر',heroCaption:'توريد السيارات من الصين',vehiclesKicker:'السيارات',vehiclesTitle:'الفئات الأكثر طلباً للتصدير',vehiclesText:'نوفر مجموعة واسعة من السيارات من الصين ونقترح الخيارات المناسبة لسوقك وميزانيتك وبلد الوصول.',v1Tag:'SUV',v1Title:'سيارات SUV للعائلة والأعمال',v1Text:'تبدأ من 8500 دولار أمريكي. سيارات SUV مستعملة بالجملة للتصدير.',v2Tag:'سيدان',v2Title:'سيارات سيدان للتصدير',v2Text:'تبدأ من 1600 دولار أمريكي. سيارات سيدان موثوقة للوكلاء في الخارج.',v3Tag:'EV / PHEV',v3Title:'سيارات الطاقة الجديدة',v3Text:'تبدأ من 2500 دولار أمريكي. توريد سيارات EV وPHEV صينية بالجملة.',vInquire:'اطلب عرض سعر',v4Tag:'بيك أب',v4Title:'شاحنات بيك أب',v4Text:'تبدأ من 14,000 دولار أمريكي. بيك أب قوية لأسواق أفريقيا والشرق الأوسط.',v5Tag:'MPV',v5Title:'سيارات MPV وفان',v5Text:'تبدأ من 10,500 دولار أمريكي. سيارات متعددة الاستخدامات للتصدير بالجملة.',v6Tag:'فاخر',v6Title:'سيارات فاخرة',v6Text:'تبدأ من 10,500 دولار أمريكي. سيارات مستعملة عالية المواصفات للمشترين حول العالم.',vDisclaimer:'الصورة للتوضيح فقط. تختلف الأسعار حسب العلامة التجارية والسنة والمسافة المقطوعة والحالة. أرسل استفساراً للحصول على عرض سعر دقيق.',serviceKicker:'خدماتنا',serviceTitle:'جهة اتصال واحدة. أربع خطوات.',s1:'توفير السيارة',s2:'الفحص والصور والفيديو',s3:'مستندات التصدير',s4:'تنسيق الشحن',processKicker:'العملية',processTitle:'من اختيار السيارة إلى الشحن، بخطوات واضحة وفعالة.',p1Title:'أرسل متطلباتك',p1Text:'الموديل والسنة والكمية والميزانية والوجهة.',p2Title:'استلم الخيارات',p2Text:'سيارات مناسبة مع الصور والسعر.',p3Title:'التأكيد والفحص',p3Text:'نراجع حالة السيارة والمستندات قبل الشحن.',p4Title:'التصدير والشحن',p4Text:'ننسق التسليم إلى الميناء والشحن إلى وجهتك.',contactKicker:'تواصل',contactTitle:'أخبرنا بما تحتاجه.',contactText:'أرسل الموديل والكمية والوجهة وسنقدم لك خيارات السيارات وعرض السعر. واتساب هو أسرع طريقة للتواصل مع فريق المبيعات.',formTitle:'طلب سعر سريع',formName:'الاسم',formContact:'واتساب / البريد الإلكتروني',formModel:'الموديل',formQty:'الكمية',formDestination:'الوجهة',formMessage:'المتطلبات',formSubmit:'إرسال الطلب',footerText:'توفير وتصدير السيارات المستعملة من الصين.',salesOnline:'متصل',whatsapp24:'رد على مدار 24 ساعة',railQuote:'اطلب عرض سعر'},
    es:{navVehicles:'Vehículos',navService:'Servicios',navProcess:'Proceso',navContact:'Contacto',heroKicker:'CHINA → MUNDO',heroTitle:'Autos usados de China.<br><em>Listos para exportar.</em>',heroText:'Somos un exportador de vehículos usados con base en China y suministramos autos a concesionarios y compradores de todo el mundo, con servicios de selección, inspección, exportación y envío.',heroCta:'Solicitar cotización',heroBrowse:'Ver vehículos',meta1:'Buscar',meta2:'Inspeccionar',meta3:'Exportar',meta4:'Enviar',heroCaptionSmall:'SUMINISTRO DIRECTO',heroCaption:'Vehículos desde China',vehiclesKicker:'VEHÍCULOS',vehiclesTitle:'Categorías populares para exportación',vehiclesText:'Ofrecemos una amplia gama de vehículos de China y seleccionamos opciones según tu mercado, presupuesto y destino.',v1Tag:'SUV',v1Title:'SUV familiares y de negocio',v1Text:'Desde USD 8500+. SUV usados al por mayor para exportación.',v2Tag:'SEDÁN',v2Title:'Sedanes para exportación',v2Text:'Desde USD 1600+. Sedanes fiables para distribuidores en el extranjero.',v3Tag:'EV / PHEV',v3Tag:'Vehículos de nueva energía',v3Text:'Desde USD 2500+. Suministro mayorista de EV y PHEV de China.',vInquire:'Solicitar cotización',v4Tag:'PICKUP',v4Title:'Camionetas Pickup',v4Text:'Desde USD 14.000+. Pickups resistentes para África y Oriente Medio.',v5Tag:'MPV',v5Title:'Vans MPV',v5Text:'Desde USD 10.500+. Vehículos multiuso para exportación al por mayor.',v6Tag:'PREMIUM',v6Title:'Vehículos premium',v6Text:'Desde USD 10.500+. Autos usados de alta gama para compradores globales.',vDisclaimer:'Imagen solo para ilustración. Los precios varían según marca, año, kilometraje y estado. Envía una consulta para obtener una cotización exacta.',serviceKicker:'LO QUE HACEMOS',serviceTitle:'Un contacto. Cuatro pasos.',s1:'Búsqueda de vehículos',s2:'Inspección y fotos/video',s3:'Documentos de exportación',s4:'Coordinación logística',processKicker:'PROCESO',processTitle:'Desde la selección del vehículo hasta el envío, claro y eficiente.',p1Title:'Envía tus requisitos',p1Text:'Modelo, año, cantidad, presupuesto y destino.',p2Title:'Recibe opciones',p2Text:'Vehículos, fotos y cotización.',p3Title:'Confirma e inspecciona',p3Text:'Revisamos estado y documentos antes del envío.',p4Title:'Exportación y envío',p4Text:'Coordinamos la entrega al puerto y el transporte.',contactKicker:'CONTACTO',contactTitle:'Cuéntanos qué necesitas.',contactText:'Indícanos el modelo, la cantidad y el destino. Te enviaremos opciones de vehículos y una cotización. WhatsApp es la forma más rápida de contactar con ventas.',formTitle:'Cotización rápida',formName:'Nombre',formContact:'WhatsApp / Email',formModel:'Modelo',formQty:'Cantidad',formDestination:'Destino',formMessage:'Requisitos',formSubmit:'Enviar consulta',footerText:'Búsqueda y exportación de autos usados desde China.',salesOnline:'EN LÍNEA',whatsapp24:'Respuestas 24 h',railQuote:'Solicitar cotización'}
  };

  function getCurrentLang(){
    const select = document.getElementById('language');
    if(select && select.value && dict[select.value]) return select.value;
    try{
      const saved = localStorage.getItem('lianzon-lang');
      if(saved && dict[saved]) return saved;
    }catch(e){}
    const langs=(navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language||'']).map(x=>String(x).toLowerCase());
    for(const lang of langs){
      if(lang.startsWith('zh')) return 'zh';
      if(lang.startsWith('ru')) return 'ru';
      if(lang.startsWith('ar')) return 'ar';
      if(lang.startsWith('es')) return 'es';
      if(lang.startsWith('en')) return 'en';
    }
    return 'en';
  }

  function setLang(lang){
    const d=dict[lang]||dict.en;
    document.querySelectorAll('[data-i18n]').forEach(el=>{const k=el.getAttribute('data-i18n');if(d[k]!=null)el.innerHTML=d[k]});
    document.documentElement.lang=lang==='zh'?'zh-CN':lang;
    document.body.classList.toggle('rtl',lang==='ar');
    const sel = document.getElementById('language');
    if(sel) sel.value=lang;
    try{localStorage.setItem('lianzon-lang',lang)}catch(e){}
    bindContacts(); // 切换语言时动态更新链接中的预设消息
  }

  function bindContacts(){
    const lang = getCurrentLang();
    const message = prefilledMessages[lang] || prefilledMessages.en;
    const encodedMsg = encodeURIComponent(message);

    // WhatsApp 链接带预设消息
    const cleanWa = C.whatsapp ? String(C.whatsapp).replace(/\D/g,'') : '';
    const waUrl = cleanWa ? `https://wa.me/${cleanWa}?text=${encodedMsg}` : '#';
    document.querySelectorAll('[data-contact="whatsapp"]').forEach(a=>a.href=waUrl);

    // Email 链接带主题与多语言正文预设
    const emailTo = C.email || 'info@lianzonauto.com';
    const emailSubject = encodeURIComponent('Inquiry: Lianzon Auto Vehicles & Pricing');
    const emailBody = encodedMsg;
    const emailUrl = C.email ? `mailto:${emailTo}?subject=${emailSubject}&body=${emailBody}` : '#';
    document.querySelectorAll('[data-contact="email"]').forEach(a=>a.href=emailUrl);

    document.querySelectorAll('[data-contact="facebook"]').forEach(a=>{a.href=C.facebook||'#'; if(!C.facebook) a.classList.add('contact-unconfigured')});
    document.querySelectorAll('[data-contact="instagram"]').forEach(a=>{a.href=C.instagram||'#'; if(!C.instagram) a.classList.add('contact-unconfigured')});
    
    // 微信点击复制或展示
    document.querySelectorAll('[data-contact="wechat"], [data-contact-text="wechat"]').forEach(el=>{
      if(el.tagName === 'A') {
        el.href = '#';
        el.onclick = function(e){
          e.preventDefault();
          if(navigator.clipboard && C.wechat){
            navigator.clipboard.writeText(C.wechat).then(() => {
              alert((lang==='zh' ? '微信号已复制: ' : 'WeChat ID copied: ') + C.wechat);
            });
          }
        };
      }
    });
  }

  const langSelect = document.getElementById('language');
  if(langSelect) {
    langSelect.addEventListener('change',e=>setLang(e.target.value));
  }

  const quoteForm = document.getElementById('quoteForm');
  if(quoteForm) {
    quoteForm.addEventListener('submit',function(e){
      e.preventDefault();
      const f=new FormData(this);
      const to=C.email||'info@lianzonauto.com';
      const subject=encodeURIComponent('Lianzon Auto Vehicle Inquiry');
      const body=encodeURIComponent(`Name: ${f.get('name')}\nContact: ${f.get('contact')}\nModel: ${f.get('model')}\nQuantity: ${f.get('quantity')}\nDestination: ${f.get('destination')}\nRequirements: ${f.get('message')}`);
      window.location.href=`mailto:${to}?subject=${subject}&body=${body}`;
    });
  }

  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent=new Date().getFullYear();

  let initial='en';
  try{
    const saved=localStorage.getItem('lianzon-lang');
    initial=saved&&dict[saved]?saved:detectBrowserLanguage();
  }catch(e){
    initial=detectBrowserLanguage();
  }

  function detectBrowserLanguage(){
    const langs=(navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language||'']).map(x=>String(x).toLowerCase());
    for(const lang of langs){
      if(lang.startsWith('zh')) return 'zh';
      if(lang.startsWith('ru')) return 'ru';
      if(lang.startsWith('ar')) return 'ar';
      if(lang.startsWith('es')) return 'es';
      if(lang.startsWith('en')) return 'en';
    }
    return 'en';
  }

  setLang(initial);
})();