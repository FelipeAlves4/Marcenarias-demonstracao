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
  className,
  children,
  ...rest
}: { msg: string; className?: string; children: React.ReactNode } & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={className} href={`https://wa.me/5514996843335?text=${encodeURIComponent(msg)}`} target="_blank" rel="noopener" {...rest}>
      {children}
    </a>
  );
}
