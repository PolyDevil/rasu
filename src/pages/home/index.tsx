import { component$ } from "@builder.io/qwik";
import c from "clsx";
import styles from "./style.module.css";
import Form from "./form";

interface props {
  class?: string;
}

export default component$<props>((props) => {
  return (
    <div class={c(props.class, styles.rootX)}>
      <section>
        <h1>Проверка компании в реестрах недобросовестных поставщиков</h1>
        <Form />
      </section>
    </div>
  );
});
