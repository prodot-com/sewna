import { BlurFade } from "../magicui/blur-fade";

const images = Array.from({ length: 6 }, (_, i) => {
  return `/img${i + 1}.jpeg`
})

export function BlurFadeDemo() {
  return (
    <section id="photos">
      <div className="columns-3 gap-2 sm:columns-3">
        {images.map((imageUrl, idx) => (
          <BlurFade key={imageUrl} delay={0.25 + idx * 0.15} inView>
            <img
              className="mb-4 size-full rounded-lg object-contain hover:scale-105 transition-transform"
              src={imageUrl}
              alt={`Random stock image ${idx + 1}`}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  )
}