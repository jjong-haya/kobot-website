import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { useAuth } from '@/contexts/AuthContext';
import { DollarSign, Megaphone, Lightbulb, Wrench, Trophy } from 'lucide-react';

export default function AdminDepartments() {
  const { user } = useAuth();

  const departments = [
    {
      id: 'finance',
      name: '총무',
      icon: DollarSign,
      color: 'green',
      head: '박총무',
      tasks: [
        { id: 1, title: '2월 예산안 작성', status: 'in-progress', deadline: '2026.02.12' },
        { id: 2, title: '1월 결산 보고서', status: 'completed', deadline: '2026.02.05' },
        { id: 3, title: '회비 수납 현황 정리', status: 'todo', deadline: '2026.02.20' },
      ],
      documents: [
        { title: '2026년 예산안', date: '2026.01.10' },
        { title: '2025년 결산 보고서', date: '2025.12.30' },
      ]
    },
    {
      id: 'promo',
      name: '홍보',
      icon: Megaphone,
      color: 'pink',
      head: '최홍보',
      tasks: [
        { id: 1, title: '신입 모집 포스터 제작', status: 'completed', deadline: '2026.02.01' },
        { id: 2, title: 'SNS 콘텐츠 업로드', status: 'in-progress', deadline: '매주' },
        { id: 3, title: '활동 사진 정리', status: 'todo', deadline: '2026.02.28' },
      ],
      documents: [
        { title: '홍보 가이드라인', date: '2025.09.01' },
        { title: 'SNS 운영 계획', date: '2026.01.15' },
      ]
    },
    {
      id: 'plan',
      name: '기획',
      icon: Lightbulb,
      color: 'yellow',
      head: '정기획',
      tasks: [
        { id: 1, title: '1학기 활동 계획 수립', status: 'completed', deadline: '2026.01.30' },
        { id: 2, title: '프로젝트 팀 구성', status: 'in-progress', deadline: '2026.02.15' },
        { id: 3, title: '정기 세미나 일정 조율', status: 'in-progress', deadline: '2026.02.10' },
      ],
      documents: [
        { title: '2026-1 활동 계획서', date: '2026.01.30' },
        { title: '프로젝트 운영 가이드', date: '2025.09.01' },
      ]
    },
    {
      id: 'equipment',
      name: '장비관리',
      icon: Wrench,
      color: 'orange',
      head: '강장비',
      tasks: [
        { id: 1, title: '장비 점검 및 재고 조사', status: 'in-progress', deadline: '2026.02.20' },
        { id: 2, title: '대여 신청 승인', status: 'in-progress', deadline: '상시' },
        { id: 3, title: '신규 장비 구매 계획', status: 'todo', deadline: '2026.03.01' },
      ],
      documents: [
        { title: '장비 관리 규정', date: '2026.01.30' },
        { title: '장비 현황표', date: '2026.02.01' },
      ]
    },
    {
      id: 'external',
      name: '대회·대외활동',
      icon: Trophy,
      color: 'purple',
      head: '송대외',
      tasks: [
        { id: 1, title: '로봇 경진대회 참가 신청', status: 'completed', deadline: '2026.01.30' },
        { id: 2, title: '대회 팀 구성 및 준비', status: 'in-progress', deadline: '2026.02.28' },
        { id: 3, title: '타 대학 교류전 일정 협의', status: 'in-progress', deadline: '2026.03.15' },
      ],
      documents: [
        { title: '2026 대회 일정표', date: '2026.01.15' },
        { title: '대회 참가 가이드', date: '2025.09.01' },
      ]
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-green-600">완료</Badge>;
      case 'in-progress':
        return <Badge className="bg-blue-600">진행중</Badge>;
      case 'todo':
        return <Badge variant="outline">예정</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-purple-600 to-indigo-600 text-white py-12">
        <div className="container mx-auto px-4">
          <Badge className="mb-2 bg-white/20 text-white">운영진 관리</Badge>
          <h1 className="text-3xl font-bold mb-2">직책별 업무 관리</h1>
          <p className="text-purple-100">각 직책별 업무 현황 및 문서</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-8">
        <div className="container mx-auto px-4 max-w-6xl">
          <Tabs defaultValue="finance">
            <TabsList className="mb-6">
              {departments.map((dept) => (
                <TabsTrigger key={dept.id} value={dept.id}>
                  <dept.icon className="size-4 mr-2" />
                  {dept.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {departments.map((dept) => (
              <TabsContent key={dept.id} value={dept.id} className="space-y-6">
                {/* Department Info */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className={`size-16 bg-${dept.color}-100 rounded-lg flex items-center justify-center`}>
                        <dept.icon className={`size-8 text-${dept.color}-600`} />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{dept.name}</CardTitle>
                        <CardDescription>담당자: {dept.head}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <div className="grid lg:grid-cols-2 gap-6">
                  {/* Tasks */}
                  <Card>
                    <CardHeader>
                      <CardTitle>진행 중인 업무</CardTitle>
                      <CardDescription>현재 담당 업무 목록</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {dept.tasks.map((task) => (
                          <div key={task.id} className="p-4 border rounded-lg">
                            <div className="flex items-start justify-between mb-2">
                              <h4 className="font-medium">{task.title}</h4>
                              {getStatusBadge(task.status)}
                            </div>
                            <p className="text-sm text-gray-600">마감: {task.deadline}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Documents */}
                  <Card>
                    <CardHeader>
                      <CardTitle>관련 문서</CardTitle>
                      <CardDescription>업무 관련 문서 및 자료</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {dept.documents.map((doc, index) => (
                          <div key={index} className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                            <h4 className="font-medium mb-1">{doc.title}</h4>
                            <p className="text-sm text-gray-600">작성일: {doc.date}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </div>
  );
}
