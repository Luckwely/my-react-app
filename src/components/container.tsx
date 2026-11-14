import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
}

export default function Container({ children }: Props) {
  return (
    <div className="py-4 mt-12 px-12">{children}</div>
  )
}
