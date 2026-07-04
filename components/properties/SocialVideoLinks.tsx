interface SocialVideoLinksProps {
  instagramUrl: string | null;
  tiktokUrl: string | null;
}

export default function SocialVideoLinks({ instagramUrl, tiktokUrl }: SocialVideoLinksProps) {
  if (!instagramUrl && !tiktokUrl) return null;

  return (
    <div className="flex flex-wrap gap-3">
      {instagramUrl && (
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 text-[13px] tracking-[0.05em] transition-colors hover:bg-[#F5F4F1]"
          style={{
            border: "1px solid #E6E3DE",
            fontFamily: "Inter, system-ui, sans-serif",
            color: "#2D2C2A",
            borderRadius: 2,
          }}
        >
          Instagram
        </a>
      )}
      {tiktokUrl && (
        <a
          href={tiktokUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 text-[13px] tracking-[0.05em] transition-colors hover:bg-[#F5F4F1]"
          style={{
            border: "1px solid #E6E3DE",
            fontFamily: "Inter, system-ui, sans-serif",
            color: "#2D2C2A",
            borderRadius: 2,
          }}
        >
          TikTok
        </a>
      )}
    </div>
  );
}
