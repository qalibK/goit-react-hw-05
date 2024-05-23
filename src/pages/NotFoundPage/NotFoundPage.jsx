import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <div className={css.main}>
      <h1>Not Found Page 404</h1>
      <p className={css.text}>
        Please visit <Link className={css.link} to="/">Home Page</Link>
      </p>
    </div>
  );
}
