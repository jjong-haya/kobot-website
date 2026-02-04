import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, MapPin, Users, Clock } from 'lucide-react';

export default function PortalCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 1)); // February 2026

  const events = [
    {
      id: 1,
      title: '정기 총회',
      date: new Date(2026, 1, 15),
      time: '14:00 - 16:00',
      location: '공학관 301호',
      participants: ['전체 부원'],
      type: 'meeting',
      description: '2026년 1학기 정기 총회'
    },
    {
      id: 2,
      title: 'ROS2 세미나',
      date: new Date(2026, 1, 17),
      time: '16:00 - 18:00',
      location: '동아리방',
      participants: ['교육팀', '신입 부원'],
      type: 'seminar',
      description: 'ROS2 Navigation 세미나'
    },
    {
      id: 3,
      title: '신입생 OT',
      date: new Date(2026, 1, 22),
      time: '13:00 - 17:00',
      location: '동아리방',
      participants: ['신입 부원', '운영진'],
      type: 'event',
      description: '신입 부원 오리엔테이션'
    },
    {
      id: 4,
      title: '프로젝트 중간 발표',
      date: new Date(2026, 1, 25),
      time: '15:00 - 18:00',
      location: '공학관 실습실',
      participants: ['프로젝트팀'],
      type: 'presentation',
      description: '학기 프로젝트 중간 발표'
    },
    {
      id: 5,
      title: '로봇 제작 워크샵',
      date: new Date(2026, 2, 5),
      time: '14:00 - 17:00',
      location: '실습실',
      participants: ['전체 부원'],
      type: 'workshop',
      description: '기초 로봇 제작 실습'
    },
  ];

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'meeting': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'seminar': return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'event': return 'bg-green-100 text-green-700 border-green-200';
      case 'presentation': return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'workshop': return 'bg-pink-100 text-pink-700 border-pink-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getEventTypeName = (type: string) => {
    switch (type) {
      case 'meeting': return '회의';
      case 'seminar': return '세미나';
      case 'event': return '행사';
      case 'presentation': return '발표';
      case 'workshop': return '워크샵';
      default: return '기타';
    }
  };

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const getEventsForDay = (day: number) => {
    return events.filter(event => {
      return event.date.getDate() === day && 
             event.date.getMonth() === currentDate.getMonth() &&
             event.date.getFullYear() === currentDate.getFullYear();
    });
  };

  const upcomingEvents = events.filter(event => event.date >= new Date())
    .sort((a, b) => a.date.getTime() - b.date.getTime())
    .slice(0, 5);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-purple-600 to-blue-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">내부 캘린더</h1>
          <p className="text-purple-100">동아리 일정을 확인하세요</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Calendar */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl">
                      {currentDate.getFullYear()}년 {currentDate.getMonth() + 1}월
                    </CardTitle>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" onClick={prevMonth}>
                        <ChevronLeft className="size-4" />
                      </Button>
                      <Button variant="outline" size="sm" onClick={nextMonth}>
                        <ChevronRight className="size-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-7 gap-2">
                    {/* Day headers */}
                    {['일', '월', '화', '수', '목', '금', '토'].map((day) => (
                      <div key={day} className="text-center font-semibold text-sm text-gray-600 p-2">
                        {day}
                      </div>
                    ))}
                    
                    {/* Empty cells for days before month starts */}
                    {Array.from({ length: firstDayOfMonth }).map((_, index) => (
                      <div key={`empty-${index}`} className="aspect-square p-2" />
                    ))}
                    
                    {/* Days of month */}
                    {Array.from({ length: daysInMonth }).map((_, index) => {
                      const day = index + 1;
                      const dayEvents = getEventsForDay(day);
                      const isToday = new Date().getDate() === day && 
                                     new Date().getMonth() === currentDate.getMonth() &&
                                     new Date().getFullYear() === currentDate.getFullYear();
                      
                      return (
                        <div 
                          key={day} 
                          className={`aspect-square p-2 border rounded-lg hover:bg-gray-50 ${
                            isToday ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                          }`}
                        >
                          <div className={`text-sm font-medium mb-1 ${isToday ? 'text-blue-600' : ''}`}>
                            {day}
                          </div>
                          <div className="space-y-1">
                            {dayEvents.map((event) => (
                              <div 
                                key={event.id} 
                                className={`text-xs p-1 rounded truncate ${getEventTypeColor(event.type)} border`}
                                title={event.title}
                              >
                                {event.title}
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Upcoming Events */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>다가오는 일정</CardTitle>
                  <CardDescription>예정된 이벤트</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingEvents.map((event) => (
                      <div key={event.id} className="border rounded-lg p-4 space-y-3">
                        <div>
                          <Badge className={getEventTypeColor(event.type)}>
                            {getEventTypeName(event.type)}
                          </Badge>
                          <h3 className="font-semibold mt-2">{event.title}</h3>
                          <p className="text-sm text-gray-600 mt-1">{event.description}</p>
                        </div>
                        
                        <div className="space-y-2 text-sm text-gray-600">
                          <div className="flex items-center">
                            <CalendarIcon className="size-4 mr-2" />
                            {event.date.toLocaleDateString('ko-KR', { 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric' 
                            })}
                          </div>
                          <div className="flex items-center">
                            <Clock className="size-4 mr-2" />
                            {event.time}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="size-4 mr-2" />
                            {event.location}
                          </div>
                          <div className="flex items-center">
                            <Users className="size-4 mr-2" />
                            {event.participants.join(', ')}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
