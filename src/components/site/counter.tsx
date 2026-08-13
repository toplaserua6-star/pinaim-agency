import { useEffect, useState } from "react";
import { useReveal } from "@/hooks/use-reveal";

export function Counter({
  value,
  suffix = "",
  prefix = "",
  decimals = 0,
}: {
  value: number;
  suffix?: string | undefined;
  prefix?: string | undefined;
  decimals?: number | undefined;
}) {
  const { ref, visible } = useReveal<HTMLSpanElement>(0.4);
  const [n, setN] = useState(0);
  const [fallback, setFallback] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setFallback(true), 1500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!visible && !fallback) return;
    const start = performance.now();
    const dur = 1400;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
      else setN(value);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [visible, fallback, value]);

  return (
    <span ref={ref}>
      {prefix}
      {n.toLocaleString("ru-RU", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}