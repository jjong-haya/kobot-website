import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { Calendar, Users, Award } from 'lucide-react';

export default function Activities() {
  const projects = [
    {
      id: 1,
      title: '자율주행 배송 로봇',
      description: '실내 환경에서 자율적으로 물품을 배송하는 로봇 시스템',
      image: 'https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?w=600&h=400&fit=crop',
      team: ['김철수', '이영희', '박민수', '정다은'],
      period: '2025.09 - 2025.12',
      tech: ['ROS', 'SLAM', 'Python', 'Computer Vision']
    },
    {
      id: 2,
      title: '4축 로봇 팔 제어',
      description: '역기구학을 활용한 정밀 제어 로봇 팔',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop',
      team: ['최준호', '강서연', '임재현'],
      period: '2025.03 - 2025.06',
      tech: ['Arduino', 'Inverse Kinematics', 'C++', 'Servo Control']
    },
    {
      id: 3,
      title: 'AI 기반 물체 분류 로봇',
      description: '딥러닝을 활용한 실시간 물체 인식 및 분류 시스템',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
      team: ['송지우', '한예진', '오성민'],
      period: '2025.09 - 2025.12',
      tech: ['TensorFlow', 'YOLOv8', 'Raspberry Pi', 'OpenCV']
    },
  ];

  const studies = [
    {
      id: 1,
      title: 'ROS2 기초 스터디',
      description: 'Robot Operating System 2의 기본 개념과 실습',
      participants: 12,
      period: '2025.09 - 2025.12',
      topics: ['노드와 토픽', '서비스와 액션', 'TF2', '네비게이션']
    },
    {
      id: 2,
      title: '딥러닝 기초 세미나',
      description: 'PyTorch를 활용한 딥러닝 기초와 컴퓨터 비전',
      participants: 15,
      period: '2025.03 - 2025.06',
      topics: ['Neural Networks', 'CNN', '객체 인식', 'Transfer Learning']
    },
    {
      id: 3,
      title: '임베디드 시스템 워크샵',
      description: 'STM32와 FreeRTOS를 활용한 실시간 시스템',
      participants: 10,
      period: '2025.09 - 2025.12',
      topics: ['MCU 기초', 'RTOS', '센서 인터페이스', '통신 프로토콜']
    },
  ];

  const competitions = [
    {
      id: 1,
      title: '2025 대한민국 로봇 대전',
      result: '대상',
      date: '2025.11',
      team: ['자율주행팀'],
      description: '자율주행 로봇 부문에서 완벽한 미션 수행으로 대상 수상'
    },
    {
      id: 2,
      title: '2025 국제 로봇 올림피아드',
      result: '금상',
      date: '2025.08',
      team: ['로봇팔팀'],
      description: '정밀 제어 부문 금상 수상'
    },
    {
      id: 3,
      title: '2024 AI 로봇 챌린지',
      result: '은상',
      date: '2024.12',
      team: ['비전팀'],
      description: 'AI 기반 물체 인식 부문 우수상'
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Badge className="mb-4">Activities</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              우리의 활동
            </h1>
            <p className="text-xl text-gray-600">
              프로젝트, 스터디, 대회 참가 등 다양한 활동을 통해 성장합니다
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="projects" className="w-full">
            <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-3 mb-8">
              <TabsTrigger value="projects">프로젝트</TabsTrigger>
              <TabsTrigger value="study">스터디/세미나</TabsTrigger>
              <TabsTrigger value="competitions">대회·대외활동</TabsTrigger>
            </TabsList>

            <TabsContent value="projects" className="space-y-8">
              {projects.map((project) => (
                <Card key={project.id}>
                  <div className="md:flex">
                    <div className="md:w-80 aspect-video md:aspect-auto">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                            <CardDescription className="text-base">{project.description}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center text-sm text-gray-600">
                          <Calendar className="size-4 mr-2" />
                          {project.period}
                        </div>
                        <div className="flex items-start text-sm text-gray-600">
                          <Users className="size-4 mr-2 mt-0.5" />
                          <div>{project.team.join(', ')}</div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <Badge key={tech} variant="secondary">{tech}</Badge>
                          ))}
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="study" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {studies.map((study) => (
                  <Card key={study.id}>
                    <CardHeader>
                      <CardTitle>{study.title}</CardTitle>
                      <CardDescription>{study.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center text-gray-600">
                          <Calendar className="size-4 mr-2" />
                          {study.period}
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Users className="size-4 mr-2" />
                          {study.participants}명 참여
                        </div>
                      </div>
                      <div>
                        <div className="text-sm font-medium mb-2">주요 내용</div>
                        <div className="space-y-1">
                          {study.topics.map((topic, index) => (
                            <div key={index} className="text-sm text-gray-600">• {topic}</div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="competitions" className="space-y-6">
              {competitions.map((comp) => (
                <Card key={comp.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2">{comp.title}</CardTitle>
                        <CardDescription className="text-base">{comp.description}</CardDescription>
                      </div>
                      <Badge className="ml-4 bg-yellow-500 hover:bg-yellow-600 text-white flex items-center gap-1">
                        <Award className="size-4" />
                        {comp.result}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-6 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Calendar className="size-4 mr-2" />
                        {comp.date}
                      </div>
                      <div className="flex items-center">
                        <Users className="size-4 mr-2" />
                        {comp.team.join(', ')}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
