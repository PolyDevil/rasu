import { component$ } from "@builder.io/qwik";
import { routeAction$, type DocumentHead } from "@builder.io/qwik-city";

import Page from "~/pages/home";

export type report = {
  name: string;
  link: string;
  uploadedAt: string;
};

export const useCheckAgent = routeAction$(async () => {
  /* no need to send actual file
  also check the issue https://github.com/BuilderIO/qwik/issues/3190 to be resolved

  type form = {
    file: File;
    fegeralRegistry?: "on";
    industryRegistry?: "on";
  };

  const body = new FormData();
  // @ts-ignore
  body.append("file", data.file);

  if ("fegeralRegistry" in data) {
    // @ts-ignore
    body.append("fegeralRegistry", true);
  }

  if ("industryRegistry" in data) {
    // @ts-ignore
    body.append("industryRegistry", true);
  }
  */

  const response = await fetch(
    `https://polydevil-rasu.builtwithdark.com/agent/check`,
    {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  const d = await response.json();

  if (Array.isArray(d)) {
    return { data: d as Array<report>, status: "success" };
  }

  return {
    status: "error",
  };
});

export default component$(() => {
  return <Page />;
});

export const head: DocumentHead = {
  title: "Rasu test task",
  meta: [
    {
      name: "description",
      content: "Simple form",
    },
  ],
};
