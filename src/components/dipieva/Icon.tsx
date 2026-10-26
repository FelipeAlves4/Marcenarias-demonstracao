import type { AnchorHTMLAttributes, ReactNode } from "react";
import { linkWhats } from "@/lib/dipieva-config";
import { SPRITE } from "./sprite";

export function Sprite() {
  return (
    <svg
      width="0"
      height="0"
      style={{ position: "absolute" }}
      aria-hidden="true"
      focusable="false"
      dangerouslySetInnerHTML={{ __html: SPRITE }}
    />
  );
}

export function Icon({ id, className, width, height }: { id: string; className?: string; width?: number; height?: number }) {
  return (
    <svg className={className} width={width} height={height} aria-hidden="true">
      <use href={`#${id}`} />
    </svg>
  );
}

export function WaLink({
  msg,
  children,
  ...rest
}: { msg: string; children: ReactNode } & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a href={linkWhats(msg)} target="_blank" rel="noopener" {...rest}>
      {children}
    </a>
  );
}
