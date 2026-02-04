import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Textarea } from '@/app/components/ui/textarea';
import { FileText, Plus, Calendar, Users, Eye, Edit, Lock } from 'lucide-react';
import { toast } from 'sonner';

export default function AdminMinutes() {
  const [isCreating, setIsCreating] = useState(false);

  const minutes = [
    {
      id: 1,
      title: '2026년 1학기 운영진 회의',
      date: '2026.02.01',
      author: '이영희',
      attendees: ['이회장', '박총무', '최홍보', '정기획'],
      topics: ['신입 부원 선발', '1학기 프로젝트 계획', '예산안 논의'],
      visibility: 'exec'
    },
    {
      id: 2,
      title: '로봇 경진대회 준비 회의',
      date: '2026.01.28',
      author: '박민수',
      attendees: ['대회팀원 전체'],
      topics: ['대회 일정 확인', '팀 구성', '로봇 설계안'],
      visibility: 'exec'
    },
    {
      id: 3,
      title: '1월 정기 총회',
      date: '2026.01.15',
      author: '이회장',
      attendees: ['전체 부원'],
      topics: ['지난 학기 결산', '신학기 계획', 'Q&A'],
      visibility: 'member'
    },
  ];

  const handleCreate = () => {
    toast.success('회의록이 저장되었습니다.');
    setIsCreating(false);
  };

  const getVisibilityBadge = (visibility: string) => {
    switch (visibility) {
      case 'exec':
        return (
          <Badge className="bg-purple-600">
            <Lock className="size-3 mr-1" />
            운영진만
          </Badge>
        );
      case 'member':
        return <Badge className="bg-blue-600">멤버 공개</Badge>;
      default:
        return <Badge>{visibility}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <Badge className="mb-2 bg-white/20 text-white">운영진 관리</Badge>
              <h1 className="text-3xl font-bold mb-2">회의록 관리</h1>
              <p className="text-indigo-100">운영 회의록 작성 및 관리</p>
            </div>
            <Button onClick={() => setIsCreating(true)} size="lg" variant="secondary">
              <Plus className="size-5 mr-2" />
              새 회의록 작성
            </Button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          {isCreating ? (
            <Card>
              <CardHeader>
                <CardTitle>회의록 작성</CardTitle>
                <CardDescription>회의 내용을 기록합니다</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">회의 제목</Label>
                  <Input id="title" placeholder="예: 2026년 1학기 운영진 회의" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">회의 날짜</Label>
                    <Input id="date" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">회의 시간</Label>
                    <Input id="time" type="time" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">회의 장소</Label>
                  <Input id="location" placeholder="예: 동아리방" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="attendees">참석자</Label>
                  <Input id="attendees" placeholder="예: 이회장, 박총무, 최홍보 (쉼표로 구분)" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="agenda">안건</Label>
                  <Textarea
                    id="agenda"
                    placeholder="회의 안건을 입력하세요 (줄바꿈으로 구분)"
                    rows={4}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="content">회의 내용</Label>
                  <Textarea
                    id="content"
                    placeholder="회의 내용을 상세히 기록하세요"
                    rows={12}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="decisions">결정 사항</Label>
                  <Textarea
                    id="decisions"
                    placeholder="회의에서 결정된 사항을 입력하세요"
                    rows={4}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="action-items">향후 조치 사항</Label>
                  <Textarea
                    id="action-items"
                    placeholder="담당자와 함께 입력하세요 (예: [박총무] 예산안 작성 - 2/15까지)"
                    rows={4}
                  />
                </div>

                <div className="flex gap-2">
                  <Button onClick={handleCreate}>
                    <FileText className="size-4 mr-2" />
                    저장
                  </Button>
                  <Button variant="outline" onClick={() => setIsCreating(false)}>
                    취소
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {minutes.map((minute) => (
                <Card key={minute.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <CardTitle>{minute.title}</CardTitle>
                          {getVisibilityBadge(minute.visibility)}
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                          <div className="flex items-center">
                            <Calendar className="size-4 mr-1" />
                            {minute.date}
                          </div>
                          <div className="flex items-center">
                            <FileText className="size-4 mr-1" />
                            작성자: {minute.author}
                          </div>
                          <div className="flex items-center">
                            <Users className="size-4 mr-1" />
                            {minute.attendees.join(', ')}
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="size-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="size-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div>
                      <div className="text-sm font-medium mb-2">주요 안건</div>
                      <ul className="space-y-1">
                        {minute.topics.map((topic, index) => (
                          <li key={index} className="text-sm text-gray-600">• {topic}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
