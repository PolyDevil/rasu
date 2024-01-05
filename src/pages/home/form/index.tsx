import { component$ } from "@builder.io/qwik";
import { Form } from "@builder.io/qwik-city";
import c from "clsx";

import { useCheckAgent, type report } from "~/routes";

import Output from "./output";
import styles from "./style.module.css";

interface props {
  class?: string;
}

export default component$<props>((props) => {
  const action = useCheckAgent();

  return (
    <Form class={c(props.class, styles.rootX)} action={action}>
      <label>
        <span>Загрузить файл со списком поставщиков</span>
        <input name="file" type="file" required />
      </label>

      <fieldset>
        <legend>Проверить в следующих реестрах</legend>

        <label>
          <input name="fegeralRegistry" type="checkbox" />
          <span>
            <em>Федеральный</em> реестр недобросовестных поставщиков
          </span>
        </label>

        <label>
          <input name="industryRegistry" type="checkbox" />
          <span>
            <em>Отраслевой</em> реестр недобросовестных поставщиков
          </span>
        </label>
      </fieldset>

      <button>Проверить</button>

      {action.value?.status === "error" ? (
        <div>Произошла ошибка, попробуйте еще раз</div>
      ) : null}

      {action.value?.status === "success" ? (
        <Output data={action.value.data as Array<report>} />
      ) : null}
    </Form>
  );
});
