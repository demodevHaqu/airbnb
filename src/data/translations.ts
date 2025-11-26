export type Language = 'ko' | 'en' | 'ja' | 'zh' | 'es' | 'fr';

export const languages: { code: Language; name: string; flag: string }[] = [
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
];

export const translations = {
  ko: {
    welcome: '환영합니다!',
    subtitle: '편안한 숙박을 위한 모든 정보를 안내해 드립니다',
    selectLanguage: '언어를 선택해주세요',
    nav: {
      home: '홈',
      guide: '숙소 안내',
      food: '주변 맛집',
      attractions: '관광지',
    },
    guide: {
      title: '🏠 숙소 이용 안내',
      checkin: {
        title: '✅ 체크인 / 체크아웃',
        checkinTime: '체크인: 오후 3시 (15:00) 이후',
        checkoutTime: '체크아웃: 오전 11시 (11:00) 이전',
        earlyCheckin: '얼리체크인이 필요하시면 미리 연락주세요',
        keyInfo: '도어락 비밀번호는 별도 문자로 안내드립니다',
      },
      wifi: {
        title: '📶 와이파이',
        name: '네트워크 이름',
        password: '비밀번호',
        wifiName: 'Airbnb_Guest',
        wifiPassword: '12345678',
      },
      rules: {
        title: '📋 숙소 규칙',
        items: [
          '🚭 실내 금연 (베란다 흡연 가능)',
          '🔇 밤 10시 이후 정숙',
          '🐾 반려동물 동반 불가',
          '🎉 파티/이벤트 금지',
          '👥 등록된 게스트만 숙박 가능',
        ],
      },
      amenities: {
        title: '🛁 편의시설 안내',
        items: [
          '🧴 샴푸, 바디워시, 수건 구비',
          '🧹 청소기 사용 가능',
          '👕 세탁기 무료 이용',
          '🍳 주방용품 (냄비, 프라이팬, 식기류)',
          '📺 넷플릭스 시청 가능',
          '❄️ 에어컨/난방 자유롭게 사용',
        ],
      },
      trash: {
        title: '🗑️ 쓰레기 분리수거',
        description: '한국은 쓰레기 분리수거가 필수입니다!',
        items: [
          '📦 종이류 - 파란색 통',
          '🥫 캔/유리 - 초록색 통',
          '🥤 플라스틱 - 노란색 통',
          '🍎 음식물 쓰레기 - 음식물 전용 봉투',
          '🗑️ 일반 쓰레기 - 종량제 봉투 (싱크대 아래)',
        ],
      },
      emergency: {
        title: '🆘 긴급 연락처',
        items: [
          '🚔 경찰: 112',
          '🚒 소방/응급: 119',
          '🏥 외국인 의료상담: 1339',
          '📞 호스트 연락처: 010-XXXX-XXXX',
        ],
      },
      checkout: {
        title: '🚪 체크아웃 시 부탁드립니다',
        items: [
          '에어컨/난방 끄기',
          '창문 닫기',
          '사용한 수건은 욕실 바닥에',
          '쓰레기는 분리수거',
          '문 잠금 확인',
        ],
      },
    },
    food: {
      title: '🍽️ 주변 맛집 추천',
      subtitle: '현지인이 추천하는 진짜 맛집!',
      categories: {
        korean: '한식',
        cafe: '카페',
        convenience: '편의점',
      },
    },
    attractions: {
      title: '🎯 주변 관광지',
      subtitle: '꼭 가봐야 할 명소들',
    },
    footer: {
      contact: '문의사항이 있으시면 편하게 연락주세요!',
      host: '호스트',
    },
  },
  en: {
    welcome: 'Welcome!',
    subtitle: 'Everything you need for a comfortable stay',
    selectLanguage: 'Select your language',
    nav: {
      home: 'Home',
      guide: 'House Guide',
      food: 'Restaurants',
      attractions: 'Attractions',
    },
    guide: {
      title: '🏠 House Guide',
      checkin: {
        title: '✅ Check-in / Check-out',
        checkinTime: 'Check-in: After 3:00 PM (15:00)',
        checkoutTime: 'Check-out: Before 11:00 AM',
        earlyCheckin: 'Contact us in advance for early check-in',
        keyInfo: 'Door lock password will be sent via message',
      },
      wifi: {
        title: '📶 WiFi',
        name: 'Network Name',
        password: 'Password',
        wifiName: 'Airbnb_Guest',
        wifiPassword: '12345678',
      },
      rules: {
        title: '📋 House Rules',
        items: [
          '🚭 No smoking indoors (balcony allowed)',
          '🔇 Quiet hours after 10 PM',
          '🐾 No pets allowed',
          '🎉 No parties/events',
          '👥 Only registered guests may stay',
        ],
      },
      amenities: {
        title: '🛁 Amenities',
        items: [
          '🧴 Shampoo, body wash, towels provided',
          '🧹 Vacuum cleaner available',
          '👕 Free laundry machine',
          '🍳 Kitchen supplies (pots, pans, dishes)',
          '📺 Netflix available',
          '❄️ AC/Heating - use freely',
        ],
      },
      trash: {
        title: '🗑️ Recycling Guide',
        description: 'Recycling is mandatory in Korea!',
        items: [
          '📦 Paper - Blue bin',
          '🥫 Cans/Glass - Green bin',
          '🥤 Plastic - Yellow bin',
          '🍎 Food waste - Special food waste bag',
          '🗑️ General waste - Use designated bags (under sink)',
        ],
      },
      emergency: {
        title: '🆘 Emergency Contacts',
        items: [
          '🚔 Police: 112',
          '🚒 Fire/Ambulance: 119',
          '🏥 Medical Helpline (English): 1339',
          '📞 Host Contact: 010-XXXX-XXXX',
        ],
      },
      checkout: {
        title: '🚪 Before You Leave',
        items: [
          'Turn off AC/Heating',
          'Close all windows',
          'Leave used towels on bathroom floor',
          'Separate recyclables',
          'Make sure door is locked',
        ],
      },
    },
    food: {
      title: '🍽️ Nearby Restaurants',
      subtitle: 'Local favorites recommended by your host!',
      categories: {
        korean: 'Korean Food',
        cafe: 'Cafes',
        convenience: 'Convenience Stores',
      },
    },
    attractions: {
      title: '🎯 Nearby Attractions',
      subtitle: 'Must-visit places',
    },
    footer: {
      contact: 'Feel free to contact us anytime!',
      host: 'Host',
    },
  },
  ja: {
    welcome: 'ようこそ！',
    subtitle: '快適な滞在のためのすべての情報をご案内します',
    selectLanguage: '言語を選択してください',
    nav: {
      home: 'ホーム',
      guide: '宿泊ガイド',
      food: 'グルメ',
      attractions: '観光地',
    },
    guide: {
      title: '🏠 宿泊ガイド',
      checkin: {
        title: '✅ チェックイン / チェックアウト',
        checkinTime: 'チェックイン: 午後3時 (15:00) 以降',
        checkoutTime: 'チェックアウト: 午前11時 (11:00) まで',
        earlyCheckin: 'アーリーチェックインが必要な場合は事前にご連絡ください',
        keyInfo: 'ドアロックのパスワードは別途メッセージでお知らせします',
      },
      wifi: {
        title: '📶 WiFi',
        name: 'ネットワーク名',
        password: 'パスワード',
        wifiName: 'Airbnb_Guest',
        wifiPassword: '12345678',
      },
      rules: {
        title: '📋 ハウスルール',
        items: [
          '🚭 室内禁煙（ベランダは喫煙可）',
          '🔇 夜10時以降は静かに',
          '🐾 ペット不可',
          '🎉 パーティー禁止',
          '👥 登録されたゲストのみ宿泊可能',
        ],
      },
      amenities: {
        title: '🛁 アメニティ',
        items: [
          '🧴 シャンプー、ボディソープ、タオル完備',
          '🧹 掃除機利用可能',
          '👕 洗濯機無料',
          '🍳 キッチン用品（鍋、フライパン、食器）',
          '📺 Netflix視聴可能',
          '❄️ エアコン/暖房 自由に使用可',
        ],
      },
      trash: {
        title: '🗑️ ゴミの分別',
        description: '韓国ではゴミの分別が必須です！',
        items: [
          '📦 紙類 - 青いゴミ箱',
          '🥫 缶/ガラス - 緑のゴミ箱',
          '🥤 プラスチック - 黄色のゴミ箱',
          '🍎 生ゴミ - 専用の袋',
          '🗑️ 一般ゴミ - 専用袋（シンク下）',
        ],
      },
      emergency: {
        title: '🆘 緊急連絡先',
        items: [
          '🚔 警察: 112',
          '🚒 消防/救急: 119',
          '🏥 外国人医療相談: 1339',
          '📞 ホスト連絡先: 010-XXXX-XXXX',
        ],
      },
      checkout: {
        title: '🚪 チェックアウト時のお願い',
        items: [
          'エアコン/暖房をオフに',
          '窓を閉める',
          '使用済みタオルは浴室の床に',
          'ゴミは分別',
          'ドアの施錠確認',
        ],
      },
    },
    food: {
      title: '🍽️ 周辺グルメ',
      subtitle: '地元で人気のお店！',
      categories: {
        korean: '韓国料理',
        cafe: 'カフェ',
        convenience: 'コンビニ',
      },
    },
    attractions: {
      title: '🎯 周辺観光地',
      subtitle: '必見スポット',
    },
    footer: {
      contact: 'お気軽にお問い合わせください！',
      host: 'ホスト',
    },
  },
  zh: {
    welcome: '欢迎！',
    subtitle: '为您提供舒适住宿所需的一切信息',
    selectLanguage: '请选择您的语言',
    nav: {
      home: '首页',
      guide: '住宿指南',
      food: '美食',
      attractions: '景点',
    },
    guide: {
      title: '🏠 住宿指南',
      checkin: {
        title: '✅ 入住 / 退房',
        checkinTime: '入住时间：下午3点 (15:00) 之后',
        checkoutTime: '退房时间：上午11点 (11:00) 之前',
        earlyCheckin: '如需提前入住，请提前联系我们',
        keyInfo: '门锁密码将通过短信发送',
      },
      wifi: {
        title: '📶 WiFi',
        name: '网络名称',
        password: '密码',
        wifiName: 'Airbnb_Guest',
        wifiPassword: '12345678',
      },
      rules: {
        title: '📋 房屋规则',
        items: [
          '🚭 室内禁止吸烟（阳台可以）',
          '🔇 晚上10点后请保持安静',
          '🐾 不允许携带宠物',
          '🎉 禁止举办派对',
          '👥 仅限登记的客人入住',
        ],
      },
      amenities: {
        title: '🛁 设施',
        items: [
          '🧴 提供洗发水、沐浴露、毛巾',
          '🧹 可使用吸尘器',
          '👕 免费使用洗衣机',
          '🍳 厨房用品（锅、平底锅、餐具）',
          '📺 可观看Netflix',
          '❄️ 空调/暖气 自由使用',
        ],
      },
      trash: {
        title: '🗑️ 垃圾分类',
        description: '在韩国，垃圾分类是必须的！',
        items: [
          '📦 纸类 - 蓝色垃圾桶',
          '🥫 罐头/玻璃 - 绿色垃圾桶',
          '🥤 塑料 - 黄色垃圾桶',
          '🍎 食物垃圾 - 专用袋',
          '🗑️ 一般垃圾 - 专用袋（水槽下）',
        ],
      },
      emergency: {
        title: '🆘 紧急联系方式',
        items: [
          '🚔 警察: 112',
          '🚒 消防/急救: 119',
          '🏥 外国人医疗咨询: 1339',
          '📞 房东联系方式: 010-XXXX-XXXX',
        ],
      },
      checkout: {
        title: '🚪 退房注意事项',
        items: [
          '关闭空调/暖气',
          '关好窗户',
          '用过的毛巾放在浴室地板上',
          '垃圾分类处理',
          '确认门已锁好',
        ],
      },
    },
    food: {
      title: '🍽️ 周边美食',
      subtitle: '当地人推荐的美食！',
      categories: {
        korean: '韩国料理',
        cafe: '咖啡厅',
        convenience: '便利店',
      },
    },
    attractions: {
      title: '🎯 周边景点',
      subtitle: '必去的地方',
    },
    footer: {
      contact: '如有任何问题，请随时联系我们！',
      host: '房东',
    },
  },
  es: {
    welcome: '¡Bienvenido!',
    subtitle: 'Todo lo que necesitas para una estancia cómoda',
    selectLanguage: 'Selecciona tu idioma',
    nav: {
      home: 'Inicio',
      guide: 'Guía',
      food: 'Restaurantes',
      attractions: 'Atracciones',
    },
    guide: {
      title: '🏠 Guía del Alojamiento',
      checkin: {
        title: '✅ Check-in / Check-out',
        checkinTime: 'Check-in: Después de las 3:00 PM (15:00)',
        checkoutTime: 'Check-out: Antes de las 11:00 AM',
        earlyCheckin: 'Contáctanos con anticipación para check-in temprano',
        keyInfo: 'La contraseña de la cerradura se enviará por mensaje',
      },
      wifi: {
        title: '📶 WiFi',
        name: 'Nombre de la red',
        password: 'Contraseña',
        wifiName: 'Airbnb_Guest',
        wifiPassword: '12345678',
      },
      rules: {
        title: '📋 Reglas de la Casa',
        items: [
          '🚭 No fumar en interiores (balcón permitido)',
          '🔇 Silencio después de las 10 PM',
          '🐾 No se permiten mascotas',
          '🎉 No fiestas/eventos',
          '👥 Solo huéspedes registrados',
        ],
      },
      amenities: {
        title: '🛁 Comodidades',
        items: [
          '🧴 Champú, jabón, toallas incluidos',
          '🧹 Aspiradora disponible',
          '👕 Lavadora gratis',
          '🍳 Utensilios de cocina',
          '📺 Netflix disponible',
          '❄️ Aire acondicionado/Calefacción',
        ],
      },
      trash: {
        title: '🗑️ Reciclaje',
        description: '¡El reciclaje es obligatorio en Corea!',
        items: [
          '📦 Papel - Contenedor azul',
          '🥫 Latas/Vidrio - Contenedor verde',
          '🥤 Plástico - Contenedor amarillo',
          '🍎 Residuos orgánicos - Bolsa especial',
          '🗑️ Basura general - Bolsas designadas',
        ],
      },
      emergency: {
        title: '🆘 Contactos de Emergencia',
        items: [
          '🚔 Policía: 112',
          '🚒 Bomberos/Ambulancia: 119',
          '🏥 Asistencia médica: 1339',
          '📞 Anfitrión: 010-XXXX-XXXX',
        ],
      },
      checkout: {
        title: '🚪 Antes de Salir',
        items: [
          'Apagar aire/calefacción',
          'Cerrar ventanas',
          'Dejar toallas en el baño',
          'Separar reciclables',
          'Verificar que la puerta esté cerrada',
        ],
      },
    },
    food: {
      title: '🍽️ Restaurantes Cercanos',
      subtitle: '¡Recomendados por locales!',
      categories: {
        korean: 'Comida Coreana',
        cafe: 'Cafeterías',
        convenience: 'Tiendas',
      },
    },
    attractions: {
      title: '🎯 Atracciones Cercanas',
      subtitle: 'Lugares imperdibles',
    },
    footer: {
      contact: '¡No dudes en contactarnos!',
      host: 'Anfitrión',
    },
  },
  fr: {
    welcome: 'Bienvenue !',
    subtitle: 'Tout ce dont vous avez besoin pour un séjour confortable',
    selectLanguage: 'Sélectionnez votre langue',
    nav: {
      home: 'Accueil',
      guide: 'Guide',
      food: 'Restaurants',
      attractions: 'Attractions',
    },
    guide: {
      title: '🏠 Guide du Logement',
      checkin: {
        title: '✅ Arrivée / Départ',
        checkinTime: 'Arrivée : Après 15h00',
        checkoutTime: 'Départ : Avant 11h00',
        earlyCheckin: 'Contactez-nous pour une arrivée anticipée',
        keyInfo: 'Le code de la porte sera envoyé par message',
      },
      wifi: {
        title: '📶 WiFi',
        name: 'Nom du réseau',
        password: 'Mot de passe',
        wifiName: 'Airbnb_Guest',
        wifiPassword: '12345678',
      },
      rules: {
        title: '📋 Règles de la Maison',
        items: [
          '🚭 Non-fumeur à l\'intérieur (balcon OK)',
          '🔇 Silence après 22h',
          '🐾 Animaux non autorisés',
          '🎉 Pas de fêtes',
          '👥 Uniquement les hôtes enregistrés',
        ],
      },
      amenities: {
        title: '🛁 Équipements',
        items: [
          '🧴 Shampoing, savon, serviettes fournis',
          '🧹 Aspirateur disponible',
          '👕 Machine à laver gratuite',
          '🍳 Ustensiles de cuisine',
          '📺 Netflix disponible',
          '❄️ Climatisation/Chauffage',
        ],
      },
      trash: {
        title: '🗑️ Tri des Déchets',
        description: 'Le tri est obligatoire en Corée !',
        items: [
          '📦 Papier - Poubelle bleue',
          '🥫 Canettes/Verre - Poubelle verte',
          '🥤 Plastique - Poubelle jaune',
          '🍎 Déchets alimentaires - Sac spécial',
          '🗑️ Ordures ménagères - Sacs désignés',
        ],
      },
      emergency: {
        title: '🆘 Contacts d\'Urgence',
        items: [
          '🚔 Police : 112',
          '🚒 Pompiers/Ambulance : 119',
          '🏥 Aide médicale : 1339',
          '📞 Hôte : 010-XXXX-XXXX',
        ],
      },
      checkout: {
        title: '🚪 Avant de Partir',
        items: [
          'Éteindre la climatisation',
          'Fermer les fenêtres',
          'Laisser les serviettes au sol',
          'Trier les déchets',
          'Vérifier la fermeture de la porte',
        ],
      },
    },
    food: {
      title: '🍽️ Restaurants à Proximité',
      subtitle: 'Recommandés par les locaux !',
      categories: {
        korean: 'Cuisine Coréenne',
        cafe: 'Cafés',
        convenience: 'Supérettes',
      },
    },
    attractions: {
      title: '🎯 Attractions à Proximité',
      subtitle: 'À ne pas manquer',
    },
    footer: {
      contact: 'N\'hésitez pas à nous contacter !',
      host: 'Hôte',
    },
  },
};

export const getTranslation = (lang: Language) => {
  return translations[lang] || translations.en;
};
