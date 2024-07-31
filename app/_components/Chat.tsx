'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    chatimSettings: { projectId: string };
  }
}

export default function Chat() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.innerHTML = `window.chatimSettings = { projectId: '66a9fc7f2f09caf9e3c90625' };`;
      document.body.appendChild(script);
      const script2 = document.createElement('script');
      script2.src = '//chatimwidget.com/widget.js';
      script2.async = true;
      document.body.appendChild(script2);
      window.chatimSettings = {
        projectId: process.env.NEXT_PUBLIC_CHATIM_PROJECT_ID!,
      };
    }
  }, []);

  return (
    <>
      {/* <script type='text/javascript'>
        {(Window.chatimSettings = { projectId: '66a9fc7f2f09caf9e3c90625' })};
      </script> */}
      <script async src='//chatimwidget.com/widget.js'></script>

      {/* <script type='text/javascript'>
        {' '}
        {(window.chatimSettings = { projectId: '66a9fc7f2f09caf9e3c90625' })};
      </script>
      <script async src='//chatimwidget.com/widget.js'>
        {' '}
      </script> */}
    </>
  );
}
