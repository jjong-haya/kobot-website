import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Textarea } from '@/app/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { FileText, Eye, Edit, Trash2, Plus } from 'lucide-react';
import { toast } from 'sonner';

export default function AdminNotices() {
  const [isCreating, setIsCreating] = useState(false);

  const drafts = [
    { id: 1, title: '3월 정기 세미나 안내', author: '교육팀', date: '2026.02.05', status: 'draft' },
    { id: 2, title: '동아리 회칙 개정안', author: '운영진', date: '2026.02.03', status: 'review' },
  ];

  const published = [
    { id: 3, title: '2026년 1학기 정기 총회 안내', author: '운영진', date: '2026.02.01', views: 152, visibility: 'public' },
    { id: 4, title: '신입 부원 모집', author: '운영진', date: '2026.02.03', views: 245, visibility: 'public' },
    { id: 5, title: '장비 관리 규정 변경', author: '장비팀', date: '2026.01.30', views: 87, visibility: 'member' },
  ];

  const handleCreateNotice = () => {
    toast.success('공지사항이 저장되었습니다.');
    setIsCreating(false);
  };

  const handlePublish = (id: number) => {
    toast.success('공지사항이 발행되었습니다.');
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'draft':
        return <Badge variant="outline">초안</Badge>;
      case 'review':
        return <Badge className="bg-yellow-600">검토중</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  const getVisibilityBadge = (visibility: string) => {
    switch (visibility) {
      case 'public':
        return <Badge className="bg-green-600">전체 공개</Badge>;
      case 'member':
        return <Badge className="bg-blue-600">멤버 공개</Badge>;
      case 'exec':
        return <Badge className="bg-purple-600">운영진만</Badge>;
      default:
        return <Badge>{visibility}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <Badge className="mb-2 bg-white/20 text-white">운영진 관리</Badge>
              <h1 className="text-3xl font-bold mb-2">공지 발행 관리</h1>
              <p className="text-blue-100">공지사항 작성 및 발행</p>
            </div>
            <Button onClick={() => setIsCreating(true)} size="lg" variant="secondary">
              <Plus className="size-5 mr-2" />
              새 공지 작성
            </Button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8">
        <div className="container mx-auto px-4 max-w-6xl">
          {isCreating ? (
            <Card>
              <CardHeader>
                <CardTitle>공지사항 작성</CardTitle>
                <CardDescription>새로운 공지사항을 작성합니다</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">제목</Label>
                  <Input id="title" placeholder="공지사항 제목" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">카테고리</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="카테고리 선택" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">일반</SelectItem>
                      <SelectItem value="notice">공지</SelectItem>
                      <SelectItem value="recruit">모집</SelectItem>
                      <SelectItem value="competition">대회</SelectItem>
                      <SelectItem value="seminar">세미나</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="visibility">공개 범위</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="공개 범위 선택" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="public">전체 공개</SelectItem>
                      <SelectItem value="member">멤버 공개</SelectItem>
                      <SelectItem value="exec">운영진만</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="content">내용</Label>
                  <Textarea
                    id="content"
                    placeholder="공지사항 내용을 입력하세요"
                    rows={12}
                  />
                </div>

                <div className="flex gap-2">
                  <Button onClick={handleCreateNotice}>
                    <FileText className="size-4 mr-2" />
                    초안 저장
                  </Button>
                  <Button variant="secondary">
                    <Eye className="size-4 mr-2" />
                    미리보기
                  </Button>
                  <Button variant="outline" onClick={() => setIsCreating(false)}>
                    취소
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Tabs defaultValue="published">
              <TabsList className="mb-6">
                <TabsTrigger value="published">발행됨</TabsTrigger>
                <TabsTrigger value="drafts">초안 / 검토중</TabsTrigger>
              </TabsList>

              <TabsContent value="published" className="space-y-3">
                {published.map((notice) => (
                  <Card key={notice.id}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-semibold text-lg">{notice.title}</h3>
                            {getVisibilityBadge(notice.visibility)}
                          </div>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <span>작성자: {notice.author}</span>
                            <span>•</span>
                            <span>{notice.date}</span>
                            <span>•</span>
                            <span>조회수: {notice.views}</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="size-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="size-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                            <Trash2 className="size-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="drafts" className="space-y-3">
                {drafts.map((draft) => (
                  <Card key={draft.id} className="border-dashed">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-semibold text-lg">{draft.title}</h3>
                            {getStatusBadge(draft.status)}
                          </div>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <span>작성자: {draft.author}</span>
                            <span>•</span>
                            <span>{draft.date}</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" onClick={() => handlePublish(draft.id)}>
                            발행
                          </Button>
                          <Button variant="outline" size="sm">
                            <Edit className="size-4 mr-2" />
                            수정
                          </Button>
                          <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                            <Trash2 className="size-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {drafts.length === 0 && (
                  <Card>
                    <CardContent className="p-12 text-center">
                      <FileText className="size-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-500">작성 중인 공지사항이 없습니다.</p>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>
            </Tabs>
          )}
        </div>
      </section>
    </div>
  );
}
