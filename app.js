const クイズ =  [
  {{
    質問：'ゲーム史上、世界売ゲーム機はまた？' 、
    回答：[  'スーパーファミコン' 、 'PlayStation 2' 、 'ニンテンドーDS' 、 'Xbox 360' ] 、
    正解：'ニンテンドーDS'
  } 、 {
    質問：'糸井重里が計画できわった、任天堂の看板ゲーム計画的？' 、
    回答：[  'MOTHER2' 、 'スーパーマリオブラザーズ3' 、 'スーパードンキーコング' 、 '星のカービィ' ] 、
    正解：「MOTHER2」
  } 、 {
    質問：'ファイナルファンタジーⅣの主人公の名前は？' 、
    答え：[  'フリオニール' 、 'クラウド' 、 'ティーダ' 、 'セシル' ] 、
    正しい：'セシル'
  }
] ;

const  $ window  =  window ;
const  $ doc  =  document ;
const  $ question  =  $ doc 。getElementById （'js-質問' ）;
const  $ buttons  =  $ doc 。querySelectorAll （'。btn' ）;

const  quizLen  = クイズ。長さ;
聞かせて quizCount  =  0を。
聞かせて スコア =  0 ;

const  init  =  （） =>  {
  $ question 。textContent  =  quiz [ quizCount ] 。質問;
  
  const  buttonLen  =  $ buttons 。長さ;
  聞かせて btnIndex  =  0を。
  
  while （btnIndex  <  buttonLen ）{
    $ buttons [ btnIndex ] 。textContent  =  quiz [ quizCount ] 。回答[ btnIndex ] ;
    btnIndex ++ ;
  }
} ;

const  goToNext  =  （） =>  {
  quizCount ++ ;
  if （quizCount  <  quizLen ）{
    init （quizCount ）;
  }  else  {
    // $ window.alert（ 'クイズ聞き！'）;
    showEnd （）;
  }
} ;

const 裁判官 =  （elm ） =>  {
  もし（ELM 。のTextContent  === クイズ[ quizCount ] 。正しいです）{
    $ window 。アラート（'正解！' ）;
    スコア++ ;
  }  else  {
    $ window 。アラート（'再現解！' ）;
  }
  goToNext （）;
} ;

const  showEnd  =  （） =>  {
  $ question 。textContent  =  '終了！あなたの スコアは' + スコア +  '/'  +  quizLen  +  'です' ;
  
  const  $ items  =  $ doc 。getElementById （'js-items' ）;
  $ items 。スタイル。可視性 =  '非表示' ;
} ;

init （）;

聞かせて answersIndex  =  0 ;
聞かせて answersLen  = クイズ[ quizCount ] 。答え。長さ;

while （answersIndex  <  answersLen ）{
  $ buttons [ answersIndex ] 。addEventListener （'クリック' 、 （e ） =>  {
    裁判官（e 。ターゲット）;
  } ）;
  AnswersIndex ++ ;
}