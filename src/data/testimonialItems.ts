export interface TestimonialItem {
  id: string;
  outlet: string;
  type: 'video' | 'link';
  videoUrl?: string;
  externalLink?: string;
  imageUrl?: string;
}

export const testimonialItems: TestimonialItem[] = [
  {
    id: 'testimonial-1',
    outlet: 'Newsmax',
    type: 'link',
    externalLink: '#',
    imageUrl: 'https://placehold.co/400x300',
  },
  {
    id: 'testimonial-2',
    outlet: 'EWTN News',
    type: 'video',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    imageUrl: 'https://placehold.co/400x300',
  },
  {
    id: 'testimonial-3',
    outlet: 'EWTN News',
    type: 'link',
    externalLink: '#',
    imageUrl: 'https://placehold.co/400x300',
  },
  {
    id: 'testimonial-4',
    outlet: 'EOHSJ News Outlet',
    type: 'video',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    imageUrl: 'https://placehold.co/400x300',
  },
  {
    id: 'testimonial-5',
    outlet: 'EWTN News',
    type: 'link',
    externalLink: '#',
    imageUrl: 'https://placehold.co/400x300',
  },
  {
    id: 'testimonial-6',
    outlet: 'EOHSJ News Outlet',
    type: 'video',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    imageUrl: 'https://placehold.co/400x300',
  },
];
