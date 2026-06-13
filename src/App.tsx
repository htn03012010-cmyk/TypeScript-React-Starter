import "./App.css";

const flashcards = [
  { q: "AI BOOK BUDDY giúp gì?", a: "Giúp học sinh THPT đọc sâu, nhớ lâu, tư duy phản biện." },
  { q: "Đầu vào có thể là gì?", a: "Tên sách, đoạn văn, hoặc nội dung cần phân tích." },
  { q: "Điểm mạnh nhất?", a: "Trả lời theo cấu trúc học tập rõ ràng, dễ ôn." },
];

const quiz = [
  {
    question: "Mục tiêu chính của AI BOOK BUDDY là gì?",
    options: ["A. Giải trí", "B. Đọc để hiểu và phát triển tư duy", "C. Tin tức", "D. Cá cược"],
    answer: "B",
  },
  {
    question: "Đối tượng chính?",
    options: ["A. Mầm non", "B. THCS", "C. Học sinh THPT", "D. Người cao tuổi"],
    answer: "C",
  },
];

export default function App() {
  const copyLink = async () => {
    await navigator.clipboard.writeText(window.location.href);
    alert("Đã copy link để chia sẻ ✅");
  };

  return (
    <div className="page">
      <section className="hero">
        <div className="badge">NGƯỜI BẠN ĐỒNG HÀNH TRÊN HÀNH TRÌNH TRI THỨC</div>
        <h1>AI BOOK BUDDY</h1>
        <h2>Dành riêng cho học sinh THPT</h2>
        <p>
          AI BOOK BUDDY giúp bạn đọc không chỉ để biết nội dung, mà để hiểu sâu, phản biện sắc hơn
          và tự học thông minh hơn từ mỗi cuốn sách.
        </p>
        <div className="actions">
          <button className="btn primary" onClick={copyLink}>Lấy link để chia sẻ</button>
        </div>
      </section>

      <section className="card">
        <h3>📖 Tóm tắt</h3>
        <p>AI BOOK BUDDY biến việc đọc sách thành hành trình tư duy. Không chỉ tóm tắt mà còn phân tích, liên hệ thực tế và ôn tập.</p>
      </section>

      <section className="card">
        <h3>📝 Ý chính</h3>
        <ul>
          <li>Hiểu sách sâu hơn</li>
          <li>Ghi nhớ tốt hơn bằng flashcard</li>
          <li>Rèn phản biện qua câu hỏi tư duy</li>
          <li>Liên hệ học tập và cuộc sống THPT</li>
        </ul>
      </section>

      <section className="card">
        <h3>🔍 Phân tích nội dung</h3>
        <ul>
          <li>Chủ đề chính: đọc để trưởng thành</li>
          <li>Chủ đề phụ: tự học, kỷ luật, định hướng bản thân</li>
          <li>Ý tưởng cốt lõi: hiểu bản chất thay vì học thuộc</li>
        </ul>
      </section>

      <section className="card">
        <h3>💡 Thông điệp</h3>
        <ul>
          <li>Đọc để hiểu.</li>
          <li>Hiểu để trưởng thành.</li>
          <li>Tư duy để bứt phá.</li>
        </ul>
      </section>

      <section className="card">
        <h3>🌱 Bài học rút ra</h3>
        <ul>
          <li>Đạo đức: biết lắng nghe và tôn trọng góc nhìn khác.</li>
          <li>Kỹ năng sống: quản lý thời gian, học có mục tiêu.</li>
          <li>Học tập: chủ động ghi chú, tóm tắt, phản biện.</li>
          <li>Phát triển bản thân: dám thử, dám sửa sai.</li>
        </ul>
      </section>

      <section className="card">
        <h3>🧠 Mở rộng tư duy</h3>
        <ul>
          <li>Nếu không có áp lực điểm số, bạn sẽ đọc cuốn nào đầu tiên?</li>
          <li>Bạn đang đọc để thi hay đọc để thay đổi bản thân?</li>
          <li>Một thói quen nhỏ nào bạn có thể bắt đầu từ hôm nay?</li>
        </ul>
      </section>

      <section className="card">
        <h3>🌍 Liên hệ thực tế</h3>
        <p>Áp dụng trực tiếp cho học tập THPT, định hướng nghề nghiệp, quản lý mạng xã hội và xây tư duy tự học bền vững.</p>
      </section>

      <section className="card">
        <h3>🗺️ Sơ đồ tư duy</h3>
        <pre>{`📚 AI BOOK BUDDY
├── Nội dung chính
├── Ý tưởng nổi bật
├── Thông điệp
├── Bài học
└── Liên hệ thực tế`}</pre>
      </section>

      <section className="card">
        <h3>🎯 Flashcard</h3>
        {flashcards.map((f) => (
          <div key={f.q} className="qa">
            <strong>Q:</strong> {f.q}<br />
            <strong>A:</strong> {f.a}
          </div>
        ))}
      </section>

      <section className="card">
        <h3>📊 Trắc nghiệm</h3>
        {quiz.map((q) => (
          <div key={q.question} className="qa">
            <p><strong>{q.question}</strong></p>
            {q.options.map((o) => <p key={o}>{o}</p>)}
            <p><strong>Đáp án:</strong> {q.answer}</p>
          </div>
        ))}
      </section>
    </div>
  );
}* { box-sizing: border-box; }
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #faf5e6;
  color: #0f1d3a;
}
.page {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
}
.hero, .card {
  background: #fffef8;
  border: 1px solid #ddd8c8;
  border-radius: 18px;
  padding: 18px;
  margin-bottom: 14px;
}
.badge {
  display: inline-block;
  border: 1px solid #d8d8d0;
  border-radius: 999px;
  padding: 8px 12px;
  font-size: 12px;
  font-weight: 700;
}
h1 { margin: 10px 0 0; font-size: 46px; }
h2 { margin: 6px 0 14px; font-size: 40px; }
h3 { margin-top: 0; }
p, li { font-size: 18px; line-height: 1.5; }
ul { margin: 8px 0 0 20px; }
.actions { margin-top: 12px; }
.btn {
  border: 1px solid #0e1b3f;
  border-radius: 999px;
  padding: 12px 20px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
}
.btn.primary { background: #0e1b3f; color: #fff; }
.qa {
  border: 1px solid #e3dfd3;
  border-radius: 12px;
  padding: 10px;
  margin-top: 10px;
}
pre {
  white-space: pre-wrap;
  font-size: 16px;
  margin: 0;
}cd C:\Users\PC\ai-book-buddy
npm run build
npx vercel deploy --prod --yes
