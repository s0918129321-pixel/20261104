/* ==========================================
   PBL 專題：健康飲食小達人 (10題極簡圖形版)
   使用技術：p5.js 1.10
   ========================================== */

const PROJECT = {
  title: "健康飲食小達人",
  author: "王小明",
  goals: [
    { id: 1, name: "目標1：六大類食物正確辨識" },
    { id: 2, name: "目標2：辨識含糖飲料與加工食品陷阱" },
    { id: 3, name: "目標3：日常均衡飲食與喝水觀念" }
  ]
};

const STYLE = {
  primary: "#D32F2F",   // 健康紅
  accent: "#F57C00",    // 活力橘
  ok: "#388E3C",
  bad: "#C62828",
  bg: "#FFEBEE"
};

// 10 道健康飲食題目
const QUESTIONS = [
  {
    id: "Q1", goal: 1, type: "rice",
    q: "1. 每天三餐我們都會吃到的白飯、糙米飯或麵條，屬於六大類中的哪一類？",
    options: [
      "豆魚蛋肉類",
      "全穀雜糧類（提供主要活動熱量）",
      "蔬菜類",
      "油脂與堅果種子類"
    ],
    answer: "全穀雜糧類（提供主要活動熱量）",
    explain: "飯、麵、地瓜等主食屬於全穀雜糧類，能提供我們上課和運動需要的體力。"
  },
  {
    id: "Q2", goal: 2, type: "drink",
    q: "2. 口渴時，如果把市售的「含糖手搖奶茶」當作水來天天喝，會有什麼影響？",
    options: [
      "會變得更聰明",
      "容易攝取過多糖分，導致肥胖與蛀牙",
      "可以補充大量蛋白質",
      "完全沒有任何影響"
    ],
    answer: "容易攝取過多糖分，導致肥胖與蛀牙",
    explain: "市售手搖飲通常含有大量精製糖，長期代替開水容易造成肥胖與健康問題。"
  },
  {
    id: "Q3", goal: 3, type: "water",
    q: "3. 人體有超過一半以上是水，口渴時最好的水分補充來源是什麼？",
    options: [
      "冰涼的汽水與可樂",
      "市售罐裝含糖果汁",
      "乾淨的白開水",
      "運動飲料"
    ],
    answer: "乾淨的白開水",
    explain: "白開水不含糖分與熱量，是身體新陳代謝最健康、最好的水分來源。"
  },
  {
    id: "Q4", goal: 1, type: "meat",
    q: "4. 雞蛋、豆腐、魚肉和雞胸肉，主要是提供我們身體哪一種營養素？",
    options: [
      "蛋白質（幫助肌肉與身體生長發育）",
      "純糖分",
      "水分",
      "維生素C"
    ],
    answer: "蛋白質（幫助肌肉與身體生長發育）",
    explain: "豆魚蛋肉類富含蛋白質，是長高、長肌肉和修復身體不可或缺的營養。"
  },
  {
    id: "Q5", goal: 1, type: "fruit",
    q: "5. 每天吃新鮮的芭樂、蘋果或奇異果，主要可以幫我們補充什麼？",
    options: [
      "大量的油脂肪",
      "維生素與膳食纖維（幫助腸胃蠕動）",
      "人工色素",
      "咖啡因"
    ],
    answer: "維生素與膳食纖維（幫助腸胃蠕動）",
    explain: "水果含有豐富的維生素與纖維質，比起喝市售果汁，直接吃水果最好！"
  },
  {
    id: "Q6", goal: 2, type: "snack",
    q: "6. 放學後常吃的洋芋片、炸雞排和糖果，營養學上被稱為哪類食物？",
    options: [
      "高熱量、營養素較少的加工或油炸食品，應適量少吃",
      "健康的蔬菜水果類",
      "每天必須吃一公斤的必需品",
      "乳品類"
    ],
    answer: "高熱量、營養素較少的加工或油炸食品，應適量少吃",
    explain: "零食和炸物通常高油、高糖、高鹽，吃太多對身體負擔很大。"
  },
  {
    id: "Q7", goal: 3, type: "plate",
    q: "7. 營養署推廣的「我的餐盤」口訣中，關於蔬菜與水果的比例建議是？",
    options: [
      "菜比水果少一半",
      "「早晚一杯奶、菜比水果多一點」",
      "完全不用吃蔬菜",
      "只要吃肉就好"
    ],
    answer: "「早晚一杯奶、菜比水果多一點」",
    explain: "均衡飲食要記得多吃蔬菜與適量水果，並攝取乳品類維持骨骼健康。"
  },
  {
    id: "Q8", goal: 1, type: "milk",
    q: "8. 鮮奶、優酪乳和起司等乳品類食物，對小學生最大的好處是什麼？",
    options: [
      "提供豐富的鈣質，幫助骨骼與牙齒生長",
      "讓人立刻想睡覺",
      "讓頭髮變直",
      "增加體重但骨頭變脆"
    ],
    answer: "提供豐富的鈣質，幫助骨骼與牙齒生長",
    explain: "乳品類含有豐富鈣質，每天喝 1.5 到 2 杯牛奶能幫助長高、骨骼強壯。"
  },
  {
    id: "Q9", goal: 2, type: "juice",
    q: "9. 「市售紙盒裝果汁」和「新鮮現切水果」相比，哪一個比較健康？",
    options: [
      "紙盒果汁比較健康，因為有加糖",
      "新鮮現切水果比較健康，因為纖維完整且沒有額外加糖",
      "兩者完全一模一樣",
      "紙盒果汁可以代替水"
    ],
    answer: "新鮮現切水果比較健康，因為纖維完整且沒有額外加糖",
    explain: "市售果汁常過濾掉纖維並額外加糖，直接吃新鮮水果才能攝取到完整的纖維與營養。"
  },
  {
    id: "Q10", goal: 3, type: "balanced",
    q: "10. 為什麼我們吃便當或營養午餐時，要做到「不挑食、什麼都吃」？",
    options: [
      "因為老師規定的，沒有特別原因",
      "為了攝取多種不同的營養素，身體才能健康平衡發展",
      "這樣才能比賽看誰吃得最快",
      "只為了把碗洗乾淨"
    ],
    answer: "為了攝取多種不同的營養素，身體才能健康平衡發展",
    explain: "身體需要各種不同的營養素各司其職，不挑食才能頭好壯壯、抵抗力好！"
  }
];

