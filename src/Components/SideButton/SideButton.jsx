import { useEffect } from "react";
import "./SideButton.css";
export default function SideButton() {
  useEffect(() => {
    const upToHome = document.getElementById("upToHome");
    window.onscroll = function () {
      if (window.scrollY > 500) {
        upToHome.classList.add("showBtn");
      } else {
        upToHome.classList.remove("showBtn");
      }
    };
    upToHome.addEventListener("click", function () {
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
    });
  }, []);

  return (
    <div>
      <button className="btn btn-info" id="upToHome">
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    </div>
  );
}
