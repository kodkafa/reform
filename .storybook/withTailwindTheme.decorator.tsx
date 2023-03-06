import { useEffect } from 'react';
export const DEFAULT_THEME = 'light';

export const withTailwindTheme = (
  Story: JSX.IntrinsicAttributes,
  context: { globals: { theme: 'dark' | 'light' } },
) => {
  const { theme } = context.globals;

  useEffect(() => {
    const htmlTag = document.documentElement;

    // Set the "data-mode" attribute on the iFrame html tag
    htmlTag.setAttribute('data-mode', theme || DEFAULT_THEME);
    console.log({ theme });
  }, [theme]);

  // @ts-ignore
  return <Story />;
};