let screen = "start";
let queue = [];
let pos = 0;
let selectedOption = null;
let showExplain = false;
let records = [];
let startTime = 0;
let totalSeconds = 0;

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(STYLE.bg);

  if (screen === "start") {
    drawStartScreen();
  } else if (screen === "quiz") {
    drawQuizScreen();
  } else if (screen === "result") {
    drawResultScreen();
  }
}

// 1. 開始畫面
function drawStartScreen() {
  fill(STYLE.primary);
  textSize(32);
  textAlign(CENTER, CENTER);
  text("🍎 " + PROJECT.title, width / 2, 80);

  textSize(16);
  fill(80);
  text("專題學生：" + PROJECT.author, width / 2, 125);

  fill(255);
  stroke(200);
  rect(150, 160, 500, 220, 10);
  noStroke();
  
  fill(STYLE.primary);
  textSize(18);
  textAlign(LEFT, TOP);
  text("本測驗三大學習目標（共 10 題）：", 180, 180);

  textSize(15);
  fill(60);
  let yPos = 220;
  PROJECT.goals.forEach(g => {
    text("• " + g.name, 190, yPos);
    yPos += 45;
  });

  drawButton(width / 2 - 100, 420, 200, 50, STYLE.primary, "開始健康挑戰 (10題)", 16);
}

