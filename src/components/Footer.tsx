import './Footer.css'

const images = [
    "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",

    "https://c4.wallpaperflare.com/wallpaper/237/293/295/3-316-16-9-aspect-ratio-s-sfw-wallpaper-preview.jpg",

    "https://c4.wallpaperflare.com/wallpaper/264/666/478/3-316-16-9-aspect-ratio-s-sfw-wallpaper-preview.jpg",

    "https://c4.wallpaperflare.com/wallpaper/578/919/794/3-316-16-9-aspect-ratio-s-sfw-wallpaper-preview.jpg"
]

const Footer:React.FC = () => {
    return (
        <div className="scroll-container">
          {images.map((src, index) => (
            <div className="image-container" key={index}>
              <img  src={src} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </div>
      );
}

export default Footer;