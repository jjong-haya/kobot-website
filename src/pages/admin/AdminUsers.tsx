import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';
import { useAuth } from '@/contexts/AuthContext';
import { User, Shield, Mail, Calendar, Search } from 'lucide-react';
import { useState } from 'react';

export default function AdminUsers() {
  const { user: currentUser, hasRole } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [filterRole, setFilterRole] = useState('all');

  const users = [
    {
      id: 1,
      name: '이회장',
      email: 'president@kookmin.ac.kr',
      role: 'exec-core',
      position: '회장',
      joinDate: '2024.03',
      status: 'active'
    },
    {
      id: 2,
      name: '박총무',
      email: 'finance@kookmin.ac.kr',
      role: 'exec-finance',
      position: '총무',
      joinDate: '2024.03',
      status: 'active'
    },
    {
      id: 3,
      name: '최홍보',
      email: 'promo@kookmin.ac.kr',
      role: 'exec-promo',
      position: '홍보팀장',
      joinDate: '2024.09',
      status: 'active'
    },
    {
      id: 4,
      name: '김부원',
      email: 'member@kookmin.ac.kr',
      role: 'member',
      position: '부원',
      joinDate: '2025.03',
      status: 'active'
    },
    {
      id: 5,
      name: '정기획',
      email: 'plan@kookmin.ac.kr',
      role: 'exec-plan',
      position: '기획팀장',
      joinDate: '2024.09',
      status: 'active'
    },
  ];

  const getRoleBadge = (role: string) => {
    switch (role) {
      case 'exec-core':
        return <Badge className="bg-purple-600">회장/부회장</Badge>;
      case 'exec-finance':
        return <Badge className="bg-green-600">총무</Badge>;
      case 'exec-promo':
        return <Badge className="bg-pink-600">홍보</Badge>;
      case 'exec-plan':
        return <Badge className="bg-yellow-600">기획</Badge>;
      case 'exec-equipment':
        return <Badge className="bg-orange-600">장비관리</Badge>;
      case 'exec-external':
        return <Badge className="bg-indigo-600">대회·대외</Badge>;
      case 'member':
        return <Badge variant="outline">부원</Badge>;
      default:
        return <Badge>{role}</Badge>;
    }
  };

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = filterRole === 'all' || user.role === filterRole;
    return matchesSearch && matchesRole;
  });

  // Only allow exec-core (회장/부회장) to access this page
  if (!hasRole(['exec-core'])) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Shield className="size-16 text-gray-400 mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-2">접근 권한 없음</h1>
          <p className="text-gray-600">이 페이지는 회장/부회장만 접근할 수 있습니다.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-purple-600 to-pink-600 text-white py-12">
        <div className="container mx-auto px-4">
          <Badge className="mb-2 bg-white/20 text-white">운영진 관리</Badge>
          <h1 className="text-3xl font-bold mb-2">사용자 및 권한 관리</h1>
          <p className="text-purple-100">부원 정보 및 권한 관리 (회장/부회장 전용)</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-8">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="text-3xl font-bold mb-1">{users.length}</div>
                <div className="text-sm text-gray-600">전체 부원</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-3xl font-bold mb-1">
                  {users.filter(u => u.role.startsWith('exec')).length}
                </div>
                <div className="text-sm text-gray-600">운영진</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-3xl font-bold mb-1">
                  {users.filter(u => u.role === 'member').length}
                </div>
                <div className="text-sm text-gray-600">일반 부원</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-3xl font-bold mb-1">
                  {users.filter(u => u.status === 'active').length}
                </div>
                <div className="text-sm text-gray-600">활동 중</div>
              </CardContent>
            </Card>
          </div>

          {/* Search and Filter */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="이름 또는 이메일로 검색..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={filterRole} onValueChange={setFilterRole}>
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue placeholder="역할 필터" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">전체</SelectItem>
                    <SelectItem value="exec-core">회장/부회장</SelectItem>
                    <SelectItem value="exec-finance">총무</SelectItem>
                    <SelectItem value="exec-promo">홍보</SelectItem>
                    <SelectItem value="exec-plan">기획</SelectItem>
                    <SelectItem value="exec-equipment">장비관리</SelectItem>
                    <SelectItem value="exec-external">대회·대외</SelectItem>
                    <SelectItem value="member">부원</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* User List */}
          <div className="space-y-3">
            {filteredUsers.map((user) => (
              <Card key={user.id}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start space-x-4 flex-1">
                      <div className="size-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <User className="size-6 text-purple-600" />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold text-lg">{user.name}</h3>
                          {getRoleBadge(user.role)}
                          {user.id === currentUser?.id && (
                            <Badge variant="outline" className="text-xs">본인</Badge>
                          )}
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm text-gray-600">
                          <div className="flex items-center">
                            <Mail className="size-4 mr-2" />
                            {user.email}
                          </div>
                          <div className="flex items-center">
                            <Shield className="size-4 mr-2" />
                            {user.position}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="size-4 mr-2" />
                            가입: {user.joinDate}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        권한 변경
                      </Button>
                      <Button variant="outline" size="sm">
                        상세
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {filteredUsers.length === 0 && (
              <Card>
                <CardContent className="p-12 text-center">
                  <User className="size-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">검색 결과가 없습니다.</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
