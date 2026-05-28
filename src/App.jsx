import { useEffect, useState } from "react";
import "./App.css";

const WHATSAPP_NUMBER = "201038054378";
const WHATSAPP_URL = "https://wa.me/" + WHATSAPP_NUMBER;
const FACEBOOK_URL = "https://www.facebook.com/share/1CppFupokR/";
const INSTAGRAM_URL =
  "https://www.instagram.com/nilegateeducation?igsh=MWMwdDlwNmt2aDNrcQ==";

function App() {
  const [language, setLanguage] = useState("ar");
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const [studentData, setStudentData] = useState({
    name: "",
    nationality: "",
    grade: "",
    major: "",
  });

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);

  const articles = [
    {
      id: 1,
      title: language === "ar" ? "دليل الدراسة في مصر" : "Study Guide in Egypt",
      text:
        language === "ar"
          ? "خطوات الدراسة في مصر للطلاب الوافدين."
          : "Steps to study in Egypt for international students.",
         
image:
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80",
  
      content:
        language === "ar"
          ? "مصر من أفضل الوجهات التعليمية للطلاب الوافدين بسبب قوة الجامعات وتنوع التخصصات وتكاليف الدراسة المناسبة."
          : "Egypt is one of the best study destinations because of strong universities, many majors, and affordable costs.",
    },
    {
      id: 2,
      title: language === "ar" ? "الأوراق المطلوبة" : "Required Documents",
      text:
        language === "ar"
          ? "أهم المستندات المطلوبة للتقديم."
          : "Important admission documents.",
      image:
 "https://images.unsplash.com/photo-1562774053-701939374585?w=800&auto=format&fit=crop&q=80",
      content:
        language === "ar"
          ? "الأوراق تشمل جواز السفر، شهادة الثانوية، شهادة الميلاد، الصور الشخصية، والتوثيقات المطلوبة."
          : "Documents usually include passport, high school certificate, birth certificate, photos, and required certifications.",
    },
    {
      id: 3,
      title: language === "ar" ? "تكاليف الدراسة والمعيشة" : "Study and Living Costs",
      text:
        language === "ar"
          ? "تعرف على مصاريف الدراسة والمعيشة في مصر."
          : "Learn about tuition and living costs in Egypt.",
          image:
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80",
      content:
        language === "ar"
          ? "تتميز مصر بتكاليف مناسبة مقارنة بدول كثيرة، وتشمل المصروفات الدراسة والسكن والطعام والمواصلات."
          : "Egypt offers affordable costs including tuition, housing, food, transportation, and personal expenses.",
    },
    {
      id: 4,
      title: language === "ar" ? "أفضل التخصصات" : "Best Majors",
      text:
        language === "ar"
          ? "اختيار التخصص المناسب لمستقبلك."
          : "Choosing the right major for your future.",
          image:
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80",
      content:
        language === "ar"
          ? "من أهم التخصصات الطب، طب الأسنان، الصيدلة، الهندسة، العلاج الطبيعي، الحاسبات، وإدارة الأعمال."
          : "Popular majors include Medicine, Dentistry, Pharmacy, Engineering, Physical Therapy, Computer Science, and Business.",
    },
    {
      id: 5,
      title: language === "ar" ? "الجامعات المصرية" : "Egyptian Universities",
      text:
        language === "ar"
          ? "الفرق بين الجامعات الحكومية والخاصة والأهلية."
          : "Public, private, and national universities.",
          image:
  "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&auto=format&fit=crop&q=80",
      content:
        language === "ar"
          ? "تضم مصر جامعات حكومية وخاصة وأهلية، ويختلف الاختيار حسب الميزانية والتخصص والموقع."
          : "Egypt has public, private, and national universities. The choice depends on budget, major, and location.",
    },
    {
      id: 6,
      title: language === "ar" ? "نصائح قبل السفر" : "Tips Before Traveling",
      text:
        language === "ar"
          ? "نصائح مهمة قبل السفر للدراسة في مصر."
          : "Important tips before arriving in Egypt.",
          image:
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80",
      content:
        language === "ar"
          ? "قبل السفر تأكد من الأوراق، السكن، مصاريف أول فترة، ومتابعة حالة القبول."
          : "Before traveling, prepare your documents, housing, initial expenses, and admission status.",
    },
  ];

