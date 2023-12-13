const cards = [
  // Hearts
  'images/heart/heart_A.png',
  'images/heart/heart_2.png',
  'images/heart/heart_3.png',
  'images/heart/heart_4.png',
  'images/heart/heart_5.png',
  'images/heart/heart_6.png',
  'images/heart/heart_7.png',
  'images/heart/heart_8.png',
  'images/heart/heart_9.png',
  'images/heart/heart_10.png',
  'images/heart/heart_J.png',
  'images/heart/heart_Q.png',
  'images/heart/heart_K.png',

  // Clubs
  'images/club/club_A.png',
  'images/club/club_2.png',
  'images/club/club_3.png',
  'images/club/club_4.png',
  'images/club/club_5.png',
  'images/club/club_6.png',
  'images/club/club_7.png',
  'images/club/club_8.png',
  'images/club/club_9.png',
  'images/club/club_10.png',
  'images/club/club_J.png',
  'images/club/club_Q.png',
  'images/club/club_K.png',

  // Diamonds
  'images/diamond/diamond_A.png',
  'images/diamond/diamond_2.png',
  'images/diamond/diamond_3.png',
  'images/diamond/diamond_4.png',
  'images/diamond/diamond_5.png',
  'images/diamond/diamond_6.png',
  'images/diamond/diamond_7.png',
  'images/diamond/diamond_8.png',
  'images/diamond/diamond_9.png',
  'images/diamond/diamond_10.png',
  'images/diamond/diamond_J.png',
  'images/diamond/diamond_Q.png',
  'images/diamond/diamond_K.png',

  // Spades
  'images/spade/spade_A.png',
  'images/spade/spade_2.png',
  'images/spade/spade_3.png',
  'images/spade/spade_4.png',
  'images/spade/spade_5.png',
  'images/spade/spade_6.png',
  'images/spade/spade_7.png',
  'images/spade/spade_8.png',
  'images/spade/spade_9.png',
  'images/spade/spade_10.png',
  'images/spade/spade_J.png',
  'images/spade/spade_Q.png',
  'images/spade/spade_K.png',
];



const quizzes = [
  // Hearts
  '視力の定義と測定法',
  '色覚異常の種類、検査、異常があった場合の生活上の指導',
  '視野検査と視野異常を呈する疾患',
  '房水動態と眼圧（眼圧測定法を含む）',
  '屈折異常と屈折検査および矯正法',
  '前眼部検査法および眼底検査法',
  '眼科での電気生理学的検査',
  '角膜の生理',
  '網膜の生理',
  '視路と視野',
  '間欠性外斜視・調節性内斜視の診断と治療',
  '弱視の種類、診断に必要な検査と治療',
  '外眼筋の作用と支配神経、麻痺性斜視',

  // Diamonds
  '調節力と調節障害',
  'ウイルス性結膜炎',
  'アトピー性皮膚炎と眼合併症',
  '角膜移植およびアイバンク・臓器移植法',
  '悪性リンパ腫・白血病の眼所見と診断法',
  '視覚障害、ロービジョンケア',
  '円錐角膜の診断、検査、治療',
  '角膜感染症（細菌、真菌、アカントアメーバ）',
  'ヘルペス感染症（HSV、VZV、CMV）',
  'ドライアイ',
  'スティーブンス・ジョンソン症候群',
  'コンタクトレンズ',
  '角膜屈折矯正手術',

  // Spades
  '網膜色素変性症',
  'うっ血乳頭と乳頭浮腫',
  '視神経炎の診断と治療、鑑別に必要な検査',
  '緑内障の種類、鑑別に必要な検査、診断と治療',
  '眼科救急疾患を3つ以上、診断と治療',
  'OCTでわかること（前眼部、隅角、眼底）',
  '白内障、手術手順・術後合併症',
  '網膜動脈閉塞症および眼虚血症候群',
  'サルコイドーシス',
  'ベーチェット病',
  'Vogt-小柳-原田病',
  '糖尿病網膜症の分類と治療',
  '未熟児網膜症',

  // Clubs
  '網膜剥離の種類、診断と治療',
  '硝子体手術の適応疾患',
  '網膜静脈分岐閉塞症・網膜中心静脈閉塞症',
  '中心性漿液性網脈絡膜症',
  '加齢性黄斑変性、検査所見や鑑別疾患と治療',
  '高血圧および動脈硬化と網膜所見',
  '網膜芽細胞腫',
  '副腎皮質ステロイドの眼科的副作用',
  '眼科の各種レーザー治療の適応疾患',
  '眼球突出の診断、鑑別疾患とその治療',
  '瞳孔不同をきたす疾患、鑑別に必要な検査',
  '白色瞳孔をきたす疾患とその治療',
  '化学眼外傷とその治療と予後',
];


function drawCard() {
  const randomIndex = Math.floor(Math.random() * cards.length);
  const cardImage = document.getElementById('card-image');
  const quizContainer = document.getElementById('quiz-container');

  cardImage.src = cards[randomIndex];
  displayQuiz(randomIndex, quizContainer);
}

function displayQuiz(index, container) {
  container.innerHTML = `<p>${quizzes[index]}</p>`;
}

drawCard();  // 初期表示でカードを引く
