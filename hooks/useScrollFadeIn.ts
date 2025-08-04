import { useEffect, useRef } from "react";

export default function useScrollFadeIn<T extends HTMLElement>(threshold = 0.1) {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    node.style.opacity = "0";
    node.style.transform = "translateY(20px)";
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            node.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
            node.style.opacity = "1";
            node.style.transform = "translateY(0)";
          }
        });
      },
      { threshold }
    );
    io.observe(node);
    return () => io.unobserve(node);
  }, [threshold]);
  return { ref };
}