const universities = [
  { logo: "/universities/cairo.png" },
  { logo: "/universities/ainshams.png" },
  { logo: "/universities/alexandria.png" },
  { logo: "/universities/mansoura.png" },
  { logo: "/universities/helwan.png" },
  { logo: "/universities/azhar.png" },
  { logo: "/universities/tanta.png" },
  { logo: "/universities/assiut.png" },
  { logo: "/universities/zagazig.png" },
  { logo: "/universities/badr.png" },
  { logo: "/universities/galala.png" },
  { logo: "/universities/october6.png" },
];

  const services = [
    {
      icon: "🎓",
      title: language === "ar" ? "اختيار الجامعة" : "University Selection",
      text:
        language === "ar"
          ? "نساعدك في اختيار الجامعة والتخصص المناسب."
          : "We help you choose the right university and major.",
    },
    {
      icon: "📄",
      title: language === "ar" ? "تجهيز الأوراق" : "Document Preparation",
      text:
        language === "ar"
          ? "نراجع ونجهز ملف التقديم بشكل منظم."
          : "We prepare and review your application file.",
    },
    {
      icon: "🏛️",
      title: language === "ar" ? "التقديم الجامعي" : "University Application",
      text:
        language === "ar"
          ? "نساعدك في خطوات التقديم والمتابعة."
          : "We support your university application process.",
    },
    {
      icon: "🤝",
      title: language === "ar" ? "متابعة بعد القبول" : "After Admission",
      text:
        language === "ar"
          ? "نساعدك بعد القبول في التسجيل والاستعداد."
          : "We help after admission with registration and preparation.",
    },
  ];

  const handleInputChange = (e) => {
    setStudentData({
      ...studentData,
      [e.target.name]: e.target.value,
    });
  };

  const sendStudentData = () => {
    const message =
      "مرحبا Nile Gate Education، أريد التقديم للدراسة في مصر" +
      "\nالاسم: " +
      studentData.name +
      "\nالجنسية: " +
      studentData.nationality +
      "\nالمجموع: " +
      studentData.grade +
      "\nالتخصص المطلوب: " +
      studentData.major +
      "\nالمقال: " +
      (selectedArticle ? selectedArticle.title : "");

    window.location.href = WHATSAPP_URL + "?text=" + encodeURIComponent(message);
  };

  return (
    <div className="site">
      <nav className="navbar">
        <a href="#home" className="brand">
          <img src="/logo.png" alt="Nile Gate Education" />
          <span>Nile Gate Education</span>
        </a>

        <div className="nav-actions">
          <button className="lang-btn" onClick={() => setLanguage(language === "ar" ? "en" : "ar")}>
            {language === "ar" ? "EN" : "AR"}
          </button>

          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        </div>

        <div className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#home" onClick={() => setMenuOpen(false)}>{language === "ar" ? "الرئيسية" : "Home"}</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>{language === "ar" ? "من نحن" : "About"}</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>{language === "ar" ? "خدماتنا" : "Services"}</a>
          <a href="#achievements" onClick={() => setMenuOpen(false)}>{language === "ar" ? "إنجازاتنا" : "Achievements"}</a>
          <a href="#testimonials" onClick={() => setMenuOpen(false)}>{language === "ar" ? "آراء الطلاب" : "Testimonials"}</a>
          <a href="#articles" onClick={() => setMenuOpen(false)}>{language === "ar" ? "المقالات" : "Articles"}</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>{language === "ar" ? "تواصل معنا" : "Contact"}</a>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-content">
          <p className="badge">Study in Egypt</p>
          <h1>{language === "ar" ? "ادرس في مصر للوافدين بثقة وأمان" : "Study in Egypt for International Students"}</h1>
          <p>
            {language === "ar"
              ? "نساعدك في اختيار الجامعة المناسبة، تجهيز ملف التقديم، ومتابعة إجراءات القبول خطوة بخطوة."
              : "We help you choose the right university, prepare your application, and complete admission smoothly."}
          </p>
          <a className="main-btn" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            {language === "ar" ? "ابدأ الآن" : "Apply Now"}
          </a>
        </div>
      </section>

 
<section className="universities-strip">
  <div className="universities-track">
    {[...universities, ...universities, ...universities, ...universities].map((uni, index) => (
      <div className="uni-item" key={index}>
        <img src={uni.logo} alt="University logo" />
      </div>
    ))}
  </div>
</section>
      <section id="about" className="section about">
        <div className="section-title">
          <p>{language === "ar" ? "من نحن" : "About Us"}</p>
          <h2>Nile Gate Education</h2>
        </div>

        <div className="about-box">
          <h3>{language === "ar" ? "بوابتك الآمنة للدراسة في مصر" : "Your Trusted Gateway to Study in Egypt"}</h3>
          <p>
            {language === "ar"
              ? "نحن شركة تعليمية متخصصة في خدمات قبول الطلاب الوافدين داخل الجامعات المصرية، نساعد الطلاب وأولياء الأمور في اختيار الجامعة والتخصص وتجهيز المستندات ومتابعة القبول."
              : "We are an educational company specialized in helping international students apply to Egyptian universities."}
          </p>
          <div className="videos-grid">
<video
  controls
  preload="metadata"
  className="company-video"
>
    <source src="/video1.mp4" type="video/mp4" />
  </video>

 <video
  controls
  preload="metadata"
  className="company-video"
>
    <source src="/video2.mp4" type="video/mp4" />
  </video>
</div>
        </div>
      </section>

      <section id="services" className="section services">
        <div className="section-title">
          <p>{language === "ar" ? "خدماتنا" : "Our Services"}</p>
          <h2>{language === "ar" ? "خدمات تعليمية متكاملة" : "Complete Educational Services"}</h2>
        </div>

        <div className="cards-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="achievements" className="section achievements">
        <div className="section-title">
          <p>{language === "ar" ? "إنجازاتنا" : "Achievements"}</p>
          <h2>{language === "ar" ? "أرقام تعكس ثقة الطلاب بنا" : "Numbers Reflect Students Trust"}</h2>
        </div>

        <div className="stats-grid">
          <div><h3>+5000</h3><p>{language === "ar" ? "طالب وافد" : "Students"}</p></div>
          <div><h3>+120</h3><p>{language === "ar" ? "جامعة معتمدة" : "Universities"}</p></div>
          <div><h3>98%</h3><p>{language === "ar" ? "رضا الطلاب" : "Satisfaction"}</p></div>
          <div><h3>52k</h3><p>{language === "ar" ? "دعم ومتابعة" : "Support"}</p></div>
        </div>
      </section>

      <section id="testimonials" className="section testimonials">
        <div className="section-title">
          <p>{language === "ar" ? "آراء الطلاب" : "Testimonials"}</p>
          <h2>{language === "ar" ? "ثقة الطلاب هي نجاحنا الحقيقي" : "Students Trust Is Our Success"}</h2>
        </div>

        <div className="testimonial-grid">
          <div className="testimonial-card">
            <img src="/students/khaled.jpg" alt="Khaled" className="student-img" />
            <h3>خالد السبيعي</h3>
            <span>طالب من السعودية</span>
            <div className="stars">★★★★★</div>
            <p>تجربة ممتازة من أول استشارة حتى الحصول على القبول.</p>
          </div>

          <div className="testimonial-card">
            <img src="/students/badr.jpg" alt="Badr" className="student-img" />
            <h3>بدر المطيري</h3>
            <span>طالب من الكويت</span>
            <div className="stars">★★★★★</div>
            <p>ساعدوني في اختيار الجامعة المناسبة وتجهيز الأوراق بشكل احترافي.</p>
          </div>
        </div>
      </section>

      <section id="articles" className="section articles">
        <div className="section-title">
          <p>{language === "ar" ? "المقالات" : "Articles"}</p>
          <h2>{language === "ar" ? "دليل الدراسة في مصر للوافدين" : "Study Guide in Egypt"}</h2>
        </div>

        <div className="cards-grid articles-grid">
          {articles.map((article) => (
            <article className="article-card" key={article.id}>
              <h3>{article.title}</h3>
              <img
  src={article.image}
  alt={article.title}
  className="article-image"
/>
              <p>{article.text}</p>
              <button className="article-btn" onClick={() => setSelectedArticle(article)}>
                {language === "ar" ? "اقرأ المقال" : "Read Article"}
              </button>
            </article>
          ))}
        </div>

        {selectedArticle && (
          <div className="article-page">
            <button className="close-article" onClick={() => setSelectedArticle(null)}>
              {language === "ar" ? "رجوع" : "Back"}
            </button>

            <h2>{selectedArticle.title}</h2>
            <div className="article-content">{selectedArticle.content}</div>

            <div className="article-form">
              <h3>{language === "ar" ? "سجل بياناتك للتواصل معك" : "Register Your Information"}</h3>

              <input name="name" type="text" placeholder={language === "ar" ? "اسم الطالب" : "Student Name"} value={studentData.name} onChange={handleInputChange} />
              <input name="nationality" type="text" placeholder={language === "ar" ? "الجنسية" : "Nationality"} value={studentData.nationality} onChange={handleInputChange} />
              <input name="grade" type="text" placeholder={language === "ar" ? "المجموع" : "Grade"} value={studentData.grade} onChange={handleInputChange} />
              <input name="major" type="text" placeholder={language === "ar" ? "التخصص المطلوب" : "Desired Major"} value={studentData.major} onChange={handleInputChange} />

              <button className="main-btn" onClick={sendStudentData}>
                {language === "ar" ? "إرسال البيانات عبر واتساب" : "Send via WhatsApp"}
              </button>
            </div>
          </div>
        )}
      </section>

      <section className="section faq">
        <div className="section-title">
          <p>{language === "ar" ? "الأسئلة الشائعة" : "FAQ"}</p>
          <h2>{language === "ar" ? "كل ما تريد معرفته قبل التقديم" : "Everything You Need Before Applying"}</h2>
        </div>

        <div className="faq-list">
          <details>
            <summary>{language === "ar" ? "ما هي الأوراق المطلوبة؟" : "What documents are required?"}</summary>
            <p>{language === "ar" ? "شهادة المؤهل، جواز السفر، شهادة الميلاد، الصور الشخصية، والتوثيقات." : "Academic certificate, passport, birth certificate, photos, and certifications."}</p>
          </details>

          <details>
            <summary>{language === "ar" ? "هل يمكن التقديم في أكثر من جامعة؟" : "Can I apply to more than one university?"}</summary>
            <p>{language === "ar" ? "نعم، يمكن التقديم في أكثر من جامعة لزيادة فرص القبول." : "Yes, you can apply to more than one university."}</p>
          </details>

          <details>
            <summary>{language === "ar" ? "هل توفرون خدمات بعد القبول؟" : "Do you provide post-admission support?"}</summary>
            <p>{language === "ar" ? "نعم، نوفر متابعة بعد القبول تشمل التسجيل والسكن والاستعداد للدراسة." : "Yes, we provide support after admission."}</p>
          </details>
        </div>
      </section>

      <section id="contact" className="cta">
        <h2>{language === "ar" ? "مستعد لاتخاذ الخطوة الأولى؟" : "Ready to Take the First Step?"}</h2>
        <p>{language === "ar" ? "تواصل معنا الآن وابدأ رحلتك الدراسية في مصر." : "Contact us now and start your study journey in Egypt."}</p>
        <a className="main-btn" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
          {language === "ar" ? "ابدأ التقديم الآن" : "Apply Now"}
        </a>
      </section>

      <footer className="footer">
        <h2>Nile Gate Education</h2>
        <p>{language === "ar" ? "ابدأ رحلتك الدراسية الآن مع فريق متخصص." : "Start your study journey with a specialized team."}</p>
        <p>The Fort Business Mall, Downtown, New Capital, Egypt</p>

        <div className="footer-links">
          <a href={FACEBOOK_URL} target="_blank" rel="noreferrer">Facebook</a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">Instagram</a>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">WhatsApp</a>
        </div>

        <span>© 2026 Nile Gate Education. All rights reserved.</span>
      </footer>

      <a className="whatsapp-float" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
        WhatsApp
      </a>
    </div>
  );
}

export default App;