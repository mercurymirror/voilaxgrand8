import type { ReactNode } from 'react';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full px-1 text-gray-900 antialiased">
    {props.meta}

    <div className="mx-auto max-w-screen-md">
      <div className="border-b border-gray-300">
     
       
      </div>

      <div className="content py-5 text-xl">{props.children}</div>
    </div>
  </div>
);

export { Main };
