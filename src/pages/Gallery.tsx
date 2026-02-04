import { useState } from 'react';
import { Badge } from '@/app/components/ui/badge';
import { Dialog, DialogContent } from '@/app/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop',
      title: '2025 로봇 경진대회',
      category: 'competition',
      date: '2025.11'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?w=800&h=600&fit=crop',
      title: '자율주행 로봇 프로젝트',
      category: 'project',
      date: '2025.09'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      title: 'AI 세미나',
      category: 'seminar',
      date: '2025.10'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
      title: '드론 제작 워크샵',
      category: 'workshop',
      date: '2025.08'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?w=800&h=600&fit=crop',
      title: '정기 총회',
      category: 'event',
      date: '2025.09'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800&h=600&fit=crop',
      title: '로봇 팔 프로젝트',
      category: 'project',
      date: '2025.06'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
      title: 'ROS 스터디',
      category: 'seminar',
      date: '2025.07'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop',
      title: '대학 로봇 박람회',
      category: 'event',
      date: '2025.05'
    },
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  const filteredImages = activeCategory === 'all' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Badge className="mb-4">Gallery</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              갤러리
            </h1>
            <p className="text-xl text-gray-600">
              KOBOT의 다양한 활동 모습을 사진으로 만나보세요
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
            <TabsList className="mb-8">
              <TabsTrigger value="all">전체</TabsTrigger>
              <TabsTrigger value="project">프로젝트</TabsTrigger>
              <TabsTrigger value="competition">대회</TabsTrigger>
              <TabsTrigger value="seminar">세미나</TabsTrigger>
              <TabsTrigger value="workshop">워크샵</TabsTrigger>
              <TabsTrigger value="event">행사</TabsTrigger>
            </TabsList>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredImages.map((image) => (
                <div
                  key={image.id}
                  className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer bg-gray-100"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="font-semibold mb-1">{image.title}</h3>
                      <p className="text-sm text-gray-300">{image.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredImages.length === 0 && (
              <div className="text-center py-12 text-gray-500">
                해당 카테고리의 사진이 없습니다.
              </div>
            )}
          </Tabs>
        </div>
      </section>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Gallery image"
              className="w-full h-auto"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