// 2. 作答畫面
function drawQuizScreen() {
  if (queue.length === 0) return;
  let qIdx = queue[pos];
  let qData = QUESTIONS[qIdx];

  // 頂部狀態列
  fill(255);
  noStroke();
  rect(0, 0, width, 50);
  fill(50);
  textSize(16);
  textAlign(LEFT, CENTER);
  text(`第 ${pos + 1} / ${queue.length} 題`, 30, 25);
  
  let passedSec = floor((millis() - startTime) / 1000);
  textAlign(RIGHT, CENTER);
  text(`⏱️ 用時：${passedSec} 秒`, width - 30, 25);

  // 【極簡幾何插圖區】
  fill(255);
  stroke(200);
  rect(50, 65, width - 100, 110, 8);
  noStroke();
  
  drawSimpleIcon(qData.type, width / 2, 120);

  // 題目內文
  fill(30);
  textSize(17);
  textAlign(LEFT, TOP);
  text(qData.q, 50, 190, width - 100, 50);

  // 選項按鈕
  let oy = 245;
  for (let i = 0; i < qData.options.length; i++) {
    let optText = `${String.fromCharCode(65 + i)}. ${qData.options[i]}`;
    let btnColor = color(255);
    let txtColor = color(40);
    
    if (selectedOption !== null) {
      if (qData.options[i] === qData.answer) {
        btnColor = color(200, 230, 201); // 正確綠
        txtColor = color(27, 94, 32);
      } else if (i === selectedOption) {
        btnColor = color(255, 205, 210); // 錯誤紅
        txtColor = color(183, 28, 28);
      }
    }

    fill(btnColor);
    stroke(180);
    rect(50, oy, width - 100, 44, 6);
    noStroke();
    fill(txtColor);
    textSize(14);
    textAlign(LEFT, CENTER);
    text(optText, 70, oy + 22);

    oy += 50;
  }

  // 解說卡與下一題
  if (showExplain) {
    fill(245, 245, 245);
    stroke(200);
    rect(50, 460, width - 100, 120, 6);
    noStroke();
    fill(40);
    textSize(14);
    textAlign(LEFT, TOP);
    text("💡 營養小知識：" + qData.explain, 65, 472, width - 200, 95);

    drawButton(width - 170, 520, 100, 40, STYLE.accent, "下一題 ➔", 14);
  }
}

// 🎯 極簡圖形繪製函式
function drawSimpleIcon(type, cx, cy) {
  push();
  translate(cx, cy);
  rectMode(CENTER);
  ellipseMode(CENTER);
  strokeWeight(2);

  if (type === "rice") { // 飯碗
    stroke(100); fill(245, 245, 245);
    arc(0, 5, 50, 40, 0, PI);
    fill(255); rect(0, -10, 40, 15);
  } else if (type === "drink" || type === "juice") { // 飲料杯
    stroke(100); fill(220, 220, 220);
    rect(0, 5, 30, 45, 4);
    fill(STYLE.primary); rect(0, -15, 34, 10, 2);
  } else if (type === "water") { // 水杯
    stroke(100); fill(200, 230, 255);
    rect(0, 5, 32, 45, 3);
    fill(255, 255, 255, 150); rect(0, 0, 24, 35);
  } else if (type === "fruit") { // 蘋果
    noStroke(); fill(229, 57, 53);
    ellipse(0, 5, 36, 36);
    stroke(100); fill(76, 175, 80);
    line(0, -13, 5, -25);
  } else if (type === "meat") { // 蛋白質/雞蛋
    stroke(100); fill(255, 248, 225);
    ellipse(0, 0, 36, 42);
  } else if (type === "snack") { // 薯條/零食盒
    stroke(100); fill(255, 152, 0);
    rect(0, 10, 35, 35, 4);
    fill(255, 235, 59); rect(-8, -10, 4, 20); rect(0, -10, 4, 20); rect(8, -10, 4, 20);
  } else if (type === "plate") { // 餐盤
    stroke(150); fill(255);
    ellipse(0, 0, 60, 60);
    noFill(); stroke(200); ellipse(0, 0, 45, 45);
  } else if (type === "milk") { // 牛乳瓶
    stroke(100); fill(255);
    rect(0, 10, 32, 40, 4);
    fill(200, 230, 201); rect(0, -15, 18, 12, 2);
  } else { // 預設愛心健康
    noStroke(); fill(STYLE.primary);
    ellipse(-10, -5, 20, 20); ellipse(10, -5, 20, 20);
    triangle(-20, 0, 20, 0, 0, 20);
  }
  pop();
}

