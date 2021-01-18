const quiz = [
  {
    question: '三角形の内角の和は？',
    answers: [ '90°', '150°', '180°'],
    correct: '180°'
  }, {
    question: '面積が最も小さい都道府県は？',
    answers: [ '沖縄県', '香川県', '大阪府'],
    correct: '香川県'
  }, {
    question: '日本の国鳥は？',
    answers: [ 'ツル', 'トキ', 'キジ'],
    correct: 'キジ'
  }, {
    question: '大気中で最も軽い気体は？',
    answers: [ 'ヘリウム', '窒素', '水素'],
    correct: '水素'
  }, {
    question: '夢を見ている状態の睡眠を何という？',
    answers: [ 'レム睡眠', 'ノンレム睡眠', 'メラトニン'],
    correct: 'レム睡眠'
  }, {
    question: '神社の称号の「○○大社、○○神宮、○○八幡宮」で最も格式が高いのは？',
    answers: [ '大社', '神宮', '八幡宮'],
    correct: '神宮'
  }, {
    question: '「クレジットカード」の「クレジット」の本来の意味は？',
    answers: [ '借用', '信用', '代用'],
    correct: '信用'
  }, {
    question: '「ＶＩＰ」は何の略？',
    answers: [ 'Very Important Person', 'Very International Person', 'Very Intelligent Person'],
    correct: 'Very Important Person'
  }, {
    question: '世界でいちばん多い血液型は？',
    answers: [ 'A型', 'B型', 'O型'],
    correct: 'O型'
  }, {
    question: '「迷う」の反対語は？',
    answers: [ '進む', '知る', '悟る'],
    correct: '悟る'
  }
];

const $window = window;
const $doc = document;
const $question = $doc.getElementById('js-question');
const $buttons = $doc.querySelectorAll('.btn');

const quizLen = quiz.length;
let quizCount = 0;
let score = 0;

const init = () => {
  $question.textContent = quiz[quizCount].question;
  
  const buttonLen = $buttons.length;
  let btnIndex = 0;
  
  while(btnIndex < buttonLen){
    $buttons[btnIndex].textContent = quiz[quizCount].answers[btnIndex];
    btnIndex++;
  }
};

const goToNext = () => {
  quizCount++;
  if(quizCount < quizLen){
    init(quizCount);
  } else {
    // $window.alert('クイズ終了！');
    showEnd();
  }
};

const judge = (elm) => {
  if(elm.textContent === quiz[quizCount].correct){
    $window.alert('正解!');
    score++;
  } else {
    $window.alert('不正解!');
  }
  goToNext();
};

const showEnd = () => {
  $question.textContent = '終了！あなたのスコアは' + score + '/' + quizLen + 'です';
  
  const $items = $doc.getElementById('js-items');
  $items.style.visibility = 'hidden';
};

init();

let answersIndex = 0;
let answersLen = quiz[quizCount].answers.length;

while(answersIndex < answersLen){
  $buttons[answersIndex].addEventListener('click', (e) => {
    judge(e.target);
  });
  answersIndex++;
}