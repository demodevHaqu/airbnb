export interface Restaurant {
  id: string;
  name: {
    ko: string;
    en: string;
  };
  category: 'korean' | 'cafe' | 'convenience';
  description: {
    ko: string;
    en: string;
  };
  distance: string;
  priceRange: string;
  mustTry: {
    ko: string;
    en: string;
  };
  tips: {
    ko: string;
    en: string;
  };
  image?: string;
}

export interface Attraction {
  id: string;
  name: {
    ko: string;
    en: string;
  };
  description: {
    ko: string;
    en: string;
  };
  distance: string;
  duration: string;
  tips: {
    ko: string;
    en: string;
  };
  image?: string;
}

// 샘플 데이터 - 실제로는 데이터베이스에서 가져올 예정
export const restaurants: Restaurant[] = [
  {
    id: '1',
    name: { ko: '할매순대국', en: 'Grandma\'s Sundae Soup' },
    category: 'korean',
    description: {
      ko: '40년 전통 순대국 맛집. 현지인들이 줄서서 먹는 곳!',
      en: '40-year-old traditional Korean soup restaurant. Locals line up for this!',
    },
    distance: '도보 5분',
    priceRange: '₩8,000~12,000',
    mustTry: {
      ko: '순대국밥, 머리고기',
      en: 'Sundae-gukbap (blood sausage soup), head meat',
    },
    tips: {
      ko: '새우젓을 넣어 드세요! 더 맛있어요.',
      en: 'Add shrimp paste for extra flavor!',
    },
  },
  {
    id: '2',
    name: { ko: '이모네 김치찌개', en: 'Auntie\'s Kimchi Stew' },
    category: 'korean',
    description: {
      ko: '직접 담근 김치로 만드는 찌개. 밥 무한리필!',
      en: 'Stew made with homemade kimchi. Unlimited rice refills!',
    },
    distance: '도보 3분',
    priceRange: '₩9,000~15,000',
    mustTry: {
      ko: '김치찌개, 제육볶음',
      en: 'Kimchi Jjigae, Spicy pork stir-fry',
    },
    tips: {
      ko: '점심시간(12-1시)은 피하세요. 매우 붐빕니다.',
      en: 'Avoid lunch rush (12-1 PM). Very crowded!',
    },
  },
  {
    id: '3',
    name: { ko: '카페 봄', en: 'Cafe Spring' },
    category: 'cafe',
    description: {
      ko: '분위기 좋은 루프탑 카페. 인스타 감성 가득!',
      en: 'Rooftop cafe with great vibes. Instagram-worthy!',
    },
    distance: '도보 7분',
    priceRange: '₩5,000~8,000',
    mustTry: {
      ko: '수플레 팬케이크, 아인슈페너',
      en: 'Souffle pancakes, Einspanner',
    },
    tips: {
      ko: '해질녘에 방문하면 야경이 예뻐요.',
      en: 'Visit at sunset for beautiful night views!',
    },
  },
  {
    id: '4',
    name: { ko: 'GS25 편의점', en: 'GS25 Convenience Store' },
    category: 'convenience',
    description: {
      ko: '24시간 운영. 간단한 식사와 필수품 구매 가능.',
      en: 'Open 24 hours. Quick meals and essentials.',
    },
    distance: '도보 1분',
    priceRange: '₩1,000~10,000',
    mustTry: {
      ko: '삼각김밥, 불닭볶음면, 바나나우유',
      en: 'Triangle kimbap, Buldak ramen, Banana milk',
    },
    tips: {
      ko: '편의점 도시락도 맛있어요! 전자레인지 사용 가능.',
      en: 'Try convenience store lunch boxes! Microwave available.',
    },
  },
];

export const attractions: Attraction[] = [
  {
    id: '1',
    name: { ko: '경복궁', en: 'Gyeongbokgung Palace' },
    description: {
      ko: '조선시대 대표 궁궐. 한복 입으면 무료 입장!',
      en: 'Main royal palace of Joseon Dynasty. Free entry in Hanbok!',
    },
    distance: '지하철 20분',
    duration: '2-3시간',
    tips: {
      ko: '수문장 교대식(10시, 14시)을 꼭 보세요!',
      en: 'Don\'t miss the guard changing ceremony (10 AM, 2 PM)!',
    },
  },
  {
    id: '2',
    name: { ko: '북촌 한옥마을', en: 'Bukchon Hanok Village' },
    description: {
      ko: '전통 한옥이 보존된 아름다운 마을',
      en: 'Beautiful village with preserved traditional Korean houses',
    },
    distance: '지하철 25분',
    duration: '1-2시간',
    tips: {
      ko: '주민들이 거주하니 조용히 관람해주세요.',
      en: 'Please be quiet - residents live here!',
    },
  },
  {
    id: '3',
    name: { ko: '남산타워', en: 'N Seoul Tower' },
    description: {
      ko: '서울 전경을 한눈에! 연인들의 자물쇠가 유명',
      en: 'Panoramic views of Seoul! Famous for love locks.',
    },
    distance: '버스 30분',
    duration: '2시간',
    tips: {
      ko: '야경이 더 예뻐요. 해질녘에 가세요!',
      en: 'Night view is better. Go at sunset!',
    },
  },
  {
    id: '4',
    name: { ko: '광장시장', en: 'Gwangjang Market' },
    description: {
      ko: '100년 역사의 전통시장. 먹거리 천국!',
      en: '100-year-old traditional market. Food paradise!',
    },
    distance: '지하철 15분',
    duration: '1-2시간',
    tips: {
      ko: '빈대떡, 마약김밥, 육회를 꼭 드세요!',
      en: 'Must try: Bindaetteok, Mayak kimbap, Yukhoe!',
    },
  },
];
