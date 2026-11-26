// script.js

// 首頁「遊戲開始」互動
document.addEventListener('DOMContentLoaded', function () {
  const startBtn = document.getElementById('startGameBtn');
  const gameMessage = document.getElementById('gameMessage');

  if (startBtn && gameMessage) {
    const games = [
      '🎲 遊戲開始！你走進了街機區，選擇了經典格鬥遊戲！',
      '🕹️ 遊戲開始！你拿起 Switch 手掣，準備挑戰瑪利歐賽車！',
      '🎯 遊戲開始！你和朋友組隊，開始了一場桌遊策略對決！',
      '🏆 遊戲開始！電競比賽即將開始，快來報名參加！',
      '🎮 遊戲開始！你試玩了最新 PS5 大作，畫面超震撼！'
    ];

    startBtn.addEventListener('click', function () {
      const randomIndex = Math.floor(Math.random() * games.length);
      gameMessage.textContent = games[randomIndex];
      // 短暫動畫效果
      gameMessage.style.opacity = '0';
      setTimeout(() => {
        gameMessage.style.opacity = '1';
      }, 50);
    });
  }

  // 聯絡表單互動
  const contactForm = document.getElementById('contactForm');
  const formFeedback = document.getElementById('formFeedback');

  if (contactForm && formFeedback) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !email || !message) {
        formFeedback.textContent = '⚠️ 請填寫所有欄位。';
        formFeedback.style.color = '#ff8a8a';
        return;
      }

      // 簡單電郵格式檢查
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        formFeedback.textContent = '⚠️ 請輸入有效的電子郵件地址。';
        formFeedback.style.color = '#ff8a8a';
        return;
      }

      // 模擬送出成功
      formFeedback.textContent = `✅ 多謝 ${name}！你的訊息已送出，我們會盡快回覆到 ${email}。`;
      formFeedback.style.color = '#a0f0a0';
      contactForm.reset();

      // 3 秒後清除訊息
      setTimeout(() => {
        formFeedback.textContent = '';
      }, 5000);
    });
  }
});
