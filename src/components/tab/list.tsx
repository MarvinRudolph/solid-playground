import type { Component, JSX } from 'solid-js';

export const TabList: Component<JSX.HTMLAttributes<HTMLUListElement>> = (props) => {
  return (
    <ul
      ref={props.ref}
      class={`flex tabs flex-wrap items-center list-none bg-white dark:bg-solid-medium m-0 ${props.class || ''
        }`}
    >
      {props.children}
    </ul>
  );
};
