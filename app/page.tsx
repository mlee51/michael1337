export default function Home() {
  return (
    <main className="w-full h-screen flex justify-center items-center">
      <div className="relative w-[315px] h-[560px]">
        <iframe
          width="315"
          height="560"
          src="https://www.youtube.com/embed/9sCYDZ877Pc?si=1Wz06ttPzRl44yok"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </main>
  );
}
