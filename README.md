# COAI Discord Bot 🚀

### ⚡ Chức năng
- Trả giá **$COAI** theo thời gian thực từ CoinGecko khi tag `@COAI`
- Hiển thị **% thay đổi 24h**
- Hiển thị **CA:** `0x0A8D6C86e1bcE73fE4D0bD531e1a567306836EA5`
- Lệnh `$ping` để kiểm tra bot còn hoạt động

### 🛠 Cách deploy trên Vercel
1. Fork hoặc upload repo này lên GitHub.
2. Truy cập [https://vercel.com/new](https://vercel.com/new)
3. Import project từ GitHub.
4. Vào tab **Environment Variables** → thêm:
   - **KEY:** `TOKEN`
   - **VALUE:** *Your Discord Bot Token*
5. Deploy → Vercel sẽ tạo link ví dụ:
   https://coai-bot.vercel.app/api/start
6. Dùng [UptimeRobot](https://uptimerobot.com) để ping link này 5 phút/lần → giữ bot chạy 24/7.

### ✅ Kiểm tra hoạt động
- Vào Discord → gõ `$ping` → bot trả lời `🏓 Pong! Bot COAI vẫn online!`
- Tag `@COAI` → bot trả về giá hiện tại và CA.
https://coai-bot-vercel.vercel.app/api/start
  .
