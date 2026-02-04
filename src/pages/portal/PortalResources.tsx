import { useState } from 'react';
import { Card, CardContent } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { Search, Download, FileText, File, Folder, Calendar } from 'lucide-react';

export default function PortalResources() {
  const [searchQuery, setSearchQuery] = useState('');

  const resources = [
    {
      id: 1,
      title: 'ROS2 기초 가이드',
      description: 'ROS2 설치 및 기본 개념',
      category: 'tutorial',
      type: 'pdf',
      size: '2.4 MB',
      author: '김철수',
      date: '2026.01.15',
      downloads: 45
    },
    {
      id: 2,
      title: '자율주행 로봇 프로젝트 보고서',
      description: '2025년 2학기 프로젝트 최종 보고서',
      category: 'project',
      type: 'pdf',
      size: '5.8 MB',
      author: '이영희',
      date: '2025.12.20',
      downloads: 32
    },
    {
      id: 3,
      title: 'Arduino 센서 활용 코드',
      description: '초음파, 적외선 센서 예제',
      category: 'code',
      type: 'zip',
      size: '156 KB',
      author: '박민수',
      date: '2026.01.10',
      downloads: 67
    },
    {
      id: 4,
      title: '로봇 팔 3D 모델링 파일',
      description: 'SolidWorks 파일',
      category: 'design',
      type: 'zip',
      size: '12.3 MB',
      author: '정다은',
      date: '2025.11.28',
      downloads: 28
    },
    {
      id: 5,
      title: '딥러닝 세미나 자료',
      description: 'CNN 기초와 YOLOv8 실습',
      category: 'tutorial',
      type: 'pdf',
      size: '8.7 MB',
      author: '최준호',
      date: '2025.10.15',
      downloads: 89
    },
    {
      id: 6,
      title: '동아리 운영 규정',
      description: '회칙 및 내부 규정',
      category: 'document',
      type: 'pdf',
      size: '450 KB',
      author: '운영진',
      date: '2026.02.01',
      downloads: 123
    },
  ];

  const categories = [
    { value: 'all', label: '전체' },
    { value: 'tutorial', label: '튜토리얼' },
    { value: 'project', label: '프로젝트' },
    { value: 'code', label: '코드' },
    { value: 'design', label: '설계' },
    { value: 'document', label: '문서' },
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || resource.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'pdf':
        return <FileText className="size-5 text-red-600" />;
      case 'zip':
        return <Folder className="size-5 text-yellow-600" />;
      default:
        return <File className="size-5 text-gray-600" />;
    }
  };

  const getCategoryName = (category: string) => {
    return categories.find(c => c.value === category)?.label || category;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-green-600 to-teal-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">자료실</h1>
          <p className="text-green-100">동아리 학습 자료 및 프로젝트 문서</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-8">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Search and Filter */}
          <div className="mb-6">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
              <Input
                type="text"
                placeholder="자료 검색..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            <Tabs value={activeCategory} onValueChange={setActiveCategory}>
              <TabsList>
                {categories.map((category) => (
                  <TabsTrigger key={category.value} value={category.value}>
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          {/* Resources List */}
          <div className="space-y-3">
            {filteredResources.map((resource) => (
              <Card key={resource.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start space-x-4 flex-1">
                      <div className="size-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        {getFileIcon(resource.type)}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold truncate">{resource.title}</h3>
                          <Badge variant="outline" className="flex-shrink-0">
                            {getCategoryName(resource.category)}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{resource.description}</p>
                        
                        <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500">
                          <span>{resource.author}</span>
                          <span>•</span>
                          <span className="flex items-center">
                            <Calendar className="size-3 mr-1" />
                            {resource.date}
                          </span>
                          <span>•</span>
                          <span>{resource.size}</span>
                          <span>•</span>
                          <span className="flex items-center">
                            <Download className="size-3 mr-1" />
                            {resource.downloads}
                          </span>
                        </div>
                      </div>
                    </div>

                    <Button size="sm">
                      <Download className="size-4 mr-2" />
                      다운로드
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}

            {filteredResources.length === 0 && (
              <div className="text-center py-12 text-gray-500">
                검색 결과가 없습니다.
              </div>
            )}
          </div>

          {/* Upload Section - For members */}
          <Card className="mt-8 border-dashed">
            <CardContent className="p-8 text-center">
              <Folder className="size-12 text-gray-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">자료 업로드</h3>
              <p className="text-sm text-gray-600 mb-4">
                동아리원들과 공유할 자료를 업로드하세요
              </p>
              <Button variant="outline">
                파일 업로드
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
