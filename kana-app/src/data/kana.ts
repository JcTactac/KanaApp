export interface Kana {
    hiragana: string;
    katakana: string;
    romanji: string;
    group: string;
}

export const kanaData: Kana[] = [
    // 1. Voyelles
    { hiragana: 'あ', katakana: 'ア', romanji: 'a',   group: 'voyelles' },
    { hiragana: 'い', katakana: 'イ', romanji: 'i',   group: 'voyelles' },
    { hiragana: 'う', katakana: 'ウ', romanji: 'u',   group: 'voyelles' },
    { hiragana: 'え', katakana: 'エ', romanji: 'e',   group: 'voyelles' },
    { hiragana: 'お', katakana: 'オ', romanji: 'o',   group: 'voyelles' },
    // 2. K
    { hiragana: 'か', katakana: 'カ', romanji: 'ka',  group: 'k' },
    { hiragana: 'き', katakana: 'キ', romanji: 'ki',  group: 'k' },
    { hiragana: 'く', katakana: 'ク', romanji: 'ku',  group: 'k' },
    { hiragana: 'け', katakana: 'ケ', romanji: 'ke',  group: 'k' },
    { hiragana: 'こ', katakana: 'コ', romanji: 'ko',  group: 'k' },
    // 3. S
    { hiragana: 'さ', katakana: 'サ', romanji: 'sa',  group: 's' },
    { hiragana: 'し', katakana: 'シ', romanji: 'shi', group: 's' },
    { hiragana: 'す', katakana: 'ス', romanji: 'su',  group: 's' },
    { hiragana: 'せ', katakana: 'セ', romanji: 'se',  group: 's' },
    { hiragana: 'そ', katakana: 'ソ', romanji: 'so',  group: 's' },
    // 4. T
    { hiragana: 'た', katakana: 'タ', romanji: 'ta',  group: 't' },
    { hiragana: 'ち', katakana: 'チ', romanji: 'chi', group: 't' },
    { hiragana: 'つ', katakana: 'ツ', romanji: 'tsu', group: 't' },
    { hiragana: 'て', katakana: 'テ', romanji: 'te',  group: 't' },
    { hiragana: 'と', katakana: 'ト', romanji: 'to',  group: 't' },
    // 5. N
    { hiragana: 'な', katakana: 'ナ', romanji: 'na',  group: 'n' },
    { hiragana: 'に', katakana: 'ニ', romanji: 'ni',  group: 'n' },
    { hiragana: 'ぬ', katakana: 'ヌ', romanji: 'nu',  group: 'n' },
    { hiragana: 'ね', katakana: 'ネ', romanji: 'ne',  group: 'n' },
    { hiragana: 'の', katakana: 'ノ', romanji: 'no',  group: 'n' },
    // 6. H
    { hiragana: 'は', katakana: 'ハ', romanji: 'ha',  group: 'h' },
    { hiragana: 'ひ', katakana: 'ヒ', romanji: 'hi',  group: 'h' },
    { hiragana: 'ふ', katakana: 'フ', romanji: 'fu',  group: 'h' },
    { hiragana: 'へ', katakana: 'ヘ', romanji: 'he',  group: 'h' },
    { hiragana: 'ほ', katakana: 'ホ', romanji: 'ho',  group: 'h' },
    // 7. M
    { hiragana: 'ま', katakana: 'マ', romanji: 'ma',  group: 'm' },
    { hiragana: 'み', katakana: 'ミ', romanji: 'mi',  group: 'm' },
    { hiragana: 'む', katakana: 'ム', romanji: 'mu',  group: 'm' },
    { hiragana: 'め', katakana: 'メ', romanji: 'me',  group: 'm' },
    { hiragana: 'も', katakana: 'モ', romanji: 'mo',  group: 'm' },
    // 8. Y — 3 caractères seulement
    { hiragana: 'や', katakana: 'ヤ', romanji: 'ya',  group: 'y' },
    { hiragana: 'ゆ', katakana: 'ユ', romanji: 'yu',  group: 'y' },
    { hiragana: 'よ', katakana: 'ヨ', romanji: 'yo',  group: 'y' },
    // 9. R
    { hiragana: 'ら', katakana: 'ラ', romanji: 'ra',  group: 'r' },
    { hiragana: 'り', katakana: 'リ', romanji: 'ri',  group: 'r' },
    { hiragana: 'る', katakana: 'ル', romanji: 'ru',  group: 'r' },
    { hiragana: 'れ', katakana: 'レ', romanji: 're',  group: 'r' },
    { hiragana: 'ろ', katakana: 'ロ', romanji: 'ro',  group: 'r' },
    // 10. W — 2 caractères seulement
    { hiragana: 'わ', katakana: 'ワ', romanji: 'wa',  group: 'w' },
    { hiragana: 'を', katakana: 'ヲ', romanji: 'wo',  group: 'w' },
    // 11. N seul
    { hiragana: 'ん', katakana: 'ン', romanji: 'n',   group: 'w' },
    // 12. G (dakuten)
    { hiragana: 'が', katakana: 'ガ', romanji: 'ga',  group: 'dakuten' },
    { hiragana: 'ぎ', katakana: 'ギ', romanji: 'gi',  group: 'dakuten' },
    { hiragana: 'ぐ', katakana: 'グ', romanji: 'gu',  group: 'dakuten' },
    { hiragana: 'げ', katakana: 'ゲ', romanji: 'ge',  group: 'dakuten' },
    { hiragana: 'ご', katakana: 'ゴ', romanji: 'go',  group: 'dakuten' },
    // 13. Z (dakuten)
    { hiragana: 'ざ', katakana: 'ザ', romanji: 'za',  group: 'dakuten' },
    { hiragana: 'じ', katakana: 'ジ', romanji: 'ji',  group: 'dakuten' },
    { hiragana: 'ず', katakana: 'ズ', romanji: 'zu',  group: 'dakuten' },
    { hiragana: 'ぜ', katakana: 'ゼ', romanji: 'ze',  group: 'dakuten' },
    { hiragana: 'ぞ', katakana: 'ゾ', romanji: 'zo',  group: 'dakuten' },
    // 14. D (dakuten)
    { hiragana: 'だ', katakana: 'ダ', romanji: 'da',  group: 'dakuten' },
    { hiragana: 'ぢ', katakana: 'ヂ', romanji: 'di',  group: 'dakuten' },
    { hiragana: 'づ', katakana: 'ヅ', romanji: 'du',  group: 'dakuten' },
    { hiragana: 'で', katakana: 'デ', romanji: 'de',  group: 'dakuten' },
    { hiragana: 'ど', katakana: 'ド', romanji: 'do',  group: 'dakuten' },
    // 15. B (dakuten)
    { hiragana: 'ば', katakana: 'バ', romanji: 'ba',  group: 'dakuten' },
    { hiragana: 'び', katakana: 'ビ', romanji: 'bi',  group: 'dakuten' },
    { hiragana: 'ぶ', katakana: 'ブ', romanji: 'bu',  group: 'dakuten' },
    { hiragana: 'べ', katakana: 'ベ', romanji: 'be',  group: 'dakuten' },
    { hiragana: 'ぼ', katakana: 'ボ', romanji: 'bo',  group: 'dakuten' },
    // 16. P (handakuten)
    { hiragana: 'ぱ', katakana: 'パ', romanji: 'pa',  group: 'dakuten' },
    { hiragana: 'ぴ', katakana: 'ピ', romanji: 'pi',  group: 'dakuten' },
    { hiragana: 'ぷ', katakana: 'プ', romanji: 'pu',  group: 'dakuten' },
    { hiragana: 'ぺ', katakana: 'ペ', romanji: 'pe',  group: 'dakuten' },
    { hiragana: 'ぽ', katakana: 'ポ', romanji: 'po',  group: 'dakuten' },
];