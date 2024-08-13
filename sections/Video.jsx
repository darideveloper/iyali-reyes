import Title from '@/components/Title'

export default function Video () {
  return (
    <section 
      id="video"
      className={`
        video
        my-24
        bg-brown
        py-16
      `}
    >
      <div 
        className={`
          video-wapper
          max-w-7xl
          w-full
          mx-auto
          relative
        `}
      >
        <Title
          className={`
            uppercase
            text-white
            text-center
            absolute
            top-1/2
            left-1/2
            transform
            -translate-x-1/2
            -translate-y-1/2
          `}
        >
          Ser para florecer
        </Title>

        <video 
          src="/videos/video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className={`
            w-full
            h-auto
            opacity-50
          `}
        >
          Tu navegador no soporta video HTML5
        </video>

      </div>

    </section>
  )
}