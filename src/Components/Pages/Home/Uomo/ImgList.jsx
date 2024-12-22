import insta1 from "../../../../assets/image/insta1.webp";
import insta2 from "../../../../assets/image/insta2.webp";
import insta3 from "../../../../assets/image/insta3.webp";
import insta4 from "../../../../assets/image/insta4.webp";
import insta5 from "../../../../assets/image/insta5.webp";
import insta6 from "../../../../assets/image/insta6.webp";
import insta7 from "../../../../assets/image/insta7.webp";
import insta8 from "../../../../assets/image/insta8.webp";
import insta9 from "../../../../assets/image/insta9.webp";
import insta10 from "../../../../assets/image/insta10.webp";
import insta11 from "../../../../assets/image/insta11.webp";
import insta12 from "../../../../assets/image/insta12.webp";
export default function ImgList() {
  const images = [
    insta1,
    insta2,
    insta3,
    insta4,
    insta5,
    insta6,
    insta7,
    insta8,
    insta9,
    insta10,
    insta11,
    insta12,
  ];
  return (
    <>
      <div className="row">
        {images.map((image, index) => (
          <div key={index} className="col-lg-2 col-md-3 col-sm-4">
            <div className="card imageList">
              <img src={image} alt={`image-${index}`} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
