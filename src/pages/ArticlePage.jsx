import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getArticles } from "../data/articles";
import ReactMarkdown from "react-markdown";
import { Helmet } from "react-helmet-async";
function ArticlePage() {
  const { id } = useParams();
  useEffect(() => {
  window.scrollTo(0, 0);
}, [id]);

  const language = "ar";
  const articles = getArticles(language);
  const article = articles.find((item) => item.id === Number(id));
  const siteUrl = "https://nile-gate-education.vercel.app";
const articleUrl = `${siteUrl}/article/${id}`;

const seoTitle = article
  ? `${article.title} | Nile Gate Education`
  : "Nile Gate Education";

const seoDescription = article
  ? article.text
  : "الدراسة في مصر للوافدين مع Nile Gate Education";
 const [studentData, setStudentData] = useState({
  name: "",
  phone: "",
  nationality: "",
  qualification: "",
  major: "",
});

const handleInputChange = (e) => {
  setStudentData({
    ...studentData,
    [e.target.name]: e.target.value,
  });
};

  if (!article) {
    return (
      <div className="article-page">
        <h1>المقال غير موجود</h1>

      </div>
    );
  }

  return (
    <>
  <Helmet>
    <title>{seoTitle}</title>

    <meta
      name="description"
      content={seoDescription}
    />

    <link rel="canonical" href={articleUrl} />

    <meta property="og:title" content={seoTitle} />
    <meta property="og:description" content={seoDescription} />
    <meta property="og:url" content={articleUrl} />
    <meta property="og:type" content="article" />

    {article?.image && (
      <meta property="og:image" content={article.image} />
    )}

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={seoTitle} />
    <meta name="twitter:description" content={seoDescription} />

    {article?.image && (
      <meta name="twitter:image" content={article.image} />
    )}
  </Helmet>
    <div className="article-page">
    <Link to="/" className="close-article">
  ← الرجوع إلى المقالات
</Link>

    

      <h1>{article.title}</h1>

      <img
        src={article.image}
        alt={article.title}
        className="article-image"
      />

      <div className="article-content">
  <ReactMarkdown>
    {article.content}
  </ReactMarkdown>
</div>
<div className="article-lead-form">
  <h3>سجل بياناتك للتقديم</h3>


<input
 type="text"
 placeholder="الاسم" 
 />

  <input
    type="text"
    placeholder="رقم الواتساب"
  />

  <input
    type="text"
    placeholder="الجنسية"
  />

  <input
    type="text"
    placeholder="المؤهل الدراسي"
  />

  <input
    type="text"
    placeholder="التخصص المطلوب"
  />

 <button
  onClick={() => {
    const message =
`طلب تقديم جديد من مقال

الاسم: ${studentData.name}
رقم الواتساب: ${studentData.phone}
الجنسية: ${studentData.nationality}
المؤهل الدراسي: ${studentData.qualification}
التخصص المطلوب: ${studentData.major}

المقال:
${article.title}`;

    window.open(
      `https://wa.me/201026555914?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  }}
>
  ارسل بياناتك للتقديم
</button>
</div>
</div>
</>
);
}

export default ArticlePage;