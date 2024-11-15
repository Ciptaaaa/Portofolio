import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import { Cloud, fetchSimpleIcons, renderSimpleIcon } from "react-icon-cloud";
import colorSharp from "../assets/img/banner-bg.png";

const renderCustomIcon = (icon, theme, rotation) => {
  const bgHex = theme === "light" ? "#f3f2ef" : "#080510";
  const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff";
  const minContrastRatio = theme === "dark" ? 3 : 1.2;

  // Cek apakah ini GitHub atau Visual Studio Code
  if (icon.title === "github" || icon.title === "visualstudiocode") {
    return renderSimpleIcon({
      icon,
      bgHex: "#ffffff", // Latar belakang putih untuk GitHub dan Visual Studio Code
      fallbackHex: "#f3f2ef", // Pastikan fallback juga putih
      minContrastRatio: 3, // Meningkatkan kontras untuk GitHub
      size: 42,
      aProps: {
        href: undefined,
        target: undefined,
        rel: undefined,
        className: "icon-github",
        onClick: (e) => e.preventDefault(),
        style: {
          transform: `rotate(${rotation}deg)`,
          transition: "transform 0.3s ease",
          borderRadius: "50%", // Memastikan ikon berbentuk bulat
        },
      },
    });
  }

  // Default untuk ikon lainnya
  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e) => e.preventDefault(),
      style: {
        transform: `rotate(${rotation}deg)`,
        transition: "transform 0.3s ease",
      },
    },
  });
};

const cloudProps = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
};

export function IconCloud({ iconSlugs }) {
  const [data, setData] = useState(null);
  const { theme } = useTheme();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs })
      .then(setData)
      .catch((error) => {
        console.error("Error fetching icons:", error);
      });
  }, [iconSlugs]);

  // Menentukan ukuran container berdasarkan lebar jendela
  const containerWidth = windowWidth < 768 ? "60vw" : "40vw";

  // Menyusun ikon dalam formasi melingkar
  const renderedIcons = useMemo(() => {
    if (!data) return null;

    const radius = 80;
    const angleStep = (2 * Math.PI) / data.simpleIcons.length;

    return Object.values(data.simpleIcons).map((icon, index) => {
      const angle = angleStep * index;
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);

      return (
        <div
          key={icon.slug || icon.title || index} // Gunakan key unik
          className="icon-item"
          style={{
            transform: `translate(${x}px, ${y}px)`, // Posisikan ikon dalam lingkaran
          }}
        >
          {renderCustomIcon(icon, theme || "light", 0)} {/* Render ikon */}
        </div>
      );
    });
  }, [data, theme]);

  return (
    <Cloud {...cloudProps}>
      <div
        className="icon-cloud-container"
        style={{
          position: "relative",
          width: containerWidth, // Responsif berdasarkan ukuran layar
          height: containerWidth,
        }}
      >
        {renderedIcons}
      </div>
    </Cloud>
  );
}

export const Skills = () => {
  const slugs = [
    "typescript",
    "javascript",
    "react",
    "html5",
    "css3",
    "nodedotjs",
    "nextdotjs",
    "vercel",
    "git",
    "netlify",
    "visualstudiocode",
    "mongodb",
    "github",
    "stripe",
    "postgresql",
    "supabase",
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2 className="tagline">Skills</h2>
              <IconCloud iconSlugs={slugs} />
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="bg" />
    </section>
  );
};
