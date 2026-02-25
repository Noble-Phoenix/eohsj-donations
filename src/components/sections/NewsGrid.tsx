import Image from 'next/image';
import { TestimonialItem } from '@/data/testimonialItems';

interface NewsGridProps {
  items: TestimonialItem[];
}

export default function NewsGrid({ items }: NewsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
      {items.map((item) => (
        <div key={item.id} className="h-82 md:h-64 bg-gray-200 rounded-2xl flex flex-col justify-end p-9 overflow-hidden relative group">
          {item.type === 'video' ? (
            <iframe
              src={item.videoUrl}
              title={item.outlet}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <a
              href={item.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 w-full h-full"
            >
              {item.imageUrl && (
                <Image
                  src={item.imageUrl}
                  alt={item.outlet}
                  fill
                  unoptimized
                  className="object-cover rounded-2xl"
                />
              )}
            </a>
          )}
          <div className="bg-amber-400 rounded-tl-2xl rounded-br-2xl px-4 py-2 absolute bottom-4 right-4 z-10">
            <div className="text-zinc-900 text-2xl font-bold">{item.outlet}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
