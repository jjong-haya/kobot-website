import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { BarChart, Users, FileText, Calendar, TrendingUp, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AdminDashboard() {
  const { user } = useAuth();

  const stats = [
    { label: '전체 부원', value: '48', change: '+5', icon: Users, color: 'blue' },
    { label: '진행 중 프로젝트', value: '6', change: '+2', icon: BarChart, color: 'purple' },
    { label: '이번 달 일정', value: '12', change: '+3', icon: Calendar, color: 'green' },
    { label: '미발행 공지', value: '3', change: '0', icon: FileText, color: 'orange' },
  ];

  const pendingTasks = [
    { id: 1, task: '신입 부원 지원서 검토', assignee: '회장', deadline: '2026.02.10', priority: 'high' },
    { id: 2, task: '2월 예산안 작성', assignee: '총무', deadline: '2026.02.12', priority: 'high' },
    { id: 3, task: '로봇 경진대회 팀 구성', assignee: '대회팀', deadline: '2026.02.15', priority: 'medium' },
    { id: 4, task: '동아리방 장비 점검', assignee: '장비관리', deadline: '2026.02.20', priority: 'low' },
  ];

  const recentActivities = [
    { id: 1, user: '이영희', action: '회의록 작성', item: '1월 운영진 회의', time: '2시간 전' },
    { id: 2, user: '박민수', action: '공지 발행', item: '정기 총회 안내', time: '5시간 전' },
    { id: 3, user: '정다은', action: '장비 승인', item: '3D 프린터 대여 신청', time: '1일 전' },
    { id: 4, user: '최준호', action: '예산 업데이트', item: '1월 결산', time: '1일 전' },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-100';
      case 'medium': return 'text-orange-600 bg-orange-100';
      case 'low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getPriorityLabel = (priority: string) => {
    switch (priority) {
      case 'high': return '높음';
      case 'medium': return '보통';
      case 'low': return '낮음';
      default: return priority;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-purple-600 to-pink-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <Badge className="mb-2 bg-white/20 text-white">운영진 관리</Badge>
              <h1 className="text-3xl font-bold mb-2">관리 대시보드</h1>
              <p className="text-purple-100">동아리 운영 현황을 한눈에 확인하세요</p>
            </div>
            {user?.position && (
              <Badge className="bg-white/20 text-white text-lg px-4 py-2">
                {user.position}
              </Badge>
            )}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`size-12 bg-${stat.color}-100 rounded-lg flex items-center justify-center`}>
                      <stat.icon className={`size-6 text-${stat.color}-600`} />
                    </div>
                    <Badge variant="outline" className="flex items-center">
                      <TrendingUp className="size-3 mr-1" />
                      {stat.change}
                    </Badge>
                  </div>
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Pending Tasks */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>대기 중인 작업</CardTitle>
                    <CardDescription>처리가 필요한 업무</CardDescription>
                  </div>
                  <Badge variant="secondary">{pendingTasks.length}개</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {pendingTasks.map((task) => (
                    <div key={task.id} className="p-4 border rounded-lg hover:bg-gray-50">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-medium">{task.task}</h4>
                        <Badge className={getPriorityColor(task.priority)}>
                          {getPriorityLabel(task.priority)}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span>담당: {task.assignee}</span>
                        <span>•</span>
                        <span>마감: {task.deadline}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activities */}
            <Card>
              <CardHeader>
                <CardTitle>최근 활동</CardTitle>
                <CardDescription>운영진 활동 로그</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="flex items-start space-x-3">
                      <div className="size-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-xs font-medium text-purple-600">
                          {activity.user.charAt(0)}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm">
                          <span className="font-medium">{activity.user}</span>
                          {' '}님이{' '}
                          <span className="text-gray-600">{activity.action}</span>
                          {': '}
                          <span className="font-medium">{activity.item}</span>
                        </p>
                        <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>빠른 작업</CardTitle>
                <CardDescription>자주 사용하는 관리 기능</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Link to="/admin/notices">
                    <Button variant="outline" className="w-full h-auto py-4 flex flex-col items-center gap-2">
                      <FileText className="size-5" />
                      <span>공지 작성</span>
                    </Button>
                  </Link>
                  <Link to="/admin/minutes">
                    <Button variant="outline" className="w-full h-auto py-4 flex flex-col items-center gap-2">
                      <FileText className="size-5" />
                      <span>회의록 작성</span>
                    </Button>
                  </Link>
                  <Link to="/portal/equipment">
                    <Button variant="outline" className="w-full h-auto py-4 flex flex-col items-center gap-2">
                      <AlertCircle className="size-5" />
                      <span>장비 승인</span>
                    </Button>
                  </Link>
                  <Link to="/admin/users">
                    <Button variant="outline" className="w-full h-auto py-4 flex flex-col items-center gap-2">
                      <Users className="size-5" />
                      <span>부원 관리</span>
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
