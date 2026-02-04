import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/app/components/ui/accordion';
import { Calendar, Users, CheckCircle2, ExternalLink } from 'lucide-react';

export default function Recruit() {
  const timeline = [
    { date: '2.3 - 2.14', event: '지원서 접수', status: 'active' },
    { date: '2.15 - 2.16', event: '서류 심사', status: 'upcoming' },
    { date: '2.17 - 2.18', event: '면접 진행', status: 'upcoming' },
    { date: '2.19', event: '최종 합격자 발표', status: 'upcoming' },
    { date: '2.22', event: '신입생 OT', status: 'upcoming' },
  ];

  const requirements = [
    '국민대학교 재학생 (학과 무관)',
    '로봇 공학에 대한 열정과 관심',
    '팀 프로젝트에 적극적으로 참여할 수 있는 자세',
    '주 1회 정기 모임 참석 가능',
  ];

  const faqs = [
    {
      q: '프로그래밍을 전혀 못해도 지원할 수 있나요?',
      a: '네, 가능합니다! 신입 부원을 위한 체계적인 교육 프로그램이 있으며, 선배들의 멘토링을 통해 처음부터 배울 수 있습니다. 중요한 것은 배우고자 하는 열정입니다.'
    },
    {
      q: '로봇을 만들어본 경험이 없는데 괜찮을까요?',
      a: '물론입니다! 대부분의 신입 부원들이 로봇 제작 경험 없이 시작합니다. 기초부터 차근차근 배울 수 있는 교육 과정이 준비되어 있습니다.'
    },
    {
      q: '활동 시간이 어떻게 되나요?',
      a: '주 1회 정기 모임(약 2-3시간)이 있으며, 프로젝트 진행 시 팀원들과 협의하여 추가 모임을 진행합니다. 학업과 병행 가능한 수준입니다.'
    },
    {
      q: '회비가 있나요?',
      a: '학기당 회비가 있으며, 동아리 운영 및 부품 구매 등에 사용됩니다. 구체적인 금액은 면접 시 안내드립니다.'
    },
    {
      q: '어떤 전공의 학생들이 주로 활동하나요?',
      a: '전자공학, 컴퓨터공학, 기계공학 전공 학생들이 많지만, 디자인, 경영 등 다양한 전공의 학생들도 활동하고 있습니다. 전공보다는 관심과 열정이 더 중요합니다.'
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">2026 Spring Recruitment</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              신입 부원 모집
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              KOBOT과 함께 로봇의 세계로 첫 발을 내딛어보세요.<br />
              경험이 없어도 괜찮습니다. 열정만 있다면 환영합니다!
            </p>
            <Button size="lg" variant="secondary">
              <ExternalLink className="mr-2 size-5" />
              지원서 작성하기
            </Button>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">모집 일정</h2>
          <div className="space-y-4">
            {timeline.map((item, index) => (
              <Card key={index} className={item.status === 'active' ? 'border-blue-500 bg-blue-50' : ''}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`size-10 rounded-full flex items-center justify-center ${
                        item.status === 'active' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                      }`}>
                        {item.status === 'active' && <CheckCircle2 className="size-5" />}
                        {item.status === 'upcoming' && <Calendar className="size-5" />}
                      </div>
                      <div>
                        <div className="font-semibold">{item.event}</div>
                        <div className="text-sm text-gray-600">{item.date}</div>
                      </div>
                    </div>
                    {item.status === 'active' && (
                      <Badge className="bg-blue-600">진행중</Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">지원 자격</h2>
          <Card>
            <CardHeader>
              <CardTitle>다음 조건을 만족하는 분이라면 누구나 지원 가능합니다</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {requirements.map((req, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="size-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Process */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">전형 절차</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="size-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <CardTitle className="text-center">서류 심사</CardTitle>
                <CardDescription className="text-center">
                  지원서를 바탕으로 1차 서류 심사를 진행합니다
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="size-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl font-bold text-purple-600">2</span>
                </div>
                <CardTitle className="text-center">면접</CardTitle>
                <CardDescription className="text-center">
                  간단한 면접을 통해 지원 동기와 관심사를 확인합니다
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="size-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl font-bold text-green-600">3</span>
                </div>
                <CardTitle className="text-center">최종 합격</CardTitle>
                <CardDescription className="text-center">
                  합격자 발표 후 OT를 통해 본격적인 활동을 시작합니다
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">자주 묻는 질문</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">준비되셨나요?</h2>
            <p className="text-gray-600 mb-8">
              KOBOT과 함께 꿈을 실현하세요.<br />
              궁금한 점이 있다면 언제든지 문의해주세요.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg">
                <ExternalLink className="mr-2 size-5" />
                지원서 작성하기
              </Button>
              <Button size="lg" variant="outline">
                문의하기
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
