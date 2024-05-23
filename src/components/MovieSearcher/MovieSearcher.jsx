import { Formik, Form, Field } from "formik";
import css from "./MovieSearcher.module.css";

export default function MovieSearcher({ onSearch }) {
  return (
    <div>
      <h1>MovieSearcher</h1>
      <Formik
        initialValues={{ query: "" }}
        onSubmit={(values, actions) => {
          if (values.query.trim() == "") {
            console.log("Enter something");
          }
          onSearch(values.query);
          actions.resetForm();
        }}
      >
        <Form className={css.form}>
          <Field className={css.input} type="text" name="query" placeholder="Search movie" />
          <button className={css.button} type="submit">Search</button>
        </Form>
      </Formik>
    </div>
  );
}
