import { cn } from "@/lib/utils";

export default function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  delay = 10,
  radius = 50,
  path = true
}) {
  return (<>
    {path && (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        className="pointer-events-none absolute inset-0 size-full">
        <circle
          className="stroke-black/10 stroke-1 dark:stroke-white/10"
          cx="50%"
          cy="50%"
          r={radius}
          fill="none" />
      </svg>
    )}
    <div
      style={
        {
          "--duration": duration,
          "--radius": radius,
          "--delay": -delay
        }
      }
      className={cn(
        "absolute flex size-full transform-gpu animate-orbit items-center justify-center rounded-full border border-zinc-200 bg-black/10 [animation-delay:calc(var(--delay)*1000ms)] dark:bg-white/10 dark:border-zinc-800",
        { "[animation-direction:reverse]": reverse },
        className
      )}>
      {children}
    </div>
  </>);
}
