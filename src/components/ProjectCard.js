import { Col } from "react-bootstrap";
import navIcon2 from "../assets/img/nav-icon2.svg"; // GitHub Icon
import navIcon3 from "../assets/img/vercel-icon.svg"; // Vercel Icon
import navIcon4 from "../assets/img/netlify-icon.svg"; // Netlify Icon

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  Githuburl,
  Githuburl1,
  Githuburl2,
  Githuburl3,
  vercelurl,
  netlifyurl,
  vercelurl2,
  vercelurl3,
}) => {
  // Array URL untuk GitHub, Vercel, dan Netlify
  const githubUrls = [Githuburl, Githuburl1, Githuburl2, Githuburl3];
  const vercelUrls = [vercelurl, vercelurl2, vercelurl3];
  const netlifyUrls = [netlifyurl];

  // Fungsi untuk merender tombol sosial (GitHub, Vercel, Netlify)
  const renderSocialLinks = (urls, icon, className, altText) => {
    return urls.map((url, index) => {
      if (!url) return null; // Abaikan jika URL kosong
      return (
        <div className="social-icon1" key={index}>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={className}
          >
            <img src={icon} alt={altText} />
          </a>
        </div>
      );
    });
  };

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>

      {/* Render GitHub Links */}
      {renderSocialLinks(githubUrls, navIcon2, "btn btn-github", "GitHub Icon")}

      {/* Render Vercel Links */}
      {renderSocialLinks(vercelUrls, navIcon3, "btn btn-vercel", "Vercel Icon")}

      {/* Render Netlify Links */}
      {renderSocialLinks(netlifyUrls, navIcon4, "btn btn-vercel", "Netlify Icon")}
    </Col>
  );
};
