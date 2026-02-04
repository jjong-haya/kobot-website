import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { Calendar, FileText, Wrench, Users, Bell, CheckCircle2, Clock, Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PortalDashboard() {
  const { user } = useAuth();

  const myTasks = [
    { id: 1, title: '자율주행 로봇 센서 테스트', deadline: '2026.02.10', status: 'in-progress' },
    { id: 2, title: 'ROS2 세미나 자료 준비', deadline: '2026.02.15', status: 'todo' },
    { id: 3, title: '로봇 경진대회 참가 신청', deadline: '2026.02.20', status: 'todo' },
  ];

  const recentNotices = [
    { id: 1, title: '2월 정기 총회 안내', date: '2026.02.01', category: '공지' },
    { id: 2, title: '동아리방 청소 당번 안내', date: '2026.02.03', category: '일반' },
    { id: 3, title: '장비 대여 규정 변경', date: '2026.01.30', category: '공지' },
  ];

  const upcomingEvents = [
    { id: 1, title: '정기 총회', date: '2026.02.15', time: '14:00' },
    { id: 2, title: 'ROS2 세미나', date: '2026.02.17', time: '16:00' },
    { id: 3, title: '프로젝트 중간 발표', date: '2026.02.25', time: '15:00' },
  ];

  const quickLinks = [
    { title: '자료실', href: '/portal/resources', icon: FileText, color: 'blue' },
    { title: '장비 대여', href: '/portal/equipment', icon: Wrench, color: 'green' },
    { title: '캘린더', href: '/portal/calendar', icon: Calendar, color: 'purple' },
    { title: '부원 명단', href: '/portal/members', icon: Users, color: 'orange' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">안녕하세요, {user?.name}님!</h1>
              <p className="text-blue-100">오늘도 좋은 하루 되세요 🚀</p>
            </div>
            {user?.position && (
              <Badge className="bg-white/20 text-white text-lg px-4 py-2">
                {user.position}
              </Badge>
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          {/* Quick Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {quickLinks.map((link) => (
              <Link key={link.title} to={link.href}>
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className={`size-12 mx-auto mb-3 bg-${link.color}-100 rounded-lg flex items-center justify-center`}>
                      <link.icon className={`size-6 text-${link.color}-600`} />
                    </div>
                    <div className="font-medium">{link.title}</div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* My Tasks */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>내 할 일</CardTitle>
                    <CardDescription>진행 중인 작업과 마감일</CardDescription>
                  </div>
                  <Badge>{myTasks.length}개</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {myTasks.map((task) => (
                    <div key={task.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50">
                      <div className="mt-1">
                        {task.status === 'in-progress' ? (
                          <Clock className="size-5 text-blue-600" />
                        ) : (
                          <CheckCircle2 className="size-5 text-gray-400" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">{task.title}</div>
                        <div className="text-sm text-gray-500 mt-1">
                          마감: {task.deadline}
                        </div>
                      </div>
                      {task.status === 'in-progress' && (
                        <Badge variant="secondary" className="text-xs">진행중</Badge>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>다가오는 일정</CardTitle>
                    <CardDescription>이번 주 예정된 일정</CardDescription>
                  </div>
                  <Link to="/portal/calendar">
                    <Button variant="ghost" size="sm">전체보기</Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50">
                      <div className="size-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Calendar className="size-5 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">{event.title}</div>
                        <div className="text-sm text-gray-500 mt-1">
                          {event.date} • {event.time}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Notices */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>최근 공지사항</CardTitle>
                    <CardDescription>내부 공지사항 및 알림</CardDescription>
                  </div>
                  <Link to="/notices">
                    <Button variant="ghost" size="sm">전체보기</Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {recentNotices.map((notice) => (
                    <Link key={notice.id} to={`/notices/${notice.id}`}>
                      <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50">
                        <div className="flex items-center space-x-3">
                          <Bell className="size-5 text-gray-400" />
                          <div>
                            <span className="font-medium">{notice.title}</span>
                            <Badge variant="outline" className="ml-2 text-xs">
                              {notice.category}
                            </Badge>
                          </div>
                        </div>
                        <span className="text-sm text-gray-500">{notice.date}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
