import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Textarea } from '@/app/components/ui/textarea';
import { Mail, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';
import { toast } from 'sonner';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('문의가 전송되었습니다. 빠른 시일 내에 답변드리겠습니다.');
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Badge className="mb-4">Contact</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              문의하기
            </h1>
            <p className="text-xl text-gray-600">
              궁금한 점이 있으신가요? 언제든지 편하게 문의해주세요
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">연락처</h2>
                <div className="space-y-4">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className="size-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Mail className="size-5 text-blue-600" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">이메일</CardTitle>
                          <CardDescription>
                            <a href="mailto:kobot@kookmin.ac.kr" className="hover:text-blue-600">
                              kobot@kookmin.ac.kr
                            </a>
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className="size-10 bg-green-100 rounded-lg flex items-center justify-center">
                          <MapPin className="size-5 text-green-600" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">위치</CardTitle>
                          <CardDescription>
                            서울시 성북구 정릉로 77<br />
                            국민대학교 공학관 B101호
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">소셜 미디어</h2>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="size-12 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Instagram className="size-6 text-gray-700" />
                  </a>
                  <a 
                    href="#" 
                    className="size-12 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Facebook className="size-6 text-gray-700" />
                  </a>
                  <a 
                    href="#" 
                    className="size-12 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Youtube className="size-6 text-gray-700" />
                  </a>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">찾아오시는 길</h2>
                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">지도 영역 (실제로는 지도 API 연동)</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">문의하기</CardTitle>
                  <CardDescription>
                    아래 양식을 작성해주시면 빠르게 답변드리겠습니다
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">이름</Label>
                      <Input
                        id="name"
                        placeholder="홍길동"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">이메일</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your-email@example.com"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">제목</Label>
                      <Input
                        id="subject"
                        placeholder="문의 제목"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">내용</Label>
                      <Textarea
                        id="message"
                        placeholder="문의하실 내용을 입력해주세요"
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full">
                      문의 전송
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
