import { component$ } from "@builder.io/qwik";
import c from "clsx";
import styles from "./style.module.css";

import { type report } from "~/routes";

interface props {
  class?: string;
  data: Array<report>;
}

const intl = new Intl.DateTimeFormat('ru-RU')

export default component$<props>((props) => {
  return (
    <section class={c(props.class, styles.rootX)}>
      <h2>Скачать отчет</h2>

      <ol>
        {(props.data).map(e => <li key={e.name}>
          <a href={e.link} target="_blank" download={`${e.name}_${intl.format(new Date(e.uploadedAt))}`}>
            <span>
              {e.name}
            </span>

            <time dateTime={e.uploadedAt}>
              {intl.format(new Date(e.uploadedAt))}
            </time>
          </a>
        </li>)}
      </ol>
    </section>
  );
});
