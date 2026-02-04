import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/app/components/ui/dialog';
import { Wrench, Calendar, User, CheckCircle2, Clock, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';

export default function PortalEquipment() {
  const [selectedEquipment, setSelectedEquipment] = useState<number | null>(null);

  const equipment = [
    {
      id: 1,
      name: '3D 프린터 (Creality Ender 3)',
      category: '제작',
      status: 'available',
      location: '동아리방',
      quantity: 2,
      available: 2
    },
    {
      id: 2,
      name: '아두이노 우노 R3',
      category: '개발보드',
      status: 'available',
      location: '동아리방 서랍',
      quantity: 15,
      available: 10
    },
    {
      id: 3,
      name: '라즈베리파이 4B (8GB)',
      category: '개발보드',
      status: 'available',
      location: '동아리방 서랍',
      quantity: 5,
      available: 2
    },
    {
      id: 4,
      name: '오실로스코프',
      category: '측정',
      status: 'in-use',
      location: '실습실',
      quantity: 1,
      available: 0,
      borrower: '김철수',
      returnDate: '2026.02.10'
    },
    {
      id: 5,
      name: 'LiDAR 센서 (RPLiDAR A1)',
      category: '센서',
      status: 'available',
      location: '동아리방 장비함',
      quantity: 2,
      available: 1
    },
    {
      id: 6,
      name: '드론 (DJI Tello)',
      category: '로봇',
      status: 'in-use',
      location: '동아리방',
      quantity: 2,
      available: 0,
      borrower: '이영희',
      returnDate: '2026.02.15'
    },
  ];

  const myRentals = [
    {
      id: 1,
      equipmentName: '라즈베리파이 4B (8GB)',
      startDate: '2026.02.01',
      endDate: '2026.02.20',
      status: 'active',
      purpose: '자율주행 로봇 프로젝트'
    },
    {
      id: 2,
      equipmentName: 'LiDAR 센서 (RPLiDAR A1)',
      startDate: '2026.02.01',
      endDate: '2026.02.20',
      status: 'active',
      purpose: '자율주행 로봇 프로젝트'
    },
  ];

  const handleRental = (equipmentId: number) => {
    toast.success('장비 대여 신청이 완료되었습니다. 운영진 승인 후 이용 가능합니다.');
    setSelectedEquipment(null);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'available':
        return <Badge className="bg-green-600"><CheckCircle2 className="size-3 mr-1" />대여 가능</Badge>;
      case 'in-use':
        return <Badge className="bg-orange-600"><Clock className="size-3 mr-1" />대여 중</Badge>;
      case 'maintenance':
        return <Badge className="bg-red-600"><AlertCircle className="size-3 mr-1" />수리 중</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-orange-600 to-red-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">장비 대여</h1>
          <p className="text-orange-100">동아리 장비 현황 및 대여 신청</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-8">
        <div className="container mx-auto px-4 max-w-6xl">
          <Tabs defaultValue="equipment">
            <TabsList className="mb-6">
              <TabsTrigger value="equipment">장비 목록</TabsTrigger>
              <TabsTrigger value="my-rentals">내 대여 현황</TabsTrigger>
            </TabsList>

            <TabsContent value="equipment" className="space-y-4">
              {equipment.map((item) => (
                <Card key={item.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start space-x-4 flex-1">
                        <div className="size-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Wrench className="size-6 text-orange-600" />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-semibold">{item.name}</h3>
                            <Badge variant="outline">{item.category}</Badge>
                            {getStatusBadge(item.status)}
                          </div>
                          
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                            <div>
                              <span className="text-gray-500">위치:</span> {item.location}
                            </div>
                            <div>
                              <span className="text-gray-500">수량:</span> {item.quantity}개
                            </div>
                            <div>
                              <span className="text-gray-500">대여 가능:</span>{' '}
                              <span className={item.available > 0 ? 'text-green-600 font-medium' : 'text-red-600'}>
                                {item.available}개
                              </span>
                            </div>
                            {item.status === 'in-use' && item.borrower && (
                              <div>
                                <span className="text-gray-500">대여자:</span> {item.borrower}
                                <br />
                                <span className="text-gray-500">반납일:</span> {item.returnDate}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            disabled={item.available === 0}
                            onClick={() => setSelectedEquipment(item.id)}
                          >
                            대여 신청
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>장비 대여 신청</DialogTitle>
                            <DialogDescription>
                              {item.name}
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4 py-4">
                            <div className="space-y-2">
                              <Label htmlFor="start-date">대여 시작일</Label>
                              <Input id="start-date" type="date" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="end-date">반납 예정일</Label>
                              <Input id="end-date" type="date" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="purpose">사용 목적</Label>
                              <Input id="purpose" placeholder="프로젝트명 또는 사용 목적" />
                            </div>
                            <Button className="w-full" onClick={() => handleRental(item.id)}>
                              신청하기
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="my-rentals">
              {myRentals.length > 0 ? (
                <div className="space-y-4">
                  {myRentals.map((rental) => (
                    <Card key={rental.id}>
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle>{rental.equipmentName}</CardTitle>
                            <CardDescription className="mt-2">
                              사용 목적: {rental.purpose}
                            </CardDescription>
                          </div>
                          <Badge className="bg-green-600">
                            {rental.status === 'active' ? '대여 중' : '반납 완료'}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-6 text-sm text-gray-600">
                            <div className="flex items-center">
                              <Calendar className="size-4 mr-2" />
                              {rental.startDate} ~ {rental.endDate}
                            </div>
                          </div>
                          {rental.status === 'active' && (
                            <Button variant="outline" size="sm">
                              반납 신청
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card>
                  <CardContent className="p-12 text-center">
                    <Wrench className="size-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">현재 대여 중인 장비가 없습니다.</p>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          </Tabs>

          {/* Rental Guidelines */}
          <Card className="mt-8 border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-lg">장비 대여 규정</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p>• 장비는 프로젝트 및 학습 목적으로만 사용 가능합니다.</p>
              <p>• 대여 기간은 최대 1개월이며, 연장이 필요한 경우 운영진에게 문의하세요.</p>
              <p>• 장비 분실 또는 훼손 시 변상 책임이 있습니다.</p>
              <p>• 반납 시 청소 및 점검 후 반납해주세요.</p>
              <p>• 장비 대여는 운영진 승인 후 가능합니다.</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
