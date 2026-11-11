(function(){
  const C=window.LIANZON_CONTACT||{};
  
  // 各语言预设咨询文案
  const prefilledMessages = {
    ru: "Здравствуйте! Я посетил сайт Lianzon Auto. Меня интересуют автомобили и автозапчасти из Китая. Пожалуйста, отправьте каталог и актуальные цены.",
    zh: "您好！我访问了 Lianzon Auto 网站，对中国整车及汽车零配件很感兴趣。请发送产品目录和最新价格。",
    ar: "مرحباً! لقد زرت موقع Lianzon Auto وأنا مهتم بالسيارات وقطع غيار السيارات من الصين. يرجى إرسال الكتالوج والأسعار الحالية.",
    es: "¡Hola! Visité el sitio web de Lianzon Auto y estoy interesado en vehículos y repuestos de China. Por favor envíen el catálogo y los precios actuales.",
    en: "Hello! I visited the Lianzon Auto website and I am interested in vehicles and automotive spare parts from China. Please send the catalog and current prices."
  };

  const dict={
    zh:{navVehicles:'车型',navService:'服务',navProcess:'流程',navContact:'联系我们',heroKicker:'中国汽车出口',heroTitle:'中国汽车。<br><em>整车与零配件出口。</em>',heroText:'我们从中国向全球市场供应二手整车与汽车零配件，为海外经销商和采购商提供产品采购、质量核验、出口文件及运输协调服务。',heroCta:'获取报价',heroBrowse:'查看车型',meta1:'找车',meta2:'验车',meta3:'出口',meta4:'运输',heroCaptionSmall:'直接采购',heroCaption:'中国车辆供应链',vehiclesKicker:'车型',vehiclesTitle:'热门出口类别',vehiclesText:'我们经营多种中国二手车及新能源车型，可根据你的市场、预算和目的地提供车辆方案。',v1Tag:'SUV',v1Title:'家用及商务 SUV',v1Text:'起售价 8500 美元起。面向出口的批发二手 SUV。',v2Tag:'轿车',v2Title:'出口轿车',v2Text:'起售价 1600 美元起。适合海外经销商的可靠轿车。',v3Tag:'新能源',v3Title:'新能源车辆',v3Text:'起售价 5700 美元起。中国 EV 与 PHEV 批发供应。',vInquire:'获取报价',v4Tag:'皮卡',v4Title:'皮卡车型',v4Text:'起售价 14,000 美元起。适合非洲和中东市场的耐用皮卡。',v5Tag:'MPV',v5Title:'MPV 商务车',v5Text:'起售价 10,500 美元起。适合批量出口的多用途车型。',v6Tag:'高端车型',v6Title:'高端车辆',v6Text:'起售价 10,500 美元起。面向全球买家的高端二手车。',vDisclaimer:'图片仅供示意。价格因品牌、年份、里程和车况而异。请发送询价获取准确报价。',serviceKicker:'我们做什么',serviceTitle:'一个联系人，四个步骤。',s1:'车辆采购',s2:'验车与图片视频',s3:'出口文件',s4:'物流协调',processKicker:'出口流程',processTitle:'从选车到装船，清晰高效。',p1Title:'提交需求',p1Text:'车型、年份、数量、预算和目的地。',p2Title:'收到车辆方案',p2Text:'匹配车型、图片资料及报价。',p3Title:'确认并验车',p3Text:'发运前核对车辆状况与文件。',p4Title:'出口并运输',p4Text:'协调港口交车及目的地运输。',contactKicker:'联系我们',contactTitle:'告诉我们你要什么。',contactText:'告诉我们你需要的车辆或零配件、数量和目的地，我们会提供相应的产品方案与报价。WhatsApp 是联系销售团队最快的方式。',formTitle:'快速询价',formName:'姓名',formContact:'WhatsApp / 邮箱',formModel:'车型',formQty:'数量',formDestination:'目的地',formMessage:'具体要求',formSubmit:'发送询价',footerText:'中国整车与汽车零配件出口供应。',salesOnline:'在线',whatsapp24:'24h 在线回复',railQuote:'获取报价',navParts:'汽车配件',partsKicker:'汽车零配件供应',partsSectionTitle:'汽车零配件及组件出口',partsSectionText:'我们为全球经销商供应整车零配件、日常保养套装、发动机总成及车身部件。',part1Title:'发动机与变速箱',part1Text:'发动机总成、变速箱、活塞、滤清器、皮带及冷却系统。',part2Title:'车身与照明系统',part2Text:'保险杠、大灯、翼子板、车门、后视镜及挡风玻璃。',part3Title:'底盘与悬架系统',part3Text:'刹车片、减震器、控制臂、转向机及轮胎。',part4Title:'整柜配货采购',part4Text:'支持车辆与配套零配件混装，提高运输与装柜效率。',formType:'询盘类型',formTypeCars:'二手整车',formTypeParts:'汽车零配件',formTypeBoth:'两者都需要',partsPageCta:'查看零配件',partsQuoteCta:'零配件询价'},
    en:{navVehicles:'Vehicles',navService:'Service',navProcess:'Process',navContact:'Contact',heroKicker:'CHINA AUTOMOTIVE EXPORT',heroTitle:'Vehicles & Auto Parts from China.<br><em>Ready for Export.</em>',heroText:'We export used vehicles and automotive spare parts from China to international dealers and buyers, with sourcing, quality checks, export documentation and shipping coordination.',heroCta:'Get a Quote',heroBrowse:'View Vehicles',meta1:'Source',meta2:'Inspect',meta3:'Export',meta4:'Ship',heroCaptionSmall:'DIRECT SOURCING',heroCaption:'China Vehicle Supply',vehiclesKicker:'VEHICLES',vehiclesTitle:'Popular Export Categories',vehiclesText:'We offer a range of used and new-energy vehicles from China, with options matched to your market, budget and destination.',v1Tag:'SUV',v1Title:'Family & Business SUVs',v1Text:'Starting from USD 8500+. Wholesale used SUVs for export.',v2Tag:'SEDAN',v2Title:'Sedan Cars for Export',v2Text:'Starting from USD 1600+. Reliable sedans for overseas dealers.',v3Tag:'EV / PHEV',v3Title:'New Energy Vehicles',v3Text:'Starting from USD 5700+. China EV & PHEV wholesale supply.',vInquire:'Get Quote',v4Tag:'PICKUP',v4Title:'Pickup Trucks',v4Text:'Starting from USD 14,000+. Tough pickups for Africa & Middle East.',v5Tag:'MPV',v5Title:'MPV Vans',v5Text:'Starting from USD 10,500+. Multi-purpose vehicles for bulk export.',v6Tag:'PREMIUM',v6Title:'Premium Vehicles',v6Text:'Starting from USD 10500+. High-end used cars for global buyers.',vDisclaimer:'Image for illustration only. Prices vary by brand, year, mileage & condition. Send inquiry for exact quotation',serviceKicker:'WHAT WE DO',serviceTitle:'One contact. Four steps.',s1:'Vehicle sourcing',s2:'Inspection & media',s3:'Export documents',s4:'Shipping coordination',processKicker:'PROCESS',processTitle:'From vehicle selection to shipment, clear and efficient.',p1Title:'Send requirements',p1Text:'Model, year, quantity, budget and destination.',p2Title:'Receive options',p2Text:'Matching vehicles, photos and quotation.',p3Title:'Confirm & inspect',p3Text:'Vehicle condition and documents checked before shipping.',p4Title:'Export & ship',p4Text:'Port delivery and shipping coordination to destination.',contactKicker:'CONTACT',contactTitle:'Tell us what you need.',contactText:'Tell us which vehicles or automotive parts you need, the quantity and destination. Our team will provide suitable options and a quotation. WhatsApp is the fastest way to reach us.',formTitle:'Quick Quote',formName:'Name',formContact:'WhatsApp / Email',formModel:'Model',formQty:'Qty',formDestination:'Destination',formMessage:'Requirements',formSubmit:'Send Inquiry',footerText:'Used vehicle and automotive spare parts exports from China.',salesOnline:'ONLINE',whatsapp24:'24h replies',railQuote:'Get Quote',navParts:'Auto Parts',partsKicker:'AUTO PARTS SUPPLY',partsSectionTitle:'Auto Spare Parts & Components Export',partsSectionText:'We supply complete vehicle spare parts, consumable maintenance kits, engine assemblies, and body components for global distributors.',part1Title:'Engine & Transmission',part1Text:'Complete engines, gearboxes, pistons, filters, belts, and cooling systems.',part2Title:'Body & Lighting',part2Text:'Bumpers, headlights, fenders, doors, side mirrors, and windshields.',part3Title:'Chassis & Suspension',part3Text:'Brake pads, shock absorbers, control arms, steering racks, and tires.',part4Title:'Bulk Container Sourcing',part4Text:'Mixed container loading with vehicles and matching spare parts for maximum shipping efficiency.',formType:'Inquiry Type',formTypeCars:'Used Vehicles',formTypeParts:'Auto Parts',formTypeBoth:'Both',partsPageCta:'Explore Auto Parts',partsQuoteCta:'Request Parts Quote'},
    ru:{navVehicles:'Автомобили',navService:'Услуги',navProcess:'Процесс',navContact:'Контакты',heroKicker:'ЭКСПОРТ АВТОМОБИЛЕЙ И ЗАПЧАСТЕЙ',heroTitle:'Автомобили и запчасти из Китая.<br><em>Готовы к экспорту.</em>',heroText:'Мы экспортируем подержанные автомобили и автозапчасти из Китая зарубежным дилерам и покупателям, обеспечивая подбор, проверку качества, экспортные документы и организацию доставки.',heroCta:'Получить цену',heroBrowse:'Смотреть авто',meta1:'Подбор',meta2:'Проверка',meta3:'Экспорт',meta4:'Доставка',heroCaptionSmall:'ПРЯМЫЕ ПОСТАВКИ',heroCaption:'Автомобили из Китая',vehiclesKicker:'АВТОМОБИЛИ',vehiclesTitle:'Популярные категории',vehiclesText:'Мы предлагаем широкий выбор автомобилей из Китая и подбираем варианты с учётом вашего рынка, бюджета и страны назначения.',v1Tag:'SUV',v1Title:'SUV для семьи и бизнеса',v1Text:'От 8 500 USD. Оптовые подержанные SUV для экспорта.',v2Tag:'СЕДАН',v2Title:'Седаны для экспорта',v2Text:'От 1 600 USD. Надёжные седаны для зарубежных дилеров.',v3Tag:'EV / PHEV',v3Title:'Автомобили на новой энергии',v3Text:'От 5700 USD. Оптовые поставки китайских EV и PHEV.',vInquire:'Получить цену',v4Tag:'ПИКАП',v4Title:'Пикапы',v4Text:'От 14 000 USD. Надёжные пикапы для Африки и Ближнего Востока.',v5Tag:'MPV',v5Title:'MPV и микроавтобусы',v5Text:'От 10 500 USD. Универсальные автомобили для оптового экспорта.',v6Tag:'ПРЕМИУМ',v6Title:'Премиальные автомобили',v6Text:'От 10 500 USD. Премиальные подержанные автомобили для покупателей по всему миру.',vDisclaimer:'Изображение только для иллюстрации. Цена зависит от бренда, года, пробега и состояния. Отправьте запрос для точной цены.',serviceKicker:'ЧТО МЫ ДЕЛАЕМ',serviceTitle:'Один контакт. Четыре шага.',s1:'Подбор автомобиля',s2:'Проверка и фото/видео',s3:'Экспортные документы',s4:'Логистика и доставка',processKicker:'ПРОЦЕСС',processTitle:'От выбора автомобиля до отправки — чётко и эффективно.',p1Title:'Отправьте требования',p1Text:'Модель, год, количество, бюджет и страна.',p2Title:'Получите варианты',p2Text:'Подходящие авто, фото и коммерческое предложение.',p3Title:'Подтвердите и проверьте',p3Text:'Перед отправкой проверяем состояние и документы.',p4Title:'Экспорт и доставка',p4Text:'Организуем передачу в порт и транспортировку.',contactKicker:'КОНТАКТЫ',contactTitle:'Расскажите, какой автомобиль нужен.',contactText:'Укажите нужные автомобили или автозапчасти, количество и страну назначения. Мы предложим подходящие варианты и коммерческое предложение. WhatsApp — самый быстрый способ связаться с нами.',formTitle:'Быстрый запрос',formName:'Имя',formContact:'WhatsApp / Email',formModel:'Модель',formQty:'Количество',formDestination:'Страна назначения',formMessage:'Требования',formSubmit:'Отправить запрос',footerText:'Экспорт автомобилей и автозапчастей из Китая.',salesOnline:'ОНЛАЙН',whatsapp24:'Ответ 24 ч.',railQuote:'Получить цену',navParts:'Автозапчасти',partsKicker:'ПОСТАВКИ АВТОЗАПЧАСТЕЙ',partsSectionTitle:'Экспорт автозапчастей и компонентов',partsSectionText:'Мы поставляем дистрибьюторам по всему миру широкий ассортимент автозапчастей, расходные комплекты для обслуживания, двигатели в сборе и кузовные детали.',part1Title:'Двигатель и трансмиссия',part1Text:'Двигатели в сборе, коробки передач, поршни, фильтры, ремни и системы охлаждения.',part2Title:'Кузов и освещение',part2Text:'Бамперы, фары, крылья, двери, боковые зеркала и ветровые стёкла.',part3Title:'Шасси и подвеска',part3Text:'Тормозные колодки, амортизаторы, рычаги подвески, рулевые рейки и шины.',part4Title:'Комплектация контейнеров',part4Text:'Совместная загрузка автомобилей и подходящих к ним запчастей для более эффективной перевозки.',formType:'Тип запроса',formTypeCars:'Подержанные автомобили',formTypeParts:'Автозапчасти',formTypeBoth:'Оба направления',partsPageCta:'Посмотреть запчасти',partsQuoteCta:'Запросить цену на запчасти'},
    ar:{navVehicles:'السيارات',navService:'الخدمات',navProcess:'الخطوات',navContact:'تواصل معنا',heroKicker:'تصدير السيارات وقطع الغيار',heroTitle:'سيارات وقطع غيار من الصين.<br><em>جاهزة للتصدير.</em>',heroText:'نصدر السيارات المستعملة وقطع غيار السيارات من الصين إلى الوكلاء والمشترين الدوليين، مع خدمات التوريد وفحص الجودة وتجهيز مستندات التصدير وتنسيق الشحن.',heroCta:'اطلب عرض سعر',heroBrowse:'شاهد السيارات',meta1:'توفير',meta2:'فحص',meta3:'تصدير',meta4:'شحن',heroCaptionSmall:'توريد مباشر',heroCaption:'توريد السيارات من الصين',vehiclesKicker:'السيارات',vehiclesTitle:'الفئات الأكثر طلباً للتصدير',vehiclesText:'نوفر مجموعة واسعة من السيارات من الصين ونقترح الخيارات المناسبة لسوقك وميزانيتك وبلد الوصول.',v1Tag:'SUV',v1Title:'سيارات SUV للعائلة والأعمال',v1Text:'تبدأ من 8500 دولار أمريكي. سيارات SUV مستعملة بالجملة للتصدير.',v2Tag:'سيدان',v2Title:'سيارات سيدان للتصدير',v2Text:'تبدأ من 1600 دولار أمريكي. سيارات سيدان موثوقة للوكلاء في الخارج.',v3Tag:'EV / PHEV',v3Title:'سيارات الطاقة الجديدة',v3Text:'تبدأ من 5700 دولار أمريكي. توريد سيارات EV وPHEV صينية بالجملة.',vInquire:'اطلب عرض سعر',v4Tag:'بيك أب',v4Title:'شاحنات بيك أب',v4Text:'تبدأ من 14,000 دولار أمريكي. بيك أب قوية لأسواق أفريقيا والشرق الأوسط.',v5Tag:'MPV',v5Title:'سيارات MPV وفان',v5Text:'تبدأ من 10,500 دولار أمريكي. سيارات متعددة الاستخدامات للتصدير بالجملة.',v6Tag:'فاخر',v6Title:'سيارات فاخرة',v6Text:'تبدأ من 10,500 دولار أمريكي. سيارات مستعملة عالية المواصفات للمشترين حول العالم.',vDisclaimer:'الصورة للتوضيح فقط. تختلف الأسعار حسب العلامة التجارية والسنة والمسافة المقطوعة والحالة. أرسل استفساراً للحصول على عرض سعر دقيق.',serviceKicker:'خدماتنا',serviceTitle:'جهة اتصال واحدة. أربع خطوات.',s1:'توفير السيارة',s2:'الفحص والصور والفيديو',s3:'مستندات التصدير',s4:'تنسيق الشحن',processKicker:'العملية',processTitle:'من اختيار السيارة إلى الشحن، بخطوات واضحة وفعالة.',p1Title:'أرسل متطلباتك',p1Text:'الموديل والسنة والكمية والميزانية والوجهة.',p2Title:'استلم الخيارات',p2Text:'سيارات مناسبة مع الصور والسعر.',p3Title:'التأكيد والفحص',p3Text:'نراجع حالة السيارة والمستندات قبل الشحن.',p4Title:'التصدير والشحن',p4Text:'ننسق التسليم إلى الميناء والشحن إلى وجهتك.',contactKicker:'تواصل',contactTitle:'أخبرنا بما تحتاجه.',contactText:'أرسل تفاصيل السيارات أو قطع الغيار المطلوبة والكمية والوجهة، وسنقدم لك الخيارات المناسبة وعرض السعر. واتساب هو أسرع طريقة للتواصل معنا.',formTitle:'طلب سعر سريع',formName:'الاسم',formContact:'واتساب / البريد الإلكتروني',formModel:'الموديل',formQty:'الكمية',formDestination:'الوجهة',formMessage:'المتطلبات',formSubmit:'إرسال الطلب',footerText:'تصدير السيارات وقطع غيار السيارات من الصين.',salesOnline:'متصل',whatsapp24:'رد على مدار 24 ساعة',railQuote:'اطلب عرض سعر',navParts:'قطع غيار السيارات',partsKicker:'توريد قطع غيار السيارات',partsSectionTitle:'تصدير قطع غيار ومكوّنات السيارات',partsSectionText:'نوفر للموزعين حول العالم مجموعة متكاملة من قطع غيار السيارات، ومجموعات الصيانة الاستهلاكية، والمحركات الكاملة، ومكوّنات الهيكل.',part1Title:'المحرك وناقل الحركة',part1Text:'محركات كاملة، وعلب تروس، ومكابس، وفلاتر، وأحزمة، وأنظمة تبريد.',part2Title:'الهيكل والإضاءة',part2Text:'مصدّات، ومصابيح أمامية، ورفارف، وأبواب، ومرايا جانبية، وزجاج أمامي.',part3Title:'الشاسيه ونظام التعليق',part3Text:'وسادات فرامل، وممتصات صدمات، وأذرع تحكم، وعلب توجيه، وإطارات.',part4Title:'تجهيز الشحن بالحاويات',part4Text:'إمكانية تحميل السيارات وقطع الغيار المطابقة لها معاً لزيادة كفاءة الشحن.',formType:'نوع الاستفسار',formTypeCars:'سيارات مستعملة',formTypeParts:'قطع غيار السيارات',formTypeBoth:'كلاهما',partsPageCta:'استكشف قطع الغيار',partsQuoteCta:'طلب عرض سعر لقطع الغيار'},
    es:{navVehicles:'Vehículos',navService:'Servicios',navProcess:'Proceso',navContact:'Contacto',heroKicker:'EXPORTACIÓN AUTOMOTRIZ DE CHINA',heroTitle:'Vehículos y repuestos de China.<br><em>Listos para exportar.</em>',heroText:'Exportamos vehículos usados y repuestos automotrices desde China a concesionarios y compradores internacionales, con abastecimiento, controles de calidad, documentación de exportación y coordinación logística.',heroCta:'Solicitar cotización',heroBrowse:'Ver vehículos',meta1:'Buscar',meta2:'Inspeccionar',meta3:'Exportar',meta4:'Enviar',heroCaptionSmall:'SUMINISTRO DIRECTO',heroCaption:'Vehículos desde China',vehiclesKicker:'VEHÍCULOS',vehiclesTitle:'Categorías populares para exportación',vehiclesText:'Ofrecemos una amplia gama de vehículos de China y seleccionamos opciones según tu mercado, presupuesto y destino.',v1Tag:'SUV',v1Title:'SUV familiares y de negocio',v1Text:'Desde USD 8500+. SUV usados al por mayor para exportación.',v2Tag:'SEDÁN',v2Title:'Sedanes para exportación',v2Text:'Desde USD 1600+. Sedanes fiables para distribuidores en el extranjero.',v3Tag:'EV / PHEV',v3Title:'Vehículos de nueva energía',v3Text:'Desde USD 5700+. Suministro mayorista de EV y PHEV de China.',vInquire:'Solicitar cotización',v4Tag:'PICKUP',v4Title:'Camionetas Pickup',v4Text:'Desde USD 14.000+. Pickups resistentes para África y Oriente Medio.',v5Tag:'MPV',v5Title:'Vans MPV',v5Text:'Desde USD 10.500+. Vehículos multiuso para exportación al por mayor.',v6Tag:'PREMIUM',v6Title:'Vehículos premium',v6Text:'Desde USD 10.500+. Autos usados de alta gama para compradores globales.',vDisclaimer:'Imagen solo para ilustración. Los precios varían según marca, año, kilometraje y estado. Envía una consulta para obtener una cotización exacta.',serviceKicker:'LO QUE HACEMOS',serviceTitle:'Un contacto. Cuatro pasos.',s1:'Búsqueda de vehículos',s2:'Inspección y fotos/video',s3:'Documentos de exportación',s4:'Coordinación logística',processKicker:'PROCESO',processTitle:'Desde la selección del vehículo hasta el envío, claro y eficiente.',p1Title:'Envía tus requisitos',p1Text:'Modelo, año, cantidad, presupuesto y destino.',p2Title:'Recibe opciones',p2Text:'Vehículos, fotos y cotización.',p3Title:'Confirma e inspecciona',p3Text:'Revisamos estado y documentos antes del envío.',p4Title:'Exportación y envío',p4Text:'Coordinamos la entrega al puerto y el transporte.',contactKicker:'CONTACTO',contactTitle:'Cuéntanos qué necesitas.',contactText:'Indícanos qué vehículos o repuestos necesitas, la cantidad y el destino. Te enviaremos opciones adecuadas y una cotización. WhatsApp es la forma más rápida de contactar con nuestro equipo.',formTitle:'Cotización rápida',formName:'Nombre',formContact:'WhatsApp / Email',formModel:'Modelo',formQty:'Cantidad',formDestination:'Destino',formMessage:'Requisitos',formSubmit:'Enviar consulta',footerText:'Exportación de vehículos y repuestos automotrices desde China.',salesOnline:'EN LÍNEA',whatsapp24:'Respuestas 24 h',railQuote:'Solicitar cotización',navParts:'Repuestos',partsKicker:'SUMINISTRO DE REPUESTOS',partsSectionTitle:'Exportación de repuestos y componentes para automóviles',partsSectionText:'Suministramos a distribuidores de todo el mundo repuestos completos para vehículos, kits de mantenimiento, motores completos y componentes de carrocería.',part1Title:'Motor y transmisión',part1Text:'Motores completos, cajas de cambios, pistones, filtros, correas y sistemas de refrigeración.',part2Title:'Carrocería e iluminación',part2Text:'Parachoques, faros, guardabarros, puertas, retrovisores y parabrisas.',part3Title:'Chasis y suspensión',part3Text:'Pastillas de freno, amortiguadores, brazos de control, cremalleras de dirección y neumáticos.',part4Title:'Preparación de contenedores',part4Text:'Carga conjunta de vehículos y repuestos compatibles para mejorar la eficiencia del transporte.',formType:'Tipo de consulta',formTypeCars:'Vehículos usados',formTypeParts:'Repuestos',formTypeBoth:'Ambos',partsPageCta:'Ver repuestos',partsQuoteCta:'Solicitar cotización de repuestos'}
  };


  const pageMeta = {
    index: {
      en: ["Lianzon Auto | China Used Cars & Auto Parts Export", "Lianzon Auto exports used vehicles and automotive spare parts from China to international dealers and buyers."],
      zh: ["Lianzon Auto｜中国二手车与汽车零配件出口", "Lianzon Auto 提供中国二手整车及汽车零配件出口服务，面向海外经销商与采购商。"],
      ru: ["Lianzon Auto | Экспорт автомобилей и автозапчастей из Китая", "Экспорт подержанных автомобилей и автозапчастей из Китая для зарубежных дилеров и покупателей."],
      ar: ["Lianzon Auto | تصدير السيارات وقطع الغيار من الصين", "تصدير السيارات المستعملة وقطع غيار السيارات من الصين إلى الوكلاء والمشترين حول العالم."],
      es: ["Lianzon Auto | Exportación de autos usados y repuestos de China", "Exportamos vehículos usados y repuestos automotrices desde China a distribuidores y compradores internacionales."]
    },
    vehicles: {
      en: ["Used Cars from China | Lianzon Auto", "Used SUVs, sedans, EVs, pickups and MPVs sourced in China for export."],
      zh: ["中国二手车出口｜Lianzon Auto", "提供中国二手 SUV、轿车、新能源汽车、皮卡及 MPV 出口供应。"],
      ru: ["Подержанные автомобили из Китая | Lianzon Auto", "Подержанные SUV, седаны, электромобили, пикапы и MPV из Китая на экспорт."],
      ar: ["سيارات مستعملة من الصين | Lianzon Auto", "سيارات SUV وسيدان وكهربائية وبيك أب مستعملة من الصين للتصدير."],
      es: ["Autos usados de China | Lianzon Auto", "SUV, sedanes, vehículos eléctricos, pickups y MPV usados de China para exportación."]
    },
    parts: {
      en: ["Auto Parts Export from China | Lianzon Auto", "Automotive spare parts from China, including engines, transmissions, body, lighting, chassis and suspension components."],
      zh: ["中国汽车零配件出口｜Lianzon Auto", "供应发动机、变速箱、车身、灯具、底盘及悬架等汽车零配件。"],
      ru: ["Экспорт автозапчастей из Китая | Lianzon Auto", "Автозапчасти из Китая: двигатели, трансмиссии, кузовные детали, освещение и элементы подвески."],
      ar: ["تصدير قطع غيار السيارات من الصين | Lianzon Auto", "قطع غيار السيارات من الصين، بما في ذلك المحركات وناقل الحركة وأجزاء الهيكل والإضاءة والتعليق."],
      es: ["Exportación de repuestos de China | Lianzon Auto", "Repuestos de automoción de China: motores, transmisiones, carrocería, iluminación, chasis y suspensión."]
    },
    service: {
      en: ["Export Process | Lianzon Auto", "Vehicle and automotive spare parts sourcing, inspection, export documentation and shipping coordination."],
      zh: ["出口流程｜Lianzon Auto", "了解中国整车及汽车零配件采购、验货、出口文件和运输协调流程。"],
      ru: ["Процесс экспорта | Lianzon Auto", "Подбор, проверка, экспортные документы и организация доставки автомобилей и автозапчастей."],
      ar: ["خطوات التصدير | Lianzon Auto", "اختيار وفحص السيارات وقطع الغيار وتجهيز مستندات التصدير وتنسيق الشحن."],
      es: ["Proceso de exportación | Lianzon Auto", "Selección, inspección, documentación de exportación y coordinación del envío de vehículos y repuestos."]
    },
    contact: {
      en: ["Contact Lianzon Auto | Export Quotes", "Contact Lianzon Auto for used vehicles and automotive spare parts from China."],
      zh: ["联系 Lianzon Auto｜获取出口报价", "联系 Lianzon Auto，咨询中国二手整车及汽车零配件出口报价。"],
      ru: ["Контакты Lianzon Auto | Запрос цены", "Свяжитесь с Lianzon Auto по вопросам экспорта автомобилей и автозапчастей из Китая."],
      ar: ["اتصل بـ Lianzon Auto | طلب عرض سعر", "تواصل مع Lianzon Auto للاستفسار عن تصدير السيارات المستعملة وقطع الغيار من الصين."],
      es: ["Contactar con Lianzon Auto | Cotización", "Contacta con Lianzon Auto para consultar la exportación de vehículos usados y repuestos desde China."]
    }
  };

  const extraDict = {"en": {"businessKicker": "TWO EXPORT BUSINESS LINES", "businessTitle": "One China-based supplier for vehicles and parts.", "businessIntro": "Choose the product line you need. We support wholesale buyers, dealers and distributors with export-focused sourcing.", "businessCarsEyebrow": "USED VEHICLE EXPORT", "businessCarsTitle": "Used Cars & New Energy Vehicles", "businessCarsText": "SUVs, sedans, EVs, pickups, MPVs and premium vehicles sourced in China for overseas buyers.", "businessCarsCta": "Explore vehicles →", "businessPartsEyebrow": "AUTOMOTIVE PARTS EXPORT", "businessPartsTitle": "Automotive Spare Parts & Components", "businessPartsText": "Engine, transmission, body, lighting, electrical, chassis and maintenance components for wholesale supply.", "businessPartsCta": "Explore auto parts →", "part5Title": "Electrical & Electronics", "part5Text": "Sensors, wiring harnesses, alternators, starters, switches and electronic modules.", "part6Title": "Maintenance & Consumables", "part6Text": "Oil and air filters, brake components, belts, spark plugs and service kits.", "part7Title": "Cooling & Air Conditioning", "part7Text": "Radiators, condensers, compressors, fans, pumps and cooling-system parts.", "part8Title": "Wholesale & Mixed Orders", "part8Text": "Send a parts list or vehicle VIN/model details for a consolidated sourcing request.", "partsRequestKicker": "WHOLESALE REQUEST", "partsRequestTitle": "Have a parts list or target vehicle model?", "partsRequestText": "Send part numbers, OE numbers, photos or vehicle make/model/year. We will review your requirements and reply with availability and a quotation.", "formNote": "Online inquiries are submitted securely. If online submission fails, use the email-app option."}, "zh": {"businessKicker": "两大出口业务", "businessTitle": "中国供应端，一站采购整车与零配件。", "businessIntro": "选择你需要的产品业务。我们面向海外批发买家、汽车经销商和零配件分销商提供出口采购服务。", "businessCarsEyebrow": "二手整车出口", "businessCarsTitle": "二手车与新能源汽车", "businessCarsText": "SUV、轿车、纯电及插混车型、皮卡、MPV和中高端车辆，面向海外市场采购供应。", "businessCarsCta": "查看整车业务 →", "businessPartsEyebrow": "汽车零配件出口", "businessPartsTitle": "汽车零配件及零部件", "businessPartsText": "发动机、变速箱、车身、灯具、电气、底盘及保养耗材，支持批量采购。", "businessPartsCta": "查看零配件业务 →", "part5Title": "电气与电子系统", "part5Text": "传感器、线束、发电机、起动机、开关及电子控制模块。", "part6Title": "保养件与易耗品", "part6Text": "机油滤清器、空气滤清器、制动件、皮带、火花塞及保养套装。", "part7Title": "冷却与空调系统", "part7Text": "散热器、冷凝器、压缩机、风扇、水泵及冷却系统零件。", "part8Title": "批发与混合订单", "part8Text": "可提交零件清单，或提供车辆 VIN、品牌、车型和年份进行配套采购。", "partsRequestKicker": "批发采购需求", "partsRequestTitle": "你有零件清单或目标车型吗？", "partsRequestText": "请提供零件编号、OE 号码、图片，或车辆品牌、车型及年份。我们将核对需求并回复供应情况与报价。", "formNote": "在线询价将通过表单提交；如提交失败，可改用邮件客户端发送。"}, "ru": {"businessKicker": "ДВА НАПРАВЛЕНИЯ ЭКСПОРТА", "businessTitle": "Один поставщик из Китая: автомобили и запчасти.", "businessIntro": "Выберите нужное направление. Мы работаем с оптовыми покупателями, автодилерами и дистрибьюторами.", "businessCarsEyebrow": "ЭКСПОРТ ПОДЕРЖАННЫХ АВТО", "businessCarsTitle": "Подержанные и электрифицированные автомобили", "businessCarsText": "SUV, седаны, электромобили, пикапы, MPV и премиальные автомобили из Китая для зарубежных покупателей.", "businessCarsCta": "Автомобили →", "businessPartsEyebrow": "ЭКСПОРТ АВТОЗАПЧАСТЕЙ", "businessPartsTitle": "Автозапчасти и комплектующие", "businessPartsText": "Двигатели, трансмиссии, кузовные детали, светотехника, электрика, ходовая часть и расходные материалы.", "businessPartsCta": "Автозапчасти →", "part5Title": "Электрика и электроника", "part5Text": "Датчики, жгуты проводов, генераторы, стартеры, переключатели и электронные модули.", "part6Title": "Расходные материалы", "part6Text": "Масляные и воздушные фильтры, тормозные детали, ремни, свечи и сервисные комплекты.", "part7Title": "Охлаждение и кондиционирование", "part7Text": "Радиаторы, конденсаторы, компрессоры, вентиляторы, насосы и детали системы охлаждения.", "part8Title": "Оптовые и смешанные заказы", "part8Text": "Отправьте список деталей или VIN/марку/модель автомобиля для комплексного подбора.", "partsRequestKicker": "ОПТОВЫЙ ЗАПРОС", "partsRequestTitle": "Есть список деталей или нужная модель автомобиля?", "partsRequestText": "Отправьте номера деталей, OE-номера, фотографии или марку/модель/год автомобиля. Мы проверим наличие и подготовим предложение.", "formNote": "Онлайн-запрос отправляется через форму. Если отправка не удастся, воспользуйтесь почтовым приложением."}, "ar": {"businessKicker": "مجالا التصدير", "businessTitle": "مورد واحد من الصين للسيارات وقطع الغيار.", "businessIntro": "اختر فئة المنتجات المطلوبة. نخدم تجار الجملة ووكلاء السيارات وموزعي قطع الغيار.", "businessCarsEyebrow": "تصدير السيارات المستعملة", "businessCarsTitle": "السيارات المستعملة ومركبات الطاقة الجديدة", "businessCarsText": "سيارات SUV وسيدان وكهربائية وهجينة وبيك أب وMPV وسيارات فاخرة من الصين للمشترين الدوليين.", "businessCarsCta": "استكشف السيارات ←", "businessPartsEyebrow": "تصدير قطع غيار السيارات", "businessPartsTitle": "قطع غيار ومكونات السيارات", "businessPartsText": "المحركات وناقل الحركة والهيكل والإضاءة والكهرباء ومكونات الشاسيه ومواد الصيانة بالجملة.", "businessPartsCta": "استكشف قطع الغيار ←", "part5Title": "الكهرباء والإلكترونيات", "part5Text": "أجهزة الاستشعار وضفائر الأسلاك والمولدات والبادئات والمفاتيح والوحدات الإلكترونية.", "part6Title": "مواد الصيانة والاستهلاك", "part6Text": "فلاتر الزيت والهواء ومكونات الفرامل والأحزمة وشمعات الإشعال ومجموعات الصيانة.", "part7Title": "التبريد وتكييف الهواء", "part7Text": "المشعات والمكثفات والضواغط والمراوح والمضخات وأجزاء نظام التبريد.", "part8Title": "طلبات الجملة والطلبات المختلطة", "part8Text": "أرسل قائمة القطع أو رقم VIN وطراز السيارة وموديلها وسنة الصنع لطلب موحد.", "partsRequestKicker": "طلب توريد بالجملة", "partsRequestTitle": "هل لديك قائمة قطع أو طراز سيارة محدد؟", "partsRequestText": "أرسل أرقام القطع أو أرقام OE أو الصور أو ماركة السيارة وطرازها وسنة الصنع. سنراجع الطلب ونرد بالتوفر والسعر.", "formNote": "يُرسل الطلب عبر النموذج الإلكتروني. إذا تعذر الإرسال، يمكن استخدام تطبيق البريد."}, "es": {"businessKicker": "DOS LÍNEAS DE EXPORTACIÓN", "businessTitle": "Un proveedor en China para vehículos y repuestos.", "businessIntro": "Elige la línea de productos que necesitas. Atendemos a compradores mayoristas, concesionarios y distribuidores.", "businessCarsEyebrow": "EXPORTACIÓN DE VEHÍCULOS USADOS", "businessCarsTitle": "Coches usados y vehículos de nueva energía", "businessCarsText": "SUV, sedanes, eléctricos, híbridos enchufables, pickups, MPV y vehículos prémium de China para compradores internacionales.", "businessCarsCta": "Ver vehículos →", "businessPartsEyebrow": "EXPORTACIÓN DE REPUESTOS", "businessPartsTitle": "Repuestos y componentes automotrices", "businessPartsText": "Motores, transmisiones, carrocería, iluminación, electricidad, chasis y consumibles de mantenimiento al por mayor.", "businessPartsCta": "Ver repuestos →", "part5Title": "Electricidad y electrónica", "part5Text": "Sensores, cableados, alternadores, motores de arranque, interruptores y módulos electrónicos.", "part6Title": "Mantenimiento y consumibles", "part6Text": "Filtros de aceite y aire, frenos, correas, bujías y kits de mantenimiento.", "part7Title": "Refrigeración y aire acondicionado", "part7Text": "Radiadores, condensadores, compresores, ventiladores, bombas y piezas del sistema de refrigeración.", "part8Title": "Pedidos mayoristas y mixtos", "part8Text": "Envía una lista de piezas o el VIN/marca/modelo/año del vehículo para una solicitud consolidada.", "partsRequestKicker": "SOLICITUD MAYORISTA", "partsRequestTitle": "¿Tienes una lista de piezas o un modelo de vehículo?", "partsRequestText": "Envía números de pieza, referencias OE, fotos o marca/modelo/año del vehículo. Revisaremos la disponibilidad y prepararemos una cotización.", "formNote": "La consulta se envía mediante el formulario en línea. Si falla el envío, puedes usar la aplicación de correo."}};

  const LANG_CODES = ['zh','en','ru','ar','es'];
  const MENU_LABELS = {
    en:['Open navigation','Close navigation','Language'],
    zh:['打开导航','关闭导航','语言'],
    ru:['Открыть меню','Закрыть меню','Язык'],
    ar:['فتح القائمة','إغلاق القائمة','اللغة'],
    es:['Abrir menú','Cerrar menú','Idioma']
  };

  // Resolve the current page regardless of whether the site is at the domain root,
  // in a subdirectory, or opened from a local file:// path.
  function getRouteInfo(){
    const pathname = location.pathname || '/';
    const parts = pathname.split('/').filter(Boolean);
    let lang = null;
    let file = 'index.html';
    if(parts.length){
      const last = parts[parts.length - 1];
      const previous = parts.length > 1 ? parts[parts.length - 2] : null;
      if(LANG_CODES.includes(last) && pathname.endsWith('/')){
        lang = last;
        file = 'index.html';
      }else if(LANG_CODES.includes(previous)){
        lang = previous;
        file = last || 'index.html';
      }else{
        file = last.includes('.') ? last : 'index.html';
      }
    }
    return {lang, file, relativePrefix: lang ? '../' : './'};
  }

  function getCurrentLang(){
    const route = getRouteInfo();
    if(route.lang) return route.lang;
    const select = document.getElementById('language');
    if(select && select.value && dict[select.value]) return select.value;
    return detectBrowserLanguage();
  }

  function setLang(lang){
    const d=Object.assign({}, dict[lang]||dict.en, extraDict[lang]||extraDict.en);
    document.querySelectorAll('[data-i18n]').forEach(el=>{const k=el.getAttribute('data-i18n');if(d[k]!=null)el.innerHTML=d[k]});
    document.documentElement.lang=lang==='zh'?'zh-CN':lang;
    document.documentElement.dir=lang==='ar'?'rtl':'ltr';
    const page = document.body.getAttribute('data-page') || 'index';
    const meta = (pageMeta[page] && pageMeta[page][lang]) || null;
    // Legacy pages use the dictionary metadata above. SEO landing/model pages
    // carry localized static metadata in each language URL; do not overwrite it.
    if(meta){
      document.title = meta[0];
      const description = document.querySelector('meta[name="description"]');
      if(description) description.setAttribute('content', meta[1]);
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if(ogTitle) ogTitle.setAttribute('content', meta[0]);
      const ogDescription = document.querySelector('meta[property="og:description"]');
      if(ogDescription) ogDescription.setAttribute('content', meta[1]);
      const structuredData = document.querySelector('script[type="application/ld+json"]');
      if(structuredData){
        try{
          const schema = JSON.parse(structuredData.textContent);
          if(schema && schema['@type'] === 'Organization'){
            schema.description = meta[1];
            structuredData.textContent = JSON.stringify(schema, null, 2);
          }
        }catch(e){}
      }
    }
    document.body.classList.toggle('rtl',lang==='ar');
    const sel = document.getElementById('language');
    if(sel) sel.value=lang;
    const labels = MENU_LABELS[lang] || MENU_LABELS.en;
    const menuButtonForLanguage = document.getElementById('mobileMenuToggle');
    if(menuButtonForLanguage) menuButtonForLanguage.setAttribute('aria-label', menuButtonForLanguage.getAttribute('aria-expanded')==='true' ? labels[1] : labels[0]);
    const languageControl = document.querySelector('.language');
    if(languageControl) languageControl.setAttribute('aria-label', labels[2]);
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
    langSelect.addEventListener('change',e=>{
      const lang = e.target.value;
      const route = getRouteInfo();
      const target = route.relativePrefix + lang + '/' + route.file;
      location.href = target + (location.search || '') + (location.hash || '');
    });
  }

  // Accessible mobile navigation. Desktop navigation remains unchanged.
  const menuToggle = document.getElementById('mobileMenuToggle');
  const primaryNav = document.getElementById('primary-navigation');
  if(menuToggle && primaryNav){
    const closeMenu = () => {
      menuToggle.setAttribute('aria-expanded','false');
      menuToggle.setAttribute('aria-label',(MENU_LABELS[getCurrentLang()]||MENU_LABELS.en)[0]);
      primaryNav.classList.remove('is-open');
    };
    menuToggle.addEventListener('click',()=>{
      const open = menuToggle.getAttribute('aria-expanded') !== 'true';
      menuToggle.setAttribute('aria-expanded',String(open));
      const labels = MENU_LABELS[getCurrentLang()] || MENU_LABELS.en;
      menuToggle.setAttribute('aria-label',open ? labels[1] : labels[0]);
      primaryNav.classList.toggle('is-open',open);
    });
    primaryNav.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
    document.addEventListener('keydown',event=>{if(event.key==='Escape') closeMenu();});
  }

  const quoteForm = document.getElementById('quoteForm');
  if(quoteForm) {
    const requestedType=new URLSearchParams(location.search).get('type');
    const typeSelect=quoteForm.querySelector('[name="inquiryType"]');
    if(typeSelect && requestedType==='parts') typeSelect.value='Auto Parts';
    if(typeSelect && requestedType==='vehicles') typeSelect.value='Used Vehicles';
    const params=new URLSearchParams(location.search);
    const modelInput=quoteForm.querySelector('[name="model"]');
    const destinationInput=quoteForm.querySelector('[name="destination"]');
    if(modelInput && params.get('model')) modelInput.value=params.get('model').replace(/-/g,' ');
    if(modelInput && params.get('category')) modelInput.value=params.get('category').replace(/-/g,' ');
    if(destinationInput && params.get('destination')) destinationInput.value=params.get('destination');
    const statusBox=document.getElementById('formStatus');
    const lang=(document.documentElement.lang||'en').toLowerCase().split('-')[0];
    const statusText={
      en:{sending:'Sending your inquiry…',success:'Your inquiry has been submitted. We will review it and get back to you.',error:'Online submission did not go through. You can send the same inquiry using your email app.',email:'Open Email App'},
      zh:{sending:'正在提交询价…',success:'询价已成功提交。我们会查看需求并尽快回复。',error:'在线提交未成功。你可以使用邮件客户端发送同一份询价。',email:'打开邮件客户端'},
      ru:{sending:'Отправляем запрос…',success:'Запрос отправлен. Мы рассмотрим его и свяжемся с вами.',error:'Не удалось отправить запрос онлайн. Вы можете отправить его через почтовое приложение.',email:'Открыть почтовое приложение'},
      ar:{sending:'جارٍ إرسال طلبك…',success:'تم إرسال طلبك. سنراجعه ونتواصل معك.',error:'تعذر إرسال الطلب عبر الإنترنت. يمكنك إرساله باستخدام تطبيق البريد.',email:'فتح تطبيق البريد'},
      es:{sending:'Enviando tu consulta…',success:'Tu consulta se ha enviado. La revisaremos y nos pondremos en contacto contigo.',error:'No se pudo enviar la consulta en línea. Puedes enviarla con tu aplicación de correo.',email:'Abrir aplicación de correo'}
    };
    const copy=statusText[lang]||statusText.en;
    if(statusBox && new URLSearchParams(location.search).get('sent')==='1'){
      statusBox.hidden=false;
      statusBox.className='form-status is-success';
      statusBox.textContent=copy.success;
    }
    quoteForm.addEventListener('submit',async function(e){
      e.preventDefault();
      const submitButton=quoteForm.querySelector('[type="submit"]');
      const formData=new FormData(quoteForm);
      const values=Object.fromEntries(formData.entries());
      const to=C.email||'info@lianzonauto.com';
      const inquiryType=values.inquiryType||'Used Vehicles';
      const subject=`Lianzon Auto ${inquiryType} Inquiry`;
      const message=`Lianzon Auto Inquiry\nInquiry Type: ${inquiryType}\nName: ${values.name||''}\nContact: ${values.contact||''}\nModel / Part: ${values.model||''}\nQuantity: ${values.quantity||''}\nDestination: ${values.destination||''}\nRequirements: ${values.message||''}`;
      const mailto=`mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
      const showStatus=(text,isError=false)=>{
        if(!statusBox)return;
        statusBox.hidden=false;
        statusBox.className='form-status'+(isError?' is-error':' is-success');
        statusBox.textContent=text;
        if(isError){
          const link=document.createElement('a');
          link.href=mailto;
          link.textContent=copy.email;
          link.className='form-fallback-link';
          statusBox.appendChild(document.createTextNode(' '));
          statusBox.appendChild(link);
        }
      };
      submitButton.disabled=true;
      showStatus(copy.sending);
      try{
        const response=await fetch(quoteForm.action,{
          method:'POST',
          headers:{'Content-Type':'application/json','Accept':'application/json'},
          body:JSON.stringify(values)
        });
        if(!response.ok) throw new Error(`Formboost submission failed (${response.status})`);
        showStatus(copy.success);
        quoteForm.reset();
      }catch(error){
        showStatus(copy.error,true);
      }finally{
        submitButton.disabled=false;
      }
    });
  }

  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent=new Date().getFullYear();

  const routeAtLoad = getRouteInfo();
  const initial = routeAtLoad.lang || detectBrowserLanguage();

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