// 3. 成績畫面
function drawResultScreen() {
  textAlign(CENTER, CENTER);
  fill(STYLE.primary);
  textSize(28);
  text("🎉 測驗完成！", width / 2, 55);

  let correctCount = records.filter(r => r.correct).length;
  let score = floor((correctCount / records.length) * 100);

  textSize(18);
  fill(50);
  text(`總得分：${score} 分（答對 ${correctCount} / ${records.length} 題）  |  總用時：${totalSeconds} 秒`, width / 2, 95);

  // 學習目標長條圖
  textSize(15);
  textAlign(LEFT, CENTER);
  text("📊 三大學習目標表現統計：", 80, 135);

  let ly = 165;
  PROJECT.goals.forEach(g => {
    let targetRecords = records.filter(r => QUESTIONS[r.qi].goal === g.id);
    let targetCorrect = targetRecords.filter(r => r.correct).length;
    let ratio = targetRecords.length > 0 ? targetCorrect / targetRecords.length : 0;

    fill(220);
    noStroke();
    rect(80, ly, 420, 22, 4);

    let barColor = ratio >= 0.8 ? STYLE.ok : (ratio >= 0.5 ? STYLE.accent : STYLE.bad);
    fill(barColor);
    rect(80, ly, 420 * ratio, 22, 4);

    fill(40);
    textSize(13);
    text(`${g.name} (${floor(ratio * 100)}%)`, 515, ly + 11);
    ly += 38;
  });

  // 按鈕區
  let wrongCount = records.filter(r => !r.correct).length;
  if (wrongCount > 0) {
    drawButton(width / 2 - 210, 480, 190, 45, STYLE.bad, `錯題再練（${wrongCount} 題）`, 15);
    drawButton(width / 2 + 20, 480, 190, 45, STYLE.primary, "從頭再玩一次", 15);
  } else {
    drawButton(width / 2 - 100, 480, 200, 45, STYLE.primary, "完美通關！再玩一次", 15);
  }
}

// 滑鼠控制
function mousePressed() {
  if (screen === "start") {
    if (mouseX >= width / 2 - 100 && mouseX <= width / 2 + 100 && mouseY >= 420 && mouseY <= 470) {
      startQuiz();
    }
  } else if (screen === "quiz") {
    let qData = QUESTIONS[queue[pos]];

    if (!showExplain && mouseY >= 245 && mouseY <= 245 + qData.options.length * 50) {
      let clickedIdx = floor((mouseY - 245) / 50);
      if (clickedIdx >= 0 && clickedIdx < qData.options.length) {
        selectedOption = clickedIdx;
        showExplain = true;
        let isCorrect = (qData.options[clickedIdx] === qData.answer);
        records.push({ qi: queue[pos], correct: isCorrect });
      }
    }

    if (showExplain && mouseX >= width - 170 && mouseX <= width - 70 && mouseY >= 520 && mouseY <= 560) {
      pos++;
      selectedOption = null;
      showExplain = false;
      if (pos >= queue.length) {
        totalSeconds = floor((millis() - startTime) / 1000);
        screen = "result";
      }
    }
  } else if (screen === "result") {
    let wrongList = records.filter(r => !r.correct).map(r => r.qi);

    if (wrongList.length > 0 && mouseX >= width / 2 - 210 && mouseX <= width / 2 - 20 && mouseY >= 480 && mouseY <= 525) {
      queue = wrongList;
      pos = 0;
      records = [];
      startTime = millis();
      screen = "quiz";
    }
    
    let btnX = wrongList.length > 0 ? width / 2 + 20 : width / 2 - 100;
    if (mouseX >= btnX && mouseX <= btnX + 200 && mouseY >= 480 && mouseY <= 525) {
      startQuiz();
    }
  }
}

function startQuiz() {
  queue = [];
  for (let i = 0; i < QUESTIONS.length; i++) queue.push(i);
  pos = 0;
  records = [];
  selectedOption = null;
  showExplain = false;
  startTime = millis();
  screen = "quiz";
}

function drawButton(x, y, w, h, col, label, txtSize) {
  fill(col);
  noStroke();
  rect(x, y, w, h, 8);
  fill(255);
  textSize(txtSize);
  textAlign(CENTER, CENTER);
  text(label, x + w / 2, y + h / 2);
}