import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Users, Target, Zap, Award } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Users,
      title: '협업과 소통',
      description: '다양한 배경의 팀원들과 함께 프로젝트를 진행하며 협업 능력을 키웁니다.'
    },
    {
      icon: Target,
      title: '실천적 학습',
      description: '이론뿐만 아니라 실제 로봇을 제작하고 운영하며 실무 경험을 쌓습니다.'
    },
    {
      icon: Zap,
      title: '지속적 성장',
      description: '정기 세미나와 스터디를 통해 끊임없이 배우고 성장합니다.'
    },
    {
      icon: Award,
      title: '도전 정신',
      description: '국내외 대회에 참가하여 우리의 실력을 검증하고 한계를 뛰어넘습니다.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Badge className="mb-4">About KOBOT</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              동아리 소개
            </h1>
            <p className="text-xl text-gray-600">
              KOBOT(Kookmin Robot)은 국민대학교의 로봇 공학 동아리로,<br />
              2015년 설립 이후 꾸준히 성장해온 학술 동아리입니다.
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">우리는 누구인가요?</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  KOBOT은 로봇 공학에 열정을 가진 학생들이 모여 함께 배우고 성장하는 동아리입니다.
                  하드웨어 설계부터 소프트웨어 개발, AI 알고리즘 구현까지 로봇 공학의 전 분야를 
                  아우르는 프로젝트를 진행합니다.
                </p>
                <p>
                  매 학기 정기 프로젝트를 진행하며, 부원들은 팀을 이뤄 자율주행 로봇, 
                  드론, 로봇 팔 등 다양한 로봇을 직접 제작합니다. 또한 주 1회 정기 모임을 통해 
                  최신 기술 트렌드를 공유하고 서로의 프로젝트에 피드백을 주고받습니다.
                </p>
                <p>
                  경험이 없어도 괜찮습니다. 신입 부원을 위한 체계적인 교육 프로그램과 
                  선배들의 멘토링을 통해 누구나 로봇 공학자로 성장할 수 있습니다.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop" 
                alt="Robot development"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">우리의 가치</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              KOBOT은 다음과 같은 가치를 중요하게 생각합니다
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="size-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="size-6 text-blue-600" />
                  </div>
                  <CardTitle>{value.title}</CardTitle>
                  <CardDescription>{value.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">주요 활동</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>프로젝트</CardTitle>
                <CardDescription className="space-y-2">
                  <p>• 학기별 팀 프로젝트</p>
                  <p>• 자율주행 로봇</p>
                  <p>• 드론 제작 및 제어</p>
                  <p>• 로봇 팔 개발</p>
                  <p>• AI 비전 시스템</p>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>교육</CardTitle>
                <CardDescription>
                  <span className="block mt-2">• 신입 부원 교육 프로그램</span>
                  <span className="block">• 주간 기술 세미나</span>
                  <span className="block">• 알고리즘 스터디</span>
                  <span className="block">• 임베디드 워크샵</span>
                  <span className="block">• 선후배 멘토링</span>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>대외활동</CardTitle>
                <CardDescription>
                  <span className="block mt-2">• 로봇 경진대회 참가</span>
                  <span className="block">• 타 대학 교류전</span>
                  <span className="block">• 오픈소스 기여</span>
                  <span className="block">• 기술 컨퍼런스 참석</span>
                  <span className="block">• 신입생 박람회 참여</span>
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">10+</div>
              <div className="text-blue-100">설립 년수</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-blue-100">활동 부원</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">30+</div>
              <div className="text-blue-100">프로젝트</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">15+</div>
              <div className="text-blue-100">수상 경력</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}