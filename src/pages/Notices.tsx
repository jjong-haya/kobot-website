import { useState } from 'react';
import { Card, CardContent } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Input } from '@/app/components/ui/input';
import { Button } from '@/app/components/ui/button';
import { Search, Pin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Notices() {
  const [searchQuery, setSearchQuery] = useState('');

  const notices = [
    {
      id: 1,
      title: '2026년 1학기 정기 총회 안내',
      content: '신학기 정기 총회를 다음과 같이 개최합니다. 모든 부원은 필참해주시기 바랍니다.',
      date: '2026.02.01',
      author: '운영진',
      views: 152,
      pinned: true,
      category: '공지'
    },
    {
      id: 2,
      title: '2026년 1학기 신입 부원 모집',
      content: '로봇 공학에 관심있는 신입생 및 재학생 여러분의 많은 지원 바랍니다.',
      date: '2026.02.03',
      author: '운영진',
      views: 245,
      pinned: true,
      category: '모집'
    },
    {
      id: 3,
      title: '2026 로봇 경진대회 참가 신청 안내',
      content: '올해 로봇 경진대회 참가를 희망하는 팀은 2월 20일까지 신청해주세요.',
      date: '2026.01.28',
      author: '대회팀',
      views: 98,
      pinned: false,
      category: '대회'
    },
    {
      id: 4,
      title: '동아리방 이용 규칙 안내',
      content: '동아리방을 쾌적하게 사용하기 위한 규칙을 안내드립니다.',
      date: '2026.01.25',
      author: '운영진',
      views: 187,
      pinned: false,
      category: '일반'
    },
    {
      id: 5,
      title: '1월 정기 세미나 - ROS2 네비게이션',
      content: '이번 주 토요일 ROS2 네비게이션 세미나가 진행됩니다.',
      date: '2026.01.20',
      author: '교육팀',
      views: 143,
      pinned: false,
      category: '세미나'
    },
  ];

  const filteredNotices = notices.filter(notice =>
    notice.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    notice.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const pinnedNotices = filteredNotices.filter(n => n.pinned);
  const regularNotices = filteredNotices.filter(n => !n.pinned);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Badge className="mb-4">Notices</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              공지사항
            </h1>
            <p className="text-xl text-gray-600">
              동아리의 주요 공지사항과 소식을 확인하세요
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Search */}
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
              <Input
                type="text"
                placeholder="공지사항 검색..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Pinned Notices */}
          {pinnedNotices.length > 0 && (
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-4 flex items-center">
                <Pin className="size-5 mr-2 text-blue-600" />
                중요 공지
              </h2>
              <div className="space-y-3">
                {pinnedNotices.map((notice) => (
                  <Card key={notice.id} className="border-blue-200 bg-blue-50/50 hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="secondary">{notice.category}</Badge>
                            <Badge className="bg-blue-600">공지</Badge>
                          </div>
                          <Link to={`/notices/${notice.id}`}>
                            <h3 className="text-lg font-semibold mb-2 hover:text-blue-600 transition-colors">
                              {notice.title}
                            </h3>
                          </Link>
                          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{notice.content}</p>
                          <div className="flex items-center gap-4 text-xs text-gray-500">
                            <span>{notice.author}</span>
                            <span>•</span>
                            <span>{notice.date}</span>
                            <span>•</span>
                            <span>조회 {notice.views}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Regular Notices */}
          <div className="space-y-3">
            {regularNotices.map((notice) => (
              <Card key={notice.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline">{notice.category}</Badge>
                      </div>
                      <Link to={`/notices/${notice.id}`}>
                        <h3 className="text-lg font-semibold mb-2 hover:text-blue-600 transition-colors">
                          {notice.title}
                        </h3>
                      </Link>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{notice.content}</p>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span>{notice.author}</span>
                        <span>•</span>
                        <span>{notice.date}</span>
                        <span>•</span>
                        <span>조회 {notice.views}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredNotices.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              검색 결과가 없습니다.